import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

// Pages
import Home from './pages/Home';
import BrandPage from './pages/BrandPage';
import TopPicks from './pages/TopPicks';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Disclosure from './pages/Disclosure';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/top-picks" element={<TopPicks />} />
        <Route path="/myntra" element={<BrandPage fixedBrand="myntra" />} />
        <Route path="/amazon" element={<BrandPage fixedBrand="amazon" />} />
        <Route path="/flipkart" element={<BrandPage fixedBrand="flipkart" />} />
        <Route path="/hm" element={<BrandPage fixedBrand="hm" />} />
        <Route path="/ajio" element={<BrandPage fixedBrand="ajio" />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/affiliate-disclosure" element={<Disclosure />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-wrapper">
        <Header />
        <main style={{ minHeight: '80vh' }}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
