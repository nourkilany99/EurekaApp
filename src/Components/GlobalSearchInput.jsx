import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GlobalSearchInput = ({ 
    className, 
    placeholder = 'Search...', 
    value, 
    onChange, 
    readOnly = false,
    ...props 
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleInteraction = (e) => {
        // Prevent duplicate navigation loops
        if (location.pathname === '/search') {
            return;
        }

        // Navigate to /search
        navigate('/search');
    };

    return (
        <input
            type="text"
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onClick={handleInteraction}
            onFocus={handleInteraction}
            readOnly={readOnly}
            {...props}
        />
    );
};

export default GlobalSearchInput;
