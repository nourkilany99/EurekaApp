import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';

const ReferralPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="REFER & EARN" />
            <Card>
                <h3 className="utility-section-title">Referral Code</h3>
                <div className="feature-row">
                    <strong>ALEX2024</strong>
                    <ActionButton variant="secondary">Copy</ActionButton>
                </div>
            </Card>
            <section className="ui-stats-grid">
                <StatCard label="Invited" value="12" />
                <StatCard label="Joined" value="8" />
                <StatCard label="Earned" value="$640" tone="success" />
            </section>
            <Card>
                <h3 className="utility-section-title">Milestones</h3>
                <p className="feature-muted">5 invites</p>
                <ProgressBar value={100} />
                <p className="feature-muted" style={{ marginTop: 10 }}>10 invites</p>
                <ProgressBar value={80} />
                <p className="feature-muted" style={{ marginTop: 10 }}>20 invites</p>
                <ProgressBar value={40} />
            </Card>
            <ActionButton>Share</ActionButton>
        </div>
    </div>
);

export default ReferralPage;
