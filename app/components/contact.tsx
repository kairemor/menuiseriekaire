import React from 'react'

function Contact() {
  return (
    <div className="contact_section layout_padding" id="contact">
    <div className="container">
       <div className="row">
          <div className="col-md-12">
             <h1 className="contact_taital">Nous Contacter</h1>
          </div>
       </div>
    </div>
    <div className="container-fluid">
       <div className="contact_section_2">
          <div className="row">
             <div className="col-md-6">
                <form action="">
                   <div className="mail_section_1">
                      <input type="text" className="mail_text" placeholder="Name" name="Name" />
                      <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/> 
                      <input type="text" className="mail_text" placeholder="Email" name="Email"/>
                      <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="Massage"></textarea>
                      <div className="send_bt"><a href="#">Envoyer</a></div>
                   </div>
                </form>
             </div>
             <div className="col-md-6 padding_left_15">
                <div className="contact_img"><img src="https://res.cloudinary.com/kairemor/image/upload/v1612208337/max/IMG_20210201_192822_006_f0txil.jpg"/></div>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default Contact
