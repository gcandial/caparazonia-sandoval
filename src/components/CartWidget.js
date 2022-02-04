import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { cartContext } from "../context/CartProvider";

function CartWidget() {

  const { cart } = useContext(cartContext);

  return (
    <>
      <Link to="/cart">
        <span><FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</span>
      </Link>
    </>
  );
}

export default CartWidget;