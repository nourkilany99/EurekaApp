import React from 'react';
import './TaskMetaList.css';

const icons = {
    date: (
        <svg className="task-meta-list__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
    location: (
        <svg className="task-meta-list__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
    ),
    time: (
        <svg className="task-meta-list__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
};

const TaskMetaList = ({ rows = [], className = '' }) => (
    <ul className={`task-meta-list ${className}`.trim()}>
        {rows.map((row) => (
            <li key={`${row.type}-${row.text}`} className="task-meta-list__row">
                {icons[row.type] || icons.date}
                <span className="task-meta-list__text">{row.text}</span>
            </li>
        ))}
    </ul>
);

export default TaskMetaList;
