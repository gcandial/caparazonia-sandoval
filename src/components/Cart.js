import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Button, Col, Row, Card } from 'react-bootstrap';
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {

    const { cart, clear } = useContext(cartContext);

    return (
        <>
            {
                (cart.length === 0) ?
                    <>
                        <Row className="text-center">
                            <Col>
                                <Card className="mt-15" border="secondary">
                                    <Card.Body>
                                        <Card.Title>
                                            Aún no hay productos agregados <FontAwesomeIcon icon={faSadTear} />
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to='/'>
                                            <Button variant="success">
                                                Ir a productos
                                            </Button>
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </>
                    :
                    <>
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