import React from 'react';
import groovyFrame from '../Assets/groovy-frame.svg';
import './WalletSecurityNotice.css';

const WalletSecurityNotice = () => (
    <section className="wallet-security-notice">
        <h3 className="wallet-security-notice__title">Payment<br/>Security Notice</h3>
        <div className="wallet-security-notice__box">
            <p className="wallet-security-notice__text">
                All payments are processed through a secure <strong>escrow system</strong>, meaning funds
                are <strong>safely</strong> held until the task is completed and confirmed by both
                users.
            </p>
            <img src={groovyFrame} alt="" className="wallet-security-notice__badge" />
        </div>
    </section>
);

export default WalletSecurityNotice;
