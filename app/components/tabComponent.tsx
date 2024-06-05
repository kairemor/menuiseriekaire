'use client'
import React, { useState } from 'react'

interface Tab {
    label: string;
    content: React.ReactNode
}

function TabComponent({ tabs }: { tabs: Tab[] }){
    const [activeTab, setActiveTab] = useState(tabs[0].label);
  return (
    <div>
       <div className="container">
       <div className="row">
          <div className="col-md-12">
             <h1 className="projects_taital">Projects</h1>
             <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                   <ul className="nav" data-tabs="tabs">
                        {tabs.map((tab) => (
                              <li className="nav-item" key={tab.label}>
                    <button
                        style={{
                            padding: "10px 20px",
                            border: "none",
                            backgroundColor: tab.label === activeTab ? '': 'transparent',
                            cursor: "pointer",
                            fontSize: "16px"
                        }}
                        
                        className={tab.label === activeTab ? 'nav-link active' : ''}
                        onClick={() => setActiveTab(tab.label)}
                    >
                        {tab.label}
                    </button>
                    </li>
                ))}
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div className="projects_section_2 layout_padding">
       <div className="container">
          <div className="pets_section">
             <div className="pets_section_2">
             {tabs.map(
                    (tab) =>
                        tab.label === activeTab && (
                            <div key={tab.label}>{tab.content}</div>
                        )
                )}
                      </div>
                
          </div>
       </div>
    </div>
    </div>
  )
}

export default TabComponent
