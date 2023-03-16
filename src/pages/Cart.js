import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

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
                  <h5>{product.title}</h5>
                </div>
                <div>
                  <h5>${product.price}</h5>
                </div>
                <div className="cart-product-quantity">
                  <button>-</button>
                  <div className="count">{product.cartQuantity}</div>
                  <button>+</button>
                </div>
                <div className="total-price">${product.price * product.cartQuantity}</div>
                <div>
                <button
                  className="btn"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cartTotalAmount}</span>
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
