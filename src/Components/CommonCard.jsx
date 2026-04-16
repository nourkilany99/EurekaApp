import React from 'react';
import './CommonCard.css';

const CommonCard = ({ title, subtitle, fields = [], children }) => {
  return (
    <div className="common-card">
      <div className="common-card-header">
        <p className="common-card-title">{title}</p>
        {subtitle && <p className="common-card-subtitle">{subtitle}</p>}
      </div>

      <div className="common-card-fields">
        {children
          ? children
          : fields.map((field) => (
              <div key={field.id} className="common-card-field">
                <label className="common-card-label">
                  {field.icon && (
                    <span className="common-card-label-icon">{field.icon}</span>
                  )}
                  <span>{field.label}</span>
                </label>
                <input
                  type={field.type || 'text'}
                  className="common-card-input"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default CommonCard;

