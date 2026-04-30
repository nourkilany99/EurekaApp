import React from 'react';

const ReviewCard = ({ review }) => (
    <article className="review-card">
        <div className="review-card__top">
            <div className="utility-avatar">🧑</div>
            <div>
                <p className="review-card__name">{review.name}</p>
                <p className="review-card__meta">{review.meta}</p>
                <p className="review-card__text">{review.text}</p>
            </div>
        </div>
        <div className="review-card__actions">
            <span>○ Helpful ({review.helpful})</span>
            <span>💬 Reply</span>
        </div>
    </article>
);

export default ReviewCard;
