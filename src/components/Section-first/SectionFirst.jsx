import React from 'react'
import foto from "../Header/img/foto.jpg"

const SectionFirst = () => {
  return (
    <>

    <div className='container-section'>
      < div className='container-img'>
        <img src= {foto} alt="" className='image-section' />
        </div>

        <div className='container-description'>
        <p className='text-description'> Hi 👋, I'm Juan David Torres <br /> <br />
          🔭 I am currently studying at the Sena Galan of Armenia Quindio <br />

🌱 I am currently learning javascript,Css,NodeJs,typeScript for web application development <br />

🤝 I am available to work as a Frontend. <br />

💬 Ask me about Html, Css and Javascript <br />

📫 How to contact me torresgarciajuandavid7@gmail.com <br />

📄 about me: I am 20 years old and I am from Colombia</p>
      </div>
    </div>
    
    </>
  )
}

export default SectionFirst;