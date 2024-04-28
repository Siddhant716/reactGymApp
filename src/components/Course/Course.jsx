import React from 'react'
import './course.css'

const Course = () => {
  return (
    <section className="course">
      <h1>Facilities Offered By Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="row">
        <div className="course-col">
          <h3>Weight Training</h3>
          <p>
          Transform your physique with our tailored weight training programs. Our expert trainers craft personalized routines to maximize results and minimize injury, whether you're a beginner or seasoned lifter. Experience the power of strength training in a supportive environment designed to help you reach your fitness goals efficiently and effectively.
          </p>
        </div>
        <div className="course-col">
          <h3>Yoga</h3>
          <p>
          Experience holistic wellness through our yoga classes, tailored for all levels. Find inner balance and strength as our expert instructors guide you through dynamic poses and mindful breathing techniques. Join our vibrant community and embark on a journey of physical and mental transformation. Elevate your practice with us today.
          </p>
        </div>
        <div className="course-col">
          <h3>Zumba</h3>
          <p>
          Join our invigorating Zumba training sessions led by our expert trainers! Experience the fusion of Latin rhythms and exhilarating dance moves in a dynamic workout environment. Boost your energy, burn calories, and have fun while sculpting your body. Get ready to groove, sweat, and transform your fitness journey with us.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Course