import './FeedBackPage.scss'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import NotMean from '../../Components/NotMean';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
function FeedBackPage() {
  return (
    <section id='feedBackPage'>
      {/* <NotMean /> */}
      <div className="notMeanFeedBack"></div>
      <div className="feedBackSwiperBox">
        <div className="upBox">
          <div className="backText">
            <span />
            <p>Reference</p>
            <span />
          </div>
          <div className="frontText">
            <p>Feed <span>Back</span></p>
          </div>
        </div>
        <div className="downBox">

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              855: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            loop={true}
            className="mySwiper"
          >
           
            <SwiperSlide>
              <div className="swiperBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/800px-Bra-Cos_%281%29.jpg" alt="" />
                <div className="textBox">
                  <span>In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.</span>
                  <h1>MIKE ANDERSON</h1>
                  <p>
                    <span />
                    WEB DESIGNER
                    <span />
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/800px-Bra-Cos_%281%29.jpg" alt="" />
                <div className="textBox">
                  <span>In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.</span>
                  <h1>MIKE ANDERSON</h1>
                  <p>
                    <span />
                    WEB DESIGNER
                    <span />
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/800px-Bra-Cos_%281%29.jpg" alt="" />
                <div className="textBox">
                  <span>In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.</span>
                  <h1>MIKE ANDERSON</h1>
                  <p>
                    <span />
                    WEB DESIGNER
                    <span />
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/800px-Bra-Cos_%281%29.jpg" alt="" />
                <div className="textBox">
                  <span>In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.</span>
                  <h1>MIKE ANDERSON</h1>
                  <p>
                    <span />
                    WEB DESIGNER
                    <span />
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperBox">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/800px-Bra-Cos_%281%29.jpg" alt="" />
                <div className="textBox">
                  <span>In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.</span>
                  <h1>MIKE ANDERSON</h1>
                  <p>
                    <span />
                    WEB DESIGNER
                    <span />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default FeedBackPage