import React from 'react';
import './Disclosure.css';

const Disclosure = () => {
    return (
        <div className="disclosure-page section">
            <div className="container">
                <div className="content-box">
                    <h1>Affiliate Disclosure</h1>
                    <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose">
                        <p>Welcome to Norexa. This Affiliate Disclosure is provided to fully disclose our relationship with the affiliate networks and merchants we promote.</p>

                        <h3>1. Affiliate Links</h3>
                        <p>Norexa participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites. This comes at absolutely no additional cost to you.</p>

                        <h3>2. Amazon Associates Program</h3>
                        <p>As an Amazon Associate, Norexa earns from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</p>

                        <h3>3. Objectivity and Independence</h3>
                        <p>Even though we may receive compensation for posts or advertisements, we constantly strive to provide our honest opinions, findings, beliefs, or experiences on those topics or products. The views and opinions expressed on this website are purely our own.</p>

                        <h3>4. Responsibility</h3>
                        <p>We do not guarantee that the prices, stock, or promotional codes listed on this site will be valid at the time of your purchase. Retailers are solely responsible for the fulfillment of all items purchased through affiliate links.</p>

                        <p>If you have any questions about this disclosure, please contact us at norexa@gmail.com.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Disclosure;
