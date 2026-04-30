import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileTool from '../components/MobileTool';
import './JobsOnMaps.css';

const MapPin = ({ color, dotColor }) => (
    <svg width="28" height="36" viewBox="0 0 24 30" fill="none">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 18 12 18s12-9 12-18c0-6.627-5.373-12-12-12z" fill={color}/>
        <circle cx="12" cy="12" r="4.5" fill={dotColor}/>
    </svg>
);

const RedPin = () => (
    <svg width="20" height="30" viewBox="0 0 24 40" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#ff4747" strokeWidth="4" fill="none"/>
        <path d="M12 20 v20" stroke="#ff4747" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

const jobsData = [
    {
        id: 'p1',
        type: 'purple',
        x: '22%', y: '25%',
        title: 'Walk a dog',
        price: '24$',
        description: 'Looking for a responsible teen to walk my dog for 30 minutes this afternoon in the local neighborhood.',
        icon: 'https://cdn-icons-png.flaticon.com/512/3233/3233483.png'
    },
    { id: 'p2', type: 'white', x: '68%', y: '22%' },
    { id: 'p3', type: 'white', x: '46%', y: '36%' },
    { id: 'p4', type: 'white', x: '72%', y: '40%' },
    { id: 'p5', type: 'white', x: '58%', y: '52%' },
    { id: 'p6', type: 'white', x: '18%', y: '48%' },
    { id: 'p7', type: 'red', x: '40%', y: '50%' },
    { id: 'p8', type: 'white', x: '15%', y: '68%' },
    { id: 'p9', type: 'white', x: '58%', y: '74%' },
];

const JobsOnMaps = () => {
    const navigate = useNavigate();
    const [selectedJob, setSelectedJob] = useState(null);

    const handlePinClick = (e, job) => {
        e.stopPropagation();
        if (job.title) {
            setSelectedJob(job);
        } else {
            setSelectedJob(null);
        }
    };

    return (
        <div className="jom-page">
            <MobileTool />
            <div className="jom-page__top">
                <div className="jom-header-row">
                    <button className="jom-back" type="button" onClick={() => navigate(-1)} aria-label="Back">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h1 className="jom-title">JOBS ON MAPS</h1>
                </div>
                <button className="jom-location-pill" type="button">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Nasr city, Home 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: 4}}>
                        <path d="M6 9l6 6 6-6"/>
                    </svg>
                </button>
            </div>

            <div className="jom-map-container" onClick={() => setSelectedJob(null)}>
                <img
                    className="jom-map__img"
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
                    alt="Map"
                />
                
                {jobsData.map((job) => {
                    const isSelected = selectedJob?.id === job.id;
                    return (
                        <div 
                            key={job.id} 
                            className={`jom-marker ${isSelected ? 'selected' : ''}`}
                            style={{ left: job.x, top: job.y }}
                            onClick={(e) => handlePinClick(e, job)}
                        >
                            {job.type === 'white' && <MapPin color="#ffffff" dotColor="#000000" />}
                            {job.type === 'purple' && <MapPin color="#a200ff" dotColor="#000000" />}
                            {job.type === 'red' && <RedPin />}

                            {isSelected && job.title && (
                                <div className="jom-marker-tooltip">
                                    <div className="jom-marker-tooltip-price">{job.price}</div>
                                    <div className="jom-marker-tooltip-img">
                                        <img src={job.icon} alt="job icon"/>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className={`jom-bottom-sheet ${selectedJob ? 'open' : ''}`}>
                <div className="jom-sheet-handle" />
                {selectedJob && (
                    <div className="jom-sheet-content">
                        <div className="jom-sheet-kicker">Task Title</div>
                        <div className="jom-sheet-header">
                            <h2 className="jom-sheet-task-title">{selectedJob.title}</h2>
                            <span className="jom-sheet-badge">{selectedJob.price}</span>
                        </div>
                        
                        <div className="jom-sheet-illustration">
                            <img src={selectedJob.icon} alt="illustration" />
                        </div>

                        <div className="jom-sheet-kicker">Task description</div>
                        <p className="jom-sheet-desc">{selectedJob.description}</p>

                        <button className="jom-apply-btn" onClick={() => navigate('/apply-for-the-task')}>
                            Apply now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobsOnMaps;
