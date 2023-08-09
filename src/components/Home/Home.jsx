import Header from "../Header/Header";
import SectionFirst from "../Section-first/SectionFirst"
import Footer from "../Footer/Footer"
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className="Header">
          <Header />
        </div> 
       <SectionFirst/> 
       <div>
        <div className="Footer">
          <Footer/>
        </div>  
       </div>
    </div>

  )
}

export default Home;