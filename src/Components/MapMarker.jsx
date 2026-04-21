import React from 'react';

const MapMarker = ({ left, top, variant = 'light' }) => (
    <span
        className={`maps-open__pin maps-open__pin--${variant}`}
        style={{ left, top }}
        aria-hidden
    />
);

export default MapMarker;
