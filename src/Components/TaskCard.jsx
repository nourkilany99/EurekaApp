import React from 'react';
import './TaskCard.css';

const TaskCard = ({ variant = 'recommended', title, subtitle, points, time, price, bgImage, status }) => {
    
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
             <div className="task-card available-card" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
                <div className="available-overlay"></div>
                {price && <div className="available-price">{price}$</div>}
                <div className="available-content">
                    <p className="available-title">{title}</p>
                    <p className="available-subtitle">{subtitle}</p>
                </div>
            </div>
        );
    }

    // Default: recommended
    return (
        <div className="task-card recommended-card" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
            <div className="recommended-overlay"></div>
            <div className="recommended-top">
                {points && (
                    <div className="recommended-points-container">
                        <div className="recommended-points">
                           <span>{points}</span>
                        </div>
                    </div>
                )}
                {time && (
                    <div className="recommended-time">
                        <span className="time-val">{time}</span>
                        <span className="time-lbl">mins</span>
                    </div>
                )}
            </div>
            <div className="recommended-bottom">
                 <p className="recommended-title">{title}</p>
                 <p className="recommended-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default TaskCard;
