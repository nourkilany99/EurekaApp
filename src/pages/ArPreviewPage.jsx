import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import Card from '../components/Card';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const ArPreviewPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="AR PREVIEW" />
            <Card>
                <div className="feature-ar-view">
                    <div className="feature-ar-overlay">
                        <p className="feature-title">Dog Walking Task</p>
                        <p className="feature-muted">$45 · 1.2km</p>
                    </div>
                </div>
            </Card>
            <Card>
                <div className="feature-grid-2">
                    <ActionButton variant="secondary">Rotate</ActionButton>
                    <ActionButton variant="secondary">Zoom</ActionButton>
                </div>
                <ActionButton variant="secondary" style={{ marginTop: 8 }}>Capture</ActionButton>
            </Card>
            <ActionButton>Accept Task</ActionButton>
        </div>
    </div>
);

export default ArPreviewPage;
