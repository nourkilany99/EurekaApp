import React from 'react';
import './UtilityBlocks.css';

const StatusBadge = ({ children, tone = 'neutral', className = '' }) => (
    <span className={`status-badge status-badge--${tone} ${className}`.trim()}>{children}</span>
);

export default StatusBadge;
