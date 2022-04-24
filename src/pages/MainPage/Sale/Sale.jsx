import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta
} from 'react-countdown'
import Chart1 from '../../../images/Chart1.webp'
import IconAndroid from '../../../images/icon-android.png'
import IconApple from '../../../images/icon-apple.png'
import { Slider2 } from '../Slider/Slider2'
import { Counter } from './Counter'
import './sale.css'
// import '../Sale/sale.css'

const launchDate = new Date('2022-01-29T00:00:00')

export const Sale = () => {
  return (
    <section
      id="token-sale-mobile-app"
      className="token-sale-mobile-app section-padding "
    >
      {/* Tokens Sale */}
      <div className="token-sale">
        <div className="container">
          <div className="heading text-center">
            <h6 className="sub-title">Pre-Sale &amp; Values</h6>
            <h2 className="title">PCNP Coin’s ICO Release</h2>
            <p
              className="content-desc animated fadeInUpShorter"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
              style={{ animationDelay: '0.4s', opacity: 1 }}
            >
             After a Token ICO in July 2013, MasterCoin issued PCNP Tokens. In 2014, token sales increased Ethereum.
              <br className="d-none d-xl-block" />
              As of right now, we've hit the Soft Cap. Our PCN Protocol ICO is about to begin. We've set the Eth Price at $800, so you can get a great deal on your Token.
            </p>
          </div>
          <div className="row align-items-center">
            <div
              className="col-xl-5 col-lg-6 col-md-12 animated fadeInUpShorter"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.6s"
              style={{ animationDelay: '0.4s', opacity: 1 }}
            >
              <div className="token-sale-counter">
                <h5>ICO will start in</h5>
                <div className="token-details text-center">
                  {/* Counter Starts*/}
                  <div style={{marginTop: '50px !important'}} className="clock-counter mb-4">
                    <Countdown renderer={Counter} date={launchDate.getTime()} />
                    <div className="message" />
                  </div>
                  {/* Counter Ends */}
                  {/* Progressbar Starts */}
                  {/* Progressbar Starts */}
                  <a href="#" className="btn btn-lg btn-gradient-blue btn-glow" style={{marginTop: '10px'}}>
                    Purchase Token
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6 col-md-12 mt-5 pl-4 animated fadeInUpShorter"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.6s"
              style={{ animationDelay: '0.4s', opacity: 1 }}
            >
              <div className="row">
                <p style={{color: '#fff'}}>
                  Finally, we have successfully reached the Soft Cap! Join Us
                  Now for PCN
                  <br />
                  Protocol’s ICO event. your Token with big Discounts as we have
                  fixed Eth Price at $800.
                </p>
                <div className="col-md-5">
                  <ul className="token-sale-info">
                    <li style={{ color: '#7D7D7D' }}>
                    <strong style={{ color: '#FFFFFF' }} className="white">
                    Pre-ITS begins on{' '}
                      March 13th for the general public.
                      </strong>
                    </li>
                    <li style={{ color: '#7D7D7D' }}>
                    <strong style={{ color: '#FFFFFF' }} className="white">
                    The 25th of April marks the {' '}
                      beginning of the public implementation of ITS.
                      </strong>
                    </li>
                    <li style={{ color: '#7D7D7D' }}>
                    <strong style={{ color: '#FFFFFF' }} className="white">
                    On April 25th, ITS will be{' '}
                      available to the general public
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="col-md-7 pr-0">
                  <ul className="token-sale-info">
                    <li style={{ color: '#7D7D7D' }}>
                    <strong style={{ color: '#FFFFFF' }} className="white">
                   Bitcoin, Ethereum, and Litecoin
                      are all accepted at PCNP.
                      </strong>
                    </li>
                    <li style={{ color: '#7D7D7D' }}>
                    <strong style={{ color: '#FFFFFF' }} className="white">
                    One ether, one bitcoin, or one{' '}
                      litecoin may be sent at a time.
                      </strong>
                    </li>
                    <li style={{ color: '#7D7D7D' }}>
                    <strong style={{ color: '#FFFFFF' }} className="white">
                    A total of 890,000 CIC worth of tokens have{' '}
                      been sold so far, or around 8 percent of the total.
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Token Stats */}
      <section
        id="token-distribution"
        className="token-distribution section-padding"
      >
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Allocation</h6>
              <h2 className="title"> Coin Allocation</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              The PCN usually takes place before the project is completed, and
              helps fund the expenses
              <br className="d-none d-xl-block" />
              undertaken by the founding team until launch. For some of the
              larger projects.
            </p>
          </div>
          <div id="coins" className="flex mt-2 justify-center flex-col">
            <div className="flex flex-wrap justify-center items-center px-4 text-main my-9 max-w-7xl w-full mx-auto">
              <div className="w-full md:w-1/2 pr-4 pl-4 md:pl-0 md:pr-6">
                <h3 className="font-regular  px-7 py-6 bg-arrayLight text-2xl rounded-t-3xl">
                  Coin Details
                </h3>
                <div
                  style={{ marginTop: '-10px' }}
                  className="pcnp-trasnit-blue 
                false
                px-7 flex justify-center items-center"
                >
                  <p className="w-1/2">Asset Name</p>
                  <p className="w-1/2"> {/* */}PCN Protocol</p>
                </div>
                <div
                  className="bg-arrayMedium 
                false
                px-7 center-text-cor flex justify-center items-center"
                >
                  <p className="w-1/2">Ticker</p>
                  <p className="w-1/2"> {/* */}[PCNP]</p>
                </div>
                <div
                  className="pcnp-trasnit-blue
                false
                px-7 center-text-cor flex justify-center items-center"
                >
                  <p className="w-1/2">Starting Price</p>
                  <p className="w-1/2"> {/* */}0.028 €</p>
                </div>
                <div
                  className="bg-arrayMedium 
                false
                px-7 center-text-cor flex justify-center items-center"
                >
                  <p className="w-1/2">Coin type</p>
                  <p className="w-1/2"> {/* */}ERC-20 </p>
                </div>
                <div
                  className="pcnp-trasnit-blue 
                false
                px-7 center-text-cor flex justify-center items-center"
                >
                  <p className="w-1/2">Hard cap</p>
                  <p className="w-1/2"> {/* */}56M</p>
                </div>
                <div
                  className="bg-arrayMedium 
                false
                px-7 center-text-cor flex justify-center items-center"
                >
                  <p className="w-1/2">Intital Supply</p>
                  <p className="w-1/2"> {/* */}2.000.000.000 PCNP</p>
                </div>
                <div
                  className="pcnp-trasnit-blue 
                rounded-b-3xl
                px-7 center-text-cor flex justify-center items-center"
                >
                  <p className="w-1/2">Max Supply</p>
                  <p className="w-1/2"> {/* */}10.000.000.000 PCNP</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 h-full sm:pl-6 relative">
                <div
                  style={{ height: '610px !important', width: '540px' }}
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained w-full h-auto"
                >
                  <div style={{ maxWidth: '1200px', display: 'block' }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg height='1200' width='1200' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxWidth: '100%',
                        display: 'block',
                        position: 'static'
                      }}
                    />
                  </div>
                  <img
                    aria-hidden="true"
                    style={{
                      opacity: 1,
                      transition: 'opacity 500ms linear'
                    }}
                    src={Chart1}
                    alt=""
                  />
                  <img
                    style={{ opacity: 0 }}
                    sizes="(min-width: 1200px) 1200px, 100vw"
                    decoding="async"
                    loading="lazy"
                    alt="background disc"
                    src={Chart1}
                  />
                </div>
                <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" />
              </div>
            </div>
            <a
              href="static/WhitePaper-9a366db9ed19699b1ff071dedf10b3a9.pdf"
              target="_blank"
              rel="noreferrer"
              className="btnMain btn-glow btn-gradient-purple cursor-pointer transition-all mx-10 md:mx-auto mb-14 md:w-auto undefined
                bg-blueOcean border-blueOcean hover:bg-darkHover hover:border-darkHover border-2"
            >
              Read our Whitepaper
            </a>{' '}
          </div>
        </div>
      </section>
      <div id="mobile-app" className="mobile-app">
        <div className="container">
          <div className="heading text-center">
            <h6 className="sub-title">PCN Protocol Apps</h6>
            <h2 className="title">PCNP’s powerful application</h2>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP's mobile app is compatible with both Apple's iOS and Google's Android operating systems. It provides a wide range of services to its customers, 
              <br />
              including real-time cryptocurrency exchange rates, the most recent cryptocurrency news, and several other tools.
            </p>
          </div>
          <div className="row">
            <div class="col-md-12 app-slider">
                <Slider2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
