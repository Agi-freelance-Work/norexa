export const brandLogos = {
    myntra: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png",
    amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    hm: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    ajio: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAyMDAgNjAiPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iNDIiIGZpbGw9IiMyYzQxNWMiIGxldHRlci1zcGFjaW5nPSIyIj5BSklPPC90ZXh0Pjwvc3ZnPg=="
};

const generateCoupons = (brand, templates) => {
    return templates.map((t, idx) => ({
        id: `${brand}-${idx}`,
        brand,
        ...t
    }));
};

export const mockCoupons = {
    myntra: generateCoupons('myntra', [
        { category: 'Top', type: 'OFF', discount: '80%', badge: 'SALE', title: 'Up to 80% OFF on Top Fashion Brands', description: 'Applicable on Puma, Roadster, HRX, and more. No minimum order required.', code: '', expiry: 'Ends Soon', verified: true, link: 'https://www.myntra.com/shop/men' },
        { category: 'Top', type: 'OFF', discount: '₹400', badge: 'EXCLUSIVE', title: 'Flat ₹400 OFF on First Order', description: 'Use this code to get an instant discount on your first fashion purchase above ₹1999.', code: 'MYNTRA400', expiry: 'Valid till month end', verified: true, link: 'https://www.myntra.com/shop/women' },
        { category: 'Top', type: 'CASHBACK', discount: '10%', badge: 'PAYMENT', title: '10% Cashback via ICICI Bank Credit Cards', description: 'Enjoy instant cashback on all apparel with select credit cards.', code: '', expiry: 'Ongoing', verified: true, link: 'https://www.myntra.com/personal-care' },
        { category: 'Latest', type: 'OFF', discount: '60%', badge: 'DEAL', title: 'Min 60% OFF on Men\'s Casual Wear', description: 'Shop shirts, t-shirts, and jeans from top brands at minimum 60% off.', code: '', expiry: 'Limited Time', verified: true, link: 'https://www.myntra.com/men-casual-wear' },
        { category: 'Latest', type: 'OFF', discount: '50%', badge: 'FESTIVE', title: 'Half Price Store: Flat 50% OFF', description: 'Grab gorgeous ethnic wear at exactly half price.', code: 'HALF50', expiry: 'Today Only', verified: true, link: 'https://www.myntra.com/half-price-store' },
        { category: 'Latest', type: 'OFF', discount: '₹200', badge: 'NEW', title: 'Extra ₹200 OFF on Beauty Products', description: 'Valid on top makeup and skincare brands over ₹999.', code: 'BEAUTY200', expiry: 'In 3 Days', verified: true, link: 'https://www.myntra.com/beauty' },
        { category: 'Trending', type: 'OFF', discount: '70%', badge: 'TRENDING', title: 'Women\'s Footwear Clearance: Up to 70% OFF', description: 'Limited stock available on premium heels, flats, and sneakers.', code: '', expiry: 'While stocks last', verified: false, link: 'https://www.myntra.com/women-footwear' },
        { category: 'Trending', type: 'OFF', discount: 'Free', badge: 'SHIPPING', title: 'Free Shipping on All Orders Above ₹799', description: 'No hidden fees. Valid for standard delivery across India.', code: '', expiry: 'Ongoing', verified: true, link: 'https://www.myntra.com/shop/free-shipping' },
        { category: 'Trending', type: 'CASHBACK', discount: 'Flat ₹50', badge: 'WALLET', title: 'Flat ₹50 Cashback via Paytm', description: 'Pay using Paytm Wallet and get guaranteed ₹50 cashback on min spend of ₹500.', code: '', expiry: 'Valid till 30th', verified: true, link: 'https://www.myntra.com/offers' },
        { category: 'Top', type: 'OFF', discount: '40%', badge: 'KIDS', title: 'Up to 40% OFF on Kids Clothing', description: 'Dress your little ones with the best trends. Mothercare, UFO, and more.', code: '', expiry: 'Within a week', verified: true, link: 'https://www.myntra.com/kids' },
        { category: 'Latest', type: 'OFF', discount: '₹1000', badge: 'LUXURY', title: 'Save ₹1000 on Premium Watches', description: 'Valid on Fossil, Casio, Titan when you purchase above ₹5000.', code: 'WATCH1K', expiry: 'Ends Soon', verified: true, link: 'https://www.myntra.com/watches' },
        { category: 'Trending', type: 'OFF', discount: '15%', badge: 'STUDENT', title: 'Student Discount: Extra 15% OFF', description: 'Verify your student ID with UNiDAYS and unlock an extra 15% off.', code: 'STUDENT15', expiry: 'Ongoing', verified: true, link: 'https://www.myntra.com/student-discount' },
        { category: 'Top', type: 'OFF', discount: 'BOGO', badge: 'BOGO', title: 'Buy 1 Get 1 Free on Select T-Shirts', description: 'Available on Roadster and HRX basic tees. Mix and match allowed.', code: '', expiry: 'Tomorrow', verified: true, link: 'https://www.myntra.com/men-tshirts' },
        { category: 'Latest', type: 'CASHBACK', discount: '5%', badge: 'REWARDS', title: '5% Myntra Insider Points', description: 'Earn Insider points on every purchase to redeem on future orders.', code: '', expiry: 'Ongoing', verified: true, link: 'https://www.myntra.com/myntrainsider' },
        { category: 'Trending', type: 'OFF', discount: '65%', badge: 'WINTER', title: 'Winter Wear Collection: Up to 65% OFF', description: 'Jackets, sweaters, and hoodies from top brands on clearance.', code: '', expiry: 'Ends Soon', verified: true, link: 'https://www.myntra.com/winterwear' },
    ]),
    amazon: generateCoupons('amazon', [
        { category: 'Top', type: 'OFF', discount: '70%', badge: 'FASHION', title: 'Amazon Fashion Wardrobe Refresh: Up to 70% OFF', description: 'Massive discounts across all clothing categories.', code: '', expiry: 'Ends this weekend', verified: true, link: 'https://www.amazon.in/fashion' },
        { category: 'Top', type: 'CASHBACK', discount: '5%', badge: 'PRIME', title: '5% Unlimited Cashback with Amazon Pay ICICI', description: 'Enjoy unlimited cashback on all fashion items with Prime.', code: '', expiry: 'Ongoing', verified: true, link: 'https://www.amazon.in/cbcc/marketpage' },
        { category: 'Top', type: 'OFF', discount: '₹300', badge: 'APPAREL', title: 'Extra ₹300 OFF on First Fashion Purchase', description: 'Exclusive for new customers buying apparel or shoes above ₹1500.', code: 'NEW300', expiry: 'Valid till month end', verified: true, link: 'https://www.amazon.in/new-user-offer' },
        { category: 'Latest', type: 'OFF', discount: '50%', badge: 'DEAL', title: 'Min 50% OFF on Top Watch Brands', description: 'Save big on Fossil, Fastrack, Timex, and Casio.', code: '', expiry: 'Today only', verified: true, link: 'https://www.amazon.in/s?k=watches' },
        { category: 'Latest', type: 'OFF', discount: '60%', badge: 'SHOES', title: 'Up to 60% OFF on Running Shoes', description: 'Top picks from Puma, Adidas, Nike, and Asics.', code: '', expiry: 'Limited Time', verified: true, link: 'https://www.amazon.in/s?k=shoes+fashion' },
        { category: 'Latest', type: 'OFF', discount: '₹500', badge: 'LUGGAGE', title: 'Flat ₹500 OFF on American Tourister & Safari', description: 'Applicable on trolley bags and backpacks above ₹3000.', code: 'LUGGAGE500', expiry: 'In 5 Days', verified: true, link: 'https://www.amazon.in/s?k=luggage' },
        { category: 'Trending', type: 'OFF', discount: '80%', badge: 'JEWELRY', title: 'Up to 80% OFF on Fashion Jewelry', description: 'Shop earrings, necklaces, and bangles from top sellers.', code: '', expiry: 'While stocks last', verified: false, link: 'https://www.amazon.in/s?k=jewelry' },
        { category: 'Trending', type: 'CASHBACK', discount: '10%', badge: 'UPI', title: '10% Cashback via Amazon Pay UPI', description: 'Applicable on fashion orders above ₹1000. Max cashback ₹100.', code: '', expiry: 'Valid till 30th', verified: true, link: 'https://www.amazon.in/amazonpay/home' },
        { category: 'Trending', type: 'OFF', discount: '40%', badge: 'SUNGLASSES', title: 'Min 40% OFF on Ray-Ban, Fastrack & More', description: 'Protect your eyes in style with branded sunglasses.', code: '', expiry: 'Ends Soon', verified: true, link: 'https://www.amazon.in/s?k=sunglasses' },
        { category: 'Top', type: 'OFF', discount: '₹150', badge: 'BEAUTY', title: 'Extra ₹150 OFF on Beauty & Makeup', description: 'Valid on Lakme, Maybelline, and L\'Oreal Paris products over ₹899.', code: 'GLAM150', expiry: 'Tomorrow', verified: true, link: 'https://www.amazon.in/s?k=skincare' },
        { category: 'Latest', type: 'OFF', discount: '55%', badge: 'HANDBAGS', title: 'Up to 55% OFF on Premium Handbags', description: 'Lavie, Caprese, and Baggit collections on sale.', code: '', expiry: 'In 2 Days', verified: true, link: 'https://www.amazon.in/s?k=handbags' },
        { category: 'Trending', type: 'OFF', discount: 'Free', badge: 'PRIME', title: 'Free One-Day Delivery on Fashion Items', description: 'Exclusive for Prime members on fulfilled products.', code: '', expiry: 'Ongoing', verified: true, link: 'https://www.amazon.in/prime' },
        { category: 'Top', type: 'OFF', discount: '45%', badge: 'KIDS', title: 'Min 45% OFF on Kids\' Footwear', description: 'Crocs, Puma, and Adidas kids range.', code: '', expiry: 'Ends Soon', verified: true, link: 'https://www.amazon.in/s?k=kids+shoes' },
        { category: 'Latest', type: 'OFF', discount: '₹200', badge: 'MEN', title: 'Flat ₹200 OFF on Levi\'s Jeans', description: 'Upgrade your denim collection. Valid on purchases above ₹2000.', code: 'LEVIS200', expiry: 'Valid till month end', verified: true, link: 'https://www.amazon.in/s?k=men+fashion' },
        { category: 'Trending', type: 'OFF', discount: '75%', badge: 'CLEARANCE', title: 'Stock Clearance: Up to 75% OFF', description: 'Grab the last pieces of top-selling fashion apparel.', code: '', expiry: 'While stocks last', verified: true, link: 'https://www.amazon.in/clearance' },
    ]),
    hm: generateCoupons('hm', [
        { category: 'Top', type: 'OFF', discount: '20%', badge: 'MEMBERS', title: '20% OFF on 2 or more items', description: 'Add 2 or more items to cart and get 20% off. Members only.', code: 'HM20', expiry: 'In 2 days', verified: true, link: 'https://www2.hm.com/en_in/women.html' },
        { category: 'Top', type: 'OFF', discount: '15%', badge: 'WELCOME', title: 'Flat 15% OFF for New Members', description: 'Sign up for the H&M loyalty program and get 15% off your first purchase.', code: 'WELCOME15', expiry: 'Ongoing', verified: true, link: 'https://www2.hm.com/en_in/customer-service/shopping-at-hm/hm-member.html' },
        { category: 'Top', type: 'OFF', discount: '50%', badge: 'SALE', title: 'Mid-Season Sale: Up to 50% OFF', description: 'Discounts on selected styles for men, women, and kids.', code: '', expiry: 'Ends Soon', verified: true, link: 'https://www2.hm.com/en_in/sale.html' },
        { category: 'Latest', type: 'OFF', discount: 'Free', badge: 'SHIPPING', title: 'Free Standard Delivery for Members', description: 'Valid on all orders above ₹1999 for registered members.', code: '', expiry: 'Ongoing', verified: true, link: 'https://www2.hm.com/en_in/customer-service/shipping-delivery.html' },
        { category: 'Latest', type: 'OFF', discount: '10%', badge: 'RECYCLE', title: '10% OFF on Garment Collecting', description: 'Bring unwanted clothes to any H&M store and get a 10% voucher.', code: '', expiry: 'Ongoing', verified: true, link: 'https://www2.hm.com/en_in/sustainability/let-s-clean-up/garment-collecting.html' },
        { category: 'Latest', type: 'OFF', discount: '₹500', badge: 'WINTER', title: 'Save ₹500 on Jackets & Coats', description: 'Keep warm with sustainable outwewar. Valid on select items over ₹3000.', code: 'WARM500', expiry: 'Limited Time', verified: true, link: 'https://www2.hm.com/en_in/men/shop-by-product/jackets-and-coats.html' },
        { category: 'Trending', type: 'OFF', discount: '30%', badge: 'BASICS', title: 'Buy 3 Get 30% OFF on Basics', description: 'Stock up on basic tees, tanks, and leggings.', code: '', expiry: 'Today Only', verified: true, link: 'https://www2.hm.com/en_in/women/shop-by-product/basics.html' },
        { category: 'Trending', type: 'OFF', discount: '60%', badge: 'DIVIDED', title: 'H&M Divided Collection: Up to 60% OFF', description: 'Trendy and youthful styles on massive clearance.', code: '', expiry: 'While stocks last', verified: false, link: 'https://www2.hm.com/en_in/divided.html' },
        { category: 'Trending', type: 'CASHBACK', discount: '5%', badge: 'POINTS', title: 'Double Points on Conscious Choice items', description: 'Earn double member points when buying sustainable fashion.', code: '', expiry: 'Valid till 30th', verified: true, link: 'https://www2.hm.com/en_in/sustainability-at-hm/our-work/conscious-choice.html' },
        { category: 'Top', type: 'OFF', discount: '40%', badge: 'HOME', title: 'Up to 40% OFF on H&M Home', description: 'Decorate your space with premium bed linen and accessories.', code: '', expiry: 'Tomorrow', verified: true, link: 'https://www2.hm.com/en_in/home.html' },
        { category: 'Latest', type: 'OFF', discount: '15%', badge: 'STUDENT', title: 'Constant 15% Student Discount', description: 'Verify with StudentBeans to get 15% off regular priced items.', code: 'STUDENT', expiry: 'Ongoing', verified: true, link: 'https://www2.hm.com/en_in/student-discount.html' },
        { category: 'Trending', type: 'OFF', discount: '25%', badge: 'DENIM', title: 'Flat 25% OFF on Premium Denim', description: 'Jeans that fit perfectly. Valid across all denim fits.', code: 'DENIM25', expiry: 'Ends Soon', verified: true, link: 'https://www2.hm.com/en_in/women/shop-by-product/jeans.html' },
        { category: 'Top', type: 'OFF', discount: '50%', badge: 'KIDS', title: 'Kids & Baby Wear: Up to 50% OFF', description: 'Adorable styles for the little ones at fraction of the cost.', code: '', expiry: 'In 5 Days', verified: true, link: 'https://www2.hm.com/en_in/kids.html' },
        { category: 'Latest', type: 'OFF', discount: '₹250', badge: 'APP', title: 'Extra ₹250 OFF on App Purchases', description: 'Download the H&M app and use this code on checkout.', code: 'APP250', expiry: 'Valid till month end', verified: true, link: 'https://www2.hm.com/en_in/customer-service/shopping-at-hm/download-app.html' },
        { category: 'Trending', type: 'OFF', discount: '70%', badge: 'ACCESSORIES', title: 'Up to 70% OFF on Bags & Jewelry', description: 'Complete your look with heavily discounted accessories.', code: '', expiry: 'While stocks last', verified: true, link: 'https://www2.hm.com/en_in/women/shop-by-product/accessories.html' },
    ]),
    ajio: generateCoupons('ajio', [
        { category: 'Top', type: 'OFF', discount: '₹500', badge: 'TRENDS', title: 'Get ₹500 OFF on Ajio Trends', description: 'Valid on orders above ₹2499. Exclusive handpicked styles.', code: 'TRENDS500', expiry: 'Valid till 30th', verified: true, link: 'https://www.ajio.com/c/women' },
        { category: 'Top', type: 'OFF', discount: '90%', badge: 'MANIA', title: 'Ajio Big Bold Sale: 50-90% OFF', description: 'The absolute biggest sale of the season across all categories.', code: '', expiry: 'Ends Sunday', verified: true, link: 'https://www.ajio.com/s/clearance-sale' },
        { category: 'Top', type: 'OFF', discount: '₹1000', badge: 'LUXURY', title: 'Flat ₹1000 OFF on Ajio Luxe', description: 'Premium international brands like Superdry, Armani Exchange, and GAP.', code: 'LUXE1000', expiry: 'Valid till month end', verified: true, link: 'https://luxe.ajio.com/' },
        { category: 'Latest', type: 'CASHBACK', discount: '10%', badge: 'RELIANCE', title: '10% Cashback with Reliance SBI Card', description: 'Max cashback up to ₹1000 on minimum transaction of ₹2999.', code: '', expiry: 'Ongoing', verified: true, link: 'https://www.ajio.com/bank-offers' },
        { category: 'Latest', type: 'OFF', discount: '60%', badge: 'ETHNIC', title: 'Up to 60% OFF on Kurta Sets & Sarees', description: 'Biba, W, Aurelia, and AVAASA Mix N Match on huge discount.', code: '', expiry: 'Limited Time', verified: true, link: 'https://www.ajio.com/c/women-ethnicwear' },
        { category: 'Latest', type: 'OFF', discount: '₹300', badge: 'FIRST', title: 'Extra ₹300 OFF for First Time Users', description: 'Welcome to Ajio! Use this code on your first cart over ₹1290.', code: 'NEW300', expiry: 'Ongoing', verified: true, link: 'https://www.ajio.com/first-purchase-offer' },
        { category: 'Trending', type: 'OFF', discount: '75%', badge: 'FOOTWEAR', title: 'Men\'s & Women\'s Footwear: Up to 75% OFF', description: 'Sneakers, flats, heels, and formal shoes.', code: '', expiry: 'While stocks last', verified: false, link: 'https://www.ajio.com/c/footwear' },
        { category: 'Trending', type: 'OFF', discount: '30%', badge: 'SPORTS', title: 'Extra 30% OFF on Activewear', description: 'Puma, Adidas, Nike, and Performax apparel and shoes.', code: 'ACTIVE30', expiry: 'Today Only', verified: true, link: 'https://www.ajio.com/c/sports-activewear' },
        { category: 'Trending', type: 'OFF', discount: '₹200', badge: 'BEAUTY', title: 'Save ₹200 on Makeup & Skincare', description: 'Valid on Sugar, MAC, and Minimalist products over ₹999.', code: 'GLOW200', expiry: 'Tomorrow', verified: true, link: 'https://www.ajio.com/c/beauty' },
        { category: 'Top', type: 'OFF', discount: '80%', badge: 'CLEARANCE', title: 'Final Clearance: Flat 80% OFF', description: 'Last chance to buy previous season\'s bestsellers.', code: '', expiry: 'Ends Soon', verified: true, link: 'https://www.ajio.com/c/men' },
        { category: 'Latest', type: 'OFF', discount: '₹750', badge: 'PREMIUM', title: 'Flat ₹750 OFF on Premium Watches', description: 'Upgrade your wrist game. Minimum cart value ₹3500.', code: 'WATCH750', expiry: 'In 3 Days', verified: true, link: 'https://www.ajio.com/c/watches' },
        { category: 'Trending', type: 'CASHBACK', discount: '₹150', badge: 'PAYTM', title: 'Up to ₹150 Cashback via Paytm', description: 'Pay using Paytm Wallet and win scratch cards.', code: '', expiry: 'Valid till 30th', verified: true, link: 'https://www.ajio.com/wallet-offers' },
        { category: 'Top', type: 'OFF', discount: '55%', badge: 'KIDS', title: 'Min 55% OFF on Kids Clothing', description: 'GAP Kids, UCB Kids, and Point Cove ranges.', code: '', expiry: 'Ends Soon', verified: true, link: 'https://www.ajio.com/c/kids' },
        { category: 'Latest', type: 'OFF', discount: '₹400', badge: 'WINTER', title: 'Extra ₹400 OFF on Winter Wear', description: 'Layers, sweaters, and jackets. Minimum spend ₹1990.', code: 'WINTER400', expiry: 'Valid till month end', verified: true, link: 'https://www.ajio.com/c/winterwear' },
        { category: 'Trending', type: 'OFF', discount: 'BOGO', badge: 'BOGO', title: 'Buy 1 Get 1 Free on DNMX T-Shirts', description: 'Exclusive Ajio brands on Buy 1 Get 1 Free offers.', code: '', expiry: 'Ends Sunday', verified: true, link: 'https://www.ajio.com/s/dnmx-bogo' },
    ]),
};

