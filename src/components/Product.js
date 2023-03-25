import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, getTotal } from "../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { setRecentProducts } from "../store/productSlice";

const Product = (props) => {
  const { product, show } = props;
  const { RecentProd } = useSelector((state) => state.product);
// console.log(product.id)
  const dispatch = useDispatch();
  const history = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = (event, product) => {
    event.preventDefault();
    dispatch(add(product));
    dispatch(getTotal());
    event.target.style.backgroundColor = "green";
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);

      event.target.style.backgroundColor = "#764abc";
    }, 1000);

    // history.push("/cart");
  };

  const StoreRecentProd = ( product) => {
    dispatch(setRecentProducts(product));
    
  };
  // console.log(RecentProd);
//  console.log(product.id);
  return (
    // <Link to={`/product/${product.id}`} key={product.id}>
   <Link to={`/product/${product.id}`} key={product.id}>

      <div
        className="card"
        key={product.id}
        onClick={() => StoreRecentProd(product)}
        // disabled="toDisable"
      >
        <img src={product.image} alt="" />
        <h4>
          {product.title.length > 20
            ? product.title.substr(0, 20) + "..."
            : product.title}
           
        </h4>
        <h5>${product.price}</h5>
        <button
          disabled={isAdding}
          onClick={(e) => handleAdd(e, product)}   
          className={show ? "toDisable" : "btn"}
        >
          {isAdding ? (
            <>
              <FontAwesomeIcon icon={faCheck} /> ADDED
            </>
          ) : (
            "Add to cart"
          )}
          {/* ADD{isAdding ? 'ED' : ""} */}
        </button>
      </div>
   </Link>

   
  );
};

export default Product;

// #ffd334
// #01a2d8
