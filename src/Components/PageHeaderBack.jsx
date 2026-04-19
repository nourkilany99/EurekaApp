import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageHeaderBack.css';

const BackIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/**
 * @param {string} [title] — single-line display title
 * @param {string[]} [titleLines] — multi-line title (e.g. PENDING / REQUESTS)
 * @param {string} [subtitle] — line below title (e.g. schedule month)
 * @param {React.ReactNode} [right] — right-side control (replaces empty spacer)
 */
const PageHeaderBack = ({ title, titleLines, subtitle, right, backTo = -1 }) => {
    const navigate = useNavigate();

    const titleBlock = titleLines?.length ? (
        <h1 className="page-header-back__title page-header-back__title--multiline">
            {titleLines.map((line, i) => (
                <span key={`${i}-${line}`} className="page-header-back__title-line">
                    {line}
                </span>
            ))}
        </h1>
    ) : (
        <h1 className="page-header-back__title">{title}</h1>
    );

    return (
        <header className={`page-header-back ${subtitle ? 'page-header-back--with-sub' : ''}`}>
            <button
                type="button"
                className="page-header-back__btn"
                onClick={() => navigate(backTo)}
                aria-label="Go back"
            >
                <BackIcon />
            </button>
            <div className="page-header-back__center">
                {titleBlock}
                {subtitle ? <p className="page-header-back__subtitle">{subtitle}</p> : null}
            </div>
            {right ? (
                <div className="page-header-back__right">{right}</div>
            ) : (
                <span className="page-header-back__spacer" aria-hidden />
            )}
        </header>
    );
};

export default PageHeaderBack;
