import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import RequestCard from '../components/RequestCard';
import './Requests.css';

const Requests = () => {
    const navigate = useNavigate();

    return (
        <div className="requests-page">
            <MobileTool />
            <div className="requests-page__content">
                <PageHeaderBack titleLines={['PENDING', 'REQUESTS']} />
                <RequestCard onDetails={() => navigate('/requests/details')} />
            </div>
        </div>
    );
};

export default Requests;
