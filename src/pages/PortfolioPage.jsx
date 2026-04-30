import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const projects = [
    { title: 'Before & After - Lawn Care', likes: 24 },
    { title: 'Deep Cleaning Results', likes: 18 },
    { title: 'Garden Transformation', likes: 32 },
    { title: 'Pet Grooming', likes: 15 },
    { title: 'Painting Project', likes: 21 },
    { title: 'Organization Project', likes: 19 },
];

const PortfolioPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="PORTFOLIO" />
            <section className="ui-stats-grid">
                <StatCard label="Projects" value="6" />
                <StatCard label="Total Likes" value="129" tone="success" />
                <StatCard label="Saved" value="42" />
            </section>
            <ActionButton variant="secondary">+ Add Project</ActionButton>
            <Card>
                <div className="feature-grid-2">
                    {projects.map((project) => (
                        <article key={project.title} className="feature-card">
                            <div className="feature-project-thumb">🖼</div>
                            <p className="feature-title" style={{ marginTop: 8 }}>{project.title}</p>
                            <p className="feature-muted">❤ {project.likes}</p>
                        </article>
                    ))}
                </div>
            </Card>
        </div>
    </div>
);

export default PortfolioPage;
