import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import TaskItem from '../components/TaskItem';
import GlobalSearchInput from '../components/GlobalSearchInput';
import './UtilityPages.css';
import './ScreenPages.css';

const tasks = [
    { title: 'Dog Walking', status: 'ACTIVE', type: 'success', meta: 'Nasr City • 1 dog • 45 min', when: 'Today, 4:00 PM', price: '250 EGP' },
    { title: 'Furniture Moving', status: 'PENDING', type: 'neutral', meta: 'Heliopolis • 2 helpers • 2 hrs', when: 'Tomorrow, 10:00 AM', price: '600 EGP' },
    { title: 'Babysitting', status: 'CANCELLED', type: 'danger', meta: 'Maadi • 2 kids • 3 hrs', when: 'Fri, 6:00 PM', price: '400 EGP' },
];

const TasksPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="TASKS" />
            <div className="utility-search">
                <span>⌕</span>
                <GlobalSearchInput placeholder="Search tasks..." />
            </div>
            <div className="utility-tabs">
                <button type="button" className="utility-tab is-active">All</button>
                <button type="button" className="utility-tab">Active</button>
                <button type="button" className="utility-tab">Pending</button>
                <button type="button" className="utility-tab">Completed</button>
            </div>
            {tasks.map((task) => <TaskItem key={task.title} task={task} />)}
        </div>
    </div>
);

export default TasksPage;
