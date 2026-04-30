import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './BottomNav.css';

const TasksIcon = () => (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" aria-hidden>
        <rect x="5" y="4.5" width="14" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.55" />
        <path d="M9 8.5h6M9 12h6M9 15.5h3.8" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
);

const GridIcon = () => (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" aria-hidden>
        <rect x="4.5" y="4.5" width="6.2" height="6.2" rx="1.4" stroke="currentColor" strokeWidth="1.55" />
        <rect x="13.3" y="4.5" width="6.2" height="6.2" rx="1.4" stroke="currentColor" strokeWidth="1.55" />
        <rect x="4.5" y="13.3" width="6.2" height="6.2" rx="1.4" stroke="currentColor" strokeWidth="1.55" />
        <rect x="13.3" y="13.3" width="6.2" height="6.2" rx="1.4" stroke="currentColor" strokeWidth="1.55" />
    </svg>
);

const HomeIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
        <path
            d="M4.5 10.8L12 4.8l7.5 6V19a1.5 1.5 0 01-1.5 1.5h-3.7v-5.3h-4.6v5.3H6A1.5 1.5 0 014.5 19v-8.2z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
        />
    </svg>
);

const FeedIcon = () => (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" aria-hidden>
        <rect x="4.6" y="5" width="14.8" height="14" rx="2.3" stroke="currentColor" strokeWidth="1.55" />
        <path d="M8.1 9h7.8M8.1 12.6h7.8M8.1 16.2h4.6" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
);

const VolunteerIcon = () => (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" aria-hidden>
        <circle cx="8.1" cy="8.2" r="2.5" stroke="currentColor" strokeWidth="1.55" />
        <circle cx="15.9" cy="8.2" r="2.5" stroke="currentColor" strokeWidth="1.55" />
        <path
            d="M3.8 18.8v-.7a3.8 3.8 0 013.8-3.8h1.1a3.8 3.8 0 013.8 3.8v.7M11.5 18.8v-.6a3.6 3.6 0 013.6-3.6h1.2a3.6 3.6 0 013.6 3.6v.6"
            stroke="currentColor"
            strokeWidth="1.55"
            strokeLinecap="round"
        />
    </svg>
);

const NAV_ITEMS = [
    {
        key: 'tasks',
        to: '/tasks',
        label: 'Tasks',
        icon: <TasksIcon />,
        isActiveRoute: (pathname) =>
            pathname.startsWith('/tasks') ||
            pathname.startsWith('/requests') ||
            pathname.startsWith('/jobs-on-maps') ||
            pathname.startsWith('/maps-open'),
    },
    {
        key: 'myTasks',
        to: '/my-tasks',
        label: 'My Tasks',
        icon: <GridIcon />,
        isActiveRoute: (pathname) => pathname.startsWith('/my-tasks'),
    },
    {
        key: 'home',
        to: '/home',
        label: 'Home',
        icon: <HomeIcon />,
        isCenter: true,
        isActiveRoute: (pathname) => pathname === '/' || pathname.startsWith('/apply-for-the-task'),
    },
    {
        key: 'feed',
        to: '/feed',
        label: 'Feed',
        icon: <FeedIcon />,
        isActiveRoute: (pathname) => pathname.startsWith('/feed'),
    },
    {
        key: 'volunteer',
        to: '/volunteer',
        label: 'Volunteer',
        icon: <VolunteerIcon />,
        isActiveRoute: (pathname) => pathname.startsWith('/volunteer') || pathname.startsWith('/volenteer'),
    },
];

const BottomNav = () => {
    const { pathname } = useLocation();

    return (
        <nav className="bottom-nav" aria-label="Main">
            <div className="bottom-nav__inner">
                {NAV_ITEMS.map((item) => {
                    const isActive = item.isActiveRoute(pathname);

                    return (
                        <NavLink
                            key={item.key}
                            to={item.to}
                            aria-label={item.label}
                            className={[
                                'bottom-nav__item',
                                item.isCenter ? 'bottom-nav__item--center' : 'bottom-nav__item--default',
                                isActive ? 'bottom-nav__item--active' : '',
                            ]
                                .filter(Boolean)
                                .join(' ')}
                        >
                            <span className="bottom-nav__icon-wrap">{item.icon}</span>
                            {!item.isCenter && <span className="bottom-nav__label">{item.label}</span>}
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
