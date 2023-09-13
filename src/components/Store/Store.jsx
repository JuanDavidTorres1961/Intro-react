import React from 'react'
import { HeaderStore } from '../HeaderStore/HeaderStore'
import { FooterStore } from '../FooterStore/FooterStore'
import { Advertising } from '../Advertising/Advertising'
import { Opinions } from '../Opinions/Opinions'
import '../Store/Css/Style.css'

export const Store = () => {
  return (
    <>
    <div className="body-store">
        <FooterStore/>
        <HeaderStore/>
        <Advertising/>
        <Opinions/>
    </div>

    </>
  )
}
