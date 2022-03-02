import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartContext from './context/CartProvider';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import BuyForm from './components/BuyForm';

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <div id='main'>
            <Container>
              <Switch>
                {/* Ruta Inicio */}
                <Route exact path="/">
                  <Row className='py-5'><ItemListContainer /></Row>
                </Route>
                {/* Ruta Producto */}
                <Route path="/item/:itemId">
                  <Row className='py-5'><ItemDetailContainer /></Row>
                </Route>
                {/* Ruta Categoría */}
                <Route path="/categoria/:categoryId">
                  <Row className='py-5'><ItemListContainer /></Row>
                </Route>
                {/* Ruta Cart */}
                <Route path="/cart">
                  <Row className='py-5'><Cart /></Row>
                </Route>
                {/* Ruta BuyForm */}
                <Route path="/buyform">
                  <Row className='py-5'><BuyForm /></Row>
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
