import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add ,getTotal } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { setRecentProducts } from "../store/productSlice";
import Product from "./Product.js";

const Products = (props) => {
  const maxItems=props.maxItems;
  
  const dispatch = useDispatch();
  const { data: products, status} = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(fetchProducts(maxItems));
   dispatch(getTotal());
   
  }, []);

  if (status === STATUSES.LOADING) {
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

  if (status === STATUSES.ERROR) {
    return <h2 className="Product-Error">Something went wrong!</h2>;
  }

  return (
    <div className="productsWrapper">
        {
          products.map(product=><Product key={product.id} product={product}/>)
        }
    </div>
  );
};

export default Products;


// #ffd334
// #01a2d8