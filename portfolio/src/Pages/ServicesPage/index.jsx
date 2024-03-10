import React from 'react'
import './ServicesPage.scss'
import NotMean from '../../Components/NotMean'

function ServicesPage() {
  return (
    <section id='servicesPage'>
    <NotMean/>
       <div className="upBox">
        <div className="backText">
          <span />
          <p>Services</p>
          <span />
        </div>
        <div className="frontText">
          <p>My <span>Job's</span></p>
        </div>
      </div>
  </section>
  )
}

export default ServicesPage