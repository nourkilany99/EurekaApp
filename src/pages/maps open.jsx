import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileTool from '../Components/MobileTool';
import FrameBackHeader from '../Components/FrameBackHeader';
import MapMarker from '../Components/MapMarker';
import './maps open.css';

const pins = [
    { id: 'p1', left: '18%', top: '18%', variant: 'purple' },
    { id: 'p2', left: '72%', top: '16%', variant: 'light' },
    { id: 'p3', left: '58%', top: '35%', variant: 'light' },
    { id: 'p4', left: '23%', top: '50%', variant: 'light' },
    { id: 'p5', left: '67%', top: '56%', variant: 'light' },
    { id: 'p6', left: '35%', top: '71%', variant: 'red' },
    { id: 'p7', left: '19%', top: '88%', variant: 'light' },
    { id: 'p8', left: '69%', top: '85%', variant: 'light' },
];

const MapsOpen = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="maps-open-page">
            <MobileTool />
            <div className="maps-open-page__screen">
                <FrameBackHeader title="JOBS ON MAPS" chip="Nasr city, Home ▼" />

                <section className="maps-open__map" role="button" tabIndex={0} onClick={() => setIsOpen(true)}>
                    <img
                        src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=1200&auto=format&fit=crop"
                        alt="Map overview"
                    />
                    <span className="maps-open__tag">24$</span>
                    {pins.map((pin) => (
                        <MapMarker key={pin.id} left={pin.left} top={pin.top} variant={pin.variant} />
                    ))}
                    <div className="maps-open__handle" />
                </section>

                <section className={`maps-open__sheet ${isOpen ? 'maps-open__sheet--open' : ''}`}>
                    <p className="maps-open__kicker">Task Title</p>
                    <div className="maps-open__title-row">
                        <h2>Walk a dog</h2>
                        <span>24$</span>
                    </div>
                    <p className="maps-open__emoji" aria-hidden>
                        🏃‍♂️🐕
                    </p>
                    <p className="maps-open__kicker">Task description</p>
                    <p className="maps-open__description">
                        Looking for a responsible teen to walk my dog for 30 minutes this afternoon in the local
                        neighborhood.
                    </p>
                    <button type="button" onClick={() => navigate('/apply-for-the-task')}>
                        Apply now
                    </button>
                </section>
            </div>
        </div>
    );
};

export default MapsOpen;
