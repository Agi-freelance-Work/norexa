import React, { useState } from 'react';
import { Clock, CheckCircle, Copy, ExternalLink, Check } from 'lucide-react';
import { brandLogos } from '../data/mockData';
import './CouponCard.css';

const CouponCard = ({ coupon }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [copied, setCopied] = useState(false);
    const brandLogo = brandLogos[coupon.brand] || "";
    const redirectUrl = coupon.link || "#";

    const handleReveal = (e) => {
        e.preventDefault();
        if (coupon.code) {
            setIsRevealed(true);
            navigator.clipboard.writeText(coupon.code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleCopy = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(coupon.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="coupon-card glass">
            <div className="coupon-logo-section">
                <div className="logo-background-glow"></div>
                <img
                    src={brandLogo}
                    alt=""
                    className="coupon-brand-logo"
                />
            </div>

            <div className="coupon-content-wrapper">
                <div className="coupon-discount-badge">
                    <div className="badge-bg-accent"></div>
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

                    <div className="coupon-footer-info">
                        <span className="meta-item expiry"><Clock size={14} /> {coupon.expiry}</span>
                        <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="text-link">T&C Apply</a>
                    </div>
                </div>

                <div className="coupon-actions-area">
                    {coupon.code && (
                        <div 
                            className={`coupon-revealer-container ${isRevealed ? 'revealed' : ''}`} 
                            onClick={!isRevealed ? handleReveal : handleCopy}
                        >
                            <div className="code-display">
                                <span className="code-text">{coupon.code}</span>
                                {copied ? <Check size={16} className="copy-success-icon" /> : <Copy size={16} className="copy-icon" />}
                                {copied && <span className="copy-tooltip">Copied!</span>}
                            </div>
                            <div className="paper-overlay">
                                <div className="paper-content">
                                    <span className="show-code-text">SHOW CODE</span>
                                </div>
                                <div className="paper-shine"></div>
                            </div>
                        </div>
                    )}
                    
                    <a 
                        href={redirectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`cta-btn ${coupon.code ? 'secondary-cta' : 'primary-cta'}`}
                    >
                        {coupon.code ? 'Get Deal' : 'Activate Deal'} 
                        <ExternalLink size={16} className="cta-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;
