import React from 'react'
import './Campus.css'
import london from '../../assets/images/london.png'
import newyork from '../../assets/images/newyork.png'
import washington from '../../assets/images/washington.png'
const Campus = () => {
  return (
    <section className="campus">
      <h1>Our Delhi Center</h1>
      <p>Block A, Sector 12 Dwarka, Dwarka, Delhi, 110078.</p>

      <div className="row">
        <div className="campus-col">
          <img src={london} />
          <div className="layer">
            <h3>DUMBLE AREA</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src={newyork} />
          <div className="layer">
            <h3>CARDIO AREA</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src={washington} />
          <div className="layer">
            <h3>YOGA AND JUMBA AREA</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Campus