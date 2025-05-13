/* eslint-disable react/prop-types */
import React from 'react';
import { MessageSquare } from 'lucide-react';

function ChatButton({ isOpen, toggleChat, unreadCount }) {
  return (
    <button
      onClick={toggleChat}
      className={`fixed bottom-6 right-24 rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center ${
        isOpen ? 'bg-zinc-800 rotate-90' : 'bg-black hover:bg-zinc-800'
      }`}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      <MessageSquare className="text-white w-6 h-6" />
      
      {!isOpen && unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {unreadCount}
        </span>
      )}
    </button>
  );
}

export default ChatButton;