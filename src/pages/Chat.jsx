import React from 'react';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import './UtilityPages.css';

const messages = [
    { text: 'Hi! Is the dog walking task still available?', time: '10:30 AM', mine: false },
    { text: "Yes! It's available. When can you do it?", time: '10:32 AM', mine: true },
    { text: "Tomorrow at 10 AM works for me. What's the address?", time: '10:35 AM', mine: false },
    { text: "Perfect! It's in Nasr City, Hassan el ma'moon. I'll send you the exact location.", time: '10:36 AM', mine: true },
    { text: 'Great! See you tomorrow at 10 😊', time: '10:38 AM', mine: false },
];

const ChatBubble = ({ item }) => (
    <div className={`chat-bubble-wrap ${item.mine ? 'mine' : ''}`}>
        <div className={`chat-bubble ${item.mine ? 'mine' : ''}`}>{item.text}</div>
        <span className="chat-time">{item.time}</span>
    </div>
);

const Chat = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner">
            <PageHeaderBack title="CHAT" />
            <div className="chat-header">
                <div className="utility-avatar">🧑</div>
                <div>
                    <h3>Sarah Mitchell</h3>
                    <span>Active now</span>
                </div>
            </div>
            <div className="chat-stream">
                {messages.map((item, index) => <ChatBubble key={`${item.time}-${index}`} item={item} />)}
            </div>

            <div className="chat-input-row">
                <button type="button" className="chat-add-btn">+</button>
                <input className="chat-input" placeholder="Type a message..." />
                <button type="button" className="chat-send-btn">➤</button>
            </div>
        </div>
    </div>
);

export default Chat;
