import React from 'react';
import MobileTool from '../components/MobileTool';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const CallPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack" style={{ textAlign: 'center' }}>
            <div className="profile-photo">SM</div>
            <p className="utility-section-title luicy-text" style={{ marginTop: 0 }}>Sarah Mckinzie</p>
            <p className="feature-muted">Calling...</p>
            <div className="feature-grid-2">
                <ActionButton variant="secondary">Mute</ActionButton>
                <ActionButton variant="secondary">Video</ActionButton>
            </div>
            <ActionButton variant="danger">End Call</ActionButton>
        </div>
    </div>
);

export default CallPage;
