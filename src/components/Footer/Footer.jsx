import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/Favour.png';
import user_icon from '../../assets/user_icon.svg';
import copyright from '../../assets/copyrightFoto.png';

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt='' />
                <p>I'm a frontend developer from Caifornia, USA with 10 years of experience in multiple companies like Walmart,Tesla and Apple.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type='email' placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left"><img src={copyright} alt=''/> 2024 Favour Governor.All rights reserved</p>
            <div className="footer-bottom-right">
               <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}
