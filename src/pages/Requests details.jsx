import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import TaskDetailsPanel from '../components/TaskDetailsPanel';
import './Requests details.css';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=900&auto=format&fit=crop';

const RequestsDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const task = state?.task || null;

    if (!task) {
        return (
            <div className="requests-details-page">
                <MobileTool />
                <div className="requests-details-page__content">
                    <PageHeaderBack title="TASK DETAILS" />
                    <p style={{ color: '#555', textAlign: 'center', marginTop: 40 }}>No task selected.</p>
                </div>
            </div>
        );
    }

    const metaRows = [
        task.scheduled_date && { type: 'date', text: new Date(task.scheduled_date).toDateString() },
        (task.location || task.category) && { type: 'location', text: task.location || task.category },
        task.time_note && { type: 'time', text: task.time_note },
    ].filter(Boolean);

    return (
        <div className="requests-details-page">
            <MobileTool />
            <div className="requests-details-page__content">
                <PageHeaderBack title="TASK DETAILS" />
                <TaskDetailsPanel
                    imageUrl={task.image_url || task.bg_image || FALLBACK_IMG}
                    title={task.title}
                    description={task.description || task.subtitle || ''}
                    price={task.price != null ? `$${task.price}` : undefined}
                    metaRows={metaRows}
                    onCancel={() => navigate(-1)}
                />
            </div>
        </div>
    );
};

export default RequestsDetails;
