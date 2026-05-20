import React from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import WalletBalanceSection from '../components/WalletBalanceSection';
import WalletTransactionItem from '../components/WalletTransactionItem';
import WalletSecurityNotice from '../components/WalletSecurityNotice';
import PrimaryButton from '../components/PrimaryButton';
import './wallet.css';

const txImg1 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop';
const txImg2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop';
const txImg3 = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop';

const WalletPage = () => (
    <div className="wallet-page">
        <MobileTool />
        <div className="wallet-page__inner">
            <PageHeaderBack title="WALLET" />
            <WalletBalanceSection />
            <WalletSecurityNotice />
            <h2 className="wallet-page__section-title">Recent Transactions</h2>
            <WalletTransactionItem
                imageUrl={txImg1}
                title="Dog Walking"
                sub="Completed – May 12"
                amount="+$10"
            />
            <WalletTransactionItem
                imageUrl={txImg2}
                title="Babysitting"
                sub="Completed – May 10"
                amount="+$35"
            />
            <WalletTransactionItem
                imageUrl={txImg3}
                title="Moving Help"
                sub="Pending Release"
                amount="+$220"
            />
            <PrimaryButton type="button" className="wallet-page__view-all">
                View all
            </PrimaryButton>
        </div>
    </div>
);

export default WalletPage;
