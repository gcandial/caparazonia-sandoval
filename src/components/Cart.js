import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {

    const { cart, clear } = useContext(cartContext);
    console.log(cart);

    return (
        <>
            {
                (cart.length === 0) ?
                    <>
                        <p>Empty Cart</p>

                    </>
                    :
                    <>
                        {cart.map(article => <CartItem key={article.item.id} article={article}></CartItem>)}
                        <button onClick={() => clear()}>Clear Cart</button>
                    </>
            }
        </>
    )
};

export default Cart;