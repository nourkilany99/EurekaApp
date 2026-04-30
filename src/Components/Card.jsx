import React from 'react';

const Card = ({ className = '', children }) => (
    <section className={`utility-block ${className}`.trim()}>
        {children}
    </section>
);

export default Card;
