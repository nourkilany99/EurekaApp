import React, { useState } from 'react';
import './LocationModal.css';

export default function LocationModal({ isOpen, onClose, onSelect }) {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchLocation = async (query) => {
        if (!query.trim()) { setResults([]); return; }
        setLoading(true);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5&countrycodes=eg`
            );
            const data = await res.json();
            setResults(data);
        } catch {
            setResults([]);
        }
        setLoading(false);
    };

    const close = () => {
        setSearch('');
        setResults([]);
        onClose();
    };

    const select = (r) => {
        const label = r.display_name.split(',').slice(0, 2).join(',');
        const coords = [parseFloat(r.lat), parseFloat(r.lon)];
        onSelect(label, coords);
        setSearch('');
        setResults([]);
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="loc-modal-overlay" onClick={close} />
            <div className="loc-modal">
                <div className="loc-modal-header">
                    <h3 className="loc-modal-title">Change Location</h3>
                    <button className="loc-modal-close" onClick={close}>✕</button>
                </div>
                <div className="loc-modal-search-wrap">
                    <input
                        className="loc-modal-input"
                        type="text"
                        placeholder="Search city, area..."
                        value={search}
                        autoFocus
                        onChange={(e) => {
                            setSearch(e.target.value);
                            searchLocation(e.target.value);
                        }}
                    />
                </div>
                {loading && <p className="loc-modal-loading">Searching...</p>}
                <div className="loc-modal-results">
                    {results.map((r) => (
                        <div key={r.place_id} className="loc-modal-result-item" onClick={() => select(r)}>
                            <span className="loc-modal-result-icon">📍</span>
                            <span className="loc-modal-result-text">{r.display_name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
