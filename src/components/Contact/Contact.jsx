import React from 'react'
import '../Contact/Css/Contact.css'
import Header from "../Header/Header"
import gmail from "../Contact/img/gmail.svg"
import github from "../Contact/img/github-logo.svg"
import instagram from "../Contact/img/instagram-logo-instagram.svg"

export const Contact = () => {
  return (
    <div className='body-Contact'>
      <Header/>
      <div className="containerIconos">
        <div className="iconos">
           <a href="https://mail.google.com/mail/u/0/#inbox"><img src={gmail} className='image-icono' /></a>       
        </div>
        <div className="iconos">
          <a href="https://github.com/JuanDavidTorres1961"><img src={github} className='image-icono'/></a>
        </div>
        <div className="iconos">
          <a href="https://www.instagram.com/torrxss___/"><img src={instagram} className='image-icono' /></a>
        </div>
      </div>
        
    </div>
  )
}
