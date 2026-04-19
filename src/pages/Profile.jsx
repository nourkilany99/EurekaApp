import React from 'react';
import MobileTool from '../Components/MobileTool';
import ProfileHero from '../Components/ProfileHero';
import ProfileIdentityBar from '../Components/ProfileIdentityBar';
import ProfileSectionCard from '../Components/ProfileSectionCard';
import ProfileSkillChip from '../Components/ProfileSkillChip';
import ProfileReviewItem from '../Components/ProfileReviewItem';
import ProfileEarningsRow from '../Components/ProfileEarningsRow';
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
            </ProfileSectionCard>

            <ProfileSectionCard pill="Earnings Summary" showEdit={false}>
                <ProfileEarningsRow value="120,33 egp" label="Total earnings" />
                <ProfileEarningsRow value="325 egp" label="Last payment received" />
            </ProfileSectionCard>
        </div>
    </div>
);

export default Profile;
