import React from 'react';

const ProgressBar = ({ value = 0 }) => (
    <div className="ui-progress">
        <div className="ui-progress__fill" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
);

export default ProgressBar;
