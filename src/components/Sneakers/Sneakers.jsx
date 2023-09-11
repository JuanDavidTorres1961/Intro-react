import React from 'react'
import { HeaderStore } from '../HeaderStore/HeaderStore'
import { FooterStore } from '../FooterStore/FooterStore'

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
