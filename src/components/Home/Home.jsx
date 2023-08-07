import Header from "../Header/Header";
import SectionFirst from "../Section-first/SectionFirst"
import { Product } from "../Product/Product"
import './Home.css'

const Home = () => {
  return (
    <div>
        {/* <div className="Header">
          <Header />
        </div> */}
        
        <Product/>
        {/* <SectionFirst/> */}

    </div>
  )
}

export default Home;