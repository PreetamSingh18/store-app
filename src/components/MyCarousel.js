import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselProps } from 'react-responsive-carousel';
import '../Carousel.css';

const MyCarousel = () => {
  return (
   <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true} showStatus={false} showIndicators={true}>
    <div>
    <img src={require("../img/img5.jpg")} alt="" />
    </div>
    <div>
    <img src={require("../img/img7.jpg")} alt="" />
    </div>
    <div>
      <img src={require("../img/img1.jpg")} alt="" />
    </div>
    <div>
      <img src={require("../img/img3.jpg")} alt="" />
    </div>
    
   </Carousel>
  )
}


const RecentCarousel=()=>{
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true} showStatus={false} showIndicators={true}>
    
     
    </Carousel>
   )
}

export default MyCarousel