import React from 'react';
import './ProfileReviewItem.css';

const ProfileReviewItem = ({ rating, author, quote }) => (
    <div className="profile-review-item">
        <p className="profile-review-item__meta">
            <span className="profile-review-item__star" aria-hidden>
                ⭐
            </span>{' '}
            {rating} – {author}
        </p>
        <p className="profile-review-item__quote">{quote}</p>
    </div>
);

export default ProfileReviewItem;
