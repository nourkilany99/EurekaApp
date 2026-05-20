import React from 'react';
import './ProfilePage.css';
import MobileTool from '../components/MobileTool';
import { Link, useNavigate } from 'react-router-dom';

const ActionButton = ({ type, onClick }) => {
    if (type === 'gear') {
        return (
            <Link to="/settings" className="action-button-gear" onClick={onClick} aria-label="Settings">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                    />
                    <path
                        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2v-1a2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2h1a2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2v1a2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
        );
    }
    if (type === 'edit') {
        return (
            <button className="action-button-edit" onClick={onClick} aria-label="Edit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        );
    }
    return null;
};

const ProfileHeader = () => (
    <div className="profile-header-container">
        <ActionButton type="gear" />
        <p className="profile-header-title">
            YOUR<br />PROFILE
        </p>
    </div>
);

const StatCard = ({ rating }) => (
    <div className="stat-card-rating">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {rating}
    </div>
);

const InfoCard = ({ title, showEdit = true, onEdit, children, actionLabel, actionRoute }) => (
    <div className="info-card-container">
        <div className="info-card-header">
            <span className="info-card-badge">{title}</span>
            <div className="info-card-actions">
                {actionLabel && actionRoute && (
                    <Link to={actionRoute} className="info-card-action-link">
                        {actionLabel}
                    </Link>
                )}
                {showEdit && <ActionButton type="edit" onClick={onEdit} />}
            </div>
        </div>
        <div className="info-card-content">
            {children}
        </div>
    </div>
);

const NavItem = ({ label, route }) => (
    <Link to={route} className="nav-item-row">
        <span className="nav-item-label">{label}</span>
        <svg className="nav-item-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Link>
);

const QuickActions = () => (
    <div className="quick-actions-container">
        <div className="quick-actions-row">
            <Link to="/portfolio" className="quick-action-btn">Edit Portfolio</Link>
            <Link to="/availability" className="quick-action-btn">Set Availability</Link>
            <Link to="/achievements" className="quick-action-btn">Achievements</Link>
        </div>
    </div>
);

const ProfilePage = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-page-wrapper">
            <MobileTool />

            <ProfileHeader />

            <div className="profile-identity">
                <img src="https://i.pravatar.cc/150?img=32" alt="Seif Ibrahim" className="profile-avatar" />
                <div className="profile-identity-info">
                    <p className="profile-identity-name">
                        Seif Ibrahim <span className="profile-identity-age">23 old</span>
                    </p>
                    <p className="profile-identity-role">Art designer , dog friendly</p>
                </div>
                <div className="profile-identity-actions">
                    <StatCard rating="4.9" />
                    <button
                        type="button"
                        className="profile-edit-btn"
                        onClick={() => navigate('/edit-profile')}
                        aria-label="Edit Profile"
                    >
                        ✎
                    </button>
                </div>
            </div>

            <div className="primary-cta-container">
                <Link to="/ai-match" className="primary-cta-btn">Find Opportunities</Link>
            </div>

            <QuickActions />

            <InfoCard title="Details" actionLabel="Manage" actionRoute="/edit-profile">
                <div className="info-card-row">
                    <span className="info-card-label">Member since date</span>
                    <span className="info-card-value">2 march 2026</span>
                </div>
                <div className="info-card-row">
                    <span className="info-card-label">Location</span>
                    <span className="info-card-value">Nasr city, Hassan el ma&apos;moon</span>
                </div>
                <div className="info-card-row">
                    <span className="info-card-label">bio</span>
                </div>
            </InfoCard>

            <InfoCard title="Grow">
                <div className="nav-item-list">
                    <NavItem label="Smart Pricing" route="/smart-pricing" />
                    <NavItem label="Promo Codes" route="/promo-codes" />
                    <NavItem label="Referral Program" route="/referral" />
                    <NavItem label="Leaderboard" route="/leaderboard" />
                </div>
            </InfoCard>

            <InfoCard title="Smart Tools">
                <div className="nav-item-list">
                    <NavItem label="AI Match" route="/ai-match" />
                    <NavItem label="AR Preview" route="/ar-preview" />
                </div>
            </InfoCard>

            <InfoCard title="Skills" onEdit={() => navigate('/skills')}>
                <div className="skills-container">
                    <span className="skill-pill">Dog Walking</span>
                    <span className="skill-pill">Babysitting</span>
                    <span className="skill-pill">Moving Assistance</span>
                    <span className="skill-pill">Makeup Services</span>
                </div>
            </InfoCard>

            <InfoCard title="Ratings & Reviews" showEdit={false} actionLabel="View all" actionRoute="/reviews-ratings">
                <div className="review-item">
                    <div className="review-header">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        4.5 – Ahmed K.
                    </div>
                    <p className="review-text">&quot;Helped me move some boxes quickly.<br />Great attitude.&quot;</p>
                </div>
                <div className="review-item">
                    <div className="review-header">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        5.0 – Sarah M.
                    </div>
                    <p className="review-text">&quot;Very responsible and arrived on time. My<br />dog loved the walk!&quot;</p>
                </div>

                <button
                    type="button"
                    className="view-all-reviews-btn"
                    onClick={() => navigate('/reviews-ratings')}
                >
                    View All Reviews
                </button>

            </InfoCard>

            <InfoCard title="Achievements" actionLabel="Manage" actionRoute="/achievements">
                <div className="earnings-item">
                    <span className="earnings-value">120,33 egp</span>
                    <span className="earnings-label">Total earnings</span>
                </div>
            </InfoCard>

            <InfoCard title="Availability" actionLabel="Manage" actionRoute="/availability">
                <div className="info-card-row">
                    <span className="info-card-label">Status</span>
                    <span className="info-card-value">Available now</span>
                </div>
            </InfoCard>

            <InfoCard title="Settings">
                <div className="nav-item-list">
                    <NavItem label="Theme" route="/theme" />
                    <NavItem label="Privacy" route="/privacy" />
                </div>
            </InfoCard>

            <InfoCard title="Safety">
                <div className="nav-item-list">
                    <NavItem label="Background Check" route="/background-check" />
                    <NavItem label="Report User" route="/report-user" />
                    <NavItem label="Dispute Center" route="/dispute-center" />
                </div>
            </InfoCard>
        </div>
    );
};

export default ProfilePage;
