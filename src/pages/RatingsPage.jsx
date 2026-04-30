import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ProgressBar from '../components/ProgressBar';
import ReviewCard from '../components/ReviewCard';
import './UtilityPages.css';
import './ScreenPages.css';

const bars = [
    { stars: 5, value: 94, count: 98 },
    { stars: 4, value: 32, count: 34 },
    { stars: 3, value: 8, count: 4 },
    { stars: 2, value: 2, count: 1 },
    { stars: 1, value: 1, count: 0 },
];

const reviews = [
    { name: 'Sarah Mitchell', meta: '★★★★★ • Dog Walking • 2 days ago', text: 'Very professional and on time. I will definitely book again.', helpful: 12 },
    { name: 'Ahmed K.', meta: '★★★★★ • Moving Help • 4 days ago', text: 'Super helpful with moving furniture and careful with everything.', helpful: 9 },
];

const RatingsPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="REVIEWS & RATINGS" />
            <section className="reviews-summary">
                <div className="reviews-summary__top">
                    <div className="reviews-score">
                        <p className="reviews-score__value">4.9</p>
                        <div className="reviews-score__stars">★★★★★</div>
                        <div className="reviews-score__count">129 reviews</div>
                    </div>
                    <div className="reviews-bars">
                        {bars.map((bar) => (
                            <div key={bar.stars} className="ui-ratings-row">
                                <span>{bar.stars}</span>
                                <ProgressBar value={bar.value} />
                                <span>{bar.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {reviews.map((review) => <ReviewCard key={review.name} review={review} />)}
        </div>
    </div>
);

export default RatingsPage;
