import React, { useState } from 'react';
import MobileTool from '../components/MobileTool';
import SearchFilterBar from '../components/SearchFilterBar';
import CategoryChips from '../components/CategoryChips';
import SkillPickerCard from '../components/SkillPickerCard';
import './Skills 2.css';

const catImg =
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop';

const gridItems = [
    { id: 'g1' },
    { id: 'g2' },
    { id: 'g3' },
    { id: 'g4' },
    { id: 'g5' },
    { id: 'g6' },
];

const Skills2Page = () => {
    const [selectedId, setSelectedId] = useState('g6');

    return (
        <div className="skills2-page">
            <MobileTool />
            <div className="skills2-page__inner">
                <h1 className="skills2-page__title">CHOOSE YOUR SKILLS</h1>
                <p className="skills2-page__subtitle">Seamless task management experience</p>
                <SearchFilterBar placeholder="Makeup work" />
                <CategoryChips />
                <div className="skills2-page__grid">
                    {gridItems.map((item) => (
                        <SkillPickerCard
                            key={item.id}
                            imageUrl={catImg}
                            label="Pet walking"
                            selected={selectedId === item.id}
                            onToggle={() => setSelectedId(item.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills2Page;
