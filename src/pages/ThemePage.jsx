import React, { useState } from 'react';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ListCard from '../components/ListCard';
import './UtilityPages.css';
import './ScreenPages.css';
import './FeaturePages.css';

const modes = ['Light', 'Dark', 'Auto'];
const accents = ['#2C5E49', '#3E64FF', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'];

const ThemePage = () => {
    const [mode, setMode] = useState('Dark');
    const [accent, setAccent] = useState('#8B5CF6');

    return (
        <div className="utility-page">
            <MobileTool />
            <div className="utility-page__inner ui-screen-stack">
                <PageHeaderBack title="THEME" />
                <ListCard title="Appearance">
                    <div className="feature-grid-2">
                        {modes.map((item) => (
                            <button key={item} type="button" className={`feature-option ${mode === item ? 'is-active' : ''}`} onClick={() => setMode(item)}>
                                {item}
                            </button>
                        ))}
                    </div>
                </ListCard>
                <ListCard title="Accent Colors">
                    <div className="feature-grid-2">
                        {accents.map((color) => (
                            <button
                                key={color}
                                type="button"
                                className={`feature-option ${accent === color ? 'is-active' : ''}`}
                                onClick={() => setAccent(color)}
                                style={{ background: color, minHeight: 40 }}
                            />
                        ))}
                    </div>
                </ListCard>
                <ListCard title="Theme Preview">
                    <div className="feature-card">
                        <p className="feature-title">Preview Card</p>
                        <p className="feature-muted">Current mode: {mode}</p>
                    </div>
                </ListCard>
            </div>
        </div>
    );
};

export default ThemePage;
