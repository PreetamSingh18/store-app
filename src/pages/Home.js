import React from "react";
import Products from "../components/Products";
import { STATUSES } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyCarousel, { RecentCarousel } from "../Carousels/MyCarousel";
import MultiCarousel from "../Carousels/MultiCarousel";
import { fetchCategories } from "../store/categorySlice";
import { useEffect } from "react";
import Footer from "./Footer";

const Home = () => {
  const { status } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.categories);
  const { RecentProd } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  // console.log(categories);
  return (
    <div className="Home-Box">
      <div className="Category-Box">
        <h3 className="Category-heading">Categories</h3>
        {/* <ul> */}
          {categories.map((category, idx) => (
            <div key={idx} className="Category-display">
              <Link to={`category/${category}`}>{category}</Link>
            </div>
          ))}
        {/* </ul> */}
      </div>

      <div className="carousel-box">
        <MyCarousel />
      </div>
      {/* <h2 className="heading">Welcome to Store</h2> */}
      <section>
        <h3>Recommended for you</h3>
        <div className="Home-Products-Data">
        <Products maxItems={8} />
        {status === STATUSES.IDLE ? (
          <div className="ViewMore-btn">
            <Link to="/products">
              <button>View more</button>
            </Link>
          </div>
        ) : (
          <></>
        )}

        </div>
      </section>
      {/* <div className="RecBox"> */}
        
      <div className={RecentProd.length?"RecentDisplayBox ":"RecentDisplay RecentDisplayBox"}>
      <h3 className="Recent-heading">Recently Viewed </h3>
      <div className="Home-RecentProd">
        <MultiCarousel />
      </div>

      </div>
      {/* </div> */}
      <Footer/>
    </div>
  );
};

export default Home;
