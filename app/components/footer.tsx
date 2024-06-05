import React from 'react'

function Footer() {
  return (
    <div className="footer_section layout_padding" id="padding">
    <div className="container">
       <div className="row">
          <div className="col-md-12">
             <div className="location_text">
                <ul>
                   <li>
                      <a href="#"><span className="padding_15"><i className="fa fa-mobile" aria-hidden="true"></i></span> <br/>Call +01 1234567890</a>
                   </li>
                   <li className="active">
                      <a href="#"><span className="padding_15"><i className="fa fa-envelope" aria-hidden="true"></i></span> <br/>demo@gmail.com</a>
                   </li>
                   <li>
                      <a href="#"><span className="padding_15"><i className="fa fa-map-marker" aria-hidden="true"></i></span> <br/>Location</a>
                   </li> 
                </ul>
             </div>
          </div>
       </div>
       <div className="footer_section_2">
          <div className="row">
             <div className="col-md-4">
                <h2 className="useful_text">QUICK LINKS</h2>
                <div className="footer_menu">
                   <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="projects.html">Projects</a></li>
                      <li><a href="testimonial.html">Testimonial</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                   </ul>
                </div>
             </div>
             <div className="col-md-4">
                <h2 className="useful_text">Work Portfolio</h2>
                <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
             </div>
             <div className="col-md-4">
                <h2 className="useful_text">SIGN UP TO OUR NEWSLETTER</h2>
                <div className="form-group">
                   <textarea className="update_mail" placeholder="Enter Your Email" rows={5} id="comment" name="Enter Your Email"></textarea>
                   <div className="subscribe_bt"><a href="#">Subscribe</a></div>
                </div>
             </div>
          </div>
       </div>
       <div className="social_icon">
          <ul>
             <li>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
             </li>
             <li>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
             </li>
             <li>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
             </li>
             <li>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
             </li>
          </ul>
       </div>
    </div>
 </div>
  )
}

export default Footer
