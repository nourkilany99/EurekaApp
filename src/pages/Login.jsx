import React, { useState } from 'react';
import './Login.css';
import MobileTool from '../components/MobileTool';
import logo from '../Assets/IMG/logo.svg';
import { supabase } from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) {
            setError(err.message);
            setLoading(false);
        } else {
            navigate('/home');
        }
    };

    return (
        <>
            <MobileTool />
            <div className='content_login'>
                <div className='logo_login_div'>
                    <img src={logo} alt='' className='logo_login' />
                </div>

                <div className='h_login_div'>
                    <p className='h_login1'>Let's Get</p>
                    <div className='h_login2_div'>
                        <p className='login_decor'>You</p>
                        <p className='h_login1'>Started</p>
                    </div>
                </div>

                <p className='login_p2'>Sign in to your account and start turning your everyday skills into real cash.</p>

                <form onSubmit={handleLogin} className='login-form'>
                    <input
                        className='login-input'
                        type='email'
                        placeholder='Email address'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className='login-input'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className='login-error'>{error}</p>}
                    <button className='login-submit-btn' type='submit' disabled={loading}>
                        {loading ? 'Signing in…' : 'Sign In'}
                    </button>
                </form>

                <Link to='/Signup' className='link'>
                    <p className='signup_btn'>Sign Up</p>
                </Link>
            </div>
        </>
    );
};

export default LoginPage;
