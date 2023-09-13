import React from 'react'
import { HeaderStore } from '../HeaderStore/HeaderStore'
import { FooterStore } from '../FooterStore/FooterStore'
import '../Sneakers/Css/Sneakers.css'


export const Sneakers = () => {
  return (
    <>
        <div className="bodySneakers">
            <FooterStore/>
            <HeaderStore/>
            
        </div>
    </>
  )
}


