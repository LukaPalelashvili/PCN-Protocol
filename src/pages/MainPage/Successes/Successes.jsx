// import ProblemsGraphic from '../../..//images/problems-graphic.png'
import Challanges from '../../../images/isometric1.png';
import SuccessesGraphic from '../../../images/isometriccloud.png';
// import SolutionsGraphic from '../../..//images/solutions-graphic.png'

export const Successes = () => {
  return (
    <section
      id="problem-solution"
      className="problem-solution section-pro section-padding"
    >
      <div className="container">
        <div className="heading text-center">
          <div
            className="animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.3s"
          >
            <h6 className="sub-title">Network</h6>
            <h2 className="title">
            Network &amp; <strong>Nodes</strong>
            </h2>
          </div>
          <p
            className="content-desc animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.4s"
          >
            More than $40 million in assets were placed under restraint pending
            forfeiture, and more than 30
            <br className="d-none d-xl-block" />
            Liberty Reserve exchanger domain names were seized.
          </p>
        </div>
        <div className="problems">
          <div className="row">
            <div 
             style={{marginTop: '10%'}}
             className="col-md-12 col-lg-6">
              <div className="heading mb-4">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  Network
                </h4>
              </div>
              <p
                className="prosto"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
               Encryption from peer to peer is built into PCNP, ensuring the security of any data sent across the network. A private network like PCNP allows for more control, increased security, greater customization, the lack of advertisements, proven technology, and network availability.
              </p>
            </div>
            <div className="col-md-12 col-lg-6 text-center">
              <img
                src={Challanges}
                className="problems-img animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
                alt="problems-graphic"
              />
            </div>
          </div>
        </div>
        <div className="solutions mt-5">
          <div className="row">
            <div className="col-md-12 col-lg-6 text-center">
              <img
                src={SuccessesGraphic}
                className="solutions-img animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
                alt="problems-graphic"
              />
            </div>
            <div 
              style={{marginTop: '5%'}}
              className="col-md-12 col-lg-6 move-first">
              <div className="heading mb-4">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  SUCCESSES
                </h4>
              </div>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                Getting different nodes to work together in synchronization to get maximum and highly efficient outputs is one of the main challenges. <br/>
                For the sake of productivity, the strategy of interoperating between the new technologies & old centralized resources like upgrading from Web 2.0 to 3.0. The intra- operative move proved to be a game-changer.
              </p>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
               PCNP  is relentlessly resourceful as we are growing at a fast pace. We recognize our responsibility to serve PCNP’s Token holders with the best autonomous system.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
