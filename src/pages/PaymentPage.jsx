import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import './UtilityPages.css';
import './ScreenPages.css';

const PaymentPage = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner ui-screen-stack">
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
            <article className="payment-method">
                <div className="row-between">
                    <div>
                        <p className="luicy-text" style={{fontWeight: 'bold', margin: '0 0 3px', fontSize: '15px'}}>National Bank of Egypt</p>
                        <p>•••• •••• •••• 4523</p>
                    </div>
                    <span className="payment-method__tag">PRIMARY</span>
                </div>
            </article>
            <div className="row-between">
                <h3>Cards</h3>
                <button type="button" className="row-link">+ Add Card</button>
            </div>
            <article className="payment-method">
                <div className="row-between">
                    <div>
                        <p className="luicy-text" style={{fontWeight: 'bold', margin: '0 0 3px', fontSize: '15px'}}>Visa •••• 4242</p>
                        <p>Expires 12/26</p>
                    </div>
                    <span className="payment-method__tag">DEFAULT</span>
                </div>
            </article>
            <article className="payment-method">
                <p className="luicy-text" style={{fontWeight: 'bold', margin: '0 0 3px', fontSize: '15px'}}>Mastercard •••• 8888</p>
                <p>Expires 09/27</p>
            </article>
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
        </div>
    </div>
);

export default PaymentPage;
