import React from 'react';
import MobileTool from '../components/MobileTool';
import './Volunteer.css';
import news from '../Assets/IMG/news.png'

const volunteerTasks = [
    {
        id: 'grandmaSitting',
        title: 'Senior Care Alliance',
        points: '10',
        location: 'Nasr City',
        commitment: '2-4 hours/week',
        description: 'Support elderly community members with day-to-day companionship and check-ins.',
        action: 'Join',
        impact: '500+ seniors helped',
        verified: true,
        bgImage: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'grassCare',
        title: 'Green City Initiative',
        points: '20',
        location: 'Heliopolis',
        commitment: 'Weekends',
        description: 'Help keep parks and streets clean through organized neighborhood activities.',
        action: 'Apply',
        impact: '15 gardens created',
        verified: true,
        bgImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'houseSitting',
        title: 'Youth Mentorship Program',
        points: '50',
        location: 'New Cairo',
        commitment: '3 hours/week',
        description: 'Mentor students with homework support and confidence-building sessions.',
        action: 'Join',
        impact: '200+ mentees',
        verified: true,
        bgImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
    },
];

const Volunteer = () => (
    <div className="vol-page">
        <MobileTool />
        <div className="vol-page__content">
            <header className="vol-page__header">
                <h1 className="vol-page__title">VOLENTEER</h1>
                <div className="vol-page__coins">230,122</div>
            </header>

            <div className="vol-page__heart">
                <img className="vol-page__news" src={news} alt='' />
            </div>
            <p className="vol-page__mission">Make an Impact Today</p>
            <p className="vol-page__subtitle">Your time can change lives. Discover meaningful volunteer opportunities.</p>

            <section className="vol-page__categories" aria-label="Volunteer categories">
                <button type="button" className="vol-cat"><span>🎓</span>Education</button>
                <button type="button" className="vol-cat"><span>❤</span>Elderly Care</button>
                <button type="button" className="vol-cat"><span>👥</span>Events</button>
                <button type="button" className="vol-cat"><span>🍃</span>Environment</button>
            </section>

            <h3 className="vol-page__section-title">Featured Opportunities</h3>
            <div className="vol-page__list">
                {volunteerTasks.map((t) => (
                    <article key={t.id} className="vol-card">
                        <div className="vol-card__media" style={{ backgroundImage: `url(${t.bgImage})` }}>
                            <span className="vol-card__points">{t.points} points</span>
                            {t.verified && <span className="vol-card__verified">Verified</span>}
                        </div>
                        <div className="vol-card__body">
                            <p className="vol-card__title">{t.title}</p>
                            <p className="vol-card__description">{t.description}</p>
                            <div className="vol-card__meta">
                                <span>{t.location}</span>
                                <span>{t.commitment}</span>
                            </div>
                            <div className="vol-card__footer">
                                <span className="vol-card__impact">{t.impact}</span>
                                <button type="button" className="vol-card__cta">{t.action}</button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </div>
);

export default Volunteer;
