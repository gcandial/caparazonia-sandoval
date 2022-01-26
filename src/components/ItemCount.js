import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function ItemCount({ stock, inicial }) {
    const [contador, setContador] = useState(inicial);
    const stockDisponible = stock;
    const articulosRestantes = stockDisponible - contador;

    const hayArticulos = (articulosRestantes > 0) ? true : false;
    const agregaArticulo = () => (hayArticulos) ? setContador(contador + 1) : contador;

    const hayArticulosAgregados = (contador > 0) ? true : false;
    const quitaArticulo = () => (hayArticulosAgregados) ? setContador(contador - 1) : contador;

    const [mensajeCarrito, setMensajeCarrito] = useState('');
    const agregaCarrito = () => setMensajeCarrito("Se agregaron " + contador + " artículo(s) al carrito");

    return (
        <>
            <Button
                onClick={quitaArticulo}
                disabled={!hayArticulosAgregados}
                variant="success"
            >
                <FontAwesomeIcon icon={faMinus} />
            </Button>
            <input disabled={true} value={contador} style={{ padding: '3px', margin: '5px', width: '35px', textAlign: 'center' }} />
            <Button
                onClick={agregaArticulo}
                disabled={!hayArticulos}
                variant="success"
            >
                <FontAwesomeIcon icon={faPlus} />
            </Button>

            <Button
                onClick={agregaCarrito}
                disabled={!hayArticulosAgregados}
                style={{ margin: '5px' }}
                variant="success"
            >
                Agregar al carrito
            </Button>
            <p>Artículos disponibles: {articulosRestantes}</p>
            <p>{mensajeCarrito}</p>
        </>
    );
}

export default ItemCount;
