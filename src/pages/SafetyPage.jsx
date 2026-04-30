import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';

const SafetyPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="SAFETY" />
            <ListCard title="Safety Header">
                <p className="ui-muted-text">Stay alert, verify profiles, and keep communication in-app.</p>
            </ListCard>
            <ListCard title="Safety Tips">
                <ul className="ui-safety-list">
                    <li>Verify profile before accepting tasks</li>
                    <li>Share meeting details with a friend</li>
                    <li>Keep communication in app chat</li>
                </ul>
            </ListCard>
            <ListCard title="Emergency" className="ui-pill-danger">
                <p className="ui-muted-text">If you feel unsafe, contact emergency support immediately.</p>
                <ActionButton variant="danger" style={{ marginTop: 8 }}>Report Emergency</ActionButton>
            </ListCard>
        </div>
    </div>
);

export default SafetyPage;
