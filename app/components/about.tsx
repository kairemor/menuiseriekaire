import { urlForImage } from '@/sanity/lib/image'
import React from 'react'

function About({about}: {about: About}) {
  return (
    <div className="about_section layout_padding" id="about">
         <div className="container">
            <div className="row">
               <div className="col-md-5">
                  <h1 className="about_taital">{about.title}</h1>
                  <p className="about_text">{about.description}</p>
                  {/* <div className="read_bt_1"><a href="#">Read More</a></div> */}
               </div>
               <div className="col-md-7">
                  <div className="about_img">
                     <div className="video_bt">
                        <div className="play_icon"><img src={urlForImage(about.image)}/></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default About
