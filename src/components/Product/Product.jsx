import React from 'react'
import mt15 from "../Header/img/mt15.png"
// import '../Product/Product.css'

export const Product = () => {
  return (
    <div className='w-80 h-80 rounded-tr-2xl bg-sky-500 mt-4 flex flex-col items-center'>
        <img  className =' rounded-none w-full h-1/2 rounder-t-2x1 object-cover' src= {mt15} alt="" />
        <h2>Moto</h2>
        <div className= 'w-full flex  h-20 justify-evely items-center'>
            <p>Mt15 2023</p>
            <p>$ 57.500.000,00</p>
        </div>
    </div>
  )
}
