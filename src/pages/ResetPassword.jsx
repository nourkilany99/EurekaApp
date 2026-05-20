import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import MobileTool from '../components/MobileTool';
import './Login.css';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Supabase puts the recovery token in the URL hash — listen for the session
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === 'PASSWORD_RECOVERY') setReady(true);
        });
        return () => subscription.unsubscribe();
    }, []);

    const handleReset = async (e) => {
        e.preventDefault();
        if (password !== confirm) { setError("Passwords don't match."); return; }
        if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
        setError('');
        setLoading(true);
        const { error: err } = await supabase.auth.updateUser({ password });
        if (err) {
            setError(err.message);
            setLoading(false);
        } else {
            setSuccess(true);
            setTimeout(() => navigate('/'), 2500);
        }
    };

    return (
        <>
            <MobileTool />
            <div className='content_login'>
                <div className='h_login_div' style={{ marginTop: '20%' }}>
                    <p className='h_login1'>Reset</p>
                    <div className='h_login2_div'>
                        <p className='login_decor'>Your</p>
                        <p className='h_login1'>Password</p>
                    </div>
                </div>

                {success ? (
                    <div style={{ textAlign: 'center', marginTop: 32 }}>
                        <p style={{ color: '#15d17a', fontSize: '4vw', fontWeight: 700 }}>Password updated!</p>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '3vw', marginTop: 8 }}>Redirecting to login…</p>
                    </div>
                ) : !ready ? (
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '3.5vw', marginTop: 32, textAlign: 'center' }}>
                        Waiting for reset link verification…
                    </p>
                ) : (
                    <form onSubmit={handleReset} className='login-form' style={{ marginTop: 32 }}>
                        <input
                            className='login-input'
                            type='password'
                            placeholder='New password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <input
                            className='login-input'
                            type='password'
                            placeholder='Confirm new password'
                            value={confirm}
                            onChange={e => setConfirm(e.target.value)}
                            required
                        />
                        {error && <p className='login-error'>{error}</p>}
                        <button className='login-submit-btn' type='submit' disabled={loading}>
                            {loading ? 'Updating…' : 'Set New Password'}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
};

export default ResetPassword;
