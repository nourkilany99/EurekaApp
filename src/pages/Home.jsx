import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { supabase } from '../supabaseClient';
import { useUser } from '../context/UserContext';
import 'leaflet/dist/leaflet.css';
import MobileTool from '../components/MobileTool';
import location from '../Assets/IMG/location.svg';
import profileIMG from '../Assets/IMG/profileIMG.svg';
import Wallet from '../Assets/IMG/Wallet.svg';
import notification from '../Assets/IMG/notific.svg';
import TaskCard from '../components/TaskCard';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Link, useNavigate } from "react-router-dom";

// Fix leaflet default icon broken in webpack/CRA
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function MapPinMarker({ pin, selected, isHighest, onClick }) {
    const map = useMap();
    const markerRef = useRef(null);

    const getClasses = () => {
        let cls = 'map-pin-btn';
        if (selected) cls += ' map-pin-selected';
        else if (isHighest) cls += ' map-pin-highest';
        return cls;
    };

    useEffect(() => {
        if (markerRef.current) return;
        const icon = L.divIcon({
            className: '',
            html: `<div class="${getClasses()}" id="pin-${pin.id}">
                     <span class="map-pin-price">${pin.price}</span>
                     <span class="map-pin-dot"></span>
                   </div>`,
            iconSize: [70, 48],
            iconAnchor: [35, 48],
        });
        const marker = L.marker(pin.latlng, { icon }).addTo(map);
        marker.on('click', (e) => { L.DomEvent.stopPropagation(e); onClick(pin); });
        markerRef.current = marker;
        return () => { marker.remove(); markerRef.current = null; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!markerRef.current) return;
        const icon = L.divIcon({
            className: '',
            html: `<div class="${getClasses()}" id="pin-${pin.id}">
                     <span class="map-pin-price">${pin.price}</span>
                     <span class="map-pin-dot"></span>
                   </div>`,
            iconSize: [70, 48],
            iconAnchor: [35, 48],
        });
        markerRef.current.setIcon(icon);
    }, [selected, pin]);

    return null;
}

function MapCenterUpdater({ center }) {
    const map = useMap();
    useEffect(() => {
        map.flyTo(center, map.getZoom(), { duration: 1.2 });
    }, [center, map]);
    return null;
}

function MapClickHandler({ selectedPin, setSelectedPin, navigate }) {
    const map = useMap();
    useEffect(() => {
        const handler = () => {
            if (selectedPin) setSelectedPin(null);
            else navigate('/maps-open');
        };
        map.on('click', handler);
        return () => map.off('click', handler);
    }, [map, selectedPin, setSelectedPin, navigate]);
    return null;
}

