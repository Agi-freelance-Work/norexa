import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
    return (
        <header className="header glass sticky-header">
            <div className="container header-container">
                <Link to="/" className="logo-section">
                    <Logo />
                </Link>

                <nav className="desktop-nav">
                    <ul>
                        <li><NavLink to="/top-picks">Top Picks</NavLink></li>
                        <li><NavLink to="/myntra">Myntra</NavLink></li>
                        <li><NavLink to="/amazon">Amazon</NavLink></li>
                        <li><NavLink to="/flipkart">Flipkart</NavLink></li>
                        <li><NavLink to="/hm">H&M</NavLink></li>
                        <li><NavLink to="/ajio">Ajio</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/affiliate-disclosure">Affiliate Disclosure</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
