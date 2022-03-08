import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Row, Card } from 'react-bootstrap';
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import '../App.css';

const Cart = () => {

    const { cart, clear, calculateTotal } = useContext(cartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cart.length > 0)
            setTotal(calculateTotal());
    }, [cart.length, calculateTotal]);

    return (
        <>
            {
                (cart.length === 0) ?
                    <>  
                        <center>
                        <Row className="text-center center-element">
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
                        </center>                        
                    </>
                    :
                    <>
                        <table striped bordered hover size="sm" className="cartTable center-element m-1">
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
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>TOTAL</th>
                                    <th>$ {total} MXN</th>
                                </tr>
                            </tfoot>
                        </table>

                        <Row className="text-end mt-15">
                            <Col>
                                <Button id="btn-limpiar" onClick={() => clear()} variant="warning">Limpiar carrito</Button>
                                <Link to='/buyform' ><Button variant="success">Finalizar compra</Button></Link>
                            </Col>
                        </Row>
                    </>
            }
        </>
    )
};

export default Cart;