import { Card, Col } from 'react-bootstrap';
import ItemCount from './ItemCount';

function ItemDetail({ producto }) {
    return (
        <>
            {
                (producto.id) ?
                    <>
                        <Col style={{ padding: '3px', margin: '5px' }}>
                            <Card style={{ width: '18rem', textAlign: 'center' }}>
                                <Card.Header><h5>{producto.title}</h5></Card.Header>
                                <Card.Img variant="top" src={producto.pictureURL} />
                                <Card.Body>
                                    <h6>$ {producto.price} MXN</h6>
                                    <ItemCount stock={producto.stock} inicial={1}></ItemCount>
                                </Card.Body>
                                <Card.Footer>
                                    <p>{producto.description}</p>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </>
                    :
                    <>Cargando...</>
            }
        </>
    )
}

export default ItemDetail;