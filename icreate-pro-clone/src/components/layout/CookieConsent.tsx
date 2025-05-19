'use client';

import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const openPreferences = () => {
    // This would normally open the cookie preferences center
    console.log('Open cookie preferences');
    // For now, just accept cookies
    acceptCookies();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cc-nb-title"
      aria-describedby="cc-nb-text"
    >
      <div className="bg-darker-gray text-white p-6 rounded-lg max-w-md">
        <div className="mb-4">
          <p className="text-xl font-semibold mb-2" id="cc-nb-title">We use cookies</p>
        </div>
        <div className="mb-6">
          <p className="text-sm" id="cc-nb-text">
            We use cookies and other tracking technologies to improve your browsing
            experience on our website, to show you personalized content and targeted
            ads, to analyze our website traffic, and to understand where our visitors are
            coming from.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-yellow-400 text-black font-medium py-2 px-4 rounded-md"
          >
            OK
          </button>
          <button
            onClick={openPreferences}
            className="bg-transparent text-white border border-white py-2 px-4 rounded-md"
          >
            Change my preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
