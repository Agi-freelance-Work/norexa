import React from 'react';
import { brandLogos } from '../data/mockData';
import './DealCard.css';

const DealCard = ({ deal }) => {
    const storeKey = deal.store.toLowerCase();
    const brandLogo = brandLogos[storeKey] || "";
    const redirectUrl = deal.link || "#";

    return (
        <div className="compact-deal-card">
            <div className="cdc-logo-wrapper">
                <img
                    src={brandLogo}
                    alt=""
                    className="cdc-brand-logo"
                />
            </div>
            <div className="cdc-content">
                <div className="cdc-badge">{deal.discount}</div>
                <h4 className="cdc-title">{deal.title}</h4>
                <p className="cdc-desc">Verified offer for {deal.store}. Grab this exclusive deal before it expires.</p>
            </div>
            <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="btn-primary cdc-btn" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', boxSizing: 'border-box', alignItems: 'center' }}>Get Deal</a>
        </div>
    );
};

export default DealCard;
