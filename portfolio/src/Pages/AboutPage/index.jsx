import React from 'react'
import './AboutPage.scss'
import NotMean from '../../Components/NotMean'

function AboutPage() {
  return (
    <section id='aboutPage'>
    <NotMean/>
       <div className="upBox">
        <div className="backText">
          <span />
          <p>History</p>
          <span />
        </div>
        <div className="frontText">
          <p>About <span>Me</span></p>
        </div>
      </div>
  </section>
  )
}

export default AboutPage