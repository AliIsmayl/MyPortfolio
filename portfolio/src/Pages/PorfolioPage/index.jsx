import React from 'react'
import './PorfolioPage.scss'
import NotMean from '../../Components/NotMean'

function PorfolioPage() {
  return (
    <section id='porfolioPage'>
    <NotMean/>
       <div className="upBox">
        <div className="backText">
          <span />
          <p>Portfolio</p>
          <span />
        </div>
        <div className="frontText">
          <p>My <span>Web Site's</span></p>
        </div>
      </div>
  </section>
  )
}

export default PorfolioPage