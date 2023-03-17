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


const Products = (props) => {
  const maxItems=props.maxItems;
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);
  const history = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts(maxItems));
   dispatch(getTotal());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, []);
  const handleAdd = (event ,product) => {
    event.preventDefault();
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
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title.length>20?product.title.substr(0,20)+"...":product.title}</h4>
          <h5>${product.price}</h5>
          <button disabled={isAdding} onClick={(e) => handleAdd(e,product)} className={isAdding? "btn1" :"btn"}>
           {isAdding?<><FontAwesomeIcon icon={faCheck} /> ADDED</>: "Add to cart"}
           {/* ADD{isAdding ? 'ED' : ""} */}
          </button>
        </div>

        </Link>
      ))}
    </div>
  );
};

export default Products;
