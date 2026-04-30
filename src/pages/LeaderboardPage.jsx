import React, { useState } from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import StatusBadge from '../components/StatusBadge';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const users = [
    { name: 'Sarah M.', score: '$3,800', rank: 1, top: true },
    { name: 'Jason W.', score: '$3,600', rank: 2, top: true },
    { name: 'Emma D.', score: '$3,500', rank: 3, top: true },
    { name: 'Michael R.', score: '$3,100', rank: 7, self: true },
];

const LeaderboardPage = () => {
    const [tab, setTab] = useState('Month');

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner ui-screen-stack">
                <PageHeaderBack title="LEADERBOARD" />
                <div className="utility-tabs">
                    {['Month', 'All'].map((item) => (
                        <button key={item} type="button" className={`utility-tab ${tab === item ? 'is-active' : ''}`} onClick={() => setTab(item)}>
                            {item}
                        </button>
                    ))}
                </div>
                <section className="feature-rank-list">
                    {users.map((user) => (
                        <article
                            key={user.name}
                            className={`feature-rank-item ${user.top ? 'is-top' : ''} ${user.self ? 'is-self' : ''}`}
                        >
                            <strong>#{user.rank}</strong>
                            <span>{user.name}</span>
                            <div>
                                {user.self ? <StatusBadge tone="purple">You</StatusBadge> : null} {user.score}
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default LeaderboardPage;
