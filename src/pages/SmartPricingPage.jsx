import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import ActionButton from '../components/ActionButton';
import StatCard from '../components/StatCard';
import './UtilityPages.css';
import './ScreenPages.css';

const SmartPricingPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="SMART PRICING" />
            <section className="ui-stats-grid">
                <StatCard label="Your Price" value="$45" />
                <StatCard label="AI Price" value="$48" tone="success" />
                <StatCard label="Demand" value="1.1x" />
            </section>
            <ListCard title="AI Recommendation">
                <p className="ui-muted-text">Increase to $48 for better conversion and competitive ranking.</p>
            </ListCard>
            <ListCard title="Price Factors">
                <p className="feature-muted">+8 Time of Day</p>
                <p className="feature-muted">+6 Rating</p>
                <p className="feature-muted">+4 Area Demand</p>
                <p className="feature-muted">-2 Competition</p>
            </ListCard>
            <ListCard title="Market Insights">
                <p className="ui-muted-text">Similar tasks in your area close between $47 - $52 this week.</p>
            </ListCard>
            <div className="feature-grid-2">
                <ActionButton variant="secondary">Use AI Price</ActionButton>
                <ActionButton>Post Task</ActionButton>
            </div>
        </div>
    </div>
);

export default SmartPricingPage;
