import React from 'react';
import DealCard from '../components/DealCard';
import BlogCard from '../components/BlogCard';
import { topDeals, blogPosts } from '../data/mockData';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-content">
                    <h1>Best Fashion Deals & Coupons</h1>
                    <p>Discover handpicked deals, verified coupons, and massive savings across top fashion stores like Myntra, Amazon, H&M, and Ajio.</p>
                    <div className="hero-actions">
                        <Link to="/top-picks" className="btn-primary">View Top Deals</Link>
                        <Link to="/myntra" className="btn-outline">Browse Stores</Link>
                    </div>
                </div>
            </section>

            {/* Featured Top Picks */}
            <section className="featured-section section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Top Picks</h2>
                        <Link to="/top-picks" className="view-all">View All deals &rarr;</Link>
                    </div>
                    <div className="deals-grid">
                        {topDeals.map(deal => (
                            <DealCard key={deal.id} deal={deal} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter-section section">
                <div className="container newsletter-container">
                    <div className="newsletter-content">
                        <h2>Never Miss a Deal Again!</h2>
                        <p>Subscribe to our newsletter and get the best fashion deals and exclusive coupons delivered to your inbox.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit" className="btn-primary">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="blog-preview-section section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>Latest Styling Tips & Guides</h2>
                        <Link to="/blogs" className="view-all">Read More &rarr;</Link>
                    </div>
                    <div className="blogs-grid">
                        {blogPosts.map(blog => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
