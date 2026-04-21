import React from 'react';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import './UtilityPages.css';

const services = [
    { title: 'Dog Walking', location: 'Zamalek', time: '10:00 AM', price: 120, image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop' },
    { title: 'Babysitting', location: 'Nasr City', time: '2:00 PM', price: 350, image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop' },
    { title: 'House Cleaning', location: 'Maadi', time: '9:00 AM', price: 280, image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop' },
    { title: 'Makeup Artist', location: 'Heliopolis', time: '6:00 PM', price: 450, image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop' },
];

const Search = () => (
    <div className="utility-page">
        <MobileTool />
        <div className="utility-page__inner">
            <PageHeaderBack title="SEARCH" />
            <div className="search-topbar">
                <div className="utility-search utility-search--tight">
                    <span>⌕</span>
                    <input defaultValue="dog walking" />
                </div>
                <button type="button" className="search-filter-btn">≡</button>
            </div>
            <div className="chips-row">
                <button type="button" className="chip active">Pet Care ✕</button>
                <button type="button" className="chip">Near me (5 km) ✕</button>
                <button type="button" className="chip">Today ✕</button>
            </div>

            <section className="search-grid">
                {services.map((service) => (
                    <article key={service.title} className="search-card">
                        <div className="search-card__img" style={{ backgroundImage: `url(${service.image})` }}>
                            <span className="search-card__price">{service.price} EGP</span>
                        </div>
                        <div className="search-card__body">
                            <h4>{service.title}</h4>
                            <p>📍 {service.location}</p>
                            <p>{service.time}</p>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    </div>
);

export default Search;