const Home = () => {
    const navigate = useNavigate();
    const { user, profile } = useUser();
    const isVerified = profile?.status === 'verified';
    const userName = profile?.name || 'User';
    const userInitial = userName[0]?.toUpperCase() || '?';
    const containerRef = useRef(null);
    const rafRef = useRef(0);
    const startXRef = useRef(0);
    const startYRef = useRef(0);
    const lastXRef = useRef(0);
    const lastYRef = useRef(0);
    const startTimeRef = useRef(0);
    const isHorizontalRef = useRef(false);
    const isTrackingRef = useRef(false);

    const [activeDay, setActiveDay] = useState(3);
    const [activeFilter, setActiveFilter] = useState('withinHours');
    const [selectedPin, setSelectedPin] = useState(null);
    const [notifOpen, setNotifOpen] = useState(false);
    const [locationSearch, setLocationSearch] = useState('');
    const [locationLabel, setLocationLabel] = useState(() => {
        const saved = user?.id ? localStorage.getItem(`loc_label_${user.id}`) : null;
        return saved || 'Nasr City, Cairo';
    });
    const [mapCenter, setMapCenter] = useState(() => {
        const saved = user?.id ? localStorage.getItem(`loc_coords_${user.id}`) : null;
        return saved ? JSON.parse(saved) : [30.0444, 31.2357];
    });
    const [locationOpen, setLocationOpen] = useState(false);
    const [locationResults, setLocationResults] = useState([]);
    const [locationLoading, setLocationLoading] = useState(false);

    const [recommendedTasks, setRecommendedTasks] = useState([]);
    const [availableTasks, setAvailableTasks] = useState([]);
    const [volunteerTasks, setVolunteerTasks] = useState([]);
    const [mapPins, setMapPins] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [calendarDays,  setCalendarDays]  = useState([]);
    const [calendarTask,  setCalendarTask]  = useState(null);

    const searchLocation = async (query) => {
        if (!query.trim()) { setLocationResults([]); return; }
        setLocationLoading(true);
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5&countrycodes=eg`);
            const data = await res.json();
            setLocationResults(data);
        } catch {
            setLocationResults([]);
        }
        setLocationLoading(false);
    };

    const fetchTasks = async () => {
        const { data: rec } = await supabase.from('tasks').select('*').eq('category', 'recommended').eq('is_active', true);
        setRecommendedTasks(rec || []);
        const { data: avail } = await supabase.from('tasks').select('*').eq('category', 'available').eq('is_active', true);
        setAvailableTasks(avail || []);
    };

    const fetchVolunteer = async () => {
        const { data: vol } = await supabase.from('volunteer_tasks').select('*').eq('is_active', true);
        setVolunteerTasks(vol || []);
    };

    const fetchPins = async () => {
        const { data: pins } = await supabase.from('map_pins').select('*').eq('is_active', true);
        setMapPins((pins || []).map(p => ({ ...p, latlng: [p.lat, p.lng], price: p.price + '$' })));
    };

    const fetchNotifications = async () => {
        const { data: notifs } = await supabase.from('notifications').select('*').order('created_at', { ascending: false }).limit(20);
        setNotifications(notifs || []);
    };

    const fetchCalendarDays = async () => {
        const { data: days } = await supabase.from('calendar_days').select('*').order('day_number', { ascending: true });
        if (days && days.length > 0) {
            setCalendarDays(days);
        } else {
            const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
            setCalendarDays(Array.from({ length: daysInMonth }, (_, i) => ({ id: i + 1, day_number: i + 1, has_tasks: false })));
        }
    };

    useEffect(() => {
        fetchTasks();
        fetchVolunteer();
        fetchPins();
        fetchNotifications();
        fetchCalendarDays();

        const channel = supabase
            .channel('app-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'tasks' }, fetchTasks)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'volunteer_tasks' }, fetchVolunteer)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'map_pins' }, fetchPins)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'notifications' }, fetchNotifications)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'calendar_days' }, fetchCalendarDays)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'calendar_tasks' }, () => {
                setCalendarTask(null);
            })
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const fetchCalendarTask = async () => {
            const now = new Date();
            const selectedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(activeDay).padStart(2, '0')}`;

            const { data } = await supabase
                .from('calendar_tasks')
                .select('*')
                .eq('scheduled_date', selectedDate)
                .maybeSingle();

            setCalendarTask(data || null);
        };
        fetchCalendarTask();
    }, [activeDay]);

    const calScrollRef = useRef(null);
    const cardSwipeStartX = useRef(null);

    useEffect(() => {
        if (calScrollRef.current) {
            const offset = (activeDay - 1) * 50 - 50;
            calScrollRef.current.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' });
        }
    }, [activeDay]);

    const onCardTouchStart = (e) => {
        cardSwipeStartX.current = e.touches[0].clientX;
    };

    const onCardTouchEnd = (e) => {
        if (cardSwipeStartX.current === null) return;
        const diff = cardSwipeStartX.current - e.changedTouches[0].clientX;
        if (diff > 50) setActiveDay(prev => Math.min(prev + 1, calendarDays.length || 16));
        cardSwipeStartX.current = null;
    };

    const applyTransform = (x) => {
        const el = containerRef.current;
        if (!el) return;
        el.style.transform = `translateX(${x}px)`;
    };

    const applyTransformValue = (value) => {
        const el = containerRef.current;
        if (!el) return;
        el.style.transform = value;
    };

    const setTransition = (transition) => {
        const el = containerRef.current;
        if (!el) return;
        el.style.transition = transition;
    };

    const clamp = (min, val, max) => Math.max(min, Math.min(val, max));

    const computeDurationSeconds = (velocityPxPerMs) => {
        const v = Math.max(0, velocityPxPerMs);
        const vMin = 0.5;
        const vMax = 2.0;
        const normalized = clamp(0, (Math.min(v, vMax) - vMin) / (vMax - vMin), 1);
        const duration = 0.1 - (0.2 * normalized);
        return clamp(0.15, duration, 0.35);
    };

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        el.style.transform = 'translateX(0px)';
        el.style.transition = '';
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);



    const recommendedFilters = [
        { id: 'withinHours', label: 'Within hours', icon: '⏳' },
        { id: 'today', label: 'Today' },
        { id: 'plans', label: 'Plans' },
    ];

    const availableFilters = [
        { id: 'settings', type: 'icon', label: '⚙️' },
        { id: 'petCare', label: 'Pet Care', icon: '🐾', className: 'filter-purple active' },
        { id: 'movingHelp', label: 'Moving Help', icon: '📦', className: 'filter-dark' },
        { id: 'babysit', label: 'Babysit...', icon: '👶', className: 'filter-dark' },
    ];

    const filteredRecommended = recommendedTasks.filter(t => t.filter_tag === activeFilter);

    const onTouchStart = (e) => {
        const t = e.touches && e.touches[0];
        if (!t) return;
        isTrackingRef.current = true;
        isHorizontalRef.current = false;
        startXRef.current = t.clientX;
        startYRef.current = t.clientY;
        lastXRef.current = t.clientX;
        lastYRef.current = t.clientY;
        startTimeRef.current = Date.now();
        setTransition('none');
    };

    const onTouchMove = (e) => {
        if (!isTrackingRef.current) return;
        const t = e.touches && e.touches[0];
        if (!t) return;
        lastXRef.current = t.clientX;
        lastYRef.current = t.clientY;

        const dx = t.clientX - startXRef.current;
        const dy = t.clientY - startYRef.current;

        if (!isHorizontalRef.current) {
            if (Math.abs(dx) <= Math.abs(dy)) return;
            isHorizontalRef.current = true;
        }

        const clampedDx = Math.min(0, dx);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            applyTransform(clampedDx);
        });
    };

    const onTouchEnd = () => {
        if (!isTrackingRef.current) return;
        isTrackingRef.current = false;

        if (!isHorizontalRef.current) return;

        const endTime = Date.now();
        const timeElapsed = Math.max(1, endTime - startTimeRef.current);
        const startX = startXRef.current;
        const endX = lastXRef.current;
        const distance = startX - endX;
        const velocity = distance / timeElapsed;

        const shouldTrigger = distance > 80 || velocity > 0.5;

        if (shouldTrigger) {
            const duration = computeDurationSeconds(velocity);
            setTransition(`transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`);
            applyTransformValue('translateX(-100%)');

            const el = containerRef.current;
            if (!el) return;
            const onDone = (evt) => {
                if (evt.propertyName !== 'transform') return;
                el.removeEventListener('transitionend', onDone);
                navigate('/chat');
            };
            el.addEventListener('transitionend', onDone);
            return;
        }

        setTransition('transform 0.25s cubic-bezier(0.25, 1.5, 0.5, 1)');
        applyTransform(0);
    };

    return (
        <>
            <div
                className="home-container"
                ref={containerRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onTouchCancel={onTouchEnd}
            >
                <MobileTool />

                {/* Header */}
                <div className='div1_home'>
                    <div className='div1_patch1'>
                        <Link to="/profile" >
                            <div>
                                {profile?.avatar_url
                                    ? <img src={profile.avatar_url} alt='Profile' className="profile-img" />
                                    : <div className="profile-img profile-img--initial">{userInitial}</div>
                                }
                            </div>
                        </Link>
                        <div>
                            <p className="welcome-text">Welcome, {userName}</p>
                            <div className="location-div" onClick={() => setLocationOpen(true)} style={{ cursor: 'pointer' }}>
                                <img src={location} alt='Location' />
                                <p>{locationLabel}</p>
                            </div>
                        </div>
                    </div>
                    <div className="header-icons">
                        <Link to="/wallet">
                            <div className="icon-bg"><img src={Wallet} alt='Wallet' /></div>
                        </Link>
                        <div className="icon-bg notific-icon" onClick={() => setNotifOpen(true)} style={{ cursor: 'pointer' }}>
                            <img src={notification} alt='Notifications' />
                            <span className="red-dot"></span>
                        </div>
                    </div>
                </div>

                <div className="content-pad">
                    {/* Warning Banner — only for under-review users */}
                    {!isVerified && (
                        <div className="warning-banner">
                            <div className="warning-icon">!</div>
                            <div className="warning-text">
                                <p>Your account is under review.</p>
                                <span>Verification is in progress - this usually takes a short time.</span>
                            </div>
                            <Link to="/learn-more">
                                <button className="warning-btn">Learn more</button>
                            </Link>
                        </div>
                    )}

                    {/* Calendar */}
                    <div className="section">

                        <h2 className="section-title">CALENDAR <span className="section-subtitle">/(Track your tasks)</span></h2>


                        <div className="calendar-scroll" ref={calScrollRef}>
                            {calendarDays.map((day) => (
                                <div key={day.id} className="cal-day-wrap">
                                    <div
                                        className={`cal-day ${day.day_number === activeDay ? 'active' : ''}`}
                                        onClick={() => setActiveDay(day.day_number)}
                                    >
                                        {day.day_number}
                                    </div>
                                    <div className={`cal-indicator ${day.has_tasks || day.day_number === activeDay ? 'visible' : ''}`}></div>
                                </div>
                            ))}
                        </div>

                        {isVerified && (
                            <div
                                onTouchStart={onCardTouchStart}
                                onTouchEnd={onCardTouchEnd}
                            >
                                {calendarTask ? (
                                    <Link className='no-link' to="/requests/details" state={{ task: calendarTask }}>
                                        <TaskCard
                                            variant="ongoing"
                                            title={calendarTask.title}
                                            subtitle={calendarTask.subtitle}
                                            time={calendarTask.time_note}
                                            bgImage={calendarTask.bg_image}
                                        />
                                    </Link>
                                ) : (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0' }}>
                                        <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>No task scheduled for this day.</p>
                                        <button
                                            onClick={() => navigate('/tasks')}
                                            style={{
                                                background: 'rgba(21,209,122,0.12)',
                                                border: '1px solid rgba(21,209,122,0.25)',
                                                color: '#15d17a',
                                                borderRadius: 20,
                                                padding: '5px 14px',
                                                fontSize: '12px',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            Explore Tasks
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Recommended — only for verified users */}
                    {isVerified && <div className="section mt-4">
                        <h2 className="section-title main-title">RECOMMENDED<br />Tasks for you<br /></h2>
                        <div className="filters">
                            {recommendedFilters.map((filter) => (
                                <button
                                    key={filter.id}
                                    className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
                                    type="button"
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.icon && <span className="icon">{filter.icon}</span>} {filter.label}
                                </button>
                            ))}
                        </div>

                        <div className="horizontal-list">
                            <div className="link">
                                {filteredRecommended.map((task) => (
                                    <Link key={task.id} to="/apply-for-the-task" state={{ task }} style={{ textDecoration: 'none' }}>
                                        <TaskCard
                                            variant="recommended"
                                            title={task.title}
                                            subtitle={task.subtitle}
                                            points={task.points}
                                            time={task.duration_min}
                                            bgImage={task.bg_image}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>}

                    {/* Volunteer */}
                    <div className="section mt-4 relative">
                        <div className="volunteer-header">
                            <div>
                                <h2 className="section-title">VOLUNTEER<br />OPPORTUNITIES</h2>
                                <p className="section-desc">Optional section for non-paid<br />community help</p>
                            </div>
                            <div className="volunteer-icon">
                                <div className="diamond"></div>
                            </div>
                        </div>

                        <div className="vertical-list gap-2">
                            {volunteerTasks.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    variant="volunteer"
                                    title={task.title}
                                    points={task.points}
                                    bgImage={task.bg_image}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Map Preview */}
                    <div className="section mt-4">
                        <h2 className="section-title">NEARBY TASKS<br />MAP PREVIEW</h2>
                        <div className="map-preview">
                            <MapContainer
                                center={mapCenter}
                                zoom={14}
                                style={{ width: '100%', height: '100%', borderRadius: '20px' }}
                                zoomControl={false}
                                attributionControl={false}
                            >
                                <TileLayer
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                    attribution="&copy; OpenStreetMap &copy; CARTO"
                                />
                                {(() => {
                                    const maxPrice = Math.max(...mapPins.map(p => parseFloat(p.price)));
                                    return mapPins.map(pin => (
                                        <MapPinMarker
                                            key={pin.id}
                                            pin={pin}
                                            selected={selectedPin?.id === pin.id}
                                            isHighest={parseFloat(pin.price) === maxPrice}
                                            onClick={setSelectedPin}
                                        />
                                    ));
                                })()}
                                <MapCenterUpdater center={mapCenter} />
                                <MapClickHandler
                                    selectedPin={selectedPin}
                                    setSelectedPin={setSelectedPin}
                                    navigate={navigate}
                                />
                            </MapContainer>
                        </div>
                    </div>

                    {/* Available Tasks */}
                    <div className="section mt-4">
                        <h2 className="section-title">AVAILABLE<br />TASKS</h2>
                        <div className="filters scroll-filters">
                            {availableFilters.map((filter) => {
                                if (filter.type === 'icon') {
                                    return (
                                        <button key={filter.id} className="filter-icon-btn" type="button">
                                            {filter.label}
                                        </button>
                                    );
                                }

                                return (
                                    <button
                                        key={filter.id}
                                        className={`filter-pill ${filter.className || ''}`}
                                        type="button"
                                    >
                                        {filter.icon && <span className="icon">{filter.icon}</span>} {filter.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="grid-2">
                            {availableTasks.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    variant="available"
                                    title={task.title}
                                    subtitle={task.subtitle}
                                    price={task.price}
                                    bgImage={task.bg_image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Map task bottom sheet */}
            {selectedPin && (
                <>
                    <div className="map-sheet-overlay" onClick={() => setSelectedPin(null)} />
                    <div className="map-task-sheet" onClick={(e) => e.stopPropagation()}>
                        <div className="map-sheet-handle" />
                        <p className="map-sheet-label">Task Title</p>
                        <div className="map-sheet-title-row">
                            <h3 className="map-sheet-title">{selectedPin.title}</h3>
                            <span className="map-sheet-price">{selectedPin.price}</span>
                        </div>
                        <img src={selectedPin.bg_image} alt={selectedPin.title} className="map-sheet-img" />
                        <p className="map-sheet-label">Task description</p>
                        <p className="map-sheet-desc">{selectedPin.description}</p>
                        <Link to="/apply-for-the-task" className="no-link">
                            <button className="map-sheet-btn">Apply now</button>
                        </Link>
                    </div>
                </>
            )}
            {/* Location search modal */}
            {locationOpen && (
                <>
                    <div className="notif-overlay" onClick={() => { setLocationOpen(false); setLocationResults([]); setLocationSearch(''); }} />
                    <div className="location-modal">
                        <div className="location-modal-header">
                            <h3 className="notif-panel-title">Change Location</h3>
                            <button className="notif-panel-close" onClick={() => { setLocationOpen(false); setLocationResults([]); setLocationSearch(''); }}>✕</button>
                        </div>
                        <div className="location-search-wrap">
                            <input
                                className="location-search-input"
                                type="text"
                                placeholder="Search city, area..."
                                value={locationSearch}
                                autoFocus
                                onChange={(e) => {
                                    setLocationSearch(e.target.value);
                                    searchLocation(e.target.value);
                                }}
                            />
                        </div>
                        {locationLoading && <p className="location-loading">Searching...</p>}
                        <div className="location-results">
                            {locationResults.map((r) => (
                                <div
                                    key={r.place_id}
                                    className="location-result-item"
                                    onClick={() => {
                                        const coords = [parseFloat(r.lat), parseFloat(r.lon)];
                                        const label = r.display_name.split(',').slice(0, 2).join(',');
                                        setMapCenter(coords);
                                        setLocationLabel(label);
                                        if (user?.id) {
                                            localStorage.setItem(`loc_label_${user.id}`, label);
                                            localStorage.setItem(`loc_coords_${user.id}`, JSON.stringify(coords));
                                        }
                                        setLocationOpen(false);
                                        setLocationResults([]);
                                        setLocationSearch('');
                                    }}
                                >
                                    <span className="location-result-icon">📍</span>
                                    <span className="location-result-text">{r.display_name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {/* Notification panel */}
            {notifOpen && (
                <>
                    <div className="notif-overlay" onClick={() => setNotifOpen(false)} />
                    <div className="notif-panel">
                        <div className="notif-panel-header">
                            <h3 className="notif-panel-title">Notifications</h3>
                            <button className="notif-panel-close" onClick={() => setNotifOpen(false)}>✕</button>
                        </div>
                        <div className="notif-list">
                            {notifications.map(n => (
                                <div key={n.id} className="notif-item">
                                    <img src={n.avatar_url} alt={n.name} className="notif-avatar" />
                                    <div className="notif-body">
                                        <div className="notif-name">{n.name}</div>
                                        <div className="notif-subtitle">{n.subtitle}</div>
                                        <div className="notif-message">{n.message}</div>
                                        <div className="notif-date">{n.date}</div>
                                    </div>
                                    {n.amount && (
                                        <div className={`notif-amount ${n.amount.startsWith('+') ? 'notif-amount--in' : 'notif-amount--out'}`}>
                                            {n.amount}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Home;
