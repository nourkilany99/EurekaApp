import React from 'react';
import './UtilityBlocks.css';

const ToggleItem = ({ title, subtitle, checked = false, onChange }) => (
    <div className="toggle-item">
        <div className="toggle-item__copy">
            <p>{title}</p>
            {subtitle ? <span>{subtitle}</span> : null}
        </div>
        <button
            type="button"
            className={`toggle toggle-item__switch ${checked ? 'is-on' : ''}`}
            onClick={onChange}
            aria-label={`${title} ${checked ? 'enabled' : 'disabled'}`}
        />
    </div>
);

export default ToggleItem;
