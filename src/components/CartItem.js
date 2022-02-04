import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";

const CartItem = ({ article }) => {

    const { removeItem } = useContext(cartContext);

    return (
        <>
            <h3>{article.item.title}</h3>
            <p>quantity: {article.count}</p>
            <button onClick={() => removeItem(article.item.id)} variant="danger">Delete</button>
        </>
    )
};

export default CartItem;