import React from 'react';
import { Link } from 'react-router-dom';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import './UtilityPages.css';
import './ScreenPages.css';

const groups = [
    {
        title: 'Account',
        rows: [
            { label: 'Edit Profile', icon: '👤', path: '/edit-profile' },
            { label: 'Notifications', icon: '🔔', path: '/notifications' },
            { label: 'Privacy & Security', icon: '🔒', path: '/privacy' },
            { label: 'Payment Methods', icon: '💳', path: '/payment-setup' },
        ],
    },
    {
        title: 'Preferences',
        rows: [
            { label: 'Language', icon: '🌍', right: 'English' },
            { label: 'Dark Mode', icon: '🌙', toggle: true },
            { label: 'Location Services', icon: '📍', toggle: true },
        ],
    },
    {
        title: 'Support',
        rows: [
            { label: 'Help & FAQ', icon: '❓', path: '/help-support' },
            { label: 'Contact Us', icon: '🪪' },
            { label: 'Rate App', icon: '⭐' },
        ],
    },
    {
        title: 'Legal',
        rows: [
            { label: 'Terms of Service', icon: '📄' },
            { label: 'Privacy Policy', icon: '🛡️', path: '/privacy' },
            { label: 'About', icon: 'ℹ️', right: 'v2.1.0' },
        ],
    },
];

const SettingsPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="SETTINGS" />
            {groups.map((group) => (
                <section key={group.title}>
                    <p className="utility-section-title luicy-text">{group.title}</p>
                    <div className="settings-group">
                        {group.rows.map((row) => {
                            const content = (
                                <>
                                    <div className="settings-row__left">
                                        <span>{row.icon}</span>
                                        <span>{row.label}</span>
                                    </div>
                                    {row.toggle ? (
                                        <button type="button" className="toggle is-on" aria-label={`${row.label} enabled`} />
                                    ) : (
                                        <span className="settings-arrow">{row.right || '›'}</span>
                                    )}
                                </>
                            );

                            if (row.path) {
                                return (
                                    <Link
                                        key={row.label}
                                        to={row.path}
                                        className="settings-row"
                                        style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
                                    >
                                        {content}
                                    </Link>
                                );
                            }

                            return (
                                <div key={row.label} className="settings-row">
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                </section>
            ))}
            <Link to='/' className='link' >
                <button type="button" className="logout-btn">Log Out</button>
            </Link>        </div>
    </div>
);

export default SettingsPage;
