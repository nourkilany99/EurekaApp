import React from 'react';
import './WalletSecurityNotice.css';

const WalletSecurityNotice = () => (
    <section className="wallet-security-notice">
        <h3 className="wallet-security-notice__title">Payment Security Notice</h3>
        <div className="wallet-security-notice__box">
            <p className="wallet-security-notice__text">
                All payments are processed through a secure <strong>escrow system</strong>, meaning funds
                are <strong>safely</strong> held until the task is completed and confirmed by both
                users.
            </p>
            <div className="wallet-security-notice__badge" aria-hidden>
                <span className="wallet-security-notice__c1" />
                <span className="wallet-security-notice__c2" />
                <span className="wallet-security-notice__c3" />
            </div>
        </div>
    </section>
);

export default WalletSecurityNotice;
