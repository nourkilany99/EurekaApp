import React, { useEffect, useMemo, useState } from 'react';
import { supabase } from '../supabaseClient';
import MobileTool from '../components/MobileTool';
import GlobalSearchInput from '../components/GlobalSearchInput';
import TaskCard from '../components/TaskCard';
import LocationModal from '../components/LocationModal';
import '../pages/Tasks.css';

const FALLBACK_CAT_IMAGE =
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop';

const CATEGORIES = ['All', 'Pet Care', 'Moving Help', 'Babysitting'];

const TasksPage = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [locationOpen, setLocationOpen] = useState(false);
    const [locationLabel, setLocationLabel] = useState('Nasr city, Home');

    useEffect(() => {
        const fetchTasks = async () => {
            const { data, error } = await supabase
                .from('page_tasks')
                .select('*')
                .eq('is_active', true)
                .order('created_at', { ascending: true });
            if (!error) setAllTasks(data || []);
            setLoading(false);
        };
        fetchTasks();
    }, []);

    const filteredTasks = useMemo(() => {
        return allTasks.filter((task) => {
            const matchesCategory =
                activeCategory === 'All' ||
                (task.category || '').toLowerCase() === activeCategory.toLowerCase();
            const matchesSearch = (task.title || '')
                .toLowerCase()
                .includes(searchText.trim().toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [allTasks, activeCategory, searchText]);

    return (
        <>
            <MobileTool />
            <main className="tasks-screen">

                <header className="tasks-screen__header">
                    <div>
                        <p className="tasks-screen__title">TASKS</p>
                        <p className="tasks-screen__subtitle">Seamless task management experience</p>
                    </div>
                    <button type="button" className="tasks-screen__location-pill" onClick={() => setLocationOpen(true)}>
                        {locationLabel}
                    </button>
                </header>

                <div className="tasks-screen__search-row">
                    <button type="button" className="tasks-screen__filter-btn" aria-label="Filter tasks">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                            <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="tasks-screen__search-wrap">
                        <span className="tasks-screen__search-icon" aria-hidden>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                                <circle cx="11" cy="11" r="6.2" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M16 16l4.4 4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </span>
                        <GlobalSearchInput
                            className="tasks-screen__search-input"
                            placeholder="Makeup work"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                </div>

                <div className="tasks-screen__chips" role="tablist" aria-label="Task categories">
                    {CATEGORIES.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                className={`tasks-screen__chip ${isActive ? 'is-active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {loading ? (
                    <p className="tasks-screen__status">Loading tasks...</p>
                ) : filteredTasks.length === 0 ? (
                    <p className="tasks-screen__status">No tasks found.</p>
                ) : (
                    <section className="tasks-screen__list tasks-blob-grid" aria-label="Available tasks">
                        {filteredTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                variant="available"
                                bgImage={task.image_url || FALLBACK_CAT_IMAGE}
                                title={task.title}
                                subtitle={task.description}
                                price={task.price}
                                tag={task.tag}
                            />
                        ))}
                    </section>
                )}
            </main>
            <LocationModal
                isOpen={locationOpen}
                onClose={() => setLocationOpen(false)}
                onSelect={(label) => { setLocationLabel(label); setLocationOpen(false); }}
            />
        </>
    );
};

export default TasksPage;
