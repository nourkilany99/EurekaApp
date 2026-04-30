import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import TaskDetailsPanel from '../components/TaskDetailsPanel';
import './Requests details.css';

const RequestsDetails = () => (
    <div className="requests-details-page">
        <MobileTool />
        <div className="requests-details-page__content">
            <PageHeaderBack title="TASK DETAILS" />
            <TaskDetailsPanel
                metaRows={[
                    { type: 'date', text: 'Mon, Feb 16' },
                    { type: 'location', text: 'Maadi, Cairo' },
                    { type: 'time', text: '10:00 AM - 2:00 PM' },
                ]}
            />
        </div>
    </div>
);

export default RequestsDetails;
