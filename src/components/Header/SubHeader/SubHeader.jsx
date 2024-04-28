import React from 'react'

const SubHeader = () => {
  return (
    <section class="sub-header">
      <nav>
        <a href="index.html"> <img src="images/logo.png" alt="" /></a>
        <div class="nav-links" id="navLinks">
          <i class="fa fa-times" onclick="hideMenu()"></i>
          <ul>
            <li>
              <a href="">HOME</a>
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
        <i class="fa fa-bars" onClick="showMenu()"></i>
      </nav>
     <h1>About Us</h1>
    </section>
  )
}

export default SubHeader