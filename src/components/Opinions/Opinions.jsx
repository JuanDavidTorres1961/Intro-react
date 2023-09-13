import React from 'react'
import '../Opinions/Css/Opinions.css'
import CamisetaN from '../Opinions/Img/CamisetaN.jpg'
import GorraN from '../Opinions/Img/GorraN.jpg'
import TennisN from '../Opinions/Img/TennisN.jpg'

export const Opinions = () => {
  return (
    <div className="container">
      <h1 className="title">New collection</h1>
      <div className="card-container">
        <Card
          imagen={GorraN}
          name="Urban Cap"
          description="Quality 1.1"
        />
        <Card
          imagen={CamisetaN}
          name="Urban T-shirt"
          description="Quality 1.1"
        />
        <Card
          imagen={TennisN}
          name="Urban Tennis"
          description="Quality 1.1"
        />
      </div>
    </div>
  )
}

function Card({ imagen, name, description }) {
    return (
      <div className="card">
        <img src={imagen} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
