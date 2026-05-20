import React, { Component } from 'react';
import './Login.css';
import MobileTool from '../components/MobileTool';
import logo from '../Assets/IMG/logo.svg'
import LogBtn from '../Common/LogBtn';
import emailIcon from '../Assets/IMG/email_icon.svg';
import gmailIcon from '../Assets/IMG/google_icon.svg';
import { Link, useNavigate } from "react-router-dom";



const Home = () => {
    return (
        <>
            <MobileTool />

            <div className='content_login'>

                <div className='logo_login_div'>
                    <img src={logo} alt='' className='logo_login' />
                </div>

                <div className='h_login_div'>
                    <p className='h_login1'>Let’s Get</p>
                    <div className='h_login2_div'>
                        <p className='login_decor'>You</p>
                        <p className='h_login1'>Started</p>
                    </div>
                </div>

                <p className='login_p2'>Create your account and start turning your everyday skills into real cash.</p>
                <Link to='/home' className='link'>
                    <LogBtn text='Continue with email address' icon={emailIcon} style={{ width: "60vw" }} />
                </Link>
                <Link to='/home' className='link'>
                    <LogBtn text='Continue with email address' icon={gmailIcon} style={{ width: "60vw" }} />
                </Link>
                <Link to='/home' className='link'>
                    <LogBtn text='Continue with email address' icon={emailIcon} style={{ width: "60vw" }} />
                </Link>
                <Link to='/Signup' className='link'>
                    <p className='signup_btn'>Signup</p>
                </Link>

            </div>

        </>
    );
}

export default Home;