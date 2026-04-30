import React, { useState } from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import Card from '../components/Card';
import ActionButton from '../components/ActionButton';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const days = Array.from({ length: 31 }, (_, i) => i + 1);

const AvailabilityPage = () => {
    const [activeDays, setActiveDays] = useState([5, 12, 15, 19, 22]);
    const [time, setTime] = useState('Morning');

    const toggleDay = (day) => {
        setActiveDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));
    };

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner ui-screen-stack">
                <PageHeaderBack title="AVAILABILITY" subtitle="December 2026" />
                <Card>
                    <div className="feature-calendar-grid">
                        {days.map((day) => (
                            <button
                                key={day}
                                type="button"
                                className={`feature-day ${activeDays.includes(day) ? 'is-active' : ''}`}
                                onClick={() => toggleDay(day)}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </Card>
                <Card>
                    <h3 className="utility-section-title">Preferred Time</h3>
                    <div className="feature-time-options">
                        {['Morning', 'Afternoon', 'Evening'].map((option) => (
                            <button
                                key={option}
                                type="button"
                                className={`feature-option ${time === option ? 'is-active' : ''}`}
                                onClick={() => setTime(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </Card>
                <ActionButton>Save Availability</ActionButton>
            </div>
        </div>
    );
};

export default AvailabilityPage;
