import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categoria from './components/Categoria';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import CartContext from './context/CartProvider';

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
                <Row><ItemListContainer /></Row>
              </Route>
              {/* Ruta Producto */}
              <Route path="/item/:itemId">
                <Row><ItemDetailContainer /></Row>
              </Route>
              {/* Ruta Categoría */}
              <Route path="/categoria/:categoryId">
                <Row><Categoria /></Row>
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
