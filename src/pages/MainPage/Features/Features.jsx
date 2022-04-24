import { ReactComponent as NoPhoneSVG } from '../../..//images/no-phone.svg'
import { ReactComponent as NoEmailSVG } from '../../..//images/no-email.svg'
import { ReactComponent as NoBankSVG } from '../../..//images/no-bank.svg'
import { Link } from 'react-router-dom';
import '../Features/features.css';

export const Features = () => {
  return (
    <>
      <section className='pcnp-feautures-block' >
        <div className="heading text-center">
          <div
            className="animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.3s"
          >
            <h6 className="sub-title">PCN FEATURES</h6>
            <h2 className="title">Features</h2>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto lg:px-12">
          <div className="grid md:grid-cols-2">
            <div
              style={{ background: 'black' }}
              className="bg-blue-gray-light relative"
            >
              {/* <span class="bg-blue-gray-light w-screen absolute -z-1 right-0 h-full"></span> */}
              <div className="feature-border-right feature-border-bottom  h-full px-8 py-32 md:pr-16">
                <div className="row">
                  <div className="feature-none col-md-11 col-lg-10" 
                       style={{marginLeft: '60px'}} 
                  >
                    <p
                      style={{ fontSize: '15px', color: '#FFFFFF' }}
                      className="text-lg 2xl:text-2xl text-gray-300 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      Borderless in-chat payments 
                    </p>
                    <h3
                      className="title animated fadeInUpShorter"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                      style={{ animationDelay: '0.2s', opacity: 1 }}
                    >
                      Private messenger
                    </h3>
                    <p
                      style={{ color: '#808080', fontSize: '16px' }}
                      className=" mt-6 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      PCNP safeguards the confidentiality of your messages against third-party intrusions. End-to-end encryption and an open-source, peer-to-peer protocol are the foundations of the privacy of our communications technology.
                    </p>
                    <Link to="/privatemessenger"
                     className="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter "
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s"
                     style={{ animationDelay: '0.4s', opacity: 1 }}
                     >
                    Explore All Features
                  </Link>
                    

                  </div>
                </div>
              </div>
            </div>
            <div className="md:-mt-16 responsive-up">
              {/* <span class="bg-black w-screen absolute -z-1 left-0 h-full"></span> */}
              <div className="h-full flex flex-col space-between px-8 py-32 md:p-32 text-white">
                <div className="flex-1 md:mt-12">
                  <p
                    style={{ fontSize: '15px', color: '#FFFFFF' }}
                    className="text-lg 2xl:text-2xl text-gray-300 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Everywhere for everyone
                  </p>
                  <h3
                    className="title animated fadeInUpShorter"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                    style={{ color: '#FFFFFF', animationDelay: '0.2s', opacity: 1 }}
                  >
                    Crypto Wallet
                  </h3>
                  <p
                    style={{ fontSize: '16px', color: '#808080' }}
                    className="text-lg 2xl:text-xl mt-6 text-gray-300 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    In our secure Crypto Wallets, you may send, receive, or store your cryptocurrency and tokens, including ERC20, ERC721 & PCNP Tokens.  Our Crypto Wallets are ingeniously built to ensure the safety of your funds.
                  </p>
                  <Link to="/securecryoto"
                     className="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter "
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s"
                     style={{ animationDelay: '0.4s', opacity: 1 }}
                     >
                    Explore All Features
                  </Link>
                </div>
                <div className="mt-12 md:-mb-32"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pcnp-feautures-block2'>
        <div className="max-w-screen-2xl mx-auto lg:px-12">
          <div className="grid md:grid-cols-2">
            <div className="relative md:-mb-16 order-2 md:order-none responsive-up">
              <span className="absolute -z-1 right-0 h-full" />
              <div className="h-full flex flex-col space-between px-8 py-32 md:pr-16 text-white">
                <div style={{marginLeft: '60px'}} className='feature-none1'  >
                  <p
                    style={{ fontSize: '15px', color: '#fff' }}
                    className="text-lg 2xl:text-xl text-gray-300 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    it’s your data and only yours.
                  </p>
                  <h3
                    className="title animated fadeInUpShorter"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                    style={{ color: '#FFFFFF', animationDelay: '0.2s', opacity: 1 }}
                  >
                    dVPN integrated with web3 browser
                  </h3>
                  <p
                    style={{ fontSize: '16px', color: '#808080' }}
                    className="text-lg 2xl:text-xl text-gray-300 mt-4 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    With Web3’s Browser, privacy and encryption are just a few of the technologies that make up Web 3.0's foundation. Our browser's ultimate goal is to give the user data democracy, complete encryption of data, smart contracts, and scalable economic models for both the user and service providers.
                  </p>
                  <p
                    style={{ fontSize: '16px', color: '#808080' }}
                    className="text-lg 2xl:text-xl text-gray-300 mt-4 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    PCNP also includes a decentralized VPN, which provides the User with greater online privacy, unblocks your social media, and better security for online shopping and banking.
                  </p>
                  <br />
                  <Link to="/web"
                     className="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter "
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s"
                     style={{ animationDelay: '0.4s', opacity: 1 }}
                     >
                    Explore All Features
                  </Link>
                </div>
                <div className="mt-12 md:mt-4 my-auto flex items-center justify-center flex-1"></div>
              </div>
            </div>
            <div className="feature-border-top feature-border-left relative order-1 md:order-none"
            >
              <span className="absolute -z-1 left-0 h-full" />
              <div className="h-full flex flex-col space-between px-8 py-32 md:pr-16 text-white responsive-up">
                <div className="row">
                  <div className="feature-none3 feature-block-3-fix col-md-11 col-lg-10">
                    <p
                      style={{ fontSize: '15px', color: '#FFFFFF' }}
                      className="text-lg 2xl:text-xl animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      NFTs?
                    </p>
                    <h3
                      className="title animated fadeInUpShorter"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                      style={{ animationDelay: '0.2s', opacity: 1 }}
                    >
                      Discover, buy, and sell extraordinary NFTs
                    </h3>
                    <p
                      style={{ fontSize: '16px', color: '#808080' }}
                      className="text-lg 2xl:text-xl mt-4 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      A decentralized VPN is also a feature of PCNP, which
                      offers the User enhanced online privacy, smart home
                      protection against potential hacking attacks, unblocks
                      your social media, improved security for online shopping
                      and online banking.
                    </p>
                    <ul
                      className="mt-16 mb-20 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      <li
                        style={{ color: '#FFFFFF' }}
                        className="flex items-center mb-4 text-gray-600 text-xl 2xl:text-4xl font-display font-normal leading-normal"
                      >
                        <NoPhoneSVG className="mr-8 md:w-auto w-16" />
                        <span style={{ marginLeft: '15px', color: '#808080' }}>
                          No phone number
                        </span>
                      </li>
                      <li
                        style={{ color: '#FFFFFF', color: '#808080' }}
                        className="flex items-center mb-4 text-gray-600 text-xl 2xl:text-4xl font-display font-normal leading-normal"
                      >
                        <NoEmailSVG className="mr-8 md:w-auto w-16" />
                        <span style={{ marginLeft: '15px', color: '#808080' }}>
                          No email address
                        </span>
                      </li>
                      <li
                        style={{ color: '#FFFFFF' }}
                        className="flex items-center mb-4 text-gray-600 text-xl 2xl:text-4xl font-display font-normal leading-normal"
                      >
                        <NoBankSVG className="mr-8 md:w-auto w-16" />
                        <span style={{ marginLeft: '15px', color: '#808080' }}>
                          No bank account
                        </span>
                      </li>
                    </ul>
                    <Link to="/accountgeneration"
                     className="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated fadeInUpShorter responsive-center"
                     data-animation="fadeInUpShorter"
                     data-animation-delay="0.4s"
                     style={{ animationDelay: '0.4s', opacity: 1 }}
                     >
                    Explore All Features
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
