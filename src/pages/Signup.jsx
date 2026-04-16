import React from 'react';
import './Signup.css';
import MobileTool from '../Components/MobileTool';
import CardContainer from '../Components/CardContainer';

const Signup = () => {
  const steps = [
    {
      key: 'phone-password',
      title: 'Personal Informations',
      subtitle: '',
      fields: [

        {
          id: 'Email',
          label: 'Email',
          type: 'Email',
          placeholder: 'SeifIbrahim@gmail.com',
          icon: '🪪',
        },
        
        {
          id: 'phone',
          label: 'Phone number',
          type: 'tel',
          placeholder: '01000110754',
          icon: '📱',
        },
        {
          id: 'password',
          label: 'Create Password',
          type: 'password',
          placeholder: '************',
          icon: '🔒',
        },
        {
          id: 'nationalId',
          label: 'National ID number',
          type: 'number',
          placeholder: '220029720139271',
          icon: '🪪',
        }
      ],
    },
    {
      key: 'identity-verification',
      title: 'Identity Verification',
      subtitle: '',
      children: (
        <div className="onboarding-step-content">
          <p className="onboarding-step-label">National ID Upload</p>

          <label className="upload-box">
            <input type="file" accept="image/*" />
            <div className="upload-placeholder">
              <span className="upload-icon">⬆️</span>
              <span className="upload-text">Front photo</span>
            </div>
          </label>

          <label className="upload-box">
            <input type="file" accept="image/*" />
            <div className="upload-placeholder">
              <span className="upload-icon">⬇️</span>
              <span className="upload-text">Back photo</span>
            </div>
          </label>
        </div>
      ),
    },
    {
      key: 'face-scan-left',
      title: 'Face scan',
      subtitle: '',
      children: (
        <div className="onboarding-step-content">
          <p className="onboarding-step-label">Scan your left side</p>

          <div className="face-frame">
            <span className="face-corner tl" />
            <span className="face-corner tr" />
            <span className="face-corner bl" />
            <span className="face-corner br" />
            <p className="face-frame-text">left side</p>
          </div>
        </div>
      ),
    },
    {
      key: 'face-scan-right',
      title: 'Face scan',
      subtitle: '',
      children: (
        <div className="onboarding-step-content">
          <p className="onboarding-step-label">Scan your right side</p>

          <div className="face-frame">
            <span className="face-corner tl" />
            <span className="face-corner tr" />
            <span className="face-corner bl" />
            <span className="face-corner br" />
            <p className="face-frame-text">right side</p>
          </div>
        </div>
      ),
    },
  ];

    return (
        <>
        <MobileTool />

        <div className='bodySign'>

        <div className='log_sign_btns_div'>
          <p className='sign_btns'>Sign up</p>
          <p className='log_btns'>Login</p>
        </div>
        <div className="signup_onboarding_wrapper">
          <CardContainer steps={steps} onComplete={() => console.log('submit signup')} />
        </div>

        </div>

        </>
      );
}
 
export default Signup;