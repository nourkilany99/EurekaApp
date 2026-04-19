import React from 'react';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import SearchFilterBar from '../Components/SearchFilterBar';
import SkillAddChip from '../Components/SkillAddChip';
import SkillExploreCard from '../Components/SkillExploreCard';
import PrimaryButton from '../Components/PrimaryButton';
import './Skills.css';

const catImg =
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop';

const SkillsPage = () => (
    <div className="skills-page">
        <MobileTool />
        <div className="skills-page__inner">
            <PageHeaderBack
                titleLines={['CHOOSE YOUR', 'SKILLS']}
                subtitle="Add skills to find more opportunities"
                right={
                    <button type="button" className="skills-page__save">
                        Save
                    </button>
                }
            />
            <SearchFilterBar placeholder="Makeup work" />
            <h2 className="skills-page__h2">Add to you</h2>
            <div className="skills-page__add-grid">
                <SkillAddChip icon="🐾" label="Pet walking" />
                <SkillAddChip icon="🐕" label="Dog Walking" />
                <SkillAddChip icon="⏱" label="Babysitting" />
                <SkillAddChip icon="📦" label="Moving Help" />
                <SkillAddChip icon="💄" label="Makeup Services" wide />
            </div>
            <h2 className="skills-page__h2 skills-page__h2--explore">Explore skills</h2>
            <div className="skills-page__explore-grid">
                <SkillExploreCard imageUrl={catImg} label="Pet walking" />
                <SkillExploreCard imageUrl={catImg} label="Pet walking" />
                <SkillExploreCard imageUrl={catImg} label="Pet walking" />
                <SkillExploreCard imageUrl={catImg} label="Pet walking" />
            </div>
            <PrimaryButton type="button" className="skills-page__explore-btn">
                Explore more
            </PrimaryButton>
        </div>
    </div>
);

export default SkillsPage;
