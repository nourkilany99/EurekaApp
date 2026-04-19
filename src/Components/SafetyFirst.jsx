import React from 'react';
import './SafetyFirst.css';

const SafetyFirst = () => (
    <section className="safety-first">
        <div className="safety-first__head">
            <span className="safety-first__bang" aria-hidden>
                !
            </span>
            <h3 className="safety-first__title">SAFETY FIRST</h3>
        </div>
        <ul className="safety-first__list">
            <li>Meet in safe, public environments for the first visit.</li>
            <li>Always communicate through the in-app chat.</li>
            <li>Your payment is secured and held by the app until completion.</li>
        </ul>
    </section>
);

export default SafetyFirst;
