import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add ,getTotal } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
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
    dispatch(add(product));
    dispatch(getTotal());
    event.target.style.backgroundColor = "green"
    setTimeout(() => {
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
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title.length>20?product.title.substr(0,20)+"...":product.title}</h4>
          <h5>${product.price}</h5>
          <button onClick={(e) => handleAdd(e,product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
