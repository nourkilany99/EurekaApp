import React from 'react';
import './TaskCard.css';
import dollarIcon from '../Assets/IMG/dollar.svg';

const TaskCard = ({ variant = 'recommended', title, subtitle, points, time, price, bgImage, status, tag }) => {

    if (variant === 'ongoing') {
        return (
            <div className="task-card ongoing-card" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
                <div className="ongoing-overlay"></div>
                <div className="ongoing-content">
                    <span className="ongoing-status">{status || 'Ongoing task'}</span>
                    <p className="ongoing-title">{title}</p>
                    <p className="ongoing-subtitle">{subtitle}</p>
                </div>
                {time && <div className="ongoing-time">{time}</div>}
            </div>
        );
    }

    if (variant === 'volunteer') {
        return (
            <div className="task-card volunteer-card" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
                <div className="volunteer-overlay"></div>
                <div className="volunteer-content">
                    {points && <div className="volunteer-points"><span className="dot-yellow"></span> {points} points</div>}
                    <p className="volunteer-title">{title}</p>
                </div>
            </div>
        );
    }

    if (variant === 'available') {
        return (
            <div className="available-card-wrap">
                <div className="task-card available-card" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
                    <div className="available-overlay"></div>
                </div>
                {price && <div className="available-price" style={{ color: '#fff', textDecoration: 'none' }}>{price}$</div>}
                <div className="available-content">
                    <div className="available-title-row">
                        <p className="available-title">{title}</p>
                        {tag && <span className="available-tag">{tag}</span>}
                    </div>
                    <p className="available-subtitle">{subtitle}</p>
                </div>
            </div>
        );
    }

    if (variant === 'tasks-page-card') {
        return (
            <div className="task-card tasks-page-card">
                <div className="tasks-page-card__gradient" />
                {bgImage && <div className="tasks-page-card__image" style={{ backgroundImage: `url(${bgImage})` }} />}
                <div className="tasks-page-card__overlay" />
                {tag && <span className="tasks-page-card__badge">{tag}</span>}
                <div className="tasks-page-card__content">
                    <p className="tasks-page-card__title">{title}</p>
                    {subtitle && <p className="tasks-page-card__description">{subtitle}</p>}
                    {price && <span className="tasks-page-card__badge tasks-page-card__badge--price" style={{ position: 'static', display: 'inline-block', marginTop: '6px' }}>${price}</span>}
                </div>
            </div>
        );
    }

    // Default: recommended
    return (
        <div className="recommended-card-wrap">
            <div className="task-card recommended-card" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
                <div className="recommended-overlay"></div>
                <div className="recommended-bottom">
                    <p className="recommended-title">{title}</p>
                    <p className="recommended-subtitle">{subtitle}</p>
                </div>
            </div>
            {points && (
                <div className="recommended-points-container">
                    <div className="recommended-points">
                        <img src={dollarIcon} alt="dollar" className="points-dollar-icon" />
                        <span style={{ color: '#fff' }}>{points}</span>
                    </div>
                </div>
            )}
            {time && (
                <div className="recommended-time-notch">
                    <span className="time-val">{time}</span>
                    <span className="time-lbl">mins</span>
                </div>
            )}
        </div>
    );
};

export default TaskCard;
