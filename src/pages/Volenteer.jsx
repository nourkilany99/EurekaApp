import React from 'react';
import MobileTool from '../components/MobileTool';
import VolunteerListItem from '../components/VolunteerListItem';
import './Volenteer.css';

const tasks = [
    {
        id: 'v1',
        title: 'Grandma sitting',
        points: '10',
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 'v2',
        title: 'Grass care',
        points: '20',
        image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 'v3',
        title: 'House sitting',
        points: '50',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 'v4',
        title: 'Grandma sitting',
        points: '10',
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 'v5',
        title: 'Grass care',
        points: '20',
        image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 'v6',
        title: 'House sitting',
        points: '50',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
    },
];

const Volenteer = () => (
    <div className="volenteer-page">
        <MobileTool />
        <div className="volenteer-page__screen">
            <header className="volenteer-page__header">
                <h1>VOLENTEER</h1>
                <p>
                    <span className="volenteer-page__coin" />
                    230,122
                </p>
            </header>

            <section className="volenteer-page__list">
                {tasks.map((task) => (
                    <VolunteerListItem key={task.id} title={task.title} points={task.points} image={task.image} />
                ))}
            </section>
        </div>
    </div>
);

export default Volenteer;
