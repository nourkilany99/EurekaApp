import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { supabase } from '../supabaseClient';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import './RedeemPoints.css';

const RedeemPoints = () => {
    const navigate = useNavigate();
    const [rewards,      setRewards]      = useState([]);
    const [userPoints,   setUserPoints]   = useState(0);
    const [loading,      setLoading]      = useState(true);
    const [selected,     setSelected]     = useState(null);
    const [chosenBranch, setChosenBranch] = useState('');
    const [confirmed,    setConfirmed]    = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const { data: rewardData } = await supabase
                .from('redeem_rewards')
                .select('*, redeem_reward_branches(name)')
                .eq('is_active', true)
                .order('sort_order', { ascending: true });

            const shaped = (rewardData || []).map((r) => ({
                ...r,
                pointsRequired: r.points_required,
                branches: r.redeem_reward_branches.map((b) => b.name),
            }));
            setRewards(shaped);

            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: bal } = await supabase
                    .from('wallet_balances')
                    .select('points')
                    .eq('user_id', user.id)
                    .single();
                setUserPoints(bal?.points ?? 0);
            }

            setLoading(false);
        };
        fetchData();
    }, []);

    const handleRedeem = (reward) => {
        if (userPoints < reward.pointsRequired) return;
        setSelected(reward);
        setChosenBranch('');
        setConfirmed(false);
    };

    const redeemCode = useMemo(
        () => `EUREKA-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
        []
    );

    const handleConfirm = () => {
        if (!chosenBranch) return;
        setConfirmed(true);
    };

    const handleClose = () => {
        setSelected(null);
        setChosenBranch('');
        setConfirmed(false);
    };

    return (
        <div className="redeem-page">
            <MobileTool />
            <div className="redeem-page__inner">
                <PageHeaderBack title="REDEEM POINTS" />

                <div className="redeem-page__balance">
                    <span className="redeem-page__balance-dot">●</span>
                    <span className="redeem-page__balance-num">{userPoints.toLocaleString()}</span>
                    <span className="redeem-page__balance-label">points available</span>
                </div>

                <p className="redeem-page__hint">Tap an unlocked reward to redeem it at your nearest branch.</p>

                <div className="redeem-page__list">
                    {loading ? (
                        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14, textAlign: 'center', marginTop: 32 }}>Loading…</p>
                    ) : rewards.map((r) => {
                        const unlocked = userPoints >= r.pointsRequired;
                        return (
                            <div
                                key={r.id}
                                className={`redeem-card ${unlocked ? 'redeem-card--unlocked' : 'redeem-card--locked'}`}
                                onClick={() => handleRedeem(r)}
                            >
                                <div className="redeem-card__emoji-wrap" style={{ background: `${r.color}22`, borderColor: `${r.color}44` }}>
                                    <span className="redeem-card__emoji">{r.emoji}</span>
                                </div>
                                <div className="redeem-card__info">
                                    <p className="redeem-card__brand">{r.brand}</p>
                                    <p className="redeem-card__reward">{r.reward_label}</p>
                                    <div className="redeem-card__pts-row">
                                        <span className="redeem-card__pts-icon">●</span>
                                        <span className="redeem-card__pts">{r.pointsRequired.toLocaleString()} pts</span>
                                    </div>
                                </div>
                                <div className="redeem-card__right">
                                    {unlocked ? (
                                        <span className="redeem-card__badge redeem-card__badge--go">Redeem</span>
                                    ) : (
                                        <div className="redeem-card__lock-wrap">
                                            <span className="redeem-card__lock">🔒</span>
                                            <span className="redeem-card__need">
                                                Need {(r.pointsRequired - userPoints).toLocaleString()} more
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {selected && (
                <div className="redeem-modal__overlay" onClick={handleClose}>
                    <div className="redeem-modal" onClick={(e) => e.stopPropagation()}>
                        {confirmed ? (
                            <>
                                <div className="redeem-modal__success-icon">🎉</div>
                                <h3 className="redeem-modal__title">Redeemed!</h3>
                                <p className="redeem-modal__body">
                                    Your <strong>{selected.reward}</strong> from <strong>{selected.brand}</strong> is ready at:
                                </p>
                                <div className="redeem-modal__branch-pill">{chosenBranch}</div>

                                <div className="redeem-modal__qr-wrap">
                                    <QRCodeSVG
                                        value={`EUREKA-REDEEM::${selected.brand}::${selected.reward}::${chosenBranch}::${redeemCode}`}
                                        size={160}
                                        bgColor="transparent"
                                        fgColor="#ffffff"
                                        level="M"
                                    />
                                    <p className="redeem-modal__qr-code">{redeemCode}</p>
                                    <p className="redeem-modal__qr-hint">Ask the waiter to scan this code</p>
                                </div>

                                <button type="button" className="redeem-modal__btn" onClick={handleClose}>Done</button>
                            </>
                        ) : (
                            <>
                                <span className="redeem-modal__emoji">{selected.emoji}</span>
                                <h3 className="redeem-modal__title">{selected.brand}</h3>
                                <p className="redeem-modal__reward-label">{selected.reward}</p>
                                <p className="redeem-modal__cost">
                                    <span className="redeem-modal__cost-dot">●</span>
                                    {selected.pointsRequired.toLocaleString()} pts will be deducted
                                </p>
                                <p className="redeem-modal__pick-label">Choose a pickup branch:</p>
                                <div className="redeem-modal__branches">
                                    {selected.branches.map((b) => (
                                        <button
                                            key={b}
                                            type="button"
                                            className={`redeem-modal__branch-btn ${chosenBranch === b ? 'redeem-modal__branch-btn--active' : ''}`}
                                            onClick={() => setChosenBranch(b)}
                                        >
                                            {b}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className={`redeem-modal__btn ${!chosenBranch ? 'redeem-modal__btn--disabled' : ''}`}
                                    onClick={handleConfirm}
                                    disabled={!chosenBranch}
                                >
                                    Confirm Redemption
                                </button>
                                <button type="button" className="redeem-modal__cancel" onClick={handleClose}>Cancel</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RedeemPoints;
