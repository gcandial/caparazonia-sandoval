import { useContext, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { cartContext } from "../context/CartProvider";
import '../App.css';

function ItemDetail({ producto }) {

    const { addItem } = useContext(cartContext);

    const [contador, setContador] = useState(1);

    const [mensajeCarrito, setMensajeCarrito] = useState('');
    const agregaCarrito = () => {
        addItem(producto, contador);
        setMensajeCarrito("¡Se agregaron " + contador + " artículo(s) al carrito!")
    };

    return (
        <>
            {
                (producto.id) ?
                    <>
                        <Col id="col-detail">
                            <Row id="row-detail">
                                <Col>
                                    <Card.Img variant="top" src={producto.pictureURL} />
                                </Col>
                                <Col>
                                    <Card id="card-detail">
                                        <Card.Body>
                                            <Card.Title className='pt-3'><h2>{producto.title}</h2></Card.Title>
                                            <h4 className='py-0'>$ {producto.price} MXN</h4>
                                            <ItemCount stock={producto.stock} contador={contador} setContador={setContador} agregaCarrito={agregaCarrito} mensajeCarrito={mensajeCarrito}></ItemCount>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Última actualización hace 1 minuto</small>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </>
                    :
                    <><h1>Cargando...</h1></>
            }
        </>
    )
}

export default ItemDetail;