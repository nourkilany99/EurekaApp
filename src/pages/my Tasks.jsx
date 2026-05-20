import React from 'react';
import MobileTool from '../components/MobileTool';
import MyTasksHeader from '../components/MyTasksHeader';
import OngoingWideTaskCard from '../components/OngoingWideTaskCard';
import StatPillCard from '../components/StatPillCard';
import CategoryFilterRow from '../components/CategoryFilterRow';
import TaskCard from '../components/TaskCard';
import PrimaryButton from '../components/PrimaryButton';
import './MyTasksPage.css';
import { Link, useNavigate } from "react-router-dom";
import GlobalSearchInput from '../components/GlobalSearchInput';
import TaskItem from '../components/TaskItem';

const catImg =
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop';

const ongoingImg =
    'https://images.unsplash.com/photo-1544716278-e513176f20b5?q=80&w=600&auto=format&fit=crop';

const myTasksFilterChips = [
    { id: 'pet', label: 'Pet Care', icon: '🐾' },
    { id: 'move', label: 'Moving Help', icon: '📦' },
    { id: 'baby', label: 'Babys...', icon: '👶' },
];

const tasks = [
    { title: 'Dog Walking', status: 'ACTIVE', type: 'success', meta: 'Nasr City • 1 dog • 45 min', when: 'Today, 4:00 PM', price: '250 EGP' },
    { title: 'Furniture Moving', status: 'PENDING', type: 'neutral', meta: 'Heliopolis • 2 helpers • 2 hrs', when: 'Tomorrow, 10:00 AM', price: '600 EGP' },
    { title: 'Babysitting', status: 'CANCELLED', type: 'danger', meta: 'Maadi • 2 kids • 3 hrs', when: 'Fri, 6:00 PM', price: '400 EGP' },
];

const MyTasksPage = () => (
    <div className="my-tasks-page">
        <MobileTool />
        <div className="my-tasks-page__content">
            <MyTasksHeader />

            <OngoingWideTaskCard
                status="Ongoing task"
                title="Babysitting"
                location="Nasr city, Hassan el ma'moon"
                imageUrl={ongoingImg}
            />

            <div className="my-tasks-page__stats-row">

                <Link to="/task-history" className="link">
                    <StatPillCard value="22" label="Done tasks" />
                </Link>
                <Link to="/requests" className="link">
                    <StatPillCard value="4" label="Pending requests" />
                </Link>
            </div>

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

            {/* <p className="my-tasks-page__section-title">AVAILABLE TASKS</p>
            <CategoryFilterRow chipItems={myTasksFilterChips} />
            <div className="my-tasks-page__grid">
                {tasks.map((t) => (
                    <TaskCard
                        key={t.id}
                        variant="tasksGrid"
                        title={t.title}
                        subtitle={t.subtitle}
                        price={t.price}
                        bgImage={catImg}
                    />
                ))}
            </div> */}
        </div>
        {/* <div className="my-tasks-page__footer-btn-wrap">
            <PrimaryButton type="button" className="my-tasks-page__explore-more">
                Explore more
            </PrimaryButton>
        </div> */}
    </div>
);

export default MyTasksPage;
