import React, { useState } from 'react';
import './NotificationFilterChips.css';

const chips = [
    { id: 'all', label: 'All' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'tranfers', label: 'Tranfers' },
];

const NotificationFilterChips = () => {
    const [active, setActive] = useState('all');

    return (
        <div className="notification-filter-chips">
            {chips.map((c) => (
                <button
                    key={c.id}
                    type="button"
                    className={`notification-filter-chips__chip ${
                        active === c.id ? 'notification-filter-chips__chip--active' : ''
                    }`}
                    onClick={() => setActive(c.id)}
                >
                    {c.label}
                </button>
            ))}
        </div>
    );
};

export default NotificationFilterChips;
