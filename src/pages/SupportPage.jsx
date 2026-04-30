import React, { useState } from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import GlobalSearchInput from '../components/GlobalSearchInput';
import './UtilityPages.css';
import './ScreenPages.css';

const faqSections = [
    {
        title: 'Getting Started',
        items: [
            { q: 'How do I create my first task?', a: 'Tap the primary action and follow the 3-step setup flow.' },
            { q: 'How do I apply for tasks?', a: 'Open a task and tap Apply. The task owner will review your profile.' },
        ],
    },
    {
        title: 'Payments',
        items: [
            { q: 'When will I get paid?', a: 'Payment is released 24 hours after completion and approval.' },
            { q: 'What methods are supported?', a: 'Bank transfer, Vodafone Cash, Fawry, and InstaPay.' },
        ],
    },
];

const SupportPage = () => {
    const [open, setOpen] = useState('0-0');

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner ui-screen-stack">
                <PageHeaderBack title="HELP & SUPPORT" />
                <div className="utility-search">
                    <span>⌕</span>
                    <GlobalSearchInput placeholder="Search for help..." />
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
                {faqSections.map((section, sIndex) => (
                    <section key={section.title}>
                        <h3 className="utility-section-title">{section.title}</h3>
                        <div className="faq-card">
                            {section.items.map((item, iIndex) => {
                                const id = `${sIndex}-${iIndex}`;
                                return (
                                    <div key={id} className="faq-item">
                                        <button type="button" className="faq-item__btn" onClick={() => setOpen(open === id ? '' : id)}>
                                            {item.q}
                                            <span>{open === id ? '−' : '⌄'}</span>
                                        </button>
                                        {open === id ? <div className="faq-item__body">{item.a}</div> : null}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default SupportPage;
