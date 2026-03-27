import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Logo light={true} />
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

                <div className="footer-links">
                    <h3>Support</h3>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                    <div className="footer-contact-info" style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                        <a href="mailto:support@norexa.online" style={{ color: '#1d4ed8', fontWeight: 'bold', fontSize: '0.9rem' }}>support@norexa.online</a>
                    </div>
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
