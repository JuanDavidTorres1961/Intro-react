import Header from "../../Header/Header.jsx";
import SectionFirst from "../../Section-first/SectionFirst.jsx"
import './Home.css'

const Home = () => {
  return (
    <div className="Body">
        <div className="Header">
          <Header />
        </div> 
       <SectionFirst/> 
    </div>

  )
}

export default Home;