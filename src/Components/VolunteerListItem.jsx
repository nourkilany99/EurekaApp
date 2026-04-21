import React from 'react';

const VolunteerListItem = ({ title, points, image }) => (
    <article className="volenteer-page__card" style={{ backgroundImage: `url(${image})` }}>
        <div className="volenteer-page__card-overlay" />
        <div className="volenteer-page__card-content">
            <p className="volenteer-page__points">
                <span className="volenteer-page__coin" />
                {points} points
            </p>
            <h3 className="volenteer-page__task-title">{title}</h3>
        </div>
    </article>
);

export default VolunteerListItem;
