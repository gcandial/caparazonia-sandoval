import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categoria from './components/Categoria';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <BrowserRouter>
          <Switch>
            {/* Ruta Inicio */}
            <Route exact path="/">
              <Row>
                <ItemListContainer />
              </Row>
            </Route>
            {/* Ruta Producto */}
            <Route path="/item/:itemId">
              <Row>
                <ItemDetailContainer />
              </Row>
            </Route>
            {/* Ruta Categoría */}
            <Route path="/categoria/:categoryId">
              <Row>
                <Categoria />
              </Row>
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
