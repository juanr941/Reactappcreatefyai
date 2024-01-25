import React from "react"

const Footer =() =>{

    return(

<footer id="footer" className="footer">
    <div className="footer-content position-relative">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="footer-info">
                        <h3>createAi</h3>
                        <p>
                            Renai Rd 189<br />
                            Taipei-Taiwan<br /><br />
                            <strong>Phone:</strong> +886906776225<br />
                            <strong>Email:</strong> contact@createai.com<br />
                        </p>
                        {/* <div className="social-links d-flex mt-3">
                            <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
                        </div> */}
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#">Top</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-3 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="#">Chatbots</a></li>
                        <li><a href="#">Smart Manufacturing</a></li>
                        <li><a href="#">Ecommerce and Support</a></li>
                        <li><a href="#">Computer Vision</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Latest AI news</h4>
                    <ul>
                        <li><a href="#">Bloomberg Ai</a></li>
                        <li><a href="#">Mckinsey</a></li>
                        <li><a href="#">Ai news</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="footer-legal text-center position-relative">
        <div className="container">
            <div className="copyright">
                &copy; Copyright 2024 <strong><span>createAi</span></strong>. All Rights Reserved
            </div>
        </div>
    </div>
</footer> 
 );
 }; 


 export default Footer

