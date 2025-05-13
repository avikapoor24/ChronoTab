/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { marked } from 'marked';
import ChatMessage from './ChatMessage';

// Configure marked to sanitize output for security
marked.setOptions({ sanitize: true });

// Debug log to verify API key
console.log('API Key Loaded:', process.env.REACT_APP_OPENROUTER_API_KEY);

function ChatWindow({ isOpen, closeChat, messages, addMessage, isTyping, setIsTyping }) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (messages.length < 2 && suggestions.length === 0) {
      fetchSuggestions();
    }
  }, [messages.length]);

  const fetchSuggestions = async () => {
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.1-8b-instruct:free',
          messages: [
            {
              role: 'user',
              content: 'Provide three short example questions or prompts for a chatbot in a single line, separated by commas.',
            },
          ],
        }),
      });
      const data = await res.json();
      console.log('Suggestions API Response:', data);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}, message: ${data.error?.message || 'Unknown error'}`);
      }
      const responseText = data.choices?.[0]?.message?.content || '';
      if (!responseText) {
        throw new Error('No content in response');
      }
      const suggestionArray = responseText
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
        .slice(0, 3);
      setSuggestions(suggestionArray);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions(['Ask me anything', 'Tell me something interesting', 'What can you do?']);
    }
  };

  const sendMessage = async (message) => {
    if (!message.trim()) {
      return;
    }
    setIsTyping(true);
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.1-8b-instruct:free',
          messages: [{ role: 'user', content: message }],
        }),
      });
      const data = await res.json();
      console.log('Message API Response:', data);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}, message: ${data.error?.message || 'Unknown error'}`);
      }
      const markdownText = data.choices?.[0]?.message?.content || 'No response received.';
      addMessage(marked.parse(markdownText), false);
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage(`Error: ${error.message}`, false);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage(input, true);
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div
      className={`fixed bottom-24 right-8 w-80 sm:w-96 bg-chatgpt-darkBg bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl border border-zinc-800 flex flex-col transition-all duration-300 z-50 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      style={{ maxHeight: '70vh' }}
    >
      <div className="p-4 border-b bg-zinc-800 flex justify-between items-center bg-zinc-900 bg-opacity-70 rounded-t-lg">
        <div>
          <h3 className="font-bold text-white">Assistant</h3>
          <span className="text-xs text-green-400 flex items-center">
            <span className="h-2 w-2 rounded-full bg-green-400 mr-2 inline-block"></span>
            Online
          </span>
        </div>
        <button
          onClick={closeChat}
          className="text-zinc-300 hover:text-white p-1 rounded-full"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-4" style={{ maxHeight: '50vh' }}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-zinc-800 bg-opacity-50 rounded-lg p-3 max-w-[80%] text-white">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length < 2 && suggestions.length > 0 && (
        <div className="px-4 py-2 border-t bg-zinc-800 flex gap-2 overflow-x-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-3 py-1 whitespace-nowrap"
              onClick={() => {
                addMessage(suggestion, true);
                sendMessage(suggestion);
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-3 border-t border-zinc-800 flex">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-gray-800 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className={`bg-zinc-600 text-white p-2 rounded-r-lg ${
            input.trim() ? 'hover:bg-zinc-700' : 'opacity-50 cursor-not-allowed'
          }`}
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;