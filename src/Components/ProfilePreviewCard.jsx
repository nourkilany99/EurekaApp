import React from 'react';
import './ProfilePreviewCard.css';

const ProfilePreviewCard = ({
    name = 'Seif Ibrahim',
    rating = '4.9',
    tasksDone = '124 tasks completed',
    avatarUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
}) => (
    <div className="profile-preview-card">
        <img src={avatarUrl} alt="" className="profile-preview-card__avatar" />
        <div className="profile-preview-card__info">
            <p className="profile-preview-card__name">{name}</p>
            <p className="profile-preview-card__rating">
                <span className="profile-preview-card__star" aria-hidden>
                    ★
                </span>
                {rating}
            </p>
            <p className="profile-preview-card__sub">{tasksDone}</p>
        </div>
    </div>
);

export default ProfilePreviewCard;
