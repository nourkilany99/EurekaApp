import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import ActionButton from '../components/ActionButton';
import StatusBadge from '../components/StatusBadge';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const offers = [
    { title: '15% off Dog Walking', tag: 'Early Bird' },
    { title: '$25 off House Cleaning', tag: 'Welcome' },
    { title: '10% off Babysitting', tag: 'Loyalty' },
];

const PromoCodesPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
            <PageHeaderBack title="PROMO CODES" />
            <ListCard>
                <input className="feature-input" placeholder="Enter promo code" />
                <ActionButton style={{ marginTop: 8 }}>Apply</ActionButton>
            </ListCard>
            {offers.map((offer) => (
                <ListCard key={offer.title}>
                    <div className="feature-row">
                        <p className="feature-title">{offer.title}</p>
                        <StatusBadge tone="purple">{offer.tag}</StatusBadge>
                    </div>
                </ListCard>
            ))}
        </div>
    </div>
);

export default PromoCodesPage;
