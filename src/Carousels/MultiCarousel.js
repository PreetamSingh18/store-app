import React from 'react'
import Product from "../components/Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';

const MultiCarousel = () => {
  
    const { RecentProd } = useSelector((state) => state.product);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 550, min: 0 },
          items: 2
        }
        
        
      
      };
  return (
    <Carousel
     swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["mobile"]}
  arrows={true}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  >
     {/* <div> */}
     {RecentProd.map((product) => (
        <div className="RecentCarousel" key={product.id}>
        <Product key={product.id} product={product} show={true}/>
        </div>
      ))}
      {/* </div> */}
  </Carousel>
  )
}

export default MultiCarousel;