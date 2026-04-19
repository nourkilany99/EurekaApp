import React from 'react';
import './SkillPickerCard.css';

const PlusIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
);

const CheckIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const SkillPickerCard = ({ imageUrl, label, selected, onToggle }) => (
    <button
        type="button"
        className="skill-picker-card"
        onClick={onToggle}
        aria-pressed={selected}
    >
        <div className="skill-picker-card__bg" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="skill-picker-card__shade" />
        {selected ? (
            <div className="skill-picker-card__check" aria-hidden>
                <CheckIcon />
            </div>
        ) : (
            <span className="skill-picker-card__plus" aria-hidden>
                <PlusIcon />
            </span>
        )}
        <span className="skill-picker-card__title">{label}</span>
    </button>
);

export default SkillPickerCard;
