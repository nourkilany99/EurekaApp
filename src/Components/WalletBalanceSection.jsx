import React from 'react';
import './WalletBalanceSection.css';

const WalletBalanceSection = ({
    balance = '25,342 $',
    totalEarned = '555,321$',
    pending = '42$',
}) => (
    <section className="wallet-balance-section">
        <div className="wallet-credit-card">
            <div className="wallet-credit-card__chip">
                <div className="wallet-credit-card__chip-inner" />
            </div>
            <div className="wallet-credit-card__top-row">
                <span className="wallet-credit-card__brand">EUREKA</span>
            </div>
            <p className="wallet-balance-section__lbl">Available Balance</p>
            <p className="wallet-balance-section__big">{balance}</p>
            <div className="wallet-credit-card__glare" />
        </div>
        <div className="wallet-balance-section__cards">
<div className="wallet-balance-section__card wallet-balance-section__card--pending">
                <p className="wallet-balance-section__val">{pending}</p>
                <p className="wallet-balance-section__cap">Pending Earnings</p>
            </div>
        </div>
    </section>
);

export default WalletBalanceSection;
