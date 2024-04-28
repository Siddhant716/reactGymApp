import React from 'react'
import Header from '../../components/Header/Header'
import Course from '../../components/Course/Course'
import Campus from '../../components/campus/Campus'
import Facilities from '../../components/facilities/Facilities'
import Testemonial from '../../components/testemonials/Testemonials'
import Call_To_Action from '../../components/Call_To_Action/Call_To_Action'
import Footer from '../../components/footer/Footer'



const LandingPage = () => {
  return (
    <div>
        <Header/>
        <Course/>
        <Campus/>
        <Facilities/>
        <Testemonial/>
        <Call_To_Action/>
        <Footer/>
        
    </div>
  )
}

export default LandingPage