import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  return (
    <>
        <span><FontAwesomeIcon icon={faShoppingCart} /> 3</span>
    </>
  );
}

export default CartWidget;