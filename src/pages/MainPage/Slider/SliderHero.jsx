import React, { Component } from 'react'
import Slider from 'react-slick'
import Picture1 from '../../../images/images slider/picture1.png'
import Picture2 from '../../../images/images slider/picture2.png'
import Picture3 from '../../../images/images slider/picture3.png'
import Picture4 from '../../../images/images slider/picture4.png'
import Picture5 from '../../../images/images slider/picture5.png'
import './sliderResp.css'

export const SliderHero = () => {
  const settings = {
    dots: false,
    centerMode: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  return (
    <div className="col-lg-6 move-first header-first-main-text col-md-12 ">
      <div
        className="wpsisac-slick-carousal-wrp  hero-slider wpsisac-clearfix "
        data-conf='{"slidestoshow":"3","slidestoscroll":1,"dots":"false","arrows":"true","autoplay":"true","autoplay_interval":3000,"speed":300,"rtl":"false","centermode":"true","lazyload":"","variablewidth":"false","loop":"true","hover_pause":"true"}'
      >
        <div
          className=""
          style={{
            // width: '600px',
            marginTop: '40px !important'
          }}
        >
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <Slider {...settings}>
            <div className="wpsisac-image-slide">
              <span>
                {' '}
                <div
                  className="wpsisac-image-slide-wrap"
                  // style={{ height: '400px' }}
                >
                  <img
                    src={Picture1}
                    alt="1-The urban farmers battling Bangalore’s jungle"
                  />
                </div>
              </span>
            </div>
            <div
              style={{ transform: 'scale(1.2)' }}
              className="wpsisac-image-slide"
            >
              <div
                className="wpsisac-image-slide-wrap"
                // style={{ height: '400px' }}
              >
                <img
                  src={Picture2}
                  alt="The Head of Design at Ikea on Sampling  Versus"
                />
              </div>
            </div>
            <div className="wpsisac-image-slide">
              <span>
                {' '}
                <div
                  className="wpsisac-image-slide-wrap"
                  // style={{ height: '400px' }}
                >
                  <img
                    src={Picture3}
                    alt="This flagship coffee shop is about to disappear"
                  />
                </div>
              </span>
            </div>
            <div
              style={{ transform: 'scale(1.2)' }}
              className="wpsisac-image-slide"
            >
              <div
                className="wpsisac-image-slide-wrap"
                // style={{ height: '400px' }}
              >
                <img src={Picture4} alt="Dream Homes: North Penthouse Listed" />
              </div>
            </div>
            <div className="wpsisac-image-slide">
              <span>
                <div
                  className="wpsisac-image-slide-wrap"
                  // style={{ height: '400px' }}
                >
                  <img
                    src={Picture5}
                    alt="Kerala: They call it Own Country for nothing"
                  />
                </div>
              </span>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
