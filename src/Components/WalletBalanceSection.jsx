import React from 'react';
import './WalletBalanceSection.css';

const WalletBalanceSection = ({
    balance = '25,342 $',
    totalEarned = '555,321$',
    pending = '42$',
}) => (
    <section className="wallet-balance-section">
        <p className="wallet-balance-section__big">{balance}</p>
        <p className="wallet-balance-section__lbl">Available Balance</p>
        <div className="wallet-balance-section__cards">
            <div className="wallet-balance-section__card wallet-balance-section__card--earned">
                <p className="wallet-balance-section__val">{totalEarned}</p>
                <p className="wallet-balance-section__cap">Total Earned</p>
            </div>
            <div className="wallet-balance-section__card wallet-balance-section__card--pending">
                <p className="wallet-balance-section__val">{pending}</p>
                <p className="wallet-balance-section__cap">Pending Earnings</p>
            </div>
        </div>
    </section>
);

export default WalletBalanceSection;
