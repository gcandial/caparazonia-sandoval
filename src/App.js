import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo='Bienvenid@' />
      <ItemCount stock={10} inicial={1}></ItemCount>
    </>
  );
}

export default App;
