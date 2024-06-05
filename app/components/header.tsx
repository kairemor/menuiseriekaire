'use client'
import React from 'react'

interface MenuItem {
  label: string;
  link: string;
}

interface Header {
  title: string;
  menu: MenuItem[];
}

function Header({ header, home}: {header: Header, home: Home}) {
  return (
    <div className="header_section" >
    <div className="container-fluid">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo"><a href="#"><h1 style={{color: "white"}}>Menuiserie Kaire & Frere</h1></a></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ml-auto">
                {
                  header.menu.map(menu => (
                    <li className="nav-item" key={menu.label}>
                    <a className="nav-link" href={menu.link}>{menu.label}</a>
                 </li>
                  ))
                }
             </ul>
          </div>
       </nav>
    </div>
    {/* <!-- banner section start --> */}
    <div className="banner_section layout_padding" id="home">
       <div id="my_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
             <div className="carousel-item active">
                <div className="container">
                   <div className="row">
                      <div className="col-sm-12">
                         <div className="banner_taital_main">
                            <h1 className="banner_taital">{home.title}</h1>
                            <p className="banner_text">{home.description} </p>
                            <div className="btn_main">
                               <div className="started_text active"><a href="#contact">Nous Contacter </a></div>
                               <div className="started_text"><a href="#about">A Propos de nous</a></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default Header
