import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CouponCard from '../components/CouponCard';
import { mockCoupons, brandLogos } from '../data/mockData';
import './BrandPage.css';

const BrandPage = ({ fixedBrand }) => {
    const { brandId: paramBrandId } = useParams();
    const brandId = fixedBrand || paramBrandId;
    const coupons = mockCoupons[brandId];
    const brandLogo = brandLogos[brandId] || "";

    const [activeFilter, setActiveFilter] = useState('All');

    if (!coupons) {
        return <Navigate to="/top-picks" />;
    }

    const brandName = brandId.charAt(0).toUpperCase() + brandId.slice(1);

    // Filter Logic
    const filteredCoupons = coupons.filter(c => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Codes') return c.code && c.code.length > 0;
        if (activeFilter === 'Deals') return !c.code || c.code.length === 0;
        if (activeFilter === 'Cashback') return c.type === 'CASHBACK';
        return true;
    });

    const topCoupons = filteredCoupons.filter(c => c.category === 'Top');
    const latestCoupons = filteredCoupons.filter(c => c.category === 'Latest');
    const trendingCoupons = filteredCoupons.filter(c => c.category === 'Trending');

    const renderSection = (title, items) => {
        if (items.length === 0) return null;
        return (
            <div className="coupon-section">
                <h2 className="section-title">{title}</h2>
                {items.map(coupon => <CouponCard key={coupon.id} coupon={coupon} />)}
            </div>
        );
    };

    return (
        <div className="brand-page section">
            <div className="container">

                {/* GrabOn Style Header */}
                <header className="brand-header">
                    <div className="brand-header-left">
                        <div className="brand-logo-container">
                            <img
                                src={brandLogo}
                                alt=""
                                className="brand-header-image"
                            />
                        </div>
                        <div className="brand-header-info">
                            <h1>{brandName} Coupons & Offers</h1>
                            <p>Latest {brandName} Coupons, Offers, and Promo Codes to help you save maximum on your fashion shopping today.</p>
                        </div>
                    </div>
                    <div className="brand-header-right">
                        <div className="active-offers-badge">
                            <span className="count">{coupons.length}</span>
                            <span className="label">Active Offers</span>
                        </div>
                    </div>
                </header>

                <div className="brand-content-grid">
                    <div className="brand-main">
                        <div className="filter-tabs">
                            {['All', 'Codes', 'Deals', 'Cashback'].map(type => (
                                <button
                                    key={type}
                                    className={`filter-tab ${activeFilter === type ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(type)}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        <div className="coupons-container">
                            {renderSection(`Top ${brandName} Coupons`, topCoupons)}
                            {renderSection('Latest Offers', latestCoupons)}
                            {renderSection('Trending Deals', trendingCoupons)}

                            {filteredCoupons.length === 0 && (
                                <div className="no-results">No offers found for this filter. Try another one!</div>
                            )}
                        </div>
                    </div>

                    <aside className="brand-sidebar">
                        <div className="sidebar-widget">
                            <h3>About {brandName}</h3>
                            <p>We hand-verify our {brandName} discount codes daily to ensure 100% working coupons for you. Find the top deals on clothing, footwear, and accessories.</p>
                        </div>
                        <div className="sidebar-widget bg-light">
                            <h4>Never Miss a Deal</h4>
                            <p>Get the latest {brandName} offers directly to your inbox!</p>
                            <input type="email" placeholder="Enter email address" className="sidebar-input" />
                            <button className="btn-primary w-100 mt-2 rounded">Subscribe</button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BrandPage;
