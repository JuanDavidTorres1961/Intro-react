import { Routes,Route} from "react-router-dom"
import Home from "./components/pages/Home/Home"
import { NotFound } from "./components/NotFound/NotFound"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import {Store} from "./components/Store/Store"

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
        </Routes>
      </div>
    </>
  )
}

export default App
