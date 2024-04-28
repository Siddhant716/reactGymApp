import React from 'react'
import './Footer.css'

const footer = () => {
  return (
    <section class="footer">
      <h4>About Us</h4>
      <p>
      Block A, Sector 12 Dwarka, Dwarka, Delhi, 110078
      </p>
      <i class="fa fa-phone" > +91 7309984368</i>
      <div class="icons">
        <i class="fa fa-facebook"></i>
        {/* <i class="fa fa-instagram"></i> */}
        <a href="https://www.instagram.com/siddhantt.18/" target="_blank" title="">
  <i class="fa fa-instagram"></i>
</a>

        <i class="fa fa-twitter"></i>
        {/* <i class="fa fa-linkedin"></i> */}
        <a href="https://www.linkedin.com/in/siddhant-prakash-gautam-8abb05252/" target="_blank">
  <i class="fa fa-linkedin"></i>
</a>

      </div>
      <p>
        Made With <i class="fa fa-heart-o"></i> by <br />
        <h4>Siddhant Prakash Gautam</h4>
        <p>INTERN<i class="fa fa-at"></i>SOFTAPPER</p>
      </p>
    </section>
  )
}

export default footer