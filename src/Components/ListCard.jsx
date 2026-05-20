import React from 'react';
import Card from './Card';
import './UtilityBlocks.css';

const ListCard = ({ title, subtitle, right, children, className = '' }) => (
    <Card className={`list-card ${className}`.trim()}>
        {(title || right || subtitle) && (
            <div className="list-card__head">
                <div>
                    {title ? <p className="utility-section-title list-card__title luicy-text">{title}</p> : null}
                    {subtitle ? <p className="list-card__subtitle">{subtitle}</p> : null}
                </div>
                {right ? <div>{right}</div> : null}
            </div>
        )}
        {children}
    </Card>
);

export default ListCard;
