import React from 'react';
import './SelectionOption.css';

const SelectionOption = ({ name, value, checked, onChange, children }) => (
    <label className={`selection-option ${checked ? 'selection-option--selected' : ''}`}>
        <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={() => onChange(value)}
            className="selection-option__input"
        />
        <span className="selection-option__radio" aria-hidden />
        <span className="selection-option__text">{children}</span>
    </label>
);

export default SelectionOption;
