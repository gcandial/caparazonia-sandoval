import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import { cartContext } from "../context/CartProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ article }) => {

    const { removeItem } = useContext(cartContext);

    return (
        <>
            <tr>
                <td>{article.item.title}</td>
                <td>{article.quantity}</td>
                <td>$ {article.item.price} MXN</td>
                <td>$ {article.item.price * article.quantity} MXN</td>
                <td><Button onClick={() => removeItem(article.item.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button></td>
            </tr>

        </>
    )
};

export default CartItem;