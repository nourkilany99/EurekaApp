import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import ActionButton from '../components/ActionButton';
import StatusBadge from '../components/StatusBadge';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const matches = [
    { task: 'Dog Walking - Central Park', pct: 92, pay: '$45', eta: '2h' },
    { task: 'House Cleaning - New Maadi', pct: 88, pay: '$55', eta: '3h' },
    { task: 'Lawn Mowing - Brook Side', pct: 82, pay: '$50', eta: '2.5h' },
];

const AiMatchPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="AI MATCH" />
            <ListCard title="Smart Recommendation" subtitle="Personalized using your profile and ratings">
                <StatusBadge tone="purple">Top Matches For You</StatusBadge>
            </ListCard>
            {matches.map((match) => (
                <ListCard key={match.task}>
                    <div className="feature-row">
                        <div>
                            <p className="feature-title">{match.task}</p>
                            <p className="feature-muted">{match.eta} · {match.pay}</p>
                        </div>
                        <StatusBadge tone="success">{match.pct}%</StatusBadge>
                    </div>
                    <ActionButton className="task-history-actions">Accept Match</ActionButton>
                </ListCard>
            ))}
        </div>
    </div>
);

export default AiMatchPage;
