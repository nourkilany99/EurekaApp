import React from 'react';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import HorizontalDatePicker from '../Components/HorizontalDatePicker';
import ScheduleTaskCard from '../Components/ScheduleTaskCard';
import './Calender.css';

const timeRows = ['07:00', '08:00', '09:00', '10:00', '11:00'];

const Calender = () => (
    <div className="calender-page">
        <MobileTool />
        <div className="calender-page__inner">
            <PageHeaderBack title="CALENDER" subtitle="Schedule April 2026" />
            <HorizontalDatePicker />
            <div className="calender-page__timeline">
                <div className="calender-page__tl-row">
                    <span className="calender-page__tl-time">{timeRows[0]}</span>
                    <div className="calender-page__tl-line" />
                </div>
                <div className="calender-page__tl-row">
                    <span className="calender-page__tl-time">{timeRows[1]}</span>
                    <div className="calender-page__tl-line" />
                </div>
                <div className="calender-page__card-slot">
                    <ScheduleTaskCard title="Babysitting" location="Nasr city" accent="purple" />
                </div>
                <div className="calender-page__tl-row">
                    <span className="calender-page__tl-time">{timeRows[2]}</span>
                    <div className="calender-page__tl-line" />
                </div>
                <div className="calender-page__tl-row">
                    <span className="calender-page__tl-time">{timeRows[3]}</span>
                    <div className="calender-page__tl-line" />
                </div>
                <div className="calender-page__card-slot">
                    <ScheduleTaskCard title="Walk a dog" location="Maadi" accent="green" />
                </div>
                <div className="calender-page__tl-row">
                    <span className="calender-page__tl-time">{timeRows[4]}</span>
                    <div className="calender-page__tl-line" />
                </div>
            </div>
        </div>
    </div>
);

export default Calender;
