import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import StatusBadge from '../components/StatusBadge';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const skills = [
    { name: 'Dog Walking', verified: true, endorsements: 28, endorsed: true },
    { name: 'House Cleaning', verified: true, endorsements: 24, endorsed: true },
    { name: 'Lawn Care', verified: false, endorsements: 19, endorsed: false },
    { name: 'Babysitting', verified: true, endorsements: 15, endorsed: true },
    { name: 'Pet Sitting', verified: false, endorsements: 12, endorsed: false },
    { name: 'Grocery Shopping', verified: false, endorsements: 10, endorsed: false },
];

const SkillsPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="SKILLS & ENDORSEMENTS" />
            <section className="ui-stats-grid">
                <StatCard label="Total Endorsements" value="108" tone="success" />
                <StatCard label="Verified Skills" value="3" />
                <StatCard label="Top Rank" value="#18" />
            </section>
            <ActionButton variant="secondary">+ Add Skill</ActionButton>
            <Card>
                <h3 className="utility-section-title">Top Skills</h3>
                <div className="ui-screen-stack">
                    {skills.map((skill) => (
                        <article key={skill.name} className="feature-card">
                            <div className="feature-row">
                                <div>
                                    <p className="feature-title">
                                        {skill.name} {skill.verified ? <StatusBadge tone="purple">Verified</StatusBadge> : null}
                                    </p>
                                    <p className="feature-muted">{skill.endorsements} endorsements</p>
                                </div>
                                <ActionButton variant={skill.endorsed ? 'secondary' : 'primary'}>
                                    {skill.endorsed ? 'Endorsed' : 'Endorse'}
                                </ActionButton>
                            </div>
                        </article>
                    ))}
                </div>
            </Card>
        </div>
    </div>
);

export default SkillsPage;
