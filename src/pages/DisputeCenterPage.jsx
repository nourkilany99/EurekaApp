import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import StatusBadge from '../components/StatusBadge';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const DisputeCenterPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="DISPUTE CENTER" />
            <ListCard title="Dispute Summary" right={<StatusBadge tone="warning">Under Review</StatusBadge>}>
                <p className="ui-muted-text">House cleaning task · $45 · Opened 2 days ago</p>
            </ListCard>
            <ListCard title="Conversation">
                <div className="feature-chat">
                    <div className="feature-chat-bubble">Please share additional proof for your claim.</div>
                    <div className="feature-chat-bubble is-mine">I have uploaded task photos and timeline details.</div>
                </div>
                <div className="feature-row">
                    <input className="feature-input" placeholder="Type your message..." />
                    <ActionButton>Send</ActionButton>
                </div>
            </ListCard>
        </div>
    </div>
);

export default DisputeCenterPage;
