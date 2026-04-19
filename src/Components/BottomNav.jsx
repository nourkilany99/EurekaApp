import React from 'react';
import './BottomNav.css';

const HomeIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
        <path
            d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
        />
    </svg>
);

const TasksIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
        <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
        />
        <path
            d="M9 5a2 2 0 012-2h2a2 2 0 012 2v0a2 2 0 01-2 2h-2a2 2 0 01-2-2v0z"
            stroke="currentColor"
            strokeWidth="1.6"
        />
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const FeedIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
        <path d="M4 5h16v14H4V5z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 17h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const ProfileIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
        <circle cx="12" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path
            d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
        />
    </svg>
);

const BottomNav = ({ active = 'home', tone = 'default' }) => (
    <nav className={`bottom-nav bottom-nav--${tone}`} aria-label="Main">
        <div className="bottom-nav__inner">
            <button
                type="button"
                className={`bottom-nav__item ${active === 'home' ? 'bottom-nav__item--active' : ''}`}
                aria-current={active === 'home' ? 'page' : undefined}
            >
                <span className="bottom-nav__icon-wrap">
                    <HomeIcon />
                </span>
            </button>
            <button
                type="button"
                className={`bottom-nav__item bottom-nav__item--labeled ${
                    active === 'tasks' ? 'bottom-nav__item--active' : ''
                }`}
                aria-current={active === 'tasks' ? 'page' : undefined}
            >
                <span className="bottom-nav__icon-wrap">
                    <TasksIcon />
                </span>
                <span className="bottom-nav__label">Tasks</span>
            </button>
            <button type="button" className="bottom-nav__item bottom-nav__item--labeled">
                <span className="bottom-nav__icon-wrap">
                    <FeedIcon />
                </span>
                <span className="bottom-nav__label">Feed</span>
            </button>
            <button type="button" className="bottom-nav__item bottom-nav__item--labeled">
                <span className="bottom-nav__icon-wrap">
                    <ProfileIcon />
                </span>
                <span className="bottom-nav__label">Profile</span>
            </button>
        </div>
    </nav>
);

export default BottomNav;
