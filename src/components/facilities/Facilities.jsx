import React from 'react'
import './Facilities.css'
import workout from '../../assets/images/workout.jpg'
import yoga from '../../assets/images/yoga.jpg'
import zumba from '../../assets/images/zumba.jpg' 


const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Hey Buddy, Light Weight</h1>
      <p>Quick access, modern equipment, tailored routines, convenient workout schedules.</p>

      <div className="row">
        <div className="facilities-col">
          <img src={workout}/>
          <h3>Top Class Workout Area</h3>
          <p>Spacious, well-equipped, modern design, functional, versatile, bright, motivating, organized.</p>
        </div>
        <div className="facilities-col">
          <img src={yoga}/>
          <h3>Lush Green Yoga Ground</h3>
          <p>Serene yoga space with natural light, mats, and tranquility.</p>
        </div>
        <div className="facilities-col">
          <img src={zumba} />
          <h3>Top Class Zoomba Area</h3>
          <p>Vibrant energy, upbeat music, dynamic instructors, lively group workouts.</p>
        </div>
      </div>
    </section>
  )
}

export default Facilities