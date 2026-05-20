import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import './UtilityPages.css';

const PaymentCard = ({ title, subtitle, tag, withActions }) => (
    <article className="payment-method">
        <div className="row-between">
            <div>
                <p className="luicy-text" style={{fontWeight: 'bold', margin: '0 0 3px', fontSize: '15px'}}>{title}</p>
                <p>{subtitle}</p>
            </div>
            {tag ? <span className="payment-method__tag">{tag}</span> : null}
        </div>
        {withActions ? (
            <div className="payment-actions">
                <button type="button">Edit</button>
                <button type="button">Remove</button>
            </div>
        ) : null}
    </article>
);

const PaymentSetup = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner">
            <PageHeaderBack title="PAYMENT SETUP" />

            <section className="payment-balance-card">
                <p>Available to Withdraw</p>
                <h2>1,245 EGP</h2>
                <button type="button">Withdraw Now</button>
            </section>

            <div className="row-between">
                <h3>Bank Accounts</h3>
                <button type="button" className="row-link">+ Add</button>
            </div>
            <PaymentCard title="National Bank of Egypt" subtitle="•••• •••• •••• 4523" tag="PRIMARY" withActions />

            <div className="row-between">
                <h3>Cards</h3>
                <button type="button" className="row-link">+ Add Card</button>
            </div>
            <PaymentCard title="Visa •••• 4242" subtitle="Expires 12/26" tag="DEFAULT" />
            <PaymentCard title="Mastercard •••• 8888" subtitle="Expires 12/26" />

            <p className="utility-section-title luicy-text">Mobile Wallets</p>
            <div className="wallet-grid">
                <div className="wallet-chip">Vodafone Cash</div>
                <div className="wallet-chip">Fawry</div>
                <div className="wallet-chip">InstaPay</div>
            </div>

            <div className="toggle-row">
                <div>
                    <p>Auto-Withdrawal</p>
                    <span>Automatically withdraw when balance reaches threshold.</span>
                </div>
                <button type="button" className="toggle is-on" aria-label="Auto-withdraw enabled" />
            </div>

            <button type="button" className="task-history-btn payment-history-btn">
                Transaction History
            </button>
        </div>
    </div>
);

export default PaymentSetup;
