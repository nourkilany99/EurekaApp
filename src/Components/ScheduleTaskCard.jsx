import React from 'react';
import './ScheduleTaskCard.css';

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

const KebabIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    </svg>
);

const ScheduleTaskCard = ({ title, location, accent = 'purple' }) => (
    <article className={`schedule-task-card schedule-task-card--${accent}`}>
        <div className="schedule-task-card__strip" aria-hidden />
        <div className="schedule-task-card__content">
            <h3 className="schedule-task-card__title">{title}</h3>
            <p className="schedule-task-card__loc">
                <PinIcon /> {location}
            </p>
        </div>
        <button type="button" className="schedule-task-card__menu" aria-label="More">
            <KebabIcon />
        </button>
    </article>
);

export default ScheduleTaskCard;
