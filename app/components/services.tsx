import { urlForImage } from '@/sanity/lib/image'
import React from 'react'

function Services({services}: {services: [Service]}) {
  return (
    <div className="services_section layout_padding">
    <div className="container-fluid">
       <div className="row">
          <div className="col-sm-12">
             <h1 className="services_taital">Nos Services</h1>
             <p className="services_text_1">Nous proposons des services dans plusieurs domaines</p>
          </div>
       </div>
       <div className="services_section_2">
          <div className="row">
                {
                    services.map(service => (
                        <div className="col-lg-3 col-sm-6" key={service._id}>
                        <div className="box_main">
                           <div className="service_img"><img src={urlForImage(service.image)}/></div>
                           <h4 className="development_text">{service.title}</h4>
                           <p className="services_text">{service.description}</p>
                           {/* <div className="readmore_bt"><a href="#">Read More</a></div> */}
                        </div>
                     </div>
                    ))
                }
           
          </div>
       </div>
    </div>
 </div>
  )
}

export default Services
