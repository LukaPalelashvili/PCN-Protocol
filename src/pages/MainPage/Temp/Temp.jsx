import { ReactComponent as DevelopersImg } from '../../../images/developers-img.svg'
import { ReactComponent as IconArrowWhite } from '../../../images/icon-arrow-right-white.svg'

export const Temp = () => (
  <section className="pt-24">
    <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
      <div className="grid md:grid-cols-2 gap-24">
        <div>
          <div className="heading mb-4">
            <h5
              style={{
                animationDelay: '0.3s',
                textAlign: 'left',
                color: '#FFFFFF',
                opacity: 1
              }}
              className="d-block animated fadeinupshorter"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
  
            >
              PCNP is an Open-Sourced Project
            </h5>
          </div>
          <p
            className="content-desc animated fadeInUpShorter"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.4s"
            style={{
              animationDelay: '0.4s',
              color: '#7D7D7D',
              opacity: 1
            }}
          >
           Open-source projects provide various benefits for contributors and users, including engineers, designers, and artists as well as crypto enthusiasts and educators. In open-source initiatives, the reports, assets, and other essential information are freely available to the public.
          </p>
          <ul className="flex flex-col md:flex-row md:items-center -ml-12">
            <li className="ml-12">
              <a
                style={{
                  animationDelay: '0.4s',
                  opacity: 1,
                  width: '170px',
                  marginTop: '-15px',
                  color: '#4360DF',
                  /*! textAlign: 'left', */ marginLeft: '-55px'
                }}
                href="https://github.com/PCN-Protocol"
                className="flex items-center font-special font-bold py-4 px-6 font-bold  border-primary-base rounded hover:text-white animated fadeInUpShorter"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.6s"
              >
                <DevelopersImg />
                <span style={{ marginLeft: '0.5rem' }}>Developers</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-32 md:pb-0">
          <div className="heading mb-4">
            <h5
              style={{
                animationDelay: '0.3s',
                textAlign: 'left',
                color: '#FFFFFF',
                opacity: 1
              }}
              
              className="d-block animated fadeinupshorter"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              What PCNP envisions for its Users
            </h5>
          </div>
          <p
            className="content-desc animated fadeInUpShorter"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.4s"
            style={{
              animationDelay: '0.4s',
              color: '#7D7D7D',
              opacity: 1
            }}
          >
            To give its privileged users a more dependable, secure, and safe communication method, PCNP has been working nonstop from day one.
          </p>
          <p
            className="content-desc animated fadeInUpShorter"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.4s"
            style={{
              animationDelay: '0.4s',
              color: '#7D7D7Dzzzz',
              opacity: 1
            }}
          >
           In order to give a hassle-free flow of information, no fear of third-party breaches to user privacy, very secure communications, and to promote privacy rights, the ultimate autonomy of our PCNP was built.
          </p>
          <a
            style={{
              animationDelay: '0.7s',
              opacity: 1,
              width: '170px',
              color: '#4360DF',
              marginLeft: '-20px'
            }}
            href="our-mission.html"
            className="flex items-center font-special font-bold  px-6 font-bold  border-primary-base rounded  hover:text-white animated fadeInUpShorter"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.6s"
          >
            Learn More
            <span
              style={{ marginLeft: '0.5rem' }}
              className=" group-hover:translate-x-1 transform transition-all duration-200 linear"
            >
              <IconArrowWhite />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
)
