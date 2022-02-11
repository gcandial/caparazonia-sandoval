import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import CartContext from './context/CartProvider';
import CollectionFirebase from './components/CollectionFirebase';
import ItemFirebase from './components/ItemFirebase';

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Container>
            <Switch>
              {/* Ruta Inicio */}
              <Route exact path="/">
                <Row><CollectionFirebase /></Row>
              </Route>
              {/* Ruta Producto */}
              <Route path="/item/:itemId">
                <Row><ItemFirebase /></Row>
              </Route>
              {/* Ruta Categoría */}
              <Route path="/categoria/:categoryId">
                <Row><CollectionFirebase /></Row>
              </Route>
              {/* Ruta Cart */}
              <Route path="/cart">
                <Row><Cart /></Row>
              </Route>
            </Switch>
          </Container>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
