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
        <p className='text-description'> Hi 👋, I'm Juan David Torres</p>
      </div>
    </div>
    
    </>
  )
}



export default SectionFirst;