import PrivateAndSecure from '../../../images/private-and-secure-bg-2x.png'
import PrivateAndSecureAvatar from '../../../images/private-and-secure-avatar-2x.png'
import { ReactComponent as PrivateAndSecureSVG } from '../../../images/private-and-secure-key.svg'
import { ReactComponent as PrivateAndSecureLockSVG } from '../../../images/private-and-secure-lock-bottom.svg'
import { ReactComponent as PrivateAndSecureLockTopSVG } from '../../../images/private-and-secure-lock-top.svg'
import Img8020 from '../../../images/8020.png'
import { Link } from 'react-router-dom'
import  YoutubeEmbed  from './YoutubeEmbed'

export const Security = () => {
  return (
    <>
      <section className="mt-20 lg:mt-64">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <div
                className="heading mb-4 animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.6s"
                style={{ textAlign: 'left' }}
              >
                <h4
                  className="title animated fadeInUpShorter"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                  style={{ animationDelay: '0.2s', opacity: 1 }}
                >
                  Privacy and Security-Driven system design
                </h4>
              </div>
              <p
                style={{ color: '#808080' }}
                className="max-w-6xl text-gray-600 mt-12 text-left  text-lg 2xl:text-2xl font-display font-medium leading-normal animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
               PCNP is a platform built only to meet the user's privacy and security concerns utilizing state-of-the-art technology encryption. There is no central control point in PCNP. In order to destabilize third-party choke points, we have built a protocol to access our systems with the smallest possible service disruption.
              </p>
              <Link to="/security" 
               className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
               data-animation="fadeInUpShorter"
               data-animation-delay="1.8s"
              >
                    Learn More
                  </Link>
            </div>
            <div>
              <div style={{ marginTop: '70px' }} className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    alt="Private And Secure"
                    style={{ width: '100%' }}
                    src={PrivateAndSecure}
                  />
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center private-and-secure animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
                >
                  <div className="flex">
                    <div className="flex mr-6 items-end relative">
                      <div className="relative flex">
                        <img
                          src={PrivateAndSecureAvatar}
                          className="avatar relative z-20"
                          style={{ transform: 'scale(1)' }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center key z-index: 10 opacity-0">
                          <PrivateAndSecureSVG style={{ marginTop: '3px' }} />
                        </div>
                      </div>
                    </div>
                    <div className="inner relative">
                      <div
                        style={{ width: '323px', height: '63px' }}
                        className="description py-6"
                      >
                        <p
                          style={{ color: '#FFFFFF' }}
                          className="max-w-6xl text-black-600  text-1xl font-display leading-snug px-12"
                        >
                          Hey, Can i tell you a secret?{' '}
                          <br className="hidden md:inline" />
                        </p>
                      </div>
                      <div
                        style={{ width: '323px', height: '63px' }}
                        className="overlay h-full w-full justify-between px-16 items-center flex bg-black top-0 absolute"
                      >
                        <div style={{color: '#FFFFFF'}} className=" bold  text-1xl">
                          10!101ß#{'{'}%3
                        </div>
                        <div className="lock relative">
                          <PrivateAndSecureLockSVG />
                          <PrivateAndSecureLockTopSVG
                            src="./theme-assets/images/private-and-secure-lock-top.svg"
                            className="absolute top-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 mt-56 pb-20 lg:pb-64 pt-12">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <div
                className="heading mb-4"
                style={{ textAlign: 'left', opacity: 1 }}
              >
                <h4
                  className="title animated fadeInUpShorter"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                  style={{ animationDelay: '0.2s', opacity: 1 }}
                >
                  Advertising money?
                </h4>
                <h6
                  className="d-block white animated fadeInUpShorter"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.3s"
                  style={{ animationDelay: '0.3s', opacity: 1, color: '#808080' }}
                >
                  Can you imagine being paid in cryptocurrency for scrolling or browsing because you have access to PCNP’s Web 3.0?
                </h6>
              </div>
              <p
                style={{
                  color: '#808080',
                  fontSize: '16px',
                  animationDelay: '0.4s',
                  opacity: 1
                }}
                className="mt-6 animated fadeInUpShorter"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                Better privacy, flawless data security, and unblocking of social media applications that have been blocked are the primary benefits of a Decentralized VPN. Companies may price differently depending on where the customer is located. Data democracy and user sovereignty are fostered by PCNP since users get 75% of advertising money. An opt-out is an option if you don't want to view adverts
              </p>
              <Link to="/security" 
               className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
               data-animation="fadeInUpShorter"
               data-animation-delay="1.8s"
              >
                    Learn More
              </Link>
              
            </div>
            <div>
              <div style={{marginTop: '140px'}} className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <img
                    className="private-and-secure-img"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.6s"
                    style={{
                      width: '552px',
                      height: '370px',
                      marginTop: '196px'
                    }}
                    src={Img8020}
                  /> */}

                  <YoutubeEmbed style={{  width: '552px',
                      height: '370px',
                      marginTop: '196px'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
