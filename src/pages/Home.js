import React from 'react'
import Products from '../components/Products'
import { STATUSES } from '../store/productSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyCarousel from '../components/MyCarousel'


const Home = () => {
  const {  status } = useSelector((state) => state.product);

  return (
    <div className='Home-Box'>
    <div className='carousel-box'>
    {/* <img alt="" src={require("../img/CaraImg.jpg")} /> */}
  <MyCarousel/>
    </div>
        <h2 className='heading'>Welcome to Store</h2>
        <section>
          <h3>Products</h3>
          <Products maxItems={8}/>
          {status===STATUSES.IDLE?<Link to="/products"><div className="ViewMore-btn" ><button >View more</button></div></Link>:<></> 
          }
          

        </section>
    </div>
  )
}

export default Home