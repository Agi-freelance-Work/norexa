import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-picks" element={<TopPicks />} />
            <Route path="/myntra" element={<BrandPage fixedBrand="myntra" />} />
            <Route path="/amazon" element={<BrandPage fixedBrand="amazon" />} />
            <Route path="/hm" element={<BrandPage fixedBrand="hm" />} />
            <Route path="/ajio" element={<BrandPage fixedBrand="ajio" />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/affiliate-disclosure" element={<Disclosure />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
