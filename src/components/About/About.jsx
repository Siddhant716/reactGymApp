import React from 'react'
import './About.css'
import about from '../../assets/images/about.jpg'
import { useNavigate } from 'react-router'
import Footer from '../footer/Footer'

const About = () => {
    const navigate= useNavigate()
    const hideMenu= ()=>{
        
    }
  return (
    <>
    <section className="sub-header">
      <nav>
        <a href="index.html"> <img src="images/logo.png" alt="" /></a>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onClick={hideMenu()}></i>
          <ul>
            <li>
              <a onClick={()=> navigate('/')}>HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">COURSE</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick="showMenu()"></i>
      </nav>
     <h1>About Us</h1>
    </section>
    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>OUR STORY</h1>
                <p>Our gym combines cutting-edge technology with a welcoming atmosphere. Experience state-of-the-art equipment, including smart treadmills and interactive weight machines, designed for efficiency and safety. We offer personalized training programs, group classes, and real-time performance tracking. Our facility promotes fitness and well-being for all levels, providing an innovative approach to health and wellness.
                </p>
                <a href="" className="hero-btn red-btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <img src={about}/>
            </div>
        </div>
    </section>
    <Footer/>

    </>
  )
}

export default About