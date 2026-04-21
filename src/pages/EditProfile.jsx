import React from 'react';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import './UtilityPages.css';

const EditProfile = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner">
            <PageHeaderBack title="EDIT PROFILE" />

            <div className="profile-photo">👤</div>
            <button type="button" className="change-photo">Change Photo</button>

            <p className="field-label">Full Name</p>
            <input className="field-input" defaultValue="Seif Ibrahim" />

            <p className="field-label">Age</p>
            <input className="field-input" defaultValue="23" />

            <p className="field-label">Bio</p>
            <textarea className="field-input" />

            <p className="field-label">Location</p>
            <input className="field-input" defaultValue="Nasr city, Hassan el ma'moon" />

            <p className="field-label">Phone Number</p>
            <input className="field-input" defaultValue="+20 123 456 7890" />
        </div>
    </div>
);

export default EditProfile;
