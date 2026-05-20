import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import GlobalSearchInput from '../components/GlobalSearchInput';
import './UtilityPages.css';

const messageRows = [
    { name: 'Sarah Mitchell', text: 'Great! See you tomorrow at 10', time: '2m ago', unread: 2 },
    { name: 'Ahmed Khalil', text: 'Thanks for the help with moving!', time: '1h ago' },
    { name: 'Lina Rahman', text: 'Is the dog walk still available?', time: '3h ago', unread: 1 },
    { name: 'Omar Hassan', text: 'Payment sent ✓', time: '1d ago' },
    { name: 'Nour Farid', text: 'Can we reschedule to 3 PM?', time: '2d ago' },
];

const MessageItem = ({ item }) => (
    <article className="messages-list-item">
        <div className="utility-avatar">🧑</div>
        <div className="messages-list-item__main">
            <p className="luicy-text" style={{margin: '0 0 3px', fontSize: '16px', fontWeight: '700'}}>{item.name}</p>
            <p>{item.text}</p>
        </div>
        <div>
            <div className="messages-list-item__time">{item.time}</div>
            {item.unread ? <div className="unread-badge">{item.unread}</div> : null}
        </div>
    </article>
);

const Messages = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner">
            <PageHeaderBack title="MESSAGES" />
            <div className="utility-search">
                <span>⌕</span>
                <GlobalSearchInput placeholder="Search messages..." />
            </div>
            {messageRows.map((item) => <MessageItem key={item.name} item={item} />)}
        </div>
    </div>
);

export default Messages;
