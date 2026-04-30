import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import './UtilityPages.css';

const EditProfile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        name: 'Seif Ibrahim',
        age: '23',
        bio: 'Art designer, dog friendly',
        location: "Nasr city, Hassan el ma'moon",
        phone: '+20 123 456 7890'
    });

    useEffect(() => {
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        localStorage.setItem('userProfile', JSON.stringify(profile));
        navigate('/profile');
    };

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner">
                <PageHeaderBack title="EDIT PROFILE" />

                <div className="profile-photo">👤</div>
                <button type="button" className="change-photo">Change Photo</button>

                <p className="field-label">Full Name</p>
                <input 
                    name="name"
                    className="field-input" 
                    value={profile.name} 
                    onChange={handleChange}
                />

                <p className="field-label">Age</p>
                <input 
                    name="age"
                    className="field-input" 
                    value={profile.age} 
                    onChange={handleChange}
                />

                <p className="field-label">Bio</p>
                <textarea 
                    name="bio"
                    className="field-input" 
                    value={profile.bio} 
                    onChange={handleChange}
                    rows="3"
                />

                <p className="field-label">Location</p>
                <input 
                    name="location"
                    className="field-input" 
                    value={profile.location} 
                    onChange={handleChange}
                />

                <p className="field-label">Phone Number</p>
                <input 
                    name="phone"
                    className="field-input" 
                    value={profile.phone} 
                    onChange={handleChange}
                />

                <button 
                    type="button" 
                    className="save-profile-btn"
                    onClick={handleSave}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default EditProfile;
