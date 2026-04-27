import React from 'react';
import TaskMetaList from './TaskMetaList';
import './TaskDetailsPanel.css';

const PencilIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M4 20h4l10.5-10.5a2 2 0 000-3L17 4.5a2 2 0 00-3 0L4 15v5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const TaskDetailsPanel = ({
    imageUrl = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=900&auto=format&fit=crop',
    title = 'Pet feed',
    description = 'Getting the dog to walk around the house for 30 mns',
    price = '350 EGP',
    metaRows,
    onCancel,
    onEdit,
}) => (
    <article className="task-details-panel">
        <div className="task-details-panel__img-wrap">
            <img src={imageUrl} alt="" className="task-details-panel__img" />
        </div>
        <p className="task-details-panel__title">{title}</p>
        <p className="task-details-panel__desc">{description}</p>
        <div className="task-details-panel__divider" />
        <div className="task-details-panel__price-row">
            <div className="task-details-panel__price-left">
                <span className="task-details-panel__amount">{price}</span>
                <span className="task-details-panel__badge">Negotiable</span>
            </div>
            <button type="button" className="task-details-panel__edit" onClick={onEdit} aria-label="Edit">
                <PencilIcon />
            </button>
        </div>
        <TaskMetaList rows={metaRows} className="task-details-panel__meta" />
        <button type="button" className="task-details-panel__cancel" onClick={onCancel}>
            Cancel
        </button>
    </article>
);

export default TaskDetailsPanel;
