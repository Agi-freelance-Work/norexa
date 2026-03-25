import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link to="/" className="logo footer-logo">Norexa</Link>
                    <p className="footer-desc">Your ultimate destination for the best fashion deals, coupons, and discounts across top stores.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/top-picks">Top Picks</Link></li>
                        <li><Link to="/myntra">Myntra Deals</Link></li>
                        <li><Link to="/blogs">Fashion Blog</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Legal</h3>
                    <ul>
                        <li><Link to="/affiliate-disclosure">Affiliate Disclosure</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Norexa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
