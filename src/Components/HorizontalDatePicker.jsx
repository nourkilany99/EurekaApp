import React, { useState } from 'react';
import './HorizontalDatePicker.css';

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const HorizontalDatePicker = () => {
    const [selected, setSelected] = useState(3);

    return (
        <div className="horizontal-date-picker">
            <div className="horizontal-date-picker__scroll">
                {days.map((d) => (
                    <button
                        key={d}
                        type="button"
                        className={`horizontal-date-picker__day ${
                            selected === d ? 'horizontal-date-picker__day--active' : ''
                        }`}
                        onClick={() => setSelected(d)}
                    >
                        {d}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HorizontalDatePicker;
