import React from 'react';
import './TaskCard.css';

const TaskCard = ({ variant = 'recommended', title, subtitle, description, points, time, price, bgImage, image, status }) => {
    
    if (variant === 'ongoing') {
        return (
            <div className="task-card ongoing-card" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
                <div className="ongoing-overlay"></div>
                <div className="ongoing-content">
                    <span className="ongoing-status">{status || 'Ongoing task'}</span>
                    <h3 className="ongoing-title">{title}</h3>
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
                    <h3 className="volunteer-title">{title}</h3>
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
                    <h3 className="available-title">{title}</h3>
                    <p className="available-subtitle">{subtitle}</p>
                </div>
            </div>
        );
    }

    if (variant === 'tasksGrid') {
        return (
            <div className="task-card tasks-grid-card">
                <div className="tasks-grid-card__gradient" aria-hidden />
                {bgImage && (
                    <div
                        className="tasks-grid-card__image"
                        style={{ backgroundImage: `url(${bgImage})` }}
                        role="img"
                        aria-label=""
                    />
                )}
                <div className="tasks-grid-card__overlay" />
                {price && <div className="tasks-grid-card__price">{price}$</div>}
                <div className="tasks-grid-card__content">
                    <h3 className="tasks-grid-card__title">{title}</h3>
                    {subtitle && <p className="tasks-grid-card__subtitle">{subtitle}</p>}
                </div>
            </div>
        );
    }

    if (variant === 'tasksPage') {
        const cardImage = image || bgImage;

        return (
            <article className="task-card tasks-page-card">
                <div className="tasks-page-card__gradient" />
                {cardImage && (
                    <div
                        className="tasks-page-card__image"
                        style={{ backgroundImage: `url(${cardImage})` }}
                        role="img"
                        aria-label={title || 'Task image'}
                    />
                )}
                <div className="tasks-page-card__overlay" />
                {price && <span className="tasks-page-card__badge">{price}$</span>}
                <div className="tasks-page-card__content">
                    <h3 className="tasks-page-card__title">{title}</h3>
                    <p className="tasks-page-card__description">{description || subtitle}</p>
                </div>
            </article>
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
                 <h3 className="recommended-title">{title}</h3>
                 <p className="recommended-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default TaskCard;
