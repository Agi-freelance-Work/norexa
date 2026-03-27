export const brandLogos = {
    myntra: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png",
    amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    hm: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    ajio: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAyMDAgNjAiPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iNDIiIGZpbGw9IiMyYzQxNWMiIGxldHRlci1zcGFjaW5nPSIyIj5BSklPPC90ZXh0Pjwvc3ZnPg==",
    flipkart: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png"
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
        { category: 'Top', type: 'OFF', discount: '₹300', badge: 'NEW USER', title: 'Up To 90% OFF + Extra Rs 300 OFF', description: 'Discount up to 90% OFF + Rs 300 OFF. Applies To Fashion, Footwear, Accessories & more. Order Value Rs 1299 & Above. Valid For New Users.', code: 'MYNTRA300', expiry: 'Ends Soon', verified: true, link: 'https://www.myntra.com/' },
        { category: 'Top', type: 'OFF', discount: '25% OFF', badge: 'EXCLUSIVE', title: 'Flat 25% OFF On Min Purchase Of Rs 300', description: 'Flat 25% OFF On Minimum Purchase Of Rs 300. Valid for new users.', code: 'MYNTRASAVE', expiry: 'Limited Time', verified: true, link: 'https://www.myntra.com/' },
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
    flipkart: generateCoupons('flipkart', [
        { category: 'Top', type: 'OFF', discount: '80% OFF', badge: 'SALE', title: 'Cooling Days - Up to 80% OFF | 10% Bank Offer', description: 'Up to 80% OFF on various categories like Monthly Groceries, Kitchen Staples, Home Care Needs, and Household Essentials. FREE Delivery.', code: '', expiry: 'Limited Time', verified: true, link: 'https://www.flipkart.com/' },
        { category: 'Top', type: 'OFF', discount: '90% OFF', badge: 'MEGA SALE', title: 'Mega Flipkart Sitewide Sale – Up To 90% OFF', description: 'Mega Flipkart Sitewide Sale – Enjoy Up To 90% OFF On All Categories.', code: '', expiry: 'Ends Soon', verified: true, link: 'https://www.flipkart.com/' },
    ]),
    hm: generateCoupons('hm', [
        { category: 'Top', type: 'OFF', discount: '60% OFF', badge: 'DASHING', title: 'Grab H&M Stylish Deals – Up To 60% OFF', description: 'Shop exclusive women\'s styles at affordable prices. Up To 60% OFF on your purchases.', code: '', expiry: 'Limited Time', verified: true, link: 'https://www2.hm.com/en_in/index.html' },
        { category: 'Top', type: 'FREE', discount: 'FREE', badge: 'SHIPPING', title: 'Get FREE Shipping On All Orders', description: 'Get FREE Shipping On All Orders Of H&M Collections. No minimum order required.', code: '', expiry: 'Ongoing', verified: true, link: 'https://www2.hm.com/en_in/index.html' },
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
        { category: 'Top', type: 'OFF', discount: '30% OFF', badge: 'SALE', title: 'Ajio All Starts Sale: 50-90% OFF + 30% OFF', description: 'All Stars Festive Edition Sale is Live Now! Get 50-90% OFF during India\'s hottest and biggest fashion sale.', code: 'NEW30', expiry: 'Limited Time', verified: true, link: 'https://www.ajio.com/' },
        { category: 'Top', type: 'OFF', discount: '₹700', badge: 'TRENDS', title: 'Trends Collections - Flat Rs 700 OFF', description: 'Flat Rs 700 OFF On Rs 1000 & Above. Applicable on Trends collection.', code: '', expiry: 'Ends Soon', verified: true, link: 'https://www.ajio.com/' },
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
        title: "Best Myntra Coupons & Upcoming Sale Dates (2026)",
        category: "Sale Guide",
        excerpt: "A complete guide to Myntra's biggest upcoming fashion sales, active coupon codes, and bank discount strategies for Indian shoppers.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
        content: `
            <h2>Understanding Myntra's Discount Ecosystem</h2>
            <p>If you're hunting for the best fashion discounts in India, <a href="https://www.myntra.com" target="_blank" rel="noopener noreferrer" style="color:#1d4ed8;">Myntra</a> remains the undisputed king of ethnic wear and casual brands. However, finding valid coupons requires knowing exactly when to shop.</p>
            
            <h3>Upcoming Myntra Sales in 2026</h3>
            <p>Myntra runs several flagship sales annually. The most notable is the <strong>End of Reason Sale (EORS)</strong>, which typically drops in June and December. During EORS, top brands like Roadster, HRX, and Biba see price cuts up to 80%.</p>
            
            <h3>How to Maximize Your Savings</h3>
            <p>Don't just rely on the displayed price. You must layer your discounts:</p>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li><strong>Bank Offers:</strong> ICICI and Kotak Mahindra frequently offer a flat 10% instant discount during weekend sales.</li>
                <li><strong>Insider Program:</strong> Enroll in Myntra Insider. Points can be directly converted into cash vouchers.</li>
                <li><strong>New User Coupons:</strong> First-time buyers can almost always use codes like <span style="background:#f1f5f9;padding:2px 6px;border-radius:4px;">MYNTRA400</span> for a flat ₹400 off.</li>
            </ul>
            <p>Check out our live repository of verified <a href="/myntra" style="color:#1d4ed8;">Myntra Deals</a> to automatically apply today's best codes.</p>
        `,
        ctaText: "Shop Myntra Deals",
        ctaLink: "/myntra"
    },
    {
        id: 2,
        title: "Amazon Great Indian Festival: Fashion Hacks",
        category: "Shopping Hacks",
        excerpt: "Stop paying retail on Amazon. Master the Wardrobe Refresh deals, lightning deals, and Prime exclusive fashion coupons.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
        content: `
            <h2>Cracking the Amazon Fashion Code</h2>
            <p>While <a href="https://www.amazon.in/fashion" target="_blank" rel="noopener noreferrer" style="color:#1d4ed8;">Amazon India</a> is known for electronics, their fashion infrastructure has quietly become one of the most heavily discounted sectors in e-commerce, especially during the <strong>Great Indian Festival</strong>.</p>
            
            <h3>The Power of Lightning Deals</h3>
            <p>Amazon's algorithm drops massive fashion clearouts daily at 12 PM and 6 PM. These "Lightning Deals" often feature premium luggage (American Tourister) and sneakers (Puma, Adidas) at 60-70% off. You must claim them within minutes.</p>
            
            <h3>Stacking Amazon Pay Benefits</h3>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li><strong>ICICI Amazon Pay Credit Card:</strong> This is a non-negotiable hack. It gives a flat, unlimited 5% cashback on all fashion items if you have Prime.</li>
                <li><strong>Subscribe & Save:</strong> Use this feature for multipack basics (socks, innerwear) to instantly knock an extra 10% off the listed sale price.</li>
            </ul>
            <p>To view today's active lightning drops, visit our dedicated <a href="/amazon" style="color:#1d4ed8;">Amazon Coupons Page</a>.</p>
        `,
        ctaText: "Shop Amazon Fashion",
        ctaLink: "/amazon"
    },
    {
        id: 3,
        title: "How to Get Maximum Discount on H&M India",
        category: "Style Savings",
        excerpt: "The ultimate Indian shopper's guide to saving money on H&M's fast-fashion using student IDs, recycling, and member days.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
        content: `
            <h2>Unlocking H&M's Hidden Discounts</h2>
            <p><a href="https://www2.hm.com/en_in/" target="_blank" rel="noopener noreferrer" style="color:#1d4ed8;">H&M India</a> rarely advertises coupon codes strictly on their homepage, making them seem rigid on pricing. However, they actually offer some of the most consistent loyalty discount programs in the country.</p>
            
            <h3>The Core Savings Strategies</h3>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li><strong>The Loyalty Sign-Up:</strong> Never check out as a guest. Creating a free H&M Membership instantly drops a 10% welcome bonus into your account.</li>
                <li><strong>Garment Collecting:</strong> Take a bag of old, unwanted clothes to any local H&M retail outlet. They will hand you a 10% digital voucher usable online.</li>
                <li><strong>Student Discount:</strong> If you are a college student, verify your ID with UNiDAYS. H&M affords a permanent 15-20% discount on all regular-priced merchandise for students.</li>
            </ul>
            <p>During their Mid-Season Sales, combining these vouchers can lead to unbelievable hauls. Keep an eye on our <a href="/hm" style="color:#1d4ed8;">H&M Deals Tracker</a> to know when the clearance hits.</p>
        `,
        ctaText: "Get H&M Coupons",
        ctaLink: "/hm"
    },
    {
        id: 4,
        title: "Ajio Mania Sale: Reliance Premium Brands Guide",
        category: "Premium Brands",
        excerpt: "Navigate the complex multi-tier coupon systems on Ajio to secure cheap Superdry, GAP, and premium ethnic wear.",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
        content: `
            <h2>Mastering the Ajio Checkout Cart</h2>
            <p>Backed by Reliance, <a href="https://www.ajio.com" target="_blank" rel="noopener noreferrer" style="color:#1d4ed8;">Ajio</a> has aggressively courted premium international brands (GAP, Superdry, Armani Exchange). They don't typically do flat product discounts; instead, they rely heavily on <strong>Cart Value Coupons</strong>.</p>
            
            <h3>How to Use Ajio Multi-Tier Codes</h3>
            <p>Ajio's codes usually look like this: <em>"Get ₹1000 OFF on purchases above ₹2990"</em>. If your cart is ₹2800, you are paying full price. Add a ₹200 pair of socks to securely trip the threshold algorithm and instantly shave massive amounts off your total!</p>
            
            <h3>The Best Ajio Sale Sectors</h3>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li><strong>Ajio Luxe:</strong> Wait for the "Big Bold Sale" to strike. Luxe items drop by up to 50% only twice a year.</li>
                <li><strong>Reliance Trends:</strong> In-house brands like DNMX are perpetually locked in Buy 1 Get 1 Free loops.</li>
            </ul>
            <p>Don't guess which code works. We automatically verify them all on our <a href="/ajio" style="color:#1d4ed8;">Ajio Coupons Board</a>.</p>
        `,
        ctaText: "Shop Ajio Offers",
        ctaLink: "/ajio"
    },
    {
        id: 5,
        title: "Top 10 Fashion Coupon Codes for New Users",
        category: "Aggregator",
        excerpt: "First time buying from these fashion apps? Here are the 10 most powerful welcome codes active in India today.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600",
        content: `
            <h2>The Power of the 'First Purchase'</h2>
            <p>E-commerce companies in India spend millions on Customer Acquisition Costs (CAC). What does this mean for you? It means the absolute best coupon you will entirely ever receive from an app is your very first one.</p>
            
            <h3>Highest Value Welcome Codes</h3>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li><strong>Myntra:</strong> Code <code>MYNTRA400</code> reliably grants flat ₹400 off on carts over ₹1999 for first-time signups.</li>
                <li><strong>Amazon Fashion:</strong> New accounts usually see an invisible voucher apply at checkout granting an extra 20% off apparel.</li>
                <li><strong>Ajio:</strong> Using the code <code>NEW300</code> grants a flat ₹300 margin shift on their basic ethnic lines.</li>
            </ul>
            <p>If you genuinely want to maximize these, coordinate your first purchase during a major overarching sale event so the welcome code stacks onto the clearance price.</p>
            <p>Explore today's absolute best verified endpoints via our <a href="/top-picks" style="color:#1d4ed8;">Top Picks Dashboard</a>.</p>
        `,
        ctaText: "View Top Deals",
        ctaLink: "/top-picks"
    },
    {
        id: 6,
        title: "Myntra vs Ajio: Which Has Better Clothing Deals?",
        category: "Comparisons",
        excerpt: "A comprehensive breakdown of which Indian fashion giant offers better discounts on ethnic wear, casuals, and international brands.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
        content: `
            <h2>The Battle of Indian Fashion E-Commerce</h2>
            <p>Consumers frequently debate whether they should spend their capital during Myntra's End of Reason Sale or Ajio's Big Bold Sale. After aggregating thousands of coupons natively on Norexa, the data is decisively clear: it depends on <em>what</em> you are buying.</p>
            
            <h3>Myntra: The King of Casual & Ethnic</h3>
            <p>Myntra's supply chain is deeply integrated with Indian brands. If you are looking for Biba kurtas, Roadster denim, or HRX activewear, <a href="/myntra" style="color:#1d4ed8;">Myntra</a> wins securely on pricing nine times out of ten. Their direct flat-percentage coupons (e.g., 60% OFF) are straightforward and easy to apply.</p>
            
            <h3>Ajio: The International Powerhouse</h3>
            <p>Ajio leans heavily into globally recognized premium labels secured via Reliance partnerships. You will exclusively find cheaper prices on GAP, M&S, and Superdry on <a href="/ajio" style="color:#1d4ed8;">Ajio</a>, provided you know how to leverage their high-minimum cart value coupons (e.g., Flat ₹1500 OFF over ₹4000).</p>
        `,
        ctaText: "Compare All Deals",
        ctaLink: "/top-picks"
    },
    {
        id: 7,
        title: "Credit Card & Wallet Cashbacks on Fashion Apps",
        category: "Money Saving",
        excerpt: "Stop wasting money at checkout. This guide details exactly which credit cards and UPI wallets yield the highest fashion cashbacks.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
        content: `
            <h2>Payment Gateways Are Your Best Friend</h2>
            <p>Using a standard debit card is leaving free capital on the table. E-commerce platforms routinely partner dynamically with payment gateways to provide "Instant Discounts" structured to push specific bank volume.</p>
            
            <h3>Top Cards for Indian Fashion Ecosystems</h3>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li><strong>Amazon Pay ICICI Card:</strong> As mentioned, this is the holy grail for <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" style="color:#1d4ed8;">Amazon</a>. Flat 5% cashback auto-credited as Amazon Pay balance.</li>
                <li><strong>SBI & Kotak Cards:</strong> These two banking institutions sponsor literally 80% of Ajio and Myntra's flagship sales. Having either usually guarantees an instant 10% off at the checkout gate.</li>
                <li><strong>Paytm/MobiKwik Wallets:</strong> Apps routinely offer scratch cards up to ₹500 for routing via these UPI wallets during mid-week clearance days.</li>
            </ul>
            <p>Always verify the "Bank Offers" tab before finalizing any cart on our <a href="/top-picks" style="color:#1d4ed8;">Curated Picks Page</a>.</p>
        `,
        ctaText: "Find Live Offers",
        ctaLink: "/top-picks"
    },
    {
        id: 8,
        title: "Ultimate Guide to Buying Sneakers Online on a Budget",
        category: "Footwear Hacks",
        excerpt: "Sneakerhead on a budget? Here's how to capture massive discounts on Nike, Adidas, and Puma across top Indian retailers.",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600",
        content: `
            <h2>Snagging the Best Sneaker Discounts</h2>
            <p>Footwear, heavily driven by hype protocols, rarely sees linear discounts. Popular silos like Nike Air Force 1s notoriously rarely drop in price, whereas running infrastructure drops heavily during specific liquidation events.</p>
            
            <h3>Where to Buy What</h3>
            <ul style="margin-left:20px;margin-bottom:15px;list-style:disc;">
                <li><strong>Puma & Adidas:</strong> Your absolute best bet is <a href="/amazon" style="color:#1d4ed8;">Amazon's Shoe Portal</a> during their Lightning Deals. Stock is liquidated ruthlessly here, often pushing premium silos under ₹2000.</li>
                <li><strong>Nike & Jordan:</strong> Avoid aggregator sites for top-tier hype. Wait for Nike.com's End of Season Sales or configure alerts on Myntra for their specific Nike clearinghouse events.</li>
                <li><strong>Casual Loafers & Boots:</strong> <a href="/ajio" style="color:#1d4ed8;">Ajio</a> has cornered the formal footwear market with extreme combo discounts natively applied at checkout.</li>
            </ul>
            <p>Ensure you select proper return windows when experimenting with sizing. Footwear sizing shifts radically across brands!</p>
        `,
        ctaText: "Shop Footwear Deals",
        ctaLink: "/top-picks"
    }
];
