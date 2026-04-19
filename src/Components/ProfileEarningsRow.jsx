import React from 'react';
import './ProfileEarningsRow.css';

const ProfileEarningsRow = ({ value, label }) => (
    <div className="profile-earnings-row">
        <p className="profile-earnings-row__val">{value}</p>
        <p className="profile-earnings-row__lbl">{label}</p>
    </div>
);

export default ProfileEarningsRow;
