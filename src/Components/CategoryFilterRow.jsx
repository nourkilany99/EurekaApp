import React from 'react';
import './CategoryFilterRow.css';
import CategoryChips from './CategoryChips';

const FilterIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M4 6h16M7 12h10M10 18h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const CategoryFilterRow = ({ chipItems }) => (
    <div className="category-filter-row">
        <span className="category-filter-row__filter" aria-hidden>
            <FilterIcon />
        </span>
        <CategoryChips items={chipItems} />
    </div>
);

export default CategoryFilterRow;
