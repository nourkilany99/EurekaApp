import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import StatCard from '../components/StatCard';
import './UtilityPages.css';
import './ScreenPages.css';

const ReportsPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="REPORTS" />
            <section className="ui-stats-grid">
                <StatCard label="Total Earnings" value="12,540 EGP" tone="success" />
                <StatCard label="Completed Tasks" value="46" />
                <StatCard label="Success Rate" value="96%" />
            </section>
            <Card>
                <p className="utility-section-title luicy-text">Weekly Progress</p>
                <div className="ui-report-line">
                    <span>Task Completion</span>
                    <strong>84%</strong>
                </div>
                <ProgressBar value={84} />
                <div className="ui-report-line">
                    <span>Client Satisfaction</span>
                    <strong>96%</strong>
                </div>
                <ProgressBar value={96} />
            </Card>
            <Card>
                <p className="utility-section-title luicy-text">Top Categories</p>
                <p className="ui-muted-text">Pet Care, Babysitting, Moving Help</p>
            </Card>
        </div>
    </div>
);

export default ReportsPage;
