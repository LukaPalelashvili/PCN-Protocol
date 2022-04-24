// import NewSmartPhonePhoto from '../../../images/new-smartphone-photo.png'
import  YoutubeEmbed  from '../SecurityPage/YoutubeEmbed';


export const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="heading text-center">
          <div
            className="animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.3s"
            style={{opacity: '1 !important' }}
          >
            <h6 className="sub-title">About</h6>
            <h2 className="title">What is PCN Protocol</h2>
          </div>
          <p
            className="content-desc animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.4s"
          >
            For free flow of information, more privacy, and accessibility for everyone,
            <br className="d-none d-xl-block" />
            PCN Protocol aims to eliminate the hurdles to third-party interruptions.
          </p>
        </div>
        <div className="content-area">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h4
                className="title animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                PCNP as an<br className="d-none d-xl-block" /> encrypted blockchain network
              </h4>
              <h6
                className="pt-4 pb-2 animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                When it comes to protecting the privacy of users' communications,
                PCNP is unmatched. Free flow of information, privacy protection, 
                secure conversations, and the ability to restore advertising 
                power to users are just some of the features that make this your 
                ultimate stop for all things’ internet.
              </h6>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
                style={{color: '#808080'}}
              >
                PCNP's founders, team members, advisors, and partners do all 
                they can to offer useful resources for all of its users. Communication,
                problem-solving thinking, and decentralized decision-making based on 
                objective facts are the basic ideals of our technologies. PCNP can provide
                third-party-free services to its privileged users – thanks to state-of-the-art 
                technology.
              </p>
            </div>
            <div
              className="col-md-12 col-lg-6 animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.5s"
            >
                <YoutubeEmbed style={{  width: '552px',
                      height: '370px',
                      marginTop: '196px'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
