import {Card, Button, Col} from 'react-bootstrap';
import ItemCount from './ItemCount';

export default function Item({ item }) {
    return (
        <>
            <Col style={{padding: '3px', margin: '5px'}}>
                <Card style={{ width: '18rem', textAlign: 'center' }}>
                    <Card.Header><h5>{item.title}</h5></Card.Header>
                    <Card.Img variant="top" src={item.pictureURL} />
                    <Card.Body>
                        <h6>$ {item.price} MXN</h6>
                        <ItemCount stock={item.stock} inicial={1}></ItemCount>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="secondary">Ver detalles</Button>
                    </Card.Footer>
                </Card>  
            </Col>                  
        </>
    )
}