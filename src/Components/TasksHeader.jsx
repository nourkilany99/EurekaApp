import React from 'react';
import './TasksHeader.css';

const ChevronDown = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const PinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
            stroke="currentColor"
            strokeWidth="1.6"
        />
        <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);

const TasksHeader = () => (
    <header className="tasks-header">
        <div className="tasks-header__row">
            <h1 className="tasks-header__logo">tasks</h1>
            <button type="button" className="tasks-header__location">
                <PinIcon />
                <span className="tasks-header__location-text">Nasr city, Home</span>
                <ChevronDown />
            </button>
        </div>
        <p className="tasks-header__tagline">Seamless task management experience</p>
    </header>
);

export default TasksHeader;
