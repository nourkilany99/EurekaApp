import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import './UtilityPages.css';

const settingGroups = [
    {
        title: 'Account',
        rows: [
            { label: 'Edit Profile', icon: '👤' },
            { label: 'Notifications', icon: '🔔' },
            { label: 'Privacy & Security', icon: '🔒' },
            { label: 'Payment Methods', icon: '💳' },
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
            { label: 'Help & FAQ', icon: '❓' },
            { label: 'Contact Us', icon: '🪪' },
            { label: 'Rate App', icon: '⭐' },
        ],
    },
    {
        title: 'Legal',
        rows: [
            { label: 'Terms of Service', icon: '📄' },
            { label: 'Privacy Policy', icon: '🛡️' },
            { label: 'About', icon: 'ℹ️', right: 'v2.1.0' },
        ],
    },
];

const Settings = () => {
    const navigate = useNavigate();

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner">
                <PageHeaderBack title="SETTINGS" />

                {settingGroups.map((group) => (
                    <section key={group.title}>
                        <h3 className="utility-section-title">{group.title}</h3>
                        <div className="settings-group">
                            {group.rows.map((row) => (
                                <div
                                    className="settings-row"
                                    key={row.label}
                                    onClick={row.label === 'Payment Methods' ? () => navigate('/payment-setup') : undefined}
                                >
                                    <div className="settings-row__left">
                                        <span>{row.icon}</span>
                                        <span>{row.label}</span>
                                    </div>
                                    {row.toggle ? (
                                        <button type="button" className="toggle is-on" aria-label={`${row.label} enabled`} />
                                    ) : (
                                        <span className="settings-arrow">{row.right || '›'}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <button type="button" className="logout-btn">Log Out</button>
            </div>
        </div>
    );
};

export default Settings;
