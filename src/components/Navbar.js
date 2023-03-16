import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  return (
    <div className="NavBox">
      <span className="logo">Store App</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
      <span className="cartCount">{cartTotalQuantity}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
