import React from 'react';
import './Home.css'; // Reusing some base styles or I could create About.css

const About = () => {
    return (
        <div className="about-page fade-in">
            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: '#1d4ed8', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Story</span>
                    <h1 style={{ fontSize: '3rem', marginTop: '1rem', color: '#1a1a1a' }}>About Norexa</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1.5rem', lineHeight: '1.8' }}>
                        Norexa was founded with a simple mission: to simplify the online shopping experience by bringing the best fashion deals and structurally verified coupons to your fingertips.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#1a1a1a' }}>Why We Do It</h2>
                        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            We understand that finding valid promotional codes can be frustrating. Expired links and fake offers waste your time and money. At Norexa, our engineering team and fashion experts work daily to aggregate, verify, and present only the most valuable offers from global brands like Myntra, Amazon, H&M, and Ajio.
                        </p>
                        <p style={{ color: '#666', lineHeight: '1.8' }}>
                            Our goal is to be your first stop before any fashion purchase, ensuring you never pay more than you have to.
                        </p>
                    </div>
                    <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ color: '#1d4ed8', marginBottom: '0.5rem' }}>01. Structural Verification</h4>
                            <p style={{ color: '#64748b' }}>Every coupon on our platform is cross-checked to ensure it delivers the promised savings.</p>
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ color: '#1d4ed8', marginBottom: '0.5rem' }}>02. Direct Merchant Links</h4>
                            <p style={{ color: '#64748b' }}>We provide secure, direct links to official merchant storefronts for safe transactions.</p>
                        </div>
                        <div>
                            <h4 style={{ color: '#1d4ed8', marginBottom: '0.5rem' }}>03. Daily Updates</h4>
                            <p style={{ color: '#64748b' }}>Our deal aggregators refresh our database every 24 hours to keep up with the fast-paced fashion world.</p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', background: '#1d4ed8', padding: '4rem', borderRadius: '32px', color: 'white' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to start saving?</h2>
                    <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '2rem' }}>Explore our hand-picked top deals across your favorite fashion stores.</p>
                    <a href="/" style={{ background: 'white', color: '#1d4ed8', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', transition: 'transform 0.2s' }}>Explore Top Picks</a>
                </div>
            </div>
        </div>
    );
};

export default About;
