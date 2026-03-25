import React from 'react';
import DealCard from '../components/DealCard';
import { topDeals } from '../data/mockData';
import './TopPicks.css';

const TopPicks = () => {
    return (
        <div className="top-picks-page section">
            <div className="container">
                <header className="page-header">
                    <h1>Today's Top Picks</h1>
                    <p>Hand-curated fashion deals with massive discounts.</p>
                </header>

                <div className="filter-bar">
                    <button className="filter-btn active">All Deals</button>
                    <button className="filter-btn">Clothing</button>
                    <button className="filter-btn">Footwear</button>
                    <button className="filter-btn">Accessories</button>
                </div>

                <div className="top-picks-grid">
                    {topDeals.map(deal => (
                        <DealCard key={deal.id} deal={deal} />
                    ))}
                    {/* duplicating for demo visual fullness */}
                    {topDeals.map(deal => (
                        <DealCard key={deal.id + 'dup'} deal={{ ...deal, id: deal.id + 'dup' }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopPicks;
