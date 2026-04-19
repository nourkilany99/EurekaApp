import React from 'react';
import './CategoryChips.css';

const defaultChips = [
    { id: 'pet', label: 'Pet Care', icon: '🐾' },
    { id: 'move', label: 'Moving Help', icon: '📦' },
    { id: 'baby', label: 'Babysitting', icon: '👶' },
];

const CategoryChips = ({ className = '', items }) => {
    const chips = items ?? defaultChips;
    return (
    <div className={`category-chips ${className}`.trim()}>
        {chips.map((c) => (
            <button key={c.id} type="button" className="category-chips__chip">
                <span className="category-chips__icon" aria-hidden>
                    {c.icon}
                </span>
                <span>{c.label}</span>
            </button>
        ))}
    </div>
    );
};

export default CategoryChips;
