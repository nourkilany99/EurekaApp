import React from 'react';
import './OngoingWideTaskCard.css';

const PinIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
            stroke="currentColor"
            strokeWidth="1.6"
        />
        <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);

const OngoingWideTaskCard = ({
    status = 'Ongoing task',
    title = 'Babysitting',
    location = 'Nasr city, Hassan el ma\'moon',
    imageUrl,
}) => (
    <article className="ongoing-wide-task-card">
        <div className="ongoing-wide-task-card__text">
            <p className="ongoing-wide-task-card__status">{status}</p>
            <p className="ongoing-wide-task-card__title">{title}</p>
            <p className="ongoing-wide-task-card__loc">
                <PinIcon /> {location}
            </p>
        </div>
        <div
            className="ongoing-wide-task-card__img"
            style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
        />
    </article>
);

export default OngoingWideTaskCard;
