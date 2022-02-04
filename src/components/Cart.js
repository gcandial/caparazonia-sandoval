import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {

    const { cart, clear } = useContext(cartContext);

    return (
        <>
            {
                (cart.length === 0) ?
                    <>
                        <Row className="text-center">
                            <Col>
                                <p className="mt-15">Aún no hay productos agregados</p>
                                <Link to='/'>
                                    <Button variant="primary">
                                        Ir a productos
                                    </Button>
                                </Link>
                            </Col>
                        </Row>

                    </>
                    :
                    <>
                        {/* {cart.map(article => <CartItem key={article.item.id} article={article} className="mt-15"></CartItem>)} */}
                        <table className="table tableHover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th>Total</th>
                                    <th>Eliminar producto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(article => <CartItem key={article.item.id} article={article} className="mt-15"></CartItem>)}
                            </tbody>
                        </table>

                        <Row className="text-end mt-15">
                            <Col>
                                <Button onClick={() => clear()}>Limpiar carrito</Button>
                            </Col>
                        </Row>
                    </>
            }
        </>
    )
};

export default Cart;