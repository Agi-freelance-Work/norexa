import React, { useState } from 'react';
import DealCard from '../components/DealCard';
import { topDeals } from '../data/mockData';
import './TopPicks.css';

const TopPicks = () => {
    const [activeFilter, setActiveFilter] = useState('All Deals');

    const filters = ['All Deals', 'Clothing', 'Footwear', 'Accessories'];

    const filteredDeals = topDeals.filter(deal => {
        if (activeFilter === 'All Deals') return true;
        return deal.filterCategory === activeFilter;
    });

    return (
        <div className="top-picks-page section">
            <div className="container">
                <header className="page-header">
                    <h1>Today's Top Picks</h1>
                    <p>Hand-curated fashion deals with massive discounts.</p>
                </header>

                <div className="filter-bar" style={{ display: 'flex', gap: '10px', marginBottom: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            style={{
                                padding: '0.65rem 1.8rem',
                                borderRadius: '100px',
                                border: '1px solid var(--color-border)',
                                background: activeFilter === f ? 'var(--color-primary)' : 'var(--color-white)',
                                color: activeFilter === f ? 'white' : 'var(--color-gray)',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: activeFilter === f ? 'var(--shadow-soft)' : 'none'
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="top-picks-grid" style={{ transition: 'all 0.3s ease-in-out' }}>
                    {filteredDeals.length > 0 ? filteredDeals.map(deal => (
                        <DealCard key={deal.id} deal={deal} />
                    )) : (
                        <div style={{ padding: '3rem', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--color-gray)' }}>No deals found for this category.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopPicks;
