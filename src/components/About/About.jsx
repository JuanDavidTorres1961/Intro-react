import React from 'react'
import Proyects from '../Proyects/Proyects'
import Header from '../Header/Header'
import develop from '../Header/img/develop.webp'
import {  } from "../About/Css/About.css";


export const About = () => {
  return (
    <div className='bodyAbout'> 
      <Header/>
      <div className='container-about'>
      <div className='txt-about'>
        <h1 className='h1'>ABOUT ME</h1> <br />
      <p>
      🔭 I am currently studying at the Sena Galan of Armenia Quindio <br />

🌱 I am currently learning javascript,Css,NodeJs,typeScript for web application development <br />

🤝 I am available to work as a Frontend. <br />

💬 Ask me about Html, Css and Javascript <br />

📫 How to contact me torresgarciajuandavid7@gmail.com <br />

📄 about me: I am 20 years old and I am from Colombia</p>
        </div>
        <div className='container-image'>
            <img src={develop} className="image" />
        </div>
      </div>
      <Proyects/>
    </div>
  )
  
}

export default About;
