import { Routes,Route} from "react-router-dom"
import Home from "./components/pages/Home/Home"
import { NotFound } from "./components/NotFound/NotFound"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import {Store} from "./components/Store/Store"
import { Sneakers } from "./components/Sneakers/Sneakers"
import { Tshirts } from "./components/Tshirts/Tshirts"
import { Caps } from "./components/Caps/Caps"
import { Promos } from "./components/Promos/Promos"

// import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/Store" element={<Store/>}/>
          <Route path="/Sneakers" element={<Sneakers/>}/>
          <Route path="/Tshirts" element={<Tshirts/>}/>
          <Route path="/Caps" element={<Caps/>}/>
          <Route path="/Promos" element={<Promos/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
