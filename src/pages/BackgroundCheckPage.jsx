import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import ProgressBar from '../components/ProgressBar';
import StatusBadge from '../components/StatusBadge';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';

const BackgroundCheckPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="BACKGROUND CHECK" />
            <ListCard title="Progress" subtitle="Estimated time: 3 days">
                <p className="feature-title">35% Complete</p>
                <ProgressBar value={35} />
            </ListCard>
            <ListCard title="Verification Checklist">
                <div className="ui-screen-stack">
                    <div className="feature-row"><span>Identity</span><StatusBadge tone="success">Verified</StatusBadge></div>
                    <div className="feature-row"><span>Criminal record</span><StatusBadge tone="warning">In Progress</StatusBadge></div>
                    <div className="feature-row"><span>Reference</span><StatusBadge>Pending</StatusBadge></div>
                    <div className="feature-row"><span>Credit</span><StatusBadge>Pending</StatusBadge></div>
                </div>
            </ListCard>
            <ActionButton variant="secondary">Contact Support</ActionButton>
        </div>
    </div>
);

export default BackgroundCheckPage;
