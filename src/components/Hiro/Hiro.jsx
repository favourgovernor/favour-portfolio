import React from 'react'
import './Hiro.css'
import profile_img from '../../assets/ProfilePhotoFavour.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


export const Hiro = () => {
  return (
    <div id='home' className='hiro'>
       <img src={profile_img} alt=''/> 
       <h1><span>I'm Favour Governor,</span> website developer based in Kenya.</h1>
       <p>I'm a highly skilled website developer and designer with expertise in HTML, CSS, React JS, WordPress, UX design, SEO, and Figma. Over the course of my career, I have successfully completed 10 diverse projects, showcasing my ability to create visually appealing, user-centric, and performance-optimized websites and applications.</p>
       <div className='hiro-action'>
            <div className='hiro-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className='hiro-resume'>My resume</div>
       </div>
    </div>
  )
}
