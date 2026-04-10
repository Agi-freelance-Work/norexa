import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * GoogleAnalytics — tracks page views on every route change.
 * The gtag.js script itself is loaded in index.html for performance.
 * This component simply fires `gtag('config', …)` on each navigation.
 *
 * Replace GA_MEASUREMENT_ID with your actual Google Analytics 4 ID.
 */
const GA_MEASUREMENT_ID = 'G-PT72ZKZH9S';
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only fire if gtag has been loaded
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export { GA_MEASUREMENT_ID };
export default GoogleAnalytics;
