import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  return (
    <>
      <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /> </a>
    </>
  );
}

export default CartWidget;