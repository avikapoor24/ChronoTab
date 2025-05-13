/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const initialMessages = [
  {
    content: "Hi there! I'm your assistant. How can I help you today?",
    isUser: false,
    timestamp: new Date().toISOString(),
  },
];

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [unreadCount, setUnreadCount] = useState(1);
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const addMessage = (content, isUser) => {
    const newMessage = {
      content,
      isUser,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    if (!isOpen && !isUser) {
      setUnreadCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <ChatButton isOpen={isOpen} toggleChat={toggleChat} unreadCount={unreadCount} />
      <ChatWindow
        isOpen={isOpen}
        closeChat={closeChat}
        messages={messages}
        addMessage={addMessage}
        isTyping={isTyping}
        setIsTyping={setIsTyping}
      />
    </>
  );
}

export default ChatBot;