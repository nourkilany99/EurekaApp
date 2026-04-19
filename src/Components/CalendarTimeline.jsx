import React from 'react';
import './CalendarTimeline.css';

const hours = ['07:00', '08:00', '09:00', '10:00', '11:00'];

const CalendarTimeline = () => (
    <div className="calendar-timeline">
        {hours.map((h) => (
            <div key={h} className="calendar-timeline__row">
                <span className="calendar-timeline__time">{h}</span>
                <div className="calendar-timeline__line" />
            </div>
        ))}
    </div>
);

export default CalendarTimeline;
