import React from 'react';
import TaskMetaList from './TaskMetaList';
import './TaskSummaryCard.css';

const TaskSummaryCard = ({
    imageUrl = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=900&auto=format&fit=crop',
    title = 'Pet feed',
    price = '350 EGP',
    rating = '4.8',
    metaRows,
}) => (
    <article className="task-summary-card">
        <div className="task-summary-card__img-wrap">
            <img src={imageUrl} alt="" className="task-summary-card__img" />
        </div>
        <div className="task-summary-card__head">
            <div className="task-summary-card__left">
                <h2 className="task-summary-card__title">{title}</h2>
                <span className="task-summary-card__rate">
                    <span className="task-summary-card__star" aria-hidden>
                        ★
                    </span>
                    {rating}
                </span>
            </div>
            <span className="task-summary-card__price">{price}</span>
        </div>
        <TaskMetaList rows={metaRows} className="task-summary-card__meta" />
    </article>
);

export default TaskSummaryCard;
