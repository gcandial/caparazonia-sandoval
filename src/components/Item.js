import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Item({ item }) {
    return (
        <>
            <Col id="col-item">
                <Card className="card-list">
                    <Card.Header className='py-3'><h5>{item.title.toUpperCase()}</h5></Card.Header>
                    <Card.Img variant="top" src={item.pictureURL} />
                    <Card.Body>
                        <h6>$ {item.price} MXN</h6>
                        <p>Artículos disponibles: {item.stock}</p>
                    </Card.Body>
                    <Card.Footer className='py-3'>
                        <Link to={'/item/' + item.id}>
                            <Button variant="success">Ver detalles</Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default Item;