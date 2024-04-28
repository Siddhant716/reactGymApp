import React from 'react'
import './Header.css'
import logmain from '../../assets/images/logomain.png'
import { Navigate, useNavigate } from 'react-router'
const Header = () => {
  const navigate = useNavigate()
  return (
    <section className="header">
      <nav>
        <a href="index.html"> <img src={logmain} alt="" /></a>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onclick="hideMenu()"></i>
          <ul>
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a onClick={() => navigate('/about')} >ABOUT</a>
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
      <div className="text-box">
        <h1>Softapper Fitness Zone</h1>
        <p>
          ``Discover expert workout routines, nutritional advice, and motivation to reach your goals. Explore personalized training programs tailored to your needs. Join a community dedicated to wellness and support. Start your fitness adventure today with our comprehensive online gym experience.``
        </p>
        <a href="" className="hero-btn">Visit To Know More</a>
      </div>
    </section>
  )
}

export default Header