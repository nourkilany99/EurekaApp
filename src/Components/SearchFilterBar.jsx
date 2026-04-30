import React from 'react';
import './SearchFilterBar.css';
import GlobalSearchInput from './GlobalSearchInput';

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

const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const SearchFilterBar = ({ placeholder = 'Makeup work' }) => (
    <div className="search-filter-bar">
        <span className="search-filter-bar__filter" aria-hidden>
            <FilterIcon />
        </span>
        <div className="search-filter-bar__field">
            <SearchIcon />
            <GlobalSearchInput
                className="search-filter-bar__input"
                placeholder={placeholder}
                aria-label="Search tasks"
            />
        </div>
    </div>
);

export default SearchFilterBar;
