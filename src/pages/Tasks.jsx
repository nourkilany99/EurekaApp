import React, { useEffect, useMemo, useRef, useState } from 'react';
import { supabase } from '../Supabase';
import './Tasks.css';
import MobileTool from '../components/MobileTool';
import GlobalSearchInput from '../components/GlobalSearchInput';

const FALLBACK_CAT_IMAGE =
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop';

const CATEGORIES = ['All', 'Pet Care', 'Moving Help', 'Babysitting'];

const DEMO_TASKS = [
    {
        id: 'demo-1',
        title: 'Pet food',
        description: 'Getting the dog to walk around the house',
        price: 245,
        image_url: FALLBACK_CAT_IMAGE,
        category: 'Pet Care',
    },
    {
        id: 'demo-2',
        title: 'Cat company',
        description: 'Getting Glammazd for work event',
        price: 245,
        image_url: FALLBACK_CAT_IMAGE,
        category: 'Pet Care',
    },
    {
        id: 'demo-3',
        title: 'Packing help',
        description: 'Help packing boxes for a small apartment move',
        price: 180,
        image_url: 'https://images.unsplash.com/photo-1520642413789-2bd6770d59c8?q=80&w=800&auto=format&fit=crop',
        category: 'Moving Help',
    },
    {
        id: 'demo-4',
        title: 'Babysitting',
        description: 'Watch two kids for 2 hours while parents run errands',
        price: 320,
        image_url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop',
        category: 'Babysitting',
    },
 ];

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data, error } = await supabase
                    .from('tasks')
                    .select('id,title,description,price,image_url,category')
                    .order('id', { ascending: true });

                if (error) {
                    console.error('Failed to fetch tasks:', error.message);
                    setTasks(DEMO_TASKS);
                } else if (!data || data.length === 0) {
                    setTasks(DEMO_TASKS);
                } else {
                    setTasks(data);
                }
            } catch (err) {
                console.error('Failed to fetch tasks:', err);
                setTasks(DEMO_TASKS);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesCategory =
                activeCategory === 'All' ||
                (task.category || '').toLowerCase() === activeCategory.toLowerCase();
            const matchesSearch = (task.title || '')
                .toLowerCase()
                .includes(searchText.trim().toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchText, tasks]);

    const getTaskMeta = (task, index) => ({
        location: task.category === 'Moving Help' ? 'Brooklyn Heights' : task.category === 'Babysitting' ? 'Queens, NY' : 'Upper West Side, NY',
        duration: ['2 hours', '1.5 hours', '3 hours', '45 mins'][index % 4],
        tag: task.category === 'Babysitting' ? 'Urgent' : task.category === 'Moving Help' ? 'Easy' : 'Hot',
        assignee: ['Sarah M.', 'John K.', 'Emily R.', 'Mia L.'][index % 4],
        avatar: ['S', 'J', 'E', 'M'][index % 4],
    });



    return (
        <>
        <MobileTool />
        <main className="tasks-screen">
            
            <header className="tasks-screen__header">
                <div>
                    <h1 className="tasks-screen__title">TASKS</h1>
                    <p className="tasks-screen__subtitle">Seamless task management experience</p>
                </div>
                <button type="button" className="tasks-screen__location-pill">
                    Nasr city, Home
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
                        onChange={(event) => setSearchText(event.target.value)}
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
                <>
                    <section className="tasks-screen__matched">
                        <h2>You&apos;re Matched!</h2>
                        <button type="button">View task</button>
                    </section>

                    <section className="tasks-screen__list" aria-label="Available tasks">
                        {filteredTasks.map((task, index) => {
                            const meta = getTaskMeta(task, index);

                            return (
                                <article key={task.id} className="tasks-list-card">
                                    <div className="tasks-list-card__media" style={{ backgroundImage: `url(${task.image_url || FALLBACK_CAT_IMAGE})` }}>
                                        <span className={`tasks-list-card__tag is-${meta.tag.toLowerCase().replace(/\s+/g, '-')}`}>{meta.tag}</span>
                                    </div>
                                    <div className="tasks-list-card__body">
                                        <h3 className="tasks-list-card__title">{task.title}</h3>
                                        <div className="tasks-list-card__meta-line">
                                            <span>◉ {meta.location}</span>
                                        </div>
                                        <div className="tasks-list-card__meta-line">
                                            <span>◷ {meta.duration}</span>
                                        </div>
                                        <div className="tasks-list-card__footer">
                                            <div className="tasks-list-card__person">
                                                <span className="tasks-list-card__avatar">{meta.avatar}</span>
                                                <span>{meta.assignee}</span>
                                            </div>
                                            <span className="tasks-list-card__price">$ {task.price}</span>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </section>
                </>
            )}
        </main>
        </>
    );
};

export default Tasks;
