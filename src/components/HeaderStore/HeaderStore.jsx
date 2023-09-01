import React from 'react'
import LOGO from '../HeaderStore/img/LOGO.png'
import { NavBarStore } from '../NavBarStore/NavBarStore'
import '../Store/Css/Style.css'

export const HeaderStore = () => {
  return (
    <div className='Container-H'>
        <div className="logo">
            <img src={LOGO} className='image'/>
        </div>
       <NavBarStore/>
    </div>
  )
}
