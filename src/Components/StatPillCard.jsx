import React from 'react';
import './StatPillCard.css';

const StatPillCard = ({ value, label }) => (
    <div className="stat-pill-card">
        <p className="stat-pill-card__val">{value}</p>
        <p className="stat-pill-card__lbl">{label}</p>
    </div>
);

export default StatPillCard;
