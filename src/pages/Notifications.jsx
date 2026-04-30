import React, { useState } from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import ToggleItem from '../components/ToggleItem';
import './UtilityPages.css';
import './ScreenPages.css';

const groups = [
    { title: 'Task Notifications', items: ['New Tasks', 'Task Updates', 'Reminders'] },
    { title: 'Activity', items: ['Milestones', 'Payments', 'Ratings'] },
    { title: 'Other', items: ['Weekly Summary', 'Announcements'] },
];

const NotificationsPage = () => {
    const [enabled, setEnabled] = useState({
        'New Tasks': true,
        'Task Updates': true,
        Reminders: true,
        Milestones: false,
        Payments: true,
        Ratings: false,
        'Weekly Summary': true,
        Announcements: false,
    });

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner ui-screen-stack">
                <PageHeaderBack title="NOTIFICATIONS" />
                {groups.map((group) => (
                    <ListCard key={group.title} title={group.title}>
                        <div className="ui-screen-stack">
                            {group.items.map((label) => (
                                <ToggleItem
                                    key={label}
                                    title={label}
                                    checked={enabled[label]}
                                    onChange={() => setEnabled((prev) => ({ ...prev, [label]: !prev[label] }))}
                                />
                            ))}
                        </div>
                    </ListCard>
                ))}
            </div>
        </div>
    );
};

export default NotificationsPage;
