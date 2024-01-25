import React from "react"
import constructionsImage from '../assets/projects/constructions-1.jpg';
import topImg from '../assets/projects/bacground1.jpg';
import chatbotImage from '../assets/projects/chatbot2.jpg'; 
import constructionsImage2 from '../assets/projects/constructions-3.jpg'; 
import smartManu from '../assets/projects/constructions-2.jpg'; 
import computerVision from '../assets/projects/constructions-4.jpg'; 
import Benefits from '../assets/projects/Happy2-1.png';
import Background from '../assets/projects/bacground1.jpg';




const Artificial =() => {


    return(
        

<div id="main">
<div className="breadcrumbs d-flex align-items-center">
        <div className="container position-relative d-flex flex-column align-items-left background-white aos-init aos-animate" data-aos="">
            
            <div className="row">
                <div className="text-left col-md-6 mt-2 pt-2">
                    <h2 style={{fontSize:'50px'}} className="text-dark pb-4 pt-2"> Ai for self service and automation. </h2>
                    <p className="lead pb-4">
                        Avoid heavy code chatbots and provide the best solutions on time.

                        By utilizing artificial intelligence, businesses have
                        experienced a 50%
                        <a
                            href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier#introduction">
                            boost in productivity.</a>
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
                        
                      </div>
                </div>
                <div className="col-md-6 ">
                <img src={chatbotImage} className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy" alt="Chatbot" />

                </div>
               
            </div>
            
        </div>
    </div>

        <div className="pt-5 mt-3">            
<div className="section-header pb-5 pt-5" style=
{{backgroundImage: `url(${topImg}`}}
>

<h2 style={{ fontSize: "50px" }} className="text-white strong">We take your business to the next level</h2>
          <p style={{ fontSize: "20px" }} className="text-white strong">Save time and focus on getting more form your business.
                Resolve customer and own company inquiries with
                powerful predictive and analytical chatbot
                tools that drive smarter decision-making and unlock valuable insights.</p>
        </div>
    </div>
        
        <section id="constructions" className="constructions pb-5">
            <div className="container" data-aos="fade-up">
                <div className="row gy-4">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="card-item">
                            <div className="row">
                                <div className="col-xl-5">
                                <div className="card-bg" style={{ backgroundImage: `url(${constructionsImage})` }}>
                                    </div>
                                </div>
                                <div className="col-xl-7 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="card-title"> Generative Chatbots </h4>
                                        <p>
                                            Improve team efficiency with LLM-powered AI chatbots for retail and service
                                            industries to mention some.
                                            Personalized support and rapid question resolution for enhanced customer
                                            satisfaction.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-item">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="card-bg" 
                                    style={{ backgroundImage: `url(${constructionsImage2})` }}>
                                        
                                    </div>
                                </div>
                                <div className="col-xl-7 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="card-title">Ai for ECommerce and Support</h4>
                                        <p>Unlock AI's potential with sales chatbots, order status, custom recommendations, and smart decision-making. Enhance customer satisfaction spreadsheets and hello to AI-powered insights." </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200"> 
                        <div className="card-item">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="card-bg" style={{backgroundImage: `url(${smartManu})`}}>
                                    </div>
                                </div>
                                <div className="col-xl-7 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="card-title">Smart manufacturing --=-</h4>
                                        <p> Automate your production facility with data-driven insights for better
                                            rates, reduced costs, and enhanced customer experience.
                                            Our solutions include, failure prediction, predictive supply chain, and
                                            precision manufacturing
                                            improvement.</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                     </div>
                   

                     <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="card-item">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="card-bg" style={{backgroundImage: `url(${computerVision})`}}>
                                    </div>
                                </div>
                                <div className="col-xl-7 d-flex align-items-center">
                                    <div className="card-body">
                                        <h4 className="card-title">Computer vision</h4>
                                        <p> Enhance product quality and efficiency with AI: detect defects,
                                            prevent disruptions, and leverage computer vision for object detection,
                                            tracking, and segmentation in smart manufacturing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                </div>

            </div>

        </section>
        

        <hr/> 

        <section id="alt-services" className="alt-services">
            <div className="container" data-aos="fade-up">

                <div className="row justify-content-around gy-4">
                <div className="col-lg-6 img-bg" style={{ backgroundImage: `url(${Benefits})` }} data-aos="zoom-in" data-aos-delay="100"></div>


                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <h3>Benefits of using Ai</h3>
                        <p>Drive innovation and increase productivity.</p>

                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                            <i className="bi bi-check2-circle"></i>
                            <div>

                                <p> <span className="fw-bold fs-2">A</span>utomate repetitive tasks such as quality control,
                                    and order annotation. </p>
                            </div>
                        </div>

                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-check2-circle"></i>
                            <div>

                                <p> <span className="fw-bold fs-2">U</span>pgrade your monitoring techniques and get feedback
                                    without the need of someone
                                    near.</p>
                            </div>
                        </div>

                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                            <i class="bi bi-check2-circle"></i>
                            <div>

                                <p> <span className="fw-bold fs-2">T</span>ransfor your forecast demand based on questions and optimize to reduce stockouts,
                                    minimize excess inventory, and improve supply chain efficiency.</p>
                            </div>
                        </div>

                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-check2-circle"></i>
                            <div>

                                <p> <span className="fw-bold fs-2">O</span>btain results faster and make your customers interact with your bot, reducing support time.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>


        <section id="services" class="services section-bg" style={{backgroundImage: `url(${Background})`}}>
            <div className="container aos-init aos-animate" data-aos="fade-up">


                <div className="section-header">
                    <h2 style={{fontSize: "50px"}} className="text-white strong">360<span>°</span> Approach to your requirements for optimal results</h2>
                </div>

                

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item  position-relative">

                            <h3>Analyze</h3>
                            <p>Analyze and define your AI requirements,
                                considering its on alignment with your industry and business context, and its potential
                                impact organization.</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">

                            <h3>Collect</h3>
                            <p> Collect and transform data from diverse sources, ensuring its accuracy and reliability.
                                Turning raw data
                                into actionable insights, enabling informed decision-making and driving your business
                                forward.</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">

                            <h3>Develop</h3>
                            <p>Develop chatbot AI models,
                                trained and fine-tuned, ensuring optimal performance and accuracy.</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">

                            <h3>Monitor</h3>
                            <p>Monitoring your chatbot to define areas of improvement. By fine-tuning parameters and
                                adapting to evolving data patterns,
                                we ensure your AI solutions stay at peak performance. </p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-item position-relative">

                            <h3>Document</h3>
                            <p>Document the AI implementation process,
                                capturing methodologies, insights, and outcomes. </p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-item position-relative">

                            <h3>Maintain</h3>
                            <p>Maintain inference servers and offer regular updates, bug fixes, and enhancements
                                to keep your AI systems running optimally.* </p>

                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section>

        <div className="mt-1 pt-1 text-center">

        <h2 className="text-strong text-black" style={{ fontSize: "40px" }}> Contact us</h2>

    
            <h3 className="pt-2 text-center pb-5 mb-5"> In createfy we are more than happy to have a coffee and discuss your needs.</h3>
        </div>
          <div className="pt-2 text-center pb-5 mb-5">
        <div className="mx-auto" data-tf-widget="Nk0uilHJ" data-tf-opacity="100" data-tf-hide-headers data-tf-iframe-props="title=AI Chatbot Business Lead Form" data-tf-transitive-search-params data-tf-medium="snippet" style={{ width: "80%", height: "700px" }}
></div>
        <script src="//embed.typeform.com/next/embed.js"></script>
    </div>

</section>
      
    </div>
  
   

    );
};

export default Artificial