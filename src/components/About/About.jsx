import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profilefavour.png'

export const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={profile_img} alt=''/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>With a strong foundation in modern web technologies and design principles, I specialize in crafting intuitive user interfaces and ensuring seamless user experiences. My proficiency in SEO helps me deliver websites that not only look great but also rank well in search engines.</p>
                    <p>Whether it's building responsive WordPress websites, prototyping designs in Figma, or developing scalable React JS applications, I bring creativity and technical expertise to every project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Wordpress</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Figma</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr/>
        </div>

    </div>
  )
}
