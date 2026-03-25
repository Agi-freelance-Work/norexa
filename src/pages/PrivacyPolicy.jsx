import React from 'react';

const PrivacyPolicy = () => (
    <div className="section auto-container">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Data Collection</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>We collect minimal information necessary to provide you with the best fashion deals. This includes basic analytics to understand which coupons are most popular to better tailor our Top Picks recommendations.</p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Affiliate Disclosure</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>Norexa is a participant in various high-tier fashion affiliate marketing programs. When you click on links to various merchants on this site and make a purchase, it can result in this site earning a referral commission.</p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Cookies Usage</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>We use analytical and functional cookies to ensure you get the best experience on our website. Cookies actively help us track the performance of different affiliate links securely and accurately.</p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Contact Us</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>For any privacy-related inquiries, data requests, or partnership questions, please reach out directly via email at: <a href="mailto:norexa@gmail.com" style={{ color: '#1d4ed8', fontWeight: 'bold' }}>norexa@gmail.com</a></p>
        </div>
    </div>
);

export default PrivacyPolicy;
