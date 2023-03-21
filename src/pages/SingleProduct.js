import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProducts } from '../store/productSlice';
import { add , getTotal } from '../store/cartSlice';
import { STATUSES } from '../store/productSlice';
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import StarRatings from 'react-star-ratings';


const SingleProduct = () => {
    const{id}=useParams();
    // console.log(id);
    const history=useNavigate();
    const dispatch=useDispatch();
    const [isAdding, setIsAdding] = useState(false);
    const { SingleProduct, SingleProductStatus } = useSelector((state) => state.product);
    useEffect(()=>{
        dispatch(fetchSingleProducts(id));
    },[]);
    // console.log(SingleProduct);
    // const{rate,count}=SingleProduct.rating;


    const handleAdd = (event ,product) => {
      dispatch(add(product));
      dispatch(getTotal());
      event.target.style.backgroundColor = "green"
      setIsAdding(true);
      setTimeout(() => {
        setIsAdding(false);
        event.target.style.backgroundColor = "#764abc"
      }, 1000);
  
      // history.push("/cart");
    };

    if (SingleProductStatus === STATUSES.LOADING) {
      return (
        <div className="Product-Loading">
          <ReactLoading
            type="spinningBubbles"
            color="#764abc"
            height={300}
            width={120}
          />
        </div>
      );
      // return <div className='Product-Loading'></div>;
    }
  
    if (SingleProductStatus === STATUSES.ERROR) {
      return <h2 className="Product-Error">Something went wrong!</h2>;
    }

  return (
    <div className="SingleProduct-Box">

        <button onClick={()=>{history(-1)}} className="Back-btn"><FontAwesomeIcon icon={faAngleLeft} /> Back to shop</button>
         <div className="SingleProduct-container">
            <div className="SingleProduct-container-ImgBox" >

            <img src={SingleProduct.image} alt="" />
            </div>
            <div className='SingleProduct-data'>
                <h1>{SingleProduct.title}</h1>
                <div className='SingleProduct-desc'>
                  <h5>Description</h5>
                  <p>{SingleProduct.description}</p>
                </div>
                <div className='SingleProduct-category'>
                  <h4>Category : <span>{SingleProduct.category}</span></h4>
                </div>
                <div className='SingleProduct-rating'>
                  <p>
                    {SingleProduct.rating &&  <StarRatings
          rating={SingleProduct.rating.rate}
          numberOfStars={5}
          starRatedColor="#f1d045"
          starEmptyColor="#b0b0b0"
          starDimension="25px"
          isAggregateRating="true"
          starSpacing="2px"
          name='rating'
        />  }  ( {SingleProduct.rating && SingleProduct.rating.count} <span>customer reviews</span>)
                  </p>
                </div>
                 <div className='SingleProduct-price'>${SingleProduct.price}</div>
                 <button onClick={(e) => handleAdd(e,SingleProduct)} className="btn">
           {isAdding?<><FontAwesomeIcon icon={faCheck} /> ADDED</>: "Add to cart"}
          </button>
            </div>
         </div>
    </div>
  )
}

export default SingleProduct