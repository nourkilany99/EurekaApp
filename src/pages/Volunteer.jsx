import React from 'react';
import MobileTool from '../Components/MobileTool';
import TaskCard from '../Components/TaskCard';
import './Volunteer.css';

const volunteerTasks = [
    {
        id: 'grandmaSitting',
        title: 'Grandma sitting',
        points: '10',
        bgImage: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'grassCare',
        title: 'Grass care',
        points: '20',
        bgImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'houseSitting',
        title: 'House sitting',
        points: '50',
        bgImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
    },
];

const Volunteer = () => (
    <div className="vol-page">
        <MobileTool />
        <div className="vol-page__content">
            <h1 className="vol-page__title">VOLUNTEER</h1>
            <div className="vol-page__list">
                {volunteerTasks.map((t) => (
                    <TaskCard key={t.id} variant="volunteer" title={t.title} points={t.points} bgImage={t.bgImage} />
                ))}
            </div>
        </div>
    </div>
);

export default Volunteer;
