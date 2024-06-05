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
                      <a href="#"><span className="padding_15"><i className="fa fa-mobile" aria-hidden="true"></i></span> <br/>+221 77 362 25 50</a>
                   </li>
               
                   <li>
                      <a href="#"><span className="padding_15"><i className="fa fa-map-marker" aria-hidden="true"></i></span> <br/>Rue Yacine BOUBOU, Thiès</a>
                   </li> 
                </ul>
             </div>
          </div>
       </div>
       <div className="footer_section_2">
          <div className="row">
             <div className="col-md-4">
                <h2 className="useful_text">Liens Rapide</h2>
                <div className="footer_menu">
                   <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><a href="#projects">Projects</a></li>
                      <li><a href="#contact">Contact Us</a></li>
                   </ul>
                </div>
             </div>
             <div className="col-md-4">
                <h2 className="useful_text">Menuiserie Kaire</h2>
                <p className="lorem_text">Menuiserie Africaine Maguette Kaire chef atelier menuisierie, Ebeniste, Stylise, Decoration. Nous pr...</p>
             </div>
             <div className="col-md-4">
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
       </div>
    </div>
 </div>
  )
}

export default Footer
