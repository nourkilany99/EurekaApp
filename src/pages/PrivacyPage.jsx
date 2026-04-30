import React, { useState } from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import ToggleItem from '../components/ToggleItem';
import StatusBadge from '../components/StatusBadge';
import './UtilityPages.css';
import './ScreenPages.css';

const PrivacyPage = () => {
    const [state, setState] = useState({
        'Profile Visibility': true,
        'Public Photo': false,
        'Share Phone Number': false,
        'Allow Messaging': true,
    });

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner ui-screen-stack">
                <PageHeaderBack title="PRIVACY" />
                <ListCard title="Profile Visibility">
                    <div className="ui-screen-stack">
                        {Object.keys(state).map((key) => (
                            <ToggleItem
                                key={key}
                                title={key}
                                checked={state[key]}
                                onChange={() => setState((prev) => ({ ...prev, [key]: !prev[key] }))}
                            />
                        ))}
                    </div>
                </ListCard>
                <ListCard title="Data Protection">
                    <p className="ui-muted-text">Review your saved data and visibility options regularly to protect your account.</p>
                    <StatusBadge tone="danger" className="status-chip">Data Protection Notice</StatusBadge>
                </ListCard>
            </div>
        </div>
    );
};

export default PrivacyPage;
