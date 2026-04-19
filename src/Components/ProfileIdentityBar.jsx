import React from 'react';
import './ProfileIdentityBar.css';

const ProfileIdentityBar = ({
    name = 'Seif Ibrahim',
    age = '23 old',
    subtitle = 'Art designer, dog friendly',
    rating = '4.9',
    avatarUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
}) => (
    <div className="profile-identity-bar">
        <img src={avatarUrl} alt="" className="profile-identity-bar__avatar" />
        <div className="profile-identity-bar__main">
            <p className="profile-identity-bar__name-row">
                <span className="profile-identity-bar__name">{name}</span>
                <span className="profile-identity-bar__age"> {age}</span>
            </p>
            <p className="profile-identity-bar__subtitle">{subtitle}</p>
        </div>
        <div className="profile-identity-bar__rating-pill" aria-label={`Rating ${rating}`}>
            <span className="profile-identity-bar__star" aria-hidden>
                ★
            </span>
            <span className="profile-identity-bar__rating-num">{rating}</span>
        </div>
    </div>
);

export default ProfileIdentityBar;
