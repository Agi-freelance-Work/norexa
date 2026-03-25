import React from 'react';

const TermsOfService = () => (
    <div className="section auto-container">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Affiliate Disclaimer</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>Norexa acts strictly as an affiliate deal aggregator. We systematically aggregate exclusive deals from premium fashion merchants including Myntra, Amazon, H&M, and Ajio. We receive commissions for purchases made transparently through our tracking links.</p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>No Liability Clause</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>We are strictly an advertising platform and are not professionally responsible for the fulfillment, shipping guarantees, returns, or quality of the physical clothing or products purchased through external merchant links. All financial transactions occur exclusively on the merchant's secured platform.</p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Coupon Accuracy Note</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>While our engineering team strives to keep all discounts, promo codes, and offers structurally verified and updated daily, merchant offers are permanently subject to rapid change. Coupons may expire, reach redemption limits, or be deactivated without prior notice directly from the vendor.</p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>External Links Disclaimer</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>Our website contains redirect links to external fashion infrastructures that are not operated by Norexa. We structurally have no control over the content, terms, and data collection practices of these external sites.</p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Contact Us</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>If you have any compliance questions regarding these terms, formally contact us at: <a href="mailto:norexa@gmail.com" style={{ color: '#1d4ed8', fontWeight: 'bold' }}>norexa@gmail.com</a></p>
        </div>
    </div>
);

export default TermsOfService;