export const topDeals = [
    // Clothing
    { id: 'deal-c1', store: 'myntra', title: 'Extra 40% OFF on clothing (Code: MYNTRA40)', discount: '40% OFF', image: brandLogos.myntra, link: 'https://www.myntra.com/women', filterCategory: 'Clothing' },
    { id: 'deal-c2', store: 'amazon', title: 'Up to 60% OFF apparel (Code: FASHION60)', discount: '60% OFF', image: brandLogos.amazon, link: 'https://www.amazon.in/fashion', filterCategory: 'Clothing' },
    { id: 'deal-c3', store: 'hm', title: 'Buy 2 Get 20% OFF (Code: HM20)', discount: '20% OFF', image: brandLogos.hm, link: 'https://www2.hm.com/en_in/women.html', filterCategory: 'Clothing' },
    { id: 'deal-c4', store: 'ajio', title: 'Extra 30% OFF fashion (Code: AJIO30)', discount: '30% OFF', image: brandLogos.ajio, link: 'https://www.ajio.com/c/women', filterCategory: 'Clothing' },

    // Footwear
    { id: 'deal-f1', store: 'myntra', title: 'Myntra Shoes: Up to 50% OFF (Code: SHOES50)', discount: '50% OFF', image: brandLogos.myntra, link: 'https://www.myntra.com/shoes', filterCategory: 'Footwear' },
    { id: 'deal-f2', store: 'amazon', title: 'Amazon Sneakers: Extra 25% OFF (Code: STEP25)', discount: '25% OFF', image: brandLogos.amazon, link: 'https://www.amazon.in/s?k=shoes+fashion', filterCategory: 'Footwear' },
    { id: 'deal-f3', store: 'ajio', title: 'Ajio Footwear: Flat 35% OFF (Code: WALK35)', discount: '35% OFF', image: brandLogos.ajio, link: 'https://www.ajio.com/c/footwear', filterCategory: 'Footwear' },

    // Accessories
    { id: 'deal-a1', store: 'amazon', title: 'Watches: Up to 45% OFF (Code: TIME45)', discount: '45% OFF', image: brandLogos.amazon, link: 'https://www.amazon.in/s?k=watches', filterCategory: 'Accessories' },
    { id: 'deal-a2', store: 'myntra', title: 'Bags: Extra 30% OFF (Code: BAG30)', discount: '30% OFF', image: brandLogos.myntra, link: 'https://www.myntra.com/accessories', filterCategory: 'Accessories' },
    { id: 'deal-a3', store: 'hm', title: 'Sunglasses: Flat 20% OFF (Code: SUN20)', discount: '20% OFF', image: brandLogos.hm, link: 'https://www2.hm.com/en_in/women/shop-by-product/accessories.html', filterCategory: 'Accessories' }
];

