import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <ItemListContainer saludo='Bienvenid@' />
        </Row>
      </Container>
    </>
  );
}

export default App;
