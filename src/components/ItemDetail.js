import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ItemCount from './ItemCount';

function ItemDetail({ producto }) {

    const [contador, setContador] = useState(0);

    const [mensajeCarrito, setMensajeCarrito] = useState('');
    const agregaCarrito = () => setMensajeCarrito("¡Se agregaron " + contador + " artículo(s) al carrito!");

    return (
        <>
            {
                (producto.id) ?
                    <>
                        <Col style={{ padding: '5px', margin: '10px' }}>
                            <Row>
                                <Col>
                                    <Card.Img variant="top" src={producto.pictureURL} />
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title><h2>{producto.title}</h2></Card.Title>
                                            <h4>$ {producto.price} MXN</h4>
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