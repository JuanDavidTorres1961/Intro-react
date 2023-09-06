import React from 'react'
import LOGO from '../HeaderStore/img/LOGO.png'
import { NavBarStore } from '../NavBarStore/NavBarStore'
import '../HeaderStore/Css/HeaderStore.css'

export const HeaderStore = () => {
  return (
    <div className='Container-H'>
        <div className="logo">
            <img src={LOGO} className='image-store'/>
        </div>
       <NavBarStore/>
    </div>
  )
}
