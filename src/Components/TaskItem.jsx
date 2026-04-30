import React from 'react';

const TaskItem = ({ task }) => (
    <article className="ui-task-item">
        <div className="ui-task-item__top">
            <h4>{task.title}</h4>
            <span className={`ui-task-item__badge ui-task-item__badge--${task.type}`}>{task.status}</span>
        </div>
        <p>{task.meta}</p>
        <div className="ui-task-item__bottom">
            <span>{task.when}</span>
            <strong>{task.price}</strong>
        </div>
    </article>
);

export default TaskItem;
