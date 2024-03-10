import React from 'react'
import './ContactPage.scss'
import NotMean from '../../Components/NotMean'

function ContactPage() {
  return (
    <section id='contactPage'>
      <NotMean/>
         <div className="upBox">
          <div className="backText">
            <span />
            <p>Message</p>
            <span />
          </div>
          <div className="frontText">
            <p>Contact <span>Me</span></p>
          </div>
        </div>
    </section>
  )
}

export default ContactPage