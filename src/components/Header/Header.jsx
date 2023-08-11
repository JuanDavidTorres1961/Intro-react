import Navbar from "../Navbar/Navbar";
import {  } from "../../App.css";
import logo from "./img/logo.png"


const Header = () => {
  return (
    <div className="container-header">

      <div className="containerTitle">
          <img src={logo} alt="" className="image-header"/>
          <h1>Portafolio</h1>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header;