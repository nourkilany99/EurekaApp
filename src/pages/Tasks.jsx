import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../Supabase';
import './Tasks.css';
import MobileTool from '../components/MobileTool';
import GlobalSearchInput from '../components/GlobalSearchInput';
import TaskCard from '../components/TaskCard';
import LocationModal from '../components/LocationModal';

const FALLBACK_CAT_IMAGE =
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop';

const CATEGORIES = ['All', 'Pet Care', 'Moving Help', 'Babysitting'];

const DEMO_TASKS_PLACEHOLDER = [
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
        description: 'Keep a cat company while owner is at work',
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
    {
        id: 'demo-5',
        title: 'Dog walking',
        description: 'Walk a golden retriever for 30 minutes in the park',
        price: 90,
        image_url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop',
        category: 'Pet Care',
    },
    {
        id: 'demo-6',
        title: 'Furniture moving',
        description: 'Move a sofa and two chairs to a new apartment floor',
        price: 220,
        image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
        category: 'Moving Help',
    },
    {
        id: 'demo-7',
        title: 'After-school care',
        description: 'Pick up kids from school and watch them until 6pm',
        price: 280,
        image_url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
        category: 'Babysitting',
    },
    {
        id: 'demo-8',
        title: 'Bird sitting',
        description: 'Feed and care for two parrots over the weekend',
        price: 130,
        image_url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=800&auto=format&fit=crop',
        category: 'Pet Care',
    },
    {
        id: 'demo-9',
        title: 'Loading truck',
        description: 'Help load a moving truck with boxes and appliances',
        price: 200,
        image_url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
        category: 'Moving Help',
    },
    {
        id: 'demo-10',
        title: 'Overnight sitting',
        description: 'Stay overnight with a toddler while parents travel',
        price: 400,
        image_url: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop',
        category: 'Babysitting',
    },
    {
        id: 'demo-11',
        title: 'Rabbit care',
        description: 'Feed and clean cage for a pet rabbit for 3 days',
        price: 110,
        image_url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=800&auto=format&fit=crop',
        category: 'Pet Care',
    },
    {
        id: 'demo-12',
        title: 'Unpacking service',
        description: 'Unpack and organise boxes in a newly moved-in home',
        price: 195,
        image_url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop',
        category: 'Moving Help',
    },
    {
        id: 'demo-13',
        title: 'Evening babysit',
        description: 'Watch a 5-year-old from 7pm to midnight',
        price: 260,
        image_url: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=800&auto=format&fit=crop',
        category: 'Babysitting',
    },
    {
        id: 'demo-14',
        title: 'Cat grooming',
        description: 'Brush and bathe a long-haired cat at home',
        price: 150,
        image_url: FALLBACK_CAT_IMAGE,
        category: 'Pet Care',
    },
    {
        id: 'demo-15',
        title: 'Appliance move',
        description: 'Help carry a washing machine to second floor',
        price: 240,
        image_url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop',
        category: 'Moving Help',
    },
    {
        id: 'demo-16',
        title: 'Weekend sitter',
        description: 'Watch three kids Saturday and Sunday, 9am–5pm',
        price: 500,
        image_url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
        category: 'Babysitting',
    },
    {
        id: 'demo-17',
        title: 'Dog boarding',
        description: 'Host a small dog at your place for the weekend',
        price: 175,
        image_url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop',
        category: 'Pet Care',
    },
    {
        id: 'demo-18',
        title: 'Box delivery',
        description: 'Transport packed boxes across town in a van',
        price: 160,
        image_url: 'https://images.unsplash.com/photo-1601628828688-632f38a5f20d?q=80&w=800&auto=format&fit=crop',
        category: 'Moving Help',
    },
    {
        id: 'demo-19',
        title: 'Homework help',
        description: 'Help an 8-year-old with math and reading after school',
        price: 200,
        image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
        category: 'Babysitting',
    },
    {
        id: 'demo-20',
        title: 'Vet trip',
        description: 'Take a cat to the vet and back, owner pays expenses',
        price: 140,
        image_url: FALLBACK_CAT_IMAGE,
        category: 'Pet Care',
    },
];

const Tasks = () => {
    const navigate = useNavigate();
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
                    <section className="tasks-screen__list tasks-blob-grid" aria-label="Available tasks">
                        {filteredTasks.map((task) => (
                            <div key={task.id} onClick={() => navigate('/requests/details', { state: { task } })} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                                <TaskCard
                                    variant="available"
                                    bgImage={task.image_url || FALLBACK_CAT_IMAGE}
                                    title={task.title}
                                    subtitle={task.description}
                                    price={task.price}
                                    tag={task.tag}
                                />
                            </div>
                        ))}
                    </section>
                </>
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

export default Tasks;
