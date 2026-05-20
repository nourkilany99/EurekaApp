import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import { categories } from '../data/volunteerData';
import './VolunteerCategory.css';

const SORT_OPTIONS = [
    { value: 'points-asc',  label: 'Points: Low → High' },
    { value: 'points-desc', label: 'Points: High → Low' },
    { value: 'verified',    label: 'Verified First' },
];

const VolunteerCategory = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const meta = categories.find((c) => c.id === category) || { label: category, emoji: '🌍' };

    const [tasks,          setTasks]          = useState([]);
    const [loading,        setLoading]        = useState(true);
    const [sortBy,         setSortBy]         = useState('points-asc');
    const [filterLocation, setFilterLocation] = useState('all');
    const [filterVerified, setFilterVerified] = useState(false);
    const [showFilters,    setShowFilters]    = useState(false);

    useEffect(() => {
        setLoading(true);
        setFilterLocation('all');
        setFilterVerified(false);

        const fetchTasks = async () => {
            const { data } = await supabase
                .from('volunteer_page_tasks')
                .select('*')
                .eq('is_active', true)
                .eq('category', category)
                .order('sort_order', { ascending: true });
            setTasks(data || []);
            setLoading(false);
        };
        fetchTasks();
    }, [category]);

    const locations = useMemo(() => [...new Set(tasks.map((t) => t.location))], [tasks]);

    const filtered = useMemo(() => {
        let list = [...tasks];
        if (filterLocation !== 'all') list = list.filter((t) => t.location === filterLocation);
        if (filterVerified)           list = list.filter((t) => t.is_verified);
        if (sortBy === 'points-asc')  list.sort((a, b) => a.points - b.points);
        if (sortBy === 'points-desc') list.sort((a, b) => b.points - a.points);
        if (sortBy === 'verified')    list.sort((a, b) => (b.is_verified ? 1 : 0) - (a.is_verified ? 1 : 0));
        return list;
    }, [sortBy, filterLocation, filterVerified, tasks]);

    return (
        <div className="vol-cat-page">
            <MobileTool />
            <div className="vol-cat-page__inner">
                <PageHeaderBack title="VOLUNTEER" />

                {/* Category tabs */}
                <div className="vol-cat-page__tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            type="button"
                            className={`vol-cat-page__tab ${cat.id === category ? 'vol-cat-page__tab--active' : ''}`}
                            onClick={() => cat.id !== category && navigate(`/volunteer/${cat.id}`)}
                        >
                            <span>{cat.emoji}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>

                <p className="vol-cat-page__count">
                    {loading ? '…' : filtered.length} opportunities
                </p>

                {/* Filter bar */}
                <div className="vol-cat-page__filter-bar">
                    <button
                        type="button"
                        className={`vol-cat-page__filter-toggle ${showFilters ? 'vol-cat-page__filter-toggle--active' : ''}`}
                        onClick={() => setShowFilters((v) => !v)}
                    >
                        ⚙ Filters
                    </button>

                    <div className="vol-cat-page__sort-row">
                        {SORT_OPTIONS.map((s) => (
                            <button
                                key={s.value}
                                type="button"
                                className={`vol-cat-page__sort-chip ${sortBy === s.value ? 'vol-cat-page__sort-chip--active' : ''}`}
                                onClick={() => setSortBy(s.value)}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                {showFilters && (
                    <div className="vol-cat-page__filter-panel">
                        <div className="vol-cat-page__filter-group">
                            <p className="vol-cat-page__filter-label">Location</p>
                            <div className="vol-cat-page__filter-chips">
                                <button
                                    type="button"
                                    className={`vol-cat-page__chip ${filterLocation === 'all' ? 'vol-cat-page__chip--active' : ''}`}
                                    onClick={() => setFilterLocation('all')}
                                >
                                    All
                                </button>
                                {locations.map((loc) => (
                                    <button
                                        key={loc}
                                        type="button"
                                        className={`vol-cat-page__chip ${filterLocation === loc ? 'vol-cat-page__chip--active' : ''}`}
                                        onClick={() => setFilterLocation(loc)}
                                    >
                                        {loc}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="vol-cat-page__filter-group">
                            <label className="vol-cat-page__toggle-row">
                                <span className="vol-cat-page__filter-label" style={{ margin: 0 }}>Verified only</span>
                                <div
                                    className={`vol-cat-page__toggle ${filterVerified ? 'vol-cat-page__toggle--on' : ''}`}
                                    onClick={() => setFilterVerified((v) => !v)}
                                >
                                    <div className="vol-cat-page__toggle-thumb" />
                                </div>
                            </label>
                        </div>
                    </div>
                )}

                {/* Tasks */}
                <div className="vol-cat-page__list">
                    {loading ? (
                        <p className="vol-cat-page__empty">Loading…</p>
                    ) : filtered.length === 0 ? (
                        <p className="vol-cat-page__empty">No tasks match your filters.</p>
                    ) : (
                        filtered.map((t) => (
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

export default VolunteerCategory;
