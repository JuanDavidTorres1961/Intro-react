import React from 'react'
import {  } from "../Proyects/Css/Proyects.css";
import SMS from "../Proyects/img/SMS.png"
import blueAsy from "../Proyects/img/blueAsy.png"
import Bleux from "../Proyects/img/Bleux.png"

export const Proyects = () => {
  return (
    <>
        <div  className='container-proyects'>
          <h1 className='titleProjects'>My Projects</h1>
          <div className='cards-container'>
              <div className="card">
                  <a href="https://papaya-babka-00d321.netlify.app"><img src={SMS} className='image-Projects' /></a>
              </div>
              <div className="card">
                  <a href="https://blueasytorres.netlify.app"><img src={blueAsy} className='image-Projects' /></a>
              </div>
              <div className="card">
                  <a href="https://bucolic-hummingbird-49733e.netlify.app"><img src={Bleux} className='image-Projects' /></a>
              </div>
          </div>
        </div>
        </>
  )
}

export default Proyects;