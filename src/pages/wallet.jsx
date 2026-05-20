import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import WalletBalanceSection from '../components/WalletBalanceSection';
import WalletTransactionItem from '../components/WalletTransactionItem';
import WalletSecurityNotice from '../components/WalletSecurityNotice';
import PrimaryButton from '../components/PrimaryButton';
import './wallet.css';

const formatAmount = (amount) =>
    amount >= 0 ? `+$${amount}` : `-$${Math.abs(amount)}`;

const WalletPage = () => {
    const navigate = useNavigate();
    const [balance,      setBalance]      = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [loading,      setLoading]      = useState(true);

    useEffect(() => {
        const fetchWallet = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const { data: bal } = await supabase
                .from('wallet_balances')
                .select('*')
                .eq('user_id', user.id)
                .single();
            setBalance(bal);

            const { data: txns } = await supabase
                .from('wallet_transactions')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })
                .limit(3);
            setTransactions(txns || []);

            setLoading(false);
        };
        fetchWallet().catch(() => setLoading(false));
    }, []);

    return (
        <div className="wallet-page">
            <MobileTool />
            <div className="wallet-page__inner">
                <PageHeaderBack title="WALLET" />
                <WalletBalanceSection
                    balance={balance?.balance ?? '—'}
                    pending={balance?.pending ?? '—'}
                    totalEarned={balance?.total_earned ?? '—'}
                />
                <WalletSecurityNotice />
                <h2 className="wallet-page__section-title">Recent Transactions</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    transactions.map((tx) => (
                        <WalletTransactionItem
                            key={tx.id}
                            imageUrl={tx.image_url}
                            title={tx.title}
                            sub={tx.sub}
                            amount={formatAmount(tx.amount)}
                        />
                    ))
                )}
                <PrimaryButton type="button" className="wallet-page__view-all" onClick={() => navigate('/wallet-history')}>
                    View all
                </PrimaryButton>
            </div>
        </div>
    );
};

export default WalletPage;
