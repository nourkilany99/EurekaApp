import React from 'react';
import './ProfileSectionCard.css';

const PencilIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M4 20h4l10.5-10.5a2 2 0 000-3L17 4.5a2 2 0 00-3 0L4 15v5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ProfileSectionCard = ({ pill, children, onEdit, showEdit = true }) => (
    <section className="profile-section-card">
        <div className="profile-section-card__head">
            <span className="profile-section-card__pill">{pill}</span>
            {showEdit ? (
                <button type="button" className="profile-section-card__edit" onClick={onEdit} aria-label="Edit">
                    <PencilIcon />
                </button>
            ) : (
                <span className="profile-section-card__edit-spacer" aria-hidden />
            )}
        </div>
        <div className="profile-section-card__body">{children}</div>
    </section>
);

export default ProfileSectionCard;
