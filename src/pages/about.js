import React from "react";
import US from '../assets/projects/about.us.jpg'; 
import Background2 from '../assets/projects/background2.8.jpg';

const About = () => {
  React.useEffect(() => {
    document.title = "CreatefyAi - About us";
  }, []);

  return (
    <div id="main">
      <section id="about" className="about" style={{ padding: "110px 0 40px 0" }}>
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img" style={{ backgroundImage: `url(${US}` }}></div>
            <div className="col-lg-7">
              <h2>Our difference</h2>
              <div className="our-story">
                <h4>Since 2017</h4>
                <h3> Us</h3>
                <p>We are a group of creative minds that think that Artificial Intelligence can be simple for people. Fostering communication and making things simpler than what it is now.
                  We have been involved in e-commerce, construction, finance, and SaaS, meaning we are ready to provide you the best solutions that fit your needs. All in one!
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> <span>Artificial intelligence</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>E-commerce</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Business analysis</span></li>
                </ul>
                <p>Don't miss the opportunity to get the most from your business now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="" className="py-5" style={{ backgroundColor: "#364d59" }}>
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header pb-3">
            <h2 style={{ color: "white" }}>Mision</h2>
            <p className="text-white">Our mission is to merge e-commerce, web development, and business with AI expertise.
              Our vision is to revolutionize industries and empower clients with groundbreaking AI solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="stats-counter" className="stats-counter section-bg mb-3 pb-1 pt-2">
        <div className="container pt-5 pb-4">
          <div className="row gy-4 justify-content-center text-center">
            <div className="col-lg-3 col-md-3" style={{ boxShadow: "0 5px 15px rgb(0 0 0 / 15%)" }}>
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="0" className="purecounter color-black">4</span>
                  <p className="text-dark">Industries</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="stats-item d-flex align-items-center w-100 h-100" style={{ boxShadow: "0 5px 15px rgb(0 0 0 / 15%" }}>
                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="37" data-purecounter-duration="0" className="purecounter"
                  >30</span>
                  <p className="color-black">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="alt-services-2" className="alt-services section-bg" style={{backgroundColor: "#e9e9e9"}}>
    <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="row justify-content-around gy-4">
            <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Recent projects</h3>
                {/* <p> Our commitment is to make you save money and increase productivy with easy to
                    understand ai applications
                </p> */}

                <div className="icon-box d-flex position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                    <div>
                        <h4><a href="" className="stretched-link">Stock real time price correlation and news</a>
                        </h4>
                        <p>We generate real time stock prices and related to similar stocks on
                            the stockmarket</p>
                    </div>
                </div>

                <div className="icon-box d-flex position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">

                    <div>
                        <h4><a href="" className="stretched-link">Website scrapper</a></h4>
                        <p>We developed a website scrapper to get all the data from different sources and place
                            it on a database
                            for further evalation by the client
                        </p>
                    </div>
                </div>

                <div className="icon-box d-flex position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">

                    <div>
                        <h4><a href="" className="stretched-link">Chatbot</a></h4>
                        <p>Chatbot integrated to the web scrapper using embeddings providing on time customer
                            support</p>
                    </div>
                </div>

                <div className="icon-box d-flex position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">

                    <div>
                        <h4><a href="" className="stretched-link">Business analysis</a></h4>
                        <p>We have conducted numerous business research analysis using Ai in sustainability and
                            3C electronics to determine the feasibility
                            of a business.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 img-bg aos-init aos-animate" style={{backgroundImage: `url(${Background2})`}} data-aos="zoom-in" data-aos-delay="100"></div>
        </div>

    </div>
</section>


</div>

    )
}

export default About

