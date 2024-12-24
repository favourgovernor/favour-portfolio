import React from 'react'
import './Pricing.css'
import diamond from '../../assets/diamond.png'

export const Pricing = () => {
  return (
    <div className="bronze-package-container">
    <div className="bronze-package">
      <div className="package-header">
      <img src={diamond} alt='' />
        <h2>Bronze Package</h2>
        <p>(Suitable for website redesign, landing page etc)</p>
      </div>
      <div className="price">
        Starts from <span>$99</span>
      </div>
      <ul className="features">
        <li><span>✓</span> Timelines: 2 to 14 business days</li>
        <li><span>✓</span> 1-5 Pages</li>
        <li><span>✓</span> Basic SEO</li>
        <li><span>✓</span> Dedicated 2 months support</li>
        <li><span>✓</span> Basic logo & Business Card</li>
      </ul>
      <button className="get-started-button">Get Started <span>➜</span></button>
    </div>
  </div>
);
};

export default Pricing;

