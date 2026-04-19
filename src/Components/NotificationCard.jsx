import React from 'react';
import './NotificationCard.css';

const NotificationCard = ({ variant = 'transfer', name, amount, body, time, letter = 'S' }) => (
    <article className="notification-card">
        <div
            className={`notification-card__avatar ${
                variant === 'referral' ? 'notification-card__avatar--referral' : ''
            }`}
        >
            {letter}
        </div>
        <div className="notification-card__main">
            {variant === 'transfer' ? (
                <>
                    <div className="notification-card__top">
                        <span className="notification-card__name">{name}</span>
                        <span className="notification-card__amount">{amount}</span>
                    </div>
                    <p className="notification-card__body">{body}</p>
                    <p className="notification-card__time">{time}</p>
                </>
            ) : (
                <>
                    <div className="notification-card__top notification-card__top--referral">
                        <span className="notification-card__title">{name}</span>
                    </div>
                    <p className="notification-card__body">{body}</p>
                    <p className="notification-card__time">{time}</p>
                </>
            )}
        </div>
    </article>
);

export default NotificationCard;
