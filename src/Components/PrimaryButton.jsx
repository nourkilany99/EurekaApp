import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ children, type = 'button', className = '', ...rest }) => (
    <button type={type} className={`primary-button ${className}`.trim()} {...rest}>
        {children}
    </button>
);

export default PrimaryButton;
