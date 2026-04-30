import React from 'react';

const MessageBubble = ({ item }) => (
    <div className={`chat-bubble-wrap ${item.mine ? 'mine' : ''}`}>
        <div className={`chat-bubble ${item.mine ? 'mine' : ''}`}>{item.text}</div>
        <span className="chat-time">{item.time}</span>
    </div>
);

export default MessageBubble;
