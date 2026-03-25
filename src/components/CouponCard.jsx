import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import { brandLogos } from '../data/mockData';
import './CouponCard.css';

const CouponCard = ({ coupon }) => {
    const brandLogo = brandLogos[coupon.brand] || "";
    const redirectUrl = coupon.link || "#";

    return (
        <div className="coupon-card">
            <div className="coupon-logo-section">
                <img
                    src={brandLogo}
                    alt=""
                    className="coupon-brand-logo"
                />
            </div>

            <div className="coupon-content-wrapper">
                <div className="coupon-discount-badge">
                    <h3>{coupon.discount}</h3>
                    <span>{coupon.type}</span>
                </div>

                <div className="coupon-details">
                    <div className="coupon-header">
                        {coupon.badge && <span className="coupon-badge">{coupon.badge}</span>}
                        {coupon.verified && <span className="meta-item verified"><CheckCircle size={14} /> Verified</span>}
                    </div>
                    <h4 className="coupon-title">{coupon.title}</h4>
                    <p className="coupon-desc">{coupon.description}</p>

                    <div className="coupon-footer-links">
                        <span className="meta-item expiry"><Clock size={14} /> {coupon.expiry}</span>
                        <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="text-link" style={{ textDecoration: 'none' }}>Terms & Conditions</a>
                    </div>
                </div>

                <div className="coupon-action">
                    <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                        Get Deal
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;
