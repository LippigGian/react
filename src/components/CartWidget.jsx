import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import cart from "../Assets/icon-cart.png";

export const CartWidget = () => {
  const { cartTotal } = useContext(CartContext);
  return (
    <Link to="/Cart">
      <img src={cart} alt="cart-widget"></img>
      <span className="text-dark ">({cartTotal()})</span>
    </Link>
  );
};

export default CartWidget;
