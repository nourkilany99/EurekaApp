import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FrameBackHeader.css';

const FrameBackHeader = ({ title, chip }) => {
    const navigate = useNavigate();

    return (
        <div className="frame-back-header">
            <div className="frame-back-header__row">
                <button
                    className="frame-back-header__back"
                    type="button"
                    onClick={() => navigate(-1)}
                    aria-label="Back"
                >
                    ←
                </button>
                <h1 className="frame-back-header__title">{title}</h1>
            </div>
            {chip ? <button className="frame-back-header__chip" type="button">{chip}</button> : null}
        </div>
    );
};

export default FrameBackHeader;
