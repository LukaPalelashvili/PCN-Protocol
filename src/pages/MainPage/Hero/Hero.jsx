import { SliderHero } from '../../../pages/MainPage/Slider/SliderHero'
// import { Slider } from '../../../pages/MainPage/Slider/Slider'

export const Hero = () => {
  return (
    <section className="head-area" id="head-area">
      <div id="particle"></div>
      <div className="head-content d-flex align-items-center">
        <div className="container">
          <div className="banner-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 our-slider ">
                <div className="banner-content pt-5">
                  <h1 className="best-Template ">
                    Private{' '}
                    <br className="d-none d-xl-block" />
                    Communication <br className="d-none d-xl-block" />{' '}
                    Network
                  </h1>
                  <h3 className="d-block white ">
                  PCNP is a protocol within the blockchain ecosystem.
Unique{' '}
                    <br className="d-none d-xl-block" />
                    products conducted into one powerful application

dVPN{' '}
                    <br className="d-none d-xl-block" /> integrated with Web3, Private messenger, crypto wallet,{' '}
                    <br className="d-none d-xl-block" /> marketplace all built with state-of-the-art technology.{' '}
                  </h3>
                  <div className="mt-5">
                    <a
                      href="#token-sale-mobile-app"
                      className="btn our-slider-but1 btn-lg btn-gradient-purple btn-glow mr-4 mb-2 "
                    >
                      Purchase Token
                    </a>
                    <a
                      href="#whitepaper"
                      className="btn btn-lg our-slider-but2 btn-gradient-purple btn-glow mb-2 "
                    >
                      Whitepaper
                    </a>
                  </div>
                </div>
              </div>
              <SliderHero />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
