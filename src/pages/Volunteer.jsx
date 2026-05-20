import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import MobileTool from '../components/MobileTool';
import './Volunteer.css';
import news from '../Assets/IMG/news.png';
import { categories } from '../data/volunteerData';

const SORT_OPTIONS = [
    { value: 'all',         label: 'All' },
    { value: 'points-asc',  label: 'Points ↑' },
    { value: 'points-desc', label: 'Points ↓' },
    { value: 'verified',    label: 'Verified' },
];

const Volunteer = () => {
    const navigate = useNavigate();
    const [showPopup,    setShowPopup]    = useState(true);
    const [activeFilter, setActiveFilter] = useState('all');
    const [tasks,        setTasks]        = useState([]);
    const [userPoints,   setUserPoints]   = useState(0);
    const [loading,      setLoading]      = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data: taskData } = await supabase
                .from('volunteer_page_tasks')
                .select('*')
                .eq('is_active', true)
                .order('sort_order', { ascending: true });
            setTasks(taskData || []);

            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: bal } = await supabase
                    .from('wallet_balances')
                    .select('points')
                    .eq('user_id', user.id)
                    .single();
                setUserPoints(bal?.points ?? 0);
            }

            setLoading(false);
        };
        fetchData();
    }, []);

    const featured = useMemo(() => {
        let list = [...tasks];
        if (activeFilter === 'points-asc')  list.sort((a, b) => a.points - b.points);
        if (activeFilter === 'points-desc') list.sort((a, b) => b.points - a.points);
        if (activeFilter === 'verified')    list = list.filter((t) => t.is_verified);
        return list;
    }, [activeFilter, tasks]);

    return (
    <div className="vol-page">
        {showPopup && (
            <div className="vol-popup__overlay">
                <div className="vol-popup">
                    <div className="vol-popup__icon">🌟</div>
                    <h3 className="vol-popup__title">Earn Points by Volunteering</h3>
                    <p className="vol-popup__body">
                        By completing volunteering tasks, you will gain points that can be redeemed for rewards later.
                    </p>
                    <button
                        type="button"
                        className="vol-popup__btn"
                        onClick={() => setShowPopup(false)}
                    >
                        Got it!
                    </button>
                </div>
            </div>
        )}
        <MobileTool />
        <div className="vol-page__content">
            <header className="vol-page__header">
                <p className="vol-page__title">VOLENTEER</p>
                <div
                    className="vol-page__coins"
                    onClick={() => navigate('/redeem-points')}
                    style={{ cursor: 'pointer' }}
                >
                    {userPoints.toLocaleString()}
                </div>
            </header>

            <div className="vol-page__heart">
                <img className="vol-page__news" src={news} alt='' />
            </div>
            <p className="vol-page__mission">Make an Impact Today</p>
            <p className="vol-page__subtitle">Your time can change lives. Discover meaningful volunteer opportunities.</p>

            <section className="vol-page__categories" aria-label="Volunteer categories">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        type="button"
                        className="vol-cat"
                        onClick={() => navigate(`/volunteer/${cat.id}`)}
                    >
                        <span>{cat.emoji}</span>{cat.label}
                    </button>
                ))}
            </section>

            <div className="vol-page__featured-header">
                <p className="vol-page__section-title luicy-text">Featured Opportunities</p>
                <div className="vol-page__filter-row">
                    {SORT_OPTIONS.map((opt) => (
                        <button
                            key={opt.value}
                            type="button"
                            className={`vol-page__filter-chip ${activeFilter === opt.value ? 'vol-page__filter-chip--active' : ''}`}
                            onClick={() => setActiveFilter(opt.value)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="vol-page__list">
                {loading ? (
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14, textAlign: 'center', marginTop: 32 }}>Loading…</p>
                ) : featured.length === 0 ? (
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14, textAlign: 'center', marginTop: 32 }}>No tasks found.</p>
                ) : (
                    featured.map((t) => (
                        <article key={t.id} className="vol-card">
                            <div className="vol-card__media" style={{ backgroundImage: `url(${t.image_url})` }}>
                                <span className="vol-card__points">{t.points} points</span>
                                {t.is_verified && <span className="vol-card__verified">Verified</span>}
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
                    ))
                )}
            </div>
        </div>
    </div>
    );
};

export default Volunteer;
