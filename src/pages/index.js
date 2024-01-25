import React from "react"
import chatbotImage from '../assets/projects/chatbotanima.gif';
import aiGif from '../assets/projects/ai-in-healthcare.gif';
import Stocks from '../assets/projects/apple.jpeg'
import Ecommerce from '../assets/projects/chatbotaws1.png'



const Index =() =>{
    return(

     
<section> 
  
        <div className="breadcrumbs d-flex align-items-center">
        <div className="container position-relative d-flex flex-column align-items-left background-white" data-aos="">
          <div className="row">
            <div className="text-left col-md-6 mt-2 pt-2">
              <h2 className="text-black pb-4" style={{ fontSize: '50px' }}> Customized Chatbots </h2>
              <p className="lead">
                Images, tables, and text to deliver spot-on answers. Build your knowledgebase at scale.
                Don't gamble with generic bots, we provide clarity and accuracy.
              </p>
            </div> 
            <div className="col-md-6 ">
              <img src={chatbotImage} className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy" alt="Chatbot Image" />
            </div>
          </div>
        </div>
      </div>

  
        <section id="projects" className="projects pt-4">
            <div className="container">

                <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
                    <h3 className=" text-center mt-0">Chatbots are transforming industries, reducing time and improving lifes. </h3>

                    <section id="about" className="about pb-4">
                        <div className="container">
            
                            <div className="row position-relative">
                                <div className="container px-4 ">
                                    <div className="row flex-row-reverse align-items-center g-3 py-1">
                                      <div className="col-10 col-sm-8 col-lg-6">
                                        <img src={aiGif} className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy"/>
                                      </div>
                                      <div className="col-lg-6">
                                        <h2 className="display-5 fw-bold lh-1 mb-3">Chatbot for support </h2>
                                        <p className="lead">Streamline assistance, reduce wait times, and offer tailored self-service support. From health care to logistics, unlock the power of our intelligent chatbot designed to address all your needs. The chatbot can include Knowledge base, FAQ, images and PDFs scrapping.</p>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                            <a href="https://createfyai.com/contact.html"> 
                                          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="container px-4 ">
                                 

                                    <div className="container pl-4 pt-5 mt-5">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-lg-6"> 
                                              <img src={Stocks} className="d-block mx-lg-auto img-fluid" width="900" height="600" loading="lazy"/>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                              <h2 className="display-5 fw-bold lh-1 mb-3"> Chatbot for Stocks</h2>
                                              <p className="lead">Real-time predictions in your pocket. API and process integration to summarize news and investment advice.</p>
                                              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
                                              </div>
                                            </div>
                                          </div>
                                          
                                      </div>
                                  </div>

                                  <div className="container px-4 ">
                                    <div className="row flex-row-reverse align-items-center g-3  pl-4 pt-5 mt-3">
                                      <div className="col-10 col-sm-8 col-lg-6">
                                        <img src={Ecommerce} className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy"/>
                                      </div>
                                      <div className="col-lg-6">
                                        <h2 className="display-5 fw-bold lh-1 mb-3">Chatbot for E-Commerce.  </h2>
                                        <p className="lead"> Keep your customers up to date about order status and reply to most common questions without the need of a person. We link database, order notification purchase and inventory to provide the customer with the latest information. This can be integrated with knowledge base and FAQ on request.  </p>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
                                          
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>
            
                        </div>
                    </section>


                </div>

            </div>
        </section>

        <div className="section-header pb-5 pt-5" style={{ backgroundImage: "url('assets/img/bacground1.1.jpg')", fontSize: '50px', color: 'white' }}>
                <h2 className="text-white strong">We just don't build chatbots</h2>
                <p style={{ fontSize: '20px' }} className="text-white strong">Get your chatbot to the next level utilizing our own Machine learning models and transformers, we prevent wrong answers to tailor your needs. </p>
            </div>



            <section id="services" className="pt-5 mt-2 services section-bg">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <h3 style={{ fontSize: '40px' }} className="text-black text-center strong pb-4">360° Approach for optimal results</h3>
                    

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item  position-relative">

                            <h3>Analyze</h3>
                            <p className="text-black">Analyze and define your AI requirements.
                                Considering its on alignment with your industry, business context, and its potential
                                impact organization.</p>

                        </div>
                    </div>
                    

                    <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">

                            <h3>Collect</h3>
                            <p> Collect and transform data from images, text, databases and almost every format. We ensure its accuracy and reliability,
                                turning raw data into actionable insights, enabling informed decision-making and driving your business
                                forward.</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">

                            <h3>Develop</h3>
                            <p>Develop AI models tailored to your specific needs,
                                trained and fine-tuned, ensuring optimal performance and accuracy.</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">

                            <h3>Monitor</h3>
                            <p>Monitoring AI models to define areas of improvement. By fine-tuning parameters and
                                adapting to evolving data patterns,
                                we ensure your AI solutions stay at peak performance. </p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-item position-relative">

                            <h3>Document</h3>
                            <p>Document and track the AI implementation process,
                                capturing methodologies, insights, and outcomes. For you to stay informed. </p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-item position-relative">

                            <h3>Maintain</h3>
                            <p>Maintain inference servers and offer regular updates, bug fixes, and enhancements
                                to keep your AI systems running optimally. </p>

                        </div>
                    </div>

                </div>

            </div>
        </section>
        </section>
      

);
};

export default Index