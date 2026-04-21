import React from 'react';
import MobileTool from '../Components/MobileTool';
import FrameBackHeader from '../Components/FrameBackHeader';
import './Learn more.css';

const LearnMore = () => (
    <div className="learn-more-page">
        <MobileTool />
        <div className="learn-more-page__screen">
            <FrameBackHeader title="ACCOUNT UNDER REVIEW" />

            <section className="learn-more-page__progress-card">
                <div className="learn-more-page__progress-row">
                    <span>Completed information</span>
                    <span>90% done</span>
                </div>
                <div className="learn-more-page__track">
                    <div className="learn-more-page__bar" />
                </div>
            </section>

            <p className="learn-more-page__copy">
                Your information is being verified
                <br />
                by our team. This process usually takes
                <br />
                up to 24 hours.
            </p>

            <div className="learn-more-page__links">
                <button type="button">Contact support</button>
                <button type="button">Learn about Safety</button>
            </div>

            <div className="learn-more-page__artwork" aria-hidden>
                <div className="learn-more-page__rainbow" />
                <div className="learn-more-page__badge">$ $</div>
            </div>
        </div>
    </div>
);

export default LearnMore;
