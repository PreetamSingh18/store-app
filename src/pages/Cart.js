import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove,removeSingleItem , clearCart, getTotal} from "../store/cartSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  
  useEffect(()=>{
    dispatch(getTotal());
  },[cartItems])

  const handleRemove = (product) => {
    dispatch(remove(product));
  };
  const handleDecrease=(product)=>{
    dispatch(removeSingleItem(product));
  }
  const handleIncrease=(product)=>{
    dispatch(add(product));
  }
  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
            <h3> </h3>
          </div>

          <div className="cartWrapper">
            {cartItems.map((product) => (
              <div key={product.id} className="cartCard">
                <div className="cart-product">
                  <img src={product.image} alt="" />
                  <h5>{product.title.length>=30?product.title.substr(0,29)+"...":product.title}</h5>
                </div>
                <div>
                  <h5>${product.price}</h5>
                </div>
                <div className="cart-product-quantity">
                  <button onClick={()=>handleDecrease(product)}>-</button>
                  <div className="count">{product.cartQuantity}</div>
                  <button onClick={()=>handleIncrease(product)}>+</button>
                </div>
                <div className="total-price">${product.price * product.cartQuantity}</div>
                <div>
                <button
                  className="btn"
                  onClick={() => handleRemove(product)}
                >
                  Remove
                </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cartTotalAmount.toFixed(2)}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
