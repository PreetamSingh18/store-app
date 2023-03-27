import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping , faBars,faXmark, faBagShopping} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false);
  // console.log(openMenu)
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  return (
    <div className={openMenu?"NavBox active":"NavBox"} >
    {/* <img src={require("../img/ShopMore (1).png")} className="logo"/> */}
      <span className="logo"><span style={{color:"#692ccb",fontWeight:800, fontSize:"40px"}}>S</span>h<FontAwesomeIcon icon={faBagShopping}  style={{color:"#692ccb"}}/>pping</span>
      <div className="NavItems" >
        <Link className="navLink" to="/" onClick={()=>setOpenMenu(false)}>
          Home
        </Link>
        <Link className="navLink" to="/products" onClick={()=>setOpenMenu(false)}>
          Products
        </Link>
        <Link className="navLink" to="/cart" onClick={()=>setOpenMenu(false)}>
        {/* {openMenu?"Cart": <><FontAwesomeIcon icon={faCartShopping} />
      <span className="cartCount">{cartTotalQuantity}</span></>} */}

      <FontAwesomeIcon icon={faCartShopping} className="NavCart-Name-Lap" />
      <span className="cartCount NavCart-Name-Lap">{cartTotalQuantity}</span>
      <span className="NavCart-Name-Mobile">Cart</span>

        </Link>

      </div>
        <div className="mobile-Navbar">
        <FontAwesomeIcon icon={faBars} className="menu-outline mobile-nav-icon" onClick={()=>setOpenMenu(true)} />
        <FontAwesomeIcon icon={faXmark} className="close-outline mobile-nav-icon" onClick={()=>setOpenMenu(false)}/>

        </div>

    </div>
  );
};

export default Navbar;
