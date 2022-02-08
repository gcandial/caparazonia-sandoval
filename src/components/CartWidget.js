import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { cartContext } from "../context/CartProvider";

function CartWidget() {

  const { cart } = useContext(cartContext);
  const showCartWidget = (cart.length > 0) ? 'block' : 'none' ;
  return (
    <>
      <Link to="/cart" style={{display: showCartWidget}}>
        <span><FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</span>
      </Link>

    </>
  );
}

export default CartWidget;