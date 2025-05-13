/* eslint-disable react/prop-types */
import React from 'react';

function ChatMessage({ message }) {
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`p-3 rounded-lg max-w-[80%] ${
          message.isUser
            ? 'bg-zinc-600 text-white rounded-tr-none'
            : 'bg-zinc-800 bg-opacity-50 text-white rounded-tl-none'
        }`}
      >
        {message.isUser ? (
          <p className="text-sm">{message.content}</p>
        ) : (
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: message.content }}
          />
        )}
        <span
          className={`text-xs mt-1 block ${message.isUser ? 'text-zinc-200' : 'text-zinc-300'}`}
        >
          {formattedTime}
        </span>
      </div>
    </div>
  );
}

export default ChatMessage;