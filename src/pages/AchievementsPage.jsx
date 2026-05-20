import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import StatCard from '../components/StatCard';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const badges = [
    { title: 'First Task', icon: '⭐', locked: false },
    { title: 'Quick Responder', icon: '⚡', locked: false },
    { title: '10 Tasks', icon: '🏅', locked: false },
    { title: 'Perfect Rating', icon: '💜', locked: false },
    { title: '50 Tasks', icon: '🔒', locked: true, progress: 72 },
    { title: 'Top Performer', icon: '🔒', locked: true, progress: 41 },
];

const AchievementsPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="ACHIEVEMENTS" />
            <section className="ui-stats-grid">
                <StatCard label="Completion" value="67%" tone="success" />
                <StatCard label="Unlocked" value="4" />
                <StatCard label="Points" value="45" />
            </section>
            <Card>
                <p className="utility-section-title luicy-text">Achievement Badges</p>
                <div className="feature-badge-grid">
                    {badges.map((badge) => (
                        <article key={badge.title} className={`feature-card feature-badge ${badge.locked ? 'feature-badge--locked' : ''}`}>
                            <strong>{badge.icon}</strong>
                            <p className="feature-title">{badge.title}</p>
                            {badge.locked ? <ProgressBar value={badge.progress} /> : <p className="feature-muted">Unlocked</p>}
                        </article>
                    ))}
                </div>
            </Card>
        </div>
    </div>
);

export default AchievementsPage;
