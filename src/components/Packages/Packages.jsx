import React from 'react'
import './Packages.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Packages = () => {
    const packages = [
        {
            name: 'Bronze Package',
            description: '(Suitable for website redesign, landing page etc)',
            price: '9999/=',
            features: [
                'Timelines: 2 to 14 business days',
                '1-5 Pages',
                'Basic SEO',
                'Dedicated 2 months support',
                'Basic logo & Business Card',
            ],
        },
        {
            name: 'Silver Package',
            description: '(Suitable for corporate websites, small online stores etc)',
            price: '19999/=',
            features: [
                'Timelines: 14 to 28 business days',
                '5-10 pages',
                'Basic SEO',
                'Dedicated 2 months support',
                '3rd Party Integrations',
                'Basic logo & Business Card',
            ],
            popular: true, // Add a "popular" flag
        },
        {
            name: 'Gold Package',
            description: '(Suitable for e-commerce, Customised websites etc)',
            price: '39999/=',
            features: [
                'Timelines: 28 to 42 business days',
                'more than 10 pages.',
                'Basic SEO plus product SEO',
                'Dedicated 3 month support',
                '3rd Party Integrations',
                'MPesa and Card Integrations',
                'Basic logo & Business Card',
            ],
        },
    ];

    return (
        <div className="pricing-section">
            <div className="pricing-header">
                <h1>Pricing</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="pricing-container">
                {packages.map((pkg, index) => (
                    <div key={index} className={`package ${pkg.popular ? 'popular' : ''}`}>
                        {pkg.popular && <div className="popular-tag">Popular</div>}
                        <div className="package-header">
                            <span className="diamond-icon"></span>
                            <h2>{pkg.name}</h2>
                            <p>{pkg.description}</p>
                        </div>
                        <div className="price">Starts from {pkg.price}</div>
                        <ul className="features">
                            {pkg.features.map((feature, i) => (
                                <li key={i}>
                                    <span>✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="get-started-button">Get Started <span>➜</span></button>
                        <div className="contact-info">
                            <p>0757475479<br /> favourirungu99@gmail.com</p> </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;