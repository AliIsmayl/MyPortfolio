import React from 'react'
import './ResumePage.scss'
import NotMean from '../../Components/NotMean'

function ResumePage() {
  return (
    <section id='resumePage'>
    <NotMean/>
       <div className="upBox">
        <div className="backText">
          <span />
          <p>Resume</p>
          <span />
        </div>
        <div className="frontText">
          <p>My <span>Career</span></p>
        </div>
      </div>
  </section>
  )
}

export default ResumePage