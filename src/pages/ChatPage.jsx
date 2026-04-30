import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import MessageBubble from '../components/MessageBubble';
import './UtilityPages.css';
import './ScreenPages.css';

const bubbles = [
    { text: 'Hi! Is the dog walking task still available?', mine: false, time: '10:30 AM' },
    { text: 'Yes, it is available. Can you do tomorrow?', mine: true, time: '10:32 AM' },
    { text: 'Perfect. Tomorrow at 10 AM works for me.', mine: false, time: '10:34 AM' },
];

const ChatPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="CHAT" />
            <div className="chat-header">
                <div className="utility-avatar">🧑</div>
                <div>
                    <h3>Sarah Mitchell</h3>
                    <span>Active now</span>
                </div>
            </div>
            <div className="chat-stream">
                {bubbles.map((item, index) => <MessageBubble key={`${item.time}-${index}`} item={item} />)}
            </div>
            <div className="chat-input-row">
                <button type="button" className="chat-add-btn">+</button>
                <input className="chat-input" placeholder="Type a message..." />
                <button type="button" className="chat-send-btn">➤</button>
            </div>
        </div>
    </div>
);

export default ChatPage;
