import React from 'react';
import './WalletTransactionItem.css';

const PinIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
            stroke="currentColor"
            strokeWidth="1.6"
        />
        <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);

const WalletTransactionItem = ({ imageUrl, title, sub, amount }) => (
    <div className="wallet-transaction-item">
        <img src={imageUrl} alt="" className="wallet-transaction-item__img" />
        <div className="wallet-transaction-item__mid">
            <p className="wallet-transaction-item__title">{title}</p>
            <p className="wallet-transaction-item__sub">
                <PinIcon /> {sub}
            </p>
        </div>
        <span className="wallet-transaction-item__amt">{amount}</span>
    </div>
);

export default WalletTransactionItem;
