import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function ItemCount({ stock, contador, setContador, agregaCarrito, mensajeCarrito }) {
    const stockDisponible = stock;
    const articulosRestantes = stockDisponible - contador;

    const hayArticulosAgregados = (contador > 0) ? true : false;
    const quitaArticulo = () => (hayArticulosAgregados) ? setContador(contador - 1) : contador;
    const hayArticulos = (articulosRestantes > 0) ? true : false;
    const agregaArticulo = () => (hayArticulos) ? setContador(contador + 1) : contador;

    return (
        <div id="buttons-item-detail">
            {
                (mensajeCarrito === '') ?
                    <>
                        <Button onClick={quitaArticulo} disabled={!hayArticulosAgregados} variant="primary">
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>
                        <input disabled={true} value={contador} id="input-detail" />
                        <Button onClick={agregaArticulo} disabled={!hayArticulos} variant="primary">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>

                        <Button className='m-3' onClick={agregaCarrito} disabled={!hayArticulosAgregados} variant="success">
                            Agregar al carrito
                        </Button>
                        <p>Artículos disponibles: {articulosRestantes}</p>
                    </>
                    :
                    <>
                        <p>{mensajeCarrito}</p>
                        <Link to='/cart'>
                            <Button className='mt-3' variant="dark">
                                Terminar mi compra
                            </Button>
                        </Link>
                    </>
            }
        </div>
    );
}

export default ItemCount;
