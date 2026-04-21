import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileTool from '../Components/MobileTool';
import './AccountUnderReview.css';

const AccountUnderReview = () => {
    const navigate = useNavigate();

    return (
        <div className="aur-page">
            <MobileTool />
            <div className="aur-page__content">
                <button className="aur-back" type="button" onClick={() => navigate(-1)} aria-label="Back">
                    ←
                </button>

                <h1 className="aur-title">
                    ACCOUNT
                    <br />
                    UNDER REVIEW
                </h1>

                <div className="aur-progress">
                    <div className="aur-progress__row">
                        <span>Completed information</span>
                        <span className="aur-progress__pct">90% done</span>
                    </div>
                    <div className="aur-progress__track" aria-hidden>
                        <div className="aur-progress__bar" />
                    </div>
                </div>

                <p className="aur-copy">
                    Your information is being verified
                    <br />
                    by our team. This process usually takes
                    <br />
                    up to 24 hours.
                </p>

                <div className="aur-links">
                    <button type="button" className="aur-link">
                        Contact support
                    </button>
                    <button type="button" className="aur-link aur-link--muted">
                        Learn about Safety
                    </button>
                </div>

                <div className="aur-illustration" aria-hidden>
                    <div className="aur-blob" />
                    <div className="aur-badge">$ $</div>
                    <div className="aur-spark aur-spark--a" />
                    <div className="aur-spark aur-spark--b" />
                    <div className="aur-spark aur-spark--c" />
                </div>
            </div>
        </div>
    );
};

export default AccountUnderReview;
