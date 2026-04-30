import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import MessageItem from '../components/MessageItem';
import GlobalSearchInput from '../components/GlobalSearchInput';
import './UtilityPages.css';
import './ScreenPages.css';

const items = [
    { name: 'Sarah Mitchell', text: 'Great, see you tomorrow at 10.', time: '2m ago', unread: 2 },
    { name: 'Omar Hassan', text: 'Payment sent successfully.', time: '1h ago', unread: 1 },
    { name: 'Lina Rahman', text: 'Is the task still available?', time: '3h ago' },
];

const MessagesPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="MESSAGES" />
            <div className="utility-search">
                <span>⌕</span>
                <GlobalSearchInput placeholder="Search messages..." />
            </div>
            {items.map((item) => <MessageItem key={item.name} item={item} />)}
        </div>
    </div>
);

export default MessagesPage;
