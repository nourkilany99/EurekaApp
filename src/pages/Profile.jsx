import React from 'react';
import { Link } from 'react-router-dom';
import MobileTool from '../components/MobileTool';
import ProfileHero from '../components/ProfileHero';
import ProfileIdentityBar from '../components/ProfileIdentityBar';
import ProfileSectionCard from '../components/ProfileSectionCard';
import ProfileSkillChip from '../components/ProfileSkillChip';
import ProfileReviewItem from '../components/ProfileReviewItem';
import ProfileEarningsRow from '../components/ProfileEarningsRow';
import './Profile.css';

const Profile = () => (
    <div className="profile-page">
        <MobileTool />
        <div className="profile-page__inner">
            <ProfileHero />
            <ProfileIdentityBar />

            <ProfileSectionCard pill="Details">
                <p className="profile-page__detail-line">
                    <span className="profile-page__lbl">Member since date: </span>
                    <span className="profile-page__val">2 march 2026</span>
                </p>
                <p className="profile-page__detail-line">
                    <span className="profile-page__lbl">Location: </span>
                    <span className="profile-page__val">Nasr city, Hassan el ma&apos;moon</span>
                </p>
                <p className="profile-page__detail-line">
                    <span className="profile-page__lbl">bio: </span>
                    <span className="profile-page__val" />
                </p>
            </ProfileSectionCard>

            <ProfileSectionCard pill="Skills">
                <div className="profile-page__skills">
                    <ProfileSkillChip>Dog Walking</ProfileSkillChip>
                    <ProfileSkillChip>Babysitting</ProfileSkillChip>
                    <ProfileSkillChip>Moving Assistance</ProfileSkillChip>
                    <ProfileSkillChip>Makeup Services</ProfileSkillChip>
                </div>
            </ProfileSectionCard>

            <ProfileSectionCard pill="Ratings & Reviews" showEdit={false}>
                <ProfileReviewItem
                    rating="4.5"
                    author="Ahmed K."
                    quote="Helped me move some boxes quickly. Great attitude."
                />
                <ProfileReviewItem
                    rating="5.0"
                    author="Sarah M."
                    quote="Very responsible and arrived on time. My dog loved the walk!"
                />
                <ProfileReviewItem
                    rating="5.0"
                    author="Lina R."
                    quote="Very responsible and arrived on time. My dog loved the walk!"
                />

                <Link
                    to="/reviews-ratings"
                    className="profile-page__view-reviews-btn"
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '12px',
                        marginTop: '16px',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: '#fff',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '14px',
                        border: '1px solid rgba(255, 255, 255, 0.12)'
                    }}
                >
                    View Reviews
                </Link>
            </ProfileSectionCard>

            <ProfileSectionCard pill="Earnings Summary" showEdit={false}>
                <ProfileEarningsRow value="120,33 egp" label="Total earnings" />
                <ProfileEarningsRow value="325 egp" label="Last payment received" />
            </ProfileSectionCard>
        </div>
    </div>
);

export default Profile;