export const blogPosts = [
    {
        id: 1,
        title: "Best Myntra Deals Today",
        category: "Sale Guide",
        excerpt: "Discover the top Myntra discounts actively running today covering ethnic wear, casuals, and premium brands.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600",
        content: `
            <p>Myntra is hosting a massive end-of-season sale right now, bringing unbelievable discounts to premium clothing.</p>
            <p>From casual t-shirts and jeans to highly sought-after ethnic wear and sarees, Myntra's clothing discounts are peaking today with up to 80% off.</p>
            <p>We highly recommend layering your coupons with instant bank discounts to maximize your final checkout value.</p>
            <p>Here are some essential tips to save more:</p>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li>Use bank offers and credit card EMI deals.</li>
                <li>Check flash sales which happen daily at 12 PM.</li>
                <li>Apply exclusive coupon codes at checkout.</li>
            </ul>
        `,
        ctaText: "Shop Myntra Deals",
        ctaLink: "/myntra"
    },
    {
        id: 2,
        title: "Amazon Fashion Sale Guide",
        category: "Shopping Hacks",
        excerpt: "Master the Amazon Great Indian Festival and daily wardrobe refresh deals with these expert strategies.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600",
        content: `
            <p>The Amazon Fashion sale gives shoppers unparalleled access to global brands with the added benefit of rapid Prime delivery.</p>
            <p>We're seeing significant drops in both clothing and footwear deals. Sneakers from brands like Puma and Adidas are hitting 60% off during flash sales.</p>
            <p>Here are our top Amazon shopping strategies:</p>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li>Use the 'Subscribe & Save' feature on basics.</li>
                <li>Leverage Amazon Pay ICICI credit cards for flat 5% cashback.</li>
                <li>Add items to your wishlist and monitor lightning deals.</li>
            </ul>
        `,
        ctaText: "Shop Amazon Fashion",
        ctaLink: "/amazon"
    },
    {
        id: 3,
        title: "H&M Discount Tips",
        category: "Style Savings",
        excerpt: "Learn how to consistently save on trending H&M fast-fashion apparel through memberships and eco-initiatives.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600",
        content: `
            <p>H&M seasonal sales bring high-end runway trends directly to your shopping cart at incredibly affordable prices.</p>
            <p>If you're a student, H&M is exceptionally generous. Use your StudentBeans ID to unlock a flat, permanent student discount on all regular-priced merchandise.</p>
            <p>Don't ignore the accessories deals! Bags, jewelry, and sunglasses are frequently bundled into Buy 2 Get 1 Free promotions.</p>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li>Recycle old clothes at stores to get a 10% voucher.</li>
                <li>Sign up for H&M Membership for an instant 10% welcome bonus.</li>
            </ul>
        `,
        ctaText: "Get H&M Coupons",
        ctaLink: "/hm"
    },
    {
        id: 4,
        title: "Ajio Sale Shopping Guide",
        category: "Premium Brands",
        excerpt: "Unlock heavy discounts on premium international brands using Ajio's high-value multi-tier cart coupons.",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600",
        content: `
            <p>Shopping on Ajio requires a strategic understanding of their massive, multi-tiered coupon thresholds.</p>
            <p>Proper Ajio coupon usage means you should bundle your items to hit the ₹2990 cart value, instantly unlocking their flat ₹1000 OFF codes.</p>
            <p>Look out for combo offers on trending styles. Biba kurtas and Superdry tees are frequently bundled in premium flash deals on the front page.</p>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li>Always use Reliance SBI cards during checkout.</li>
                <li>Check the "Ajio Luxe" tab for untouched global inventory markdowns.</li>
            </ul>
        `,
        ctaText: "Shop Ajio Offers",
        ctaLink: "/ajio"
    }
];
