import React from 'react';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import './UtilityPages.css';

const completedTasks = [
    { title: 'Dog Walking', place: 'Zamalek Park', date: 'Feb 15, 2026', price: '120 EGP', rating: 5 },
    { title: 'Babysitting', place: 'Nasr City', date: 'Feb 14, 2026', price: '350 EGP', rating: 5 },
    { title: 'Makeup Service', place: 'Maadi', date: 'Feb 12, 2026', price: '280 EGP', rating: 4.5 },
];

const cancelledTasks = [
    { title: 'Moving Help', place: 'Heliopolis', date: 'Feb 10, 2026', status: 'Client cancelled' },
    { title: 'Pet Care', place: 'Dokki', date: 'Feb 8, 2026', status: 'Scheduling conflict' },
];

const TaskCard = ({ task, cancelled }) => (
    <article className="task-history-card">
        <div className="task-history-card__row">
            <div>
                <h4>{task.title}</h4>
                <p className="task-history-muted">📍 {task.place}</p>
                <p className="task-history-muted">{task.date}</p>
            </div>
            {!cancelled && <div className="task-price-badge">{task.price}</div>}
        </div>
        {!cancelled ? (
            <>
                <p className="task-history-muted">⭐ {task.rating}</p>
                <div className="task-history-actions">
                    <button type="button" className="task-history-btn">View Details</button>
                    <button type="button" className="task-history-btn">Book Again</button>
                </div>
            </>
        ) : (
            <span className="status-chip">{task.status}</span>
        )}
    </article>
);

const TaskHistory = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner">
            <PageHeaderBack title="TASK HISTORY" />
            <div className="utility-tabs">
                <button type="button" className="utility-tab is-active">Completed</button>
                <button type="button" className="utility-tab">Cancelled</button>
            </div>

            {completedTasks.map((task) => <TaskCard key={task.title} task={task} />)}

            <h3 className="utility-section-title">Cancelled Tasks</h3>
            {cancelledTasks.map((task) => <TaskCard key={task.title} task={task} cancelled />)}
        </div>
    </div>
);

export default TaskHistory;
