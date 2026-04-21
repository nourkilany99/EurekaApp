import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileTool from '../Components/MobileTool';
import './JobsOnMaps.css';

const pinPositions = [
    { id: 'p1', x: '22%', y: '28%' },
    { id: 'p2', x: '52%', y: '18%' },
    { id: 'p3', x: '76%', y: '40%' },
    { id: 'p4', x: '60%', y: '64%' },
    { id: 'p5', x: '30%', y: '58%' },
];

const JobsOnMaps = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const task = useMemo(
        () => ({
            title: 'Walk a dog',
            price: '24$',
            description:
                'Looking for a responsible teen to walk my dog for 30 minutes this afternoon in the local neighborhood.',
        }),
        []
    );

    return (
        <div className="jom-page">
            <MobileTool />
            <div className="jom-page__top">
                <button className="jom-back" type="button" onClick={() => navigate(-1)} aria-label="Back">
                    ←
                </button>
                <h1 className="jom-title">JOBS ON MAPS</h1>
                <button className="jom-chip" type="button">
                    Nasr city, Home <span className="jom-chip__caret">▼</span>
                </button>
            </div>

            <div className="jom-map" onClick={() => setOpen(true)} role="button" tabIndex={0}>
                <img
                    className="jom-map__img"
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
                    alt="Map"
                />
                {pinPositions.map((p, idx) => (
                    <div
                        key={p.id}
                        className={`jom-pin ${idx === 1 ? 'jom-pin--active' : ''}`}
                        style={{ left: p.x, top: p.y }}
                        aria-hidden
                    />
                ))}
            </div>

            <div className={`jom-sheet ${open ? 'jom-sheet--open' : ''}`}>
                <div className="jom-sheet__grab" onClick={() => setOpen((v) => !v)} role="button" tabIndex={0} />
                <div className="jom-sheet__inner">
                    <div className="jom-sheet__hdr">
                        <div>
                            <p className="jom-sheet__kicker">Task Title</p>
                            <p className="jom-sheet__title">{task.title}</p>
                        </div>
                        <span className="jom-sheet__price">{task.price}</span>
                    </div>

                    <p className="jom-sheet__kicker">Task description</p>
                    <p className="jom-sheet__desc">{task.description}</p>

                    <button className="jom-cta" type="button" onClick={() => navigate('/apply-for-the-task')}>
                        Apply now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobsOnMaps;
