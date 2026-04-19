import React from 'react';
import './MyTasksHeader.css';

const PlusBoxIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

const WalletIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M4 7a2 2 0 012-2h11a3 3 0 013 3v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"
            stroke="currentColor"
            strokeWidth="1.6"
        />
        <path d="M17 12h3v4h-3a2 2 0 010-4z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);

const MyTasksHeader = ({ onAddSkills, onWallet }) => (
    <header className="my-tasks-header">
        <div className="my-tasks-header__top">
            <h1 className="my-tasks-header__title">MY TASKS</h1>
            <div className="my-tasks-header__actions">
                <button type="button" className="my-tasks-header__add" onClick={onAddSkills}>
                    <span className="my-tasks-header__add-icon" aria-hidden>
                        <PlusBoxIcon />
                    </span>
                    Add Skills
                </button>
                <button type="button" className="my-tasks-header__wallet" onClick={onWallet} aria-label="Wallet">
                    <WalletIcon />
                </button>
            </div>
        </div>
        <p className="my-tasks-header__sub">Add skills to find more opportunities</p>
    </header>
);

export default MyTasksHeader;
