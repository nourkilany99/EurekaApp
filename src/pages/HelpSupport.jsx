import React, { useState } from 'react';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import './UtilityPages.css';

const faqSections = [
    {
        title: 'Getting Started',
        items: [
            { q: 'How do I create my first task?', a: 'Tap the purple start button and follow the 3-step process to create your task.' },
            { q: 'How do I apply for tasks?', a: 'Browse available tasks, tap on one you like, and click "Apply Now".' },
        ],
    },
    {
        title: 'Payments',
        items: [
            { q: 'When will I get paid?', a: 'Payment is released 24 hours after task completion and client approval.' },
            { q: 'What payment methods are supported?', a: 'We support bank transfers, Vodafone Cash, Fawry, and InstaPay.' },
            { q: 'Are there any fees?', a: 'We charge a 5% service fee on completed tasks.' },
        ],
    },
    {
        title: 'Safety & Trust',
        items: [
            { q: 'How are users verified?', a: 'All users verify their phone number and can add ID verification for trust badges.' },
            { q: 'What if something goes wrong?', a: 'Contact support immediately. We provide a 48-hour dispute resolution process.' },
        ],
    },
];

const FAQItem = ({ item, open, onToggle }) => (
    <div className="faq-item">
        <button type="button" className="faq-item__btn" onClick={onToggle}>
            {item.q}
            <span>{open ? '−' : '⌄'}</span>
        </button>
        {open ? <div className="faq-item__body">{item.a}</div> : null}
    </div>
);

const HelpSupport = () => {
    const [openId, setOpenId] = useState('0-0');

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner">
                <PageHeaderBack title="HELP & SUPPORT" />
                <div className="utility-search">
                    <span>⌕</span>
                    <input placeholder="Search for help..." />
                </div>

                <div className="utility-actions-grid">
                    <button type="button" className="utility-action-card">
                        <span className="utility-action-icon">💬</span>
                        Chat with Support
                    </button>
                    <button type="button" className="utility-action-card">
                        <span className="utility-action-icon">📞</span>
                        Call Support
                    </button>
                </div>

                <h2 className="utility-section-title">Frequently Asked Questions</h2>
                {faqSections.map((section, sectionIndex) => (
                    <div key={section.title}>
                        <h3 className="utility-section-title">{section.title}</h3>
                        <div className="faq-card">
                            {section.items.map((item, itemIndex) => {
                                const id = `${sectionIndex}-${itemIndex}`;
                                return (
                                    <FAQItem
                                        key={id}
                                        item={item}
                                        open={openId === id}
                                        onToggle={() => setOpenId((current) => (current === id ? '' : id))}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}

                <div className="support-cta">
                    <h3>Still need help?</h3>
                    <p>Our support team is available 24/7 to assist you with any questions or concerns.</p>
                    <div className="support-cta__actions">
                        <button type="button" className="utility-pill-btn">Email Us</button>
                        <button type="button" className="utility-pill-btn">Live Chat</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSupport;
