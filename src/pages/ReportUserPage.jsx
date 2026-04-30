import React, { useState } from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const reasons = ['Scam or fraud', 'Inappropriate behavior', 'Spam or fake account', 'Safety concern', 'Other'];

const ReportUserPage = () => {
    const [step, setStep] = useState(1);
    const [reason, setReason] = useState(reasons[0]);

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner ui-screen-stack">
                <PageHeaderBack title="REPORT USER" />
                <div className="feature-step-row">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className={`feature-step ${step === item ? 'is-active' : ''}`}>Step {item}</div>
                    ))}
                </div>
                {step === 1 ? (
                    <ListCard title="Select Reason">
                        <div className="ui-screen-stack">
                            {reasons.map((item) => (
                                <button key={item} type="button" className={`feature-option ${reason === item ? 'is-active' : ''}`} onClick={() => setReason(item)}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </ListCard>
                ) : null}
                {step === 2 ? (
                    <ListCard title="What happened?">
                        <textarea className="feature-textarea" placeholder="Tell us what happened" />
                        <p className="feature-muted" style={{ marginTop: 8 }}>False reports may lead to account restrictions.</p>
                    </ListCard>
                ) : null}
                {step === 3 ? (
                    <ListCard title="Report Submitted">
                        <p className="ui-muted-text">Thanks for helping keep our community safe.</p>
                    </ListCard>
                ) : null}
                <ActionButton onClick={() => setStep((prev) => Math.min(3, prev + 1))}>{step === 3 ? 'Done' : 'Next'}</ActionButton>
            </div>
        </div>
    );
};

export default ReportUserPage;
