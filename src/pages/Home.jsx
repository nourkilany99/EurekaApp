import React, { useEffect, useRef } from 'react';
import './Home.css';
import MobileTool from '../Components/MobileTool';
import location from '../Assets/IMG/location.svg';
import profileIMG from '../Assets/IMG/profileIMG.svg';
import Wallet from '../Assets/IMG/Wallet.svg';
import notification from '../Assets/IMG/notific.svg';
import TaskCard from '../Components/TaskCard';
import maps from '../Assets/IMG/maps_code.svg'
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const rafRef = useRef(0);
    const startXRef = useRef(0);
    const startYRef = useRef(0);
    const lastXRef = useRef(0);
    const lastYRef = useRef(0);
    const startTimeRef = useRef(0);
    const isHorizontalRef = useRef(false);
    const isTrackingRef = useRef(false);

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
        const duration = 0.35 - (0.2 * normalized);
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

    const calendarDays = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16];

    const recommendedFilters = [
        { id: 'withinHours', label: 'Within hours', icon: '⏳', active: true },
        { id: 'today', label: 'Today' },
        { id: 'plans', label: 'Plans' },
    ];

    const recommendedTasks = [
        {
            id: 'makeup',
            variant: 'recommended',
            title: 'Makeup',
            subtitle: 'Getting Glammed for work event',
            points: '50',
            time: '20',
            bgImage: 'https://images.unsplash.com/photo-1512496015851-a1dc8a467bc0?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 'petWalking',
            variant: 'recommended',
            title: 'Pet walking',
            subtitle: 'Getting the dog to walk around the hou...',
            points: '24',
            time: '--',
            bgImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 'HouseSitting',
            variant: 'recommended',
            title: 'House sitting',
            subtitle: 'Take care of the plants all ove...',
            points: '24',
            time: '--',
            bgImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop',
        },
    ];

    const volunteerTasks = [
        {
            id: 'grandmaSitting',
            variant: 'volunteer',
            title: 'Grandma sitting',
            points: '10',
            bgImage: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 'grassCare',
            variant: 'volunteer',
            title: 'Grass care',
            points: '20',
            bgImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 'houseSitting',
            variant: 'volunteer',
            title: 'House sitting',
            points: '50',
            bgImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
        },
    ];

    const availableFilters = [
        { id: 'settings', type: 'icon', label: '⚙️' },
        { id: 'petCare', label: 'Pet Care', icon: '🐾', className: 'filter-purple active' },
        { id: 'movingHelp', label: 'Moving Help', icon: '📦', className: 'filter-dark' },
        { id: 'babysit', label: 'Babysit...', icon: '👶', className: 'filter-dark' },
    ];

    const availableTasks = [
        {
            id: 'petFeed1',
            variant: 'available',
            title: 'Pet feed',
            subtitle: 'Getting the dog to walk around the h...',
            price: '24',
            bgImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 'catCompany1',
            variant: 'available',
            title: 'Cat company',
            subtitle: 'Getting Glammed...',
            price: '30',
            bgImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 'petFeed2',
            variant: 'available',
            title: 'Pet feed',
            subtitle: 'Getting the dog to walk around the h...',
            price: '24',
            bgImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 'catCompany2',
            variant: 'available',
            title: 'Cat company',
            subtitle: 'Getting Glammed for work event',
            price: '30',
            bgImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop',
        },
    ];

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
                        <img src={profileIMG} alt='Profile' className="profile-img" />
                    </div>
                    </Link>
                    <div>
                        <p className="welcome-text">Welcome, Seif</p>
                        <div className="location-div">
                           <img src={location} alt='Location' />
                           <p>Nasr city, Home</p>
                        </div>
                    </div>
                </div>
                <div className="header-icons">
                        <Link  to="/wallet">
                        <div className="icon-bg"><img src={Wallet} alt='Wallet' /></div>
                        </Link>
                    <div className="icon-bg notific-icon">
                        <Link  to="/notifications">
                            <img src={notification} alt='Notifications' />
                        </Link>
                        <span className="red-dot"></span>
                    </div>
                </div>
            </div>

            <div className="content-pad">
                {/* Warning Banner */}
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

                {/* Calendar */}
                <div className="section">
            
                    <h2 className="section-title">CALENDAR <span className="section-subtitle">/(Track your tasks)</span></h2>
                    
                    
                    <div className="calendar-scroll">
                      {calendarDays.map((day) => (
                       <Link to="/calender" key={day} className="no-link">
                       <div className={`cal-day ${day === 3 ? 'active' : ''}`}>
                       {day}
                       </div>
                       </Link>
                        ))}
                    </div>
                    <div className="cal-indicator-wrapper"><div className="cal-indicator"></div></div>

                    <Link className='no-link' to="/requests/details"><TaskCard 
                        variant="ongoing" 
                        title="Babysitting" 
                        subtitle="Nasr city, Hassan el ma'moon"
                        time="After 20 mins"
                        bgImage="https://images.unsplash.com/photo-1544716278-e513176f20b5?q=80&w=600&auto=format&fit=crop"
                    /></Link>
                </div>

                {/* Recommended */}
                <div className="section mt-4">
                    <h2 className="section-title main-title">RECOMMENDED<br/><span className="script-title">tasks for you</span></h2>
                    <div className="filters">
                        {recommendedFilters.map((filter) => (
                            <button
                                key={filter.id}
                                className={`filter-pill ${filter.active ? 'active' : ''}`}
                                type="button"
                            >
                                {filter.icon && <span className="icon">{filter.icon}</span>} {filter.label}
                            </button>
                            
                        ))}
                       
                    </div>

                    <div className="horizontal-list">
                        {recommendedTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                variant={task.variant}
                                title={task.title}
                                subtitle={task.subtitle}
                                points={task.points}
                                time={task.time}
                                bgImage={task.bgImage}
                            />
                        ))}
                    </div>
                </div>

                {/* Volunteer */}
                <div className="section mt-4 relative">
                    <div className="volunteer-header">
                        <div>
                            <h2 className="section-title">VOLUNTEER<br/>OPPORTUNITIES</h2>
                            <p className="section-desc">Optional section for non-paid<br/>community help</p>
                        </div>
                        <div className="volunteer-icon">
                            <div className="diamond"></div>
                        </div>
                    </div>
                    
                    <div className="vertical-list gap-2">
                        {volunteerTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                variant={task.variant}
                                title={task.title}
                                points={task.points}
                                bgImage={task.bgImage}
                            />
                        ))}
                    </div>
                </div>

                {/* Map Preview */}
                <div className="section mt-4">
                    <h2 className="section-title">NEARBY TASKS<br/>MAP PREVIEW</h2>
                    <div className="map-preview">
                        <img src={maps} alt=""  />
                        <div className="map-pin p1">📍</div>
                        <div className="map-pin p2">📍</div>
                        <div className="map-pin p3">📍</div>
                        <div className="map-card">
                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop "  alt="" />
                            <span>23$</span>
                        </div>
                        
                    </div>
                </div>

                {/* Available Tasks */}
                <div className="section mt-4">
                    <h2 className="section-title">AVAILABLE<br/>TASKS</h2>
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
                                variant={task.variant}
                                title={task.title}
                                subtitle={task.subtitle}
                                price={task.price}
                                bgImage={task.bgImage}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;