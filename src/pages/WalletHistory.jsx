import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import WalletTransactionItem from '../components/WalletTransactionItem';
import './WalletHistory.css';

const formatAmount = (amount) =>
    amount >= 0 ? `+$${amount}` : `-$${Math.abs(amount)}`;

const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
};

const groupByDate = (txns) => {
    const groups = {};
    txns.forEach((tx) => {
        const key = new Date(tx.created_at).toDateString();
        if (!groups[key]) groups[key] = [];
        groups[key].push(tx);
    });
    return Object.entries(groups);
};

const WalletHistory = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) { setLoading(false); return; }

            const { data } = await supabase
                .from('wallet_transactions')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            setTransactions(data || []);
            setLoading(false);
        };
        fetch();
    }, []);

    const grouped = groupByDate(transactions);

    return (
        <div className="wallet-history-page">
            <MobileTool />
            <div className="wallet-history-page__inner">
                <PageHeaderBack title="TRANSACTIONS" />

                {loading ? (
                    <p className="wallet-history-page__empty">Loading…</p>
                ) : transactions.length === 0 ? (
                    <p className="wallet-history-page__empty">No transactions yet.</p>
                ) : (
                    grouped.map(([dateKey, txns]) => (
                        <div key={dateKey} className="wallet-history-page__group">
                            <p className="wallet-history-page__date">{formatDate(txns[0].created_at)}</p>
                            {txns.map((tx) => (
                                <WalletTransactionItem
                                    key={tx.id}
                                    imageUrl={tx.image_url}
                                    title={tx.title}
                                    sub={tx.sub}
                                    amount={formatAmount(tx.amount)}
                                />
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default WalletHistory;
