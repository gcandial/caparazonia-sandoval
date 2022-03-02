import React, { useContext, useState, useEffect, useRef } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from '../firebase/firebase';
import { cartContext } from "../context/CartProvider";
import '../App.css';

const BuyForm = () => {

    const { cart, calculateTotal } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [orderId, setOrderId] = useState('');

    useEffect(() => {
        if (cart.length > 0)
            setTotal(calculateTotal());
    }, [cart.length, calculateTotal]);

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: cart,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('Orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            {orderId && (<h1 className="text-white text-center">Se ingresó con éxito la orden, tú número es: {orderId}</h1>)}
            <Row className="text-center mt-15">
                <Col>
                    <h3 className="py-4 mt-15 text-white">INGRESA TUS DATOS:</h3>
                </Col>
            </Row>
            <Row className="justify-content-lg-center mt-15">
                <Col className="col col-lg-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="name" ref={nameRef} placeholder="Ingrese nombre y apelllido" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="mobile" ref={mobileRef} placeholder="Ingrese número de celular" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" ref={emailRef} placeholder="Ingrese email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="state" ref={stateRef} placeholder="Ingrese provincia" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="city" ref={cityRef} placeholder="Ingrese ciudad" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="address" ref={addressRef} placeholder="Ingrese dirección" />
                    </Form.Group>

                    <Form.Group className="mb-3 py-3 text-end">
                        <Button onClick={() => handleClick()} variant="primary">Finalizar compra :D</Button>
                    </Form.Group>
                </Col>
            </Row>
        </>
    );
}

export default BuyForm;