import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Section, Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartContext from './context/CartProvider';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <div id='main' style={{ minHeight: '100vh' }}>
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
                  <Row><ItemListContainer /></Row>
                </Route>
                {/* Ruta Cart */}
                <Route path="/cart">
                  <Row><Cart /></Row>
                </Route>
              </Switch>
            </Container>
          </div>
          <Footer />
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
