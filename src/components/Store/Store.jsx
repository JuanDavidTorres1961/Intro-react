import React from 'react'
import { HeaderStore } from '../HeaderStore/HeaderStore'
import { FooterStore } from '../FooterStore/FooterStore'
import { Advertising } from '../Advertising/Advertising'
import '../Store/Css/Style.css'

export const Store = () => {
  return (
    <>
    <div className="body-store">
        <FooterStore/>
        <HeaderStore/>
        <Advertising/>
    </div>
    
    </>
  )
}
