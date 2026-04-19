import React from 'react';
import './SkillAddChip.css';

const SkillAddChip = ({ icon, label, wide }) => (
    <button type="button" className={`skill-add-chip ${wide ? 'skill-add-chip--wide' : ''}`}>
        <span className="skill-add-chip__icon" aria-hidden>
            {icon}
        </span>
        <span className="skill-add-chip__label">{label}</span>
    </button>
);

export default SkillAddChip;
