import React from 'react';
import './UtilityBlocks.css';

const ActionButton = ({ children, type = 'button', variant = 'primary', className = '', ...rest }) => (
    <button type={type} className={`action-button action-button--${variant} ${className}`.trim()} {...rest}>
        {children}
    </button>
);

export default ActionButton;
