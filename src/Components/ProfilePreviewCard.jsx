import React from 'react';
import { useUser } from '../context/UserContext';
import './ProfilePreviewCard.css';

const ProfilePreviewCard = ({
    rating = '4.9',
    tasksDone = '124 tasks completed',
}) => {
    const { profile } = useUser();

    const name    = profile?.name || 'User';
    const initial = name.charAt(0).toUpperCase();
    const avatar  = profile?.avatar_url;

    return (
        <div className="profile-preview-card">
            {avatar ? (
                <img src={avatar} alt="" className="profile-preview-card__avatar" />
            ) : (
                <div className="profile-preview-card__initial">{initial}</div>
            )}
            <div className="profile-preview-card__info">
                <div className="profile-preview-card__name-row">
                    <p className="profile-preview-card__name">{name}</p>
                    <p className="profile-preview-card__rating">
                        <span className="profile-preview-card__star" aria-hidden>★</span>
                        {rating}
                    </p>
                </div>
                <p className="profile-preview-card__sub">{tasksDone}</p>
            </div>
        </div>
    );
};

export default ProfilePreviewCard;
