import React, { Component } from 'react';
import './Signup.css';
import MobileTool from '../Components/MobileTool';
import CommonCard from '../Components/CommonCard';
import BtnNext from '../Common/BtnNext';
import decor_PI from '../Assets/IMG/hand-drawn-flat-groovy-psychedelic-frames-collection-removebg-preview (1) 2.png'

const Signup = () => {
    return (
        <>
        <MobileTool />

        <div className='bodySign'>

        <div className='log_sign_btns_div'>
          <p className='sign_btns'>Sign up</p>
          <p className='log_btns'>Login</p>
        </div>

        <div className='PI_div'>
          <p className='PI_p1'>Personal Information </p>
          <p className='PI_p2'>Fill in your personal details to get started.</p>
        </div>

        <CommonCard
          fields={[
            {
              id: 'fullName',
              label: 'Full name',
              placeholder: 'Ahmed Hany',
              icon: '👤',
            },
            {
              id: 'email',
              label: 'Email',
              type: 'email',
              placeholder: 'AhmedHany@gmail.com',
              icon: '✉️',
            },
            {
              id: 'phone',
              label: 'Phone number',
              type: 'tel',
              placeholder: '+20 1X XXX XXXX',
              icon: '📱',
            },
          ]}
        />

        <BtnNext  />

        <div className='div_decor_pi'>
          <img src={decor_PI} alt='' className='decor_PI' />
        </div>

        </div>

        </>
      );
}
 
export default Signup;