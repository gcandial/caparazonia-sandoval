import { Card, Button, Col } from 'react-bootstrap';

function Item({ item }) {
    console.log(item.id)
    return (
        <>
            <Col style={{ padding: '3px', margin: '5px' }}>
                <Card style={{ width: '18rem', textAlign: 'center' }}>
                    <Card.Header><h5>{item.title}</h5></Card.Header>
                    <Card.Img variant="top" src={item.pictureURL} />
                    <Card.Body>
                        <h6>$ {item.price} MXN</h6>
                        <p>Artículos disponibles: {item.stock}</p>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="secondary" href={'/item/'+item.id}>Ver detalles</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default Item;