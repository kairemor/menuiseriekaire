import React from 'react'
import TabComponent from './tabComponent';

const PhotoComponent = () => (
    <div className="row">
    <div className="col-md-4">
       <div className="container_main">
          <img src="https://res.cloudinary.com/kairemor/image/upload/v1612208328/max/IMG_20210201_192859_467_zuupn6.jpg" alt="" className="image"/>
          <div className="overlay">
             <div className="text">
                <h4 className="some_text"><i className="fa fa-link" aria-hidden="true"></i></h4>
             </div>
          </div>
       </div>
       <div className="project_main">
          <h2 className="work_text">Home Work</h2>
          {/* <p className="dummy_text">alteration in some form, by injected humour, or randomised words which  look even slightly believable. If you are going to use</p> */}
       </div>
    </div>
    <div className="col-md-4">
       <div className="container_main">
          <img src="https://res.cloudinary.com/kairemor/image/upload/v1612208392/max/IMG_20210201_191105_244_y8qyyr.jpg" alt="" className="image"/>
          <div className="overlay">
             <div className="text">
                <h4 className="some_text"><i className="fa fa-link" aria-hidden="true"></i></h4>
             </div>
          </div>
       </div>
       <div className="project_main">
          <h2 className="work_text">Home Work</h2>
          {/* <p className="dummy_text">alteration in some form, by injected humour, or randomised words which  look even slightly believable. If you are going to use</p> */}
       </div>
    </div>
    <div className="col-md-4">
       <div className="container_main">
          <img src="https://res.cloudinary.com/kairemor/image/upload/v1612208465/max/IMG_20210201_190954_411_kjgwpv.jpg" alt="" className="image"/>
          <div className="overlay">
             <div className="text">
                <h4 className="some_text"><i className="fa fa-link" aria-hidden="true"></i></h4>
             </div>
          </div>
       </div>
       <div className="project_main">
          <h2 className="work_text">Home Work</h2>
           {/* <p className="dummy_text">alteration in some form, by injected humour, or randomised words which   look even slightly believable. If you are going to use</p> */}
       </div>
    </div>
 </div>
)

function Projects() {
    const tabs = [
        {
            label: 'Mobilier de Chambre',
            content: <PhotoComponent />,
        },
        {
            label: 'Mobilier de Bureau et Éducation',
            content: <PhotoComponent />,
        },
        {
            label: 'Aménagement de Salon et Maison',
            content: <PhotoComponent />,
        },
        {
            label: "Équipement D'Hôtel",
            content: <PhotoComponent />,
        },
    ];
  return (
    <div className="projects_section layout_padding" id="projects">
   
    <TabComponent tabs={tabs} />
 </div>

  )
}

export default Projects
