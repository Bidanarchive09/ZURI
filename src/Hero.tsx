import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Premium Imported Cars in Kenya</h1>
        <p>Quality vehicles from global markets - New and used imported cars, low mileage, well-maintained, with full import documentation</p>
        <div className="hero-features">
          <span>🚗 Auction Grade Cars</span>
          <span>📋 Full Documentation</span>
          <span>🔧 Japanese Maintenance</span>
          <span>💰 Competitive Pricing</span>
        </div>
        <button className="cta-button">Browse Japanese Imports</button>
      </div>
    </section>
  );
};

export default Hero;