import React from 'react';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import './UtilityPages.css';

const ratingBars = [
    { stars: 5, value: 98, count: 98 },
    { stars: 4, value: 34, count: 34 },
    { stars: 3, value: 4, count: 4 },
    { stars: 2, value: 1, count: 1 },
    { stars: 1, value: 0, count: 0 },
];

const reviews = [
    { name: 'Sarah Mitchell', tag: 'Dog Walking', time: '2 days ago', text: 'Very professional and arrived on time. My dog loved the walk! Will definitely book again.' },
    { name: 'Ahmed K.', tag: 'Moving Help', time: '4 days ago', text: 'Extremely helpful with moving furniture. Strong and careful with our belongings.' },
    { name: 'Lina R.', tag: 'Babysitting', time: '1 week ago', text: 'Great with kids! Only minor issue was arriving 10 minutes late, but overall excellent service.' },
];

const ReviewCard = ({ review }) => (
    <article className="review-card">
        <div className="review-card__top">
            <div className="utility-avatar">🧑</div>
            <div>
                <p className="review-card__name">{review.name}</p>
                <p className="review-card__meta">★★★★★ • {review.tag} • {review.time}</p>
                <p className="review-card__text">{review.text}</p>
            </div>
        </div>
        <div className="review-card__actions">
            <span>○ Helpful (12)</span>
            <span>💬 Reply</span>
        </div>
    </article>
);

const ReviewsRatings = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner">
            <PageHeaderBack title="REVIEWS & RATINGS" />

            <section className="reviews-summary">
                <div className="reviews-summary__top">
                    <div className="reviews-score">
                        <p className="reviews-score__value">4.9</p>
                        <div className="reviews-score__stars">★★★★★</div>
                        <div className="reviews-score__count">129 reviews</div>
                    </div>
                    <div className="reviews-bars">
                        {ratingBars.map((bar) => (
                            <div key={bar.stars} className="reviews-bar">
                                <span>{bar.stars}</span>
                                <div className="reviews-bar__track">
                                    <div className="reviews-bar__fill" style={{ width: `${bar.value}%` }} />
                                </div>
                                <span>{bar.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="reviews-metrics">
                    <div><strong>98%</strong><span>On-Time</span></div>
                    <div><strong>100%</strong><span>Completion</span></div>
                    <div><strong>96%</strong><span>Would Book</span></div>
                </div>
            </section>

            <div className="utility-tabs">
                <button type="button" className="utility-tab is-active">All</button>
                <button type="button" className="utility-tab">5 Stars</button>
                <button type="button" className="utility-tab">4 Stars</button>
                <button type="button" className="utility-tab">With Photos</button>
            </div>

            {reviews.map((review) => <ReviewCard key={review.name} review={review} />)}
        </div>
    </div>
);

export default ReviewsRatings;
