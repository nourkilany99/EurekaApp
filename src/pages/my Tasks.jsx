import React from 'react';
import MobileTool from '../Components/MobileTool';
import MyTasksHeader from '../Components/MyTasksHeader';
import OngoingWideTaskCard from '../Components/OngoingWideTaskCard';
import StatPillCard from '../Components/StatPillCard';
import CategoryFilterRow from '../Components/CategoryFilterRow';
import TaskCard from '../Components/TaskCard';
import PrimaryButton from '../Components/PrimaryButton';
import './Tasks.css';

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
    {
        id: 't1',
        title: 'Pet feed',
        subtitle: 'Getting the dog to walk around the ho...',
        price: '24',
    },
    {
        id: 't2',
        title: 'Cat company',
        subtitle: 'Getting Glammed for work event',
        price: '24',
    },
    {
        id: 't3',
        title: 'Pet feed',
        subtitle: 'Getting the dog to walk around the ho...',
        price: '24',
    },
    {
        id: 't4',
        title: 'Cat company',
        subtitle: 'Getting Glammed for work event',
        price: '24',
    },
];

const MyTasksPage = () => (
    <div className="tasks-page">
        <MobileTool />
        <div className="tasks-page__content">
            <MyTasksHeader />
            <OngoingWideTaskCard
                imageUrl={ongoingImg}
                location="Nasr city, Hassan el ma'moon"
            />
            <div className="tasks-page__stats-row">
                <StatPillCard value="22" label="Done tasks" />
                <StatPillCard value="4" label="Pending requests" />
            </div>
            <h2 className="tasks-page__section-title">AVAILABLE TASKS</h2>
            <CategoryFilterRow chipItems={myTasksFilterChips} />
            <div className="tasks-page__grid">
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
            </div>
        </div>
        <div className="tasks-page__footer-btn-wrap">
            <PrimaryButton type="button" className="tasks-page__explore-more">
                Explore more
            </PrimaryButton>
        </div>
    </div>
);

export default MyTasksPage;
