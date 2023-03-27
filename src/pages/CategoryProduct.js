import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategoryProducts } from "../store/categorySlice";
import Product from "../components/Product";
import { STATUSES } from "../store/productSlice";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


const CategoryProduct = () => {
  const history=useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();
  const { categoryProducts, categoryProductsStatus } = useSelector(
    (state) => state.categories
  );
  // console.log(categoryProducts);

  useEffect(() => {
    dispatch(fetchCategoryProducts(category));
  }, [dispatch, category]);

  if (categoryProductsStatus === STATUSES.LOADING) {
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

  if (categoryProductsStatus === STATUSES.ERROR) {
    return <h2 className="Product-Error">Something went wrong!</h2>;
  }

  return (
    <div className="CategoryProduct-Box">
     <button onClick={()=>{history(-1)}} className="Back-btn"><FontAwesomeIcon icon={faAngleLeft} /> Back</button>
       <h3>{category} Products </h3>
    <div className="productsWrapper">
      {categoryProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default CategoryProduct;
