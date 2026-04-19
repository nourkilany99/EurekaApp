import React from 'react';
import './RequestCard.css';

const RequestCard = ({
    title = 'Pet feed',
    description = 'Getting the dog to walk around the house for 30 mns',
    price = '350 EGP',
    status = 'Pending',
    avatarUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    onDetails,
}) => (
    <article className="request-card">
        <div className="request-card__top">
            <img src={avatarUrl} alt="" className="request-card__avatar" />
            <h2 className="request-card__title">{title}</h2>
            <span className="request-card__price">{price}</span>
        </div>
        <p className="request-card__desc">{description}</p>
        <div className="request-card__bottom">
            <span className="request-card__status">{status}</span>
            <button type="button" className="request-card__details" onClick={onDetails}>
                Details
            </button>
        </div>
    </article>
);

export default RequestCard;
