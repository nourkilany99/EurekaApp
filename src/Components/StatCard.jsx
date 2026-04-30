import React from 'react';

const StatCard = ({ label, value, tone = 'default' }) => (
    <article className={`ui-stat-card ui-stat-card--${tone}`}>
        <p>{label}</p>
        <h4>{value}</h4>
    </article>
);

export default StatCard;
