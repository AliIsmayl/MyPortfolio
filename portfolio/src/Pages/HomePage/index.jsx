import './HomePage.scss'
import NotMean from '../../Components/NotMean'
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Typewriter } from 'react-simple-typewriter'
import toast, { Toaster } from 'react-hot-toast';
import Ali from '../../Img/aii.png'
import { useState, useEffect, useRef } from 'react'
import AliCv from '../../Img/Ali. Cv.pdf'

function HomePage() {
  const linkRef = useRef()
  function handlePhoneNumber() {
    toast('📞', {
      icon: '099 898 20 04',
    });
  }

  // const source = {AliCv}


  async function downloadImage(e) {
    e.preventDefault()
    const src = linkRef.current.href
    const imageBlob = await (await fetch(src)).blob()
    linkRef.current.href = URL.createObjectURL(imageBlob)
    linkRef.current.download = 'Ali Cv'
    linkRef.current.click()
  }

  const iconStyle = {
    width: 300,
    height: 50,
    objectFit: "cover"
  }

  return (
    <section id='homePage'>
      <div className="backPage">
        <div className='line'>
          <span className='span1'></span>
          <span className='prevSpan1'></span>
          <span className='nextSpan1'></span>
        </div>
        <div className='line'>
          <span className='span2'></span>
          <span className='prevSpan2'></span>
          <span className='nextSpan2'></span>
        </div>
        <div className='line'>
          <span className='span3'></span>
          <span className='prevSpan3'></span>
          <span className='nextSpan3'></span>
        </div>
        <div className='line'>
          <span className='span4'></span>
          <span className='prevSpan4'></span>
          <span className='nextSpan4'></span>
        </div>
        <div className='line'>
          <span className='span5'></span>
          <span className='prevSpan5'></span>
          <span className='nextSpan5'></span>
        </div>
      </div>

      <div className="frontPage">
        <div className="leftBox">
          <p>Hello</p>
          <h1>I'm Ali</h1>
          <span>
            <Typewriter
              words={['I Front end developer!', 'I Develop Web Site']}
              loop={5}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}

            />
          </span>
          <a ref={linkRef} href={AliCv} download="download" >
            <div className="cvBtn" onClick={downloadImage}>
              <div className="frntbtn" >
                <span>DOWNLOAD CV </span>
                <span className='arrow'><IoIosArrowRoundForward /></span>
              </div>
              <div className="cvBtnLine"></div>
            </div>
          </a>

        </div>
        <div className="middleBox">
          <div className="realImage">
            <img src={Ali} alt="" />
          </div>
          <img src={Ali} alt="" className='shadowImage' />

          {/* <img src="https://www.footyrenders.com/render/neymar-185.png"alt="" /> */}
        </div>
        <div className="rightBox">
          <Link className='link'>INSTAGRAM</Link>
          <Link to={'https://github.com/AliIsmayl'} className='link'>GITHUB</Link>
          <Link className='link'>LINKEDIN</Link>
          <Link to={'tel:0998982004'} className='link' onClick={handlePhoneNumber}>WHATSAPP</Link>

        </div>
      </div>
    </section>
  )
}

export default HomePage