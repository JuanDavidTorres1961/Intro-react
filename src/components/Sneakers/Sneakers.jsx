import React from 'react'
import { HeaderStore } from '../HeaderStore/HeaderStore'
import { FooterStore } from '../FooterStore/FooterStore'
import '../Sneakers/Css/Sneakers.css'
import { CardSneakers } from '../Cards/CardSneakers/CardSneakers'


export const Sneakers = () => {
  return (
    <>
        <div className="bodySneakers">
            <FooterStore/>
            <HeaderStore/>
            <CardSneakers/>
        </div>
    </>
  )
}


