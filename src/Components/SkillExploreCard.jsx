import React from 'react';
import './SkillExploreCard.css';

const PlusIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
);

const SkillExploreCard = ({ imageUrl, label, onAdd }) => (
    <div className="skill-explore-card">
        <div className="skill-explore-card__bg" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="skill-explore-card__shade" />
        <button type="button" className="skill-explore-card__plus" onClick={onAdd} aria-label="Add skill">
            <PlusIcon />
        </button>
        <p className="skill-explore-card__title">{label}</p>
    </div>
);

export default SkillExploreCard;
