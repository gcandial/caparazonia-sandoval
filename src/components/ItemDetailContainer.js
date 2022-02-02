import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        setTimeout(() => {
            let arregloProductos = [
                { id: '1', idCategory: 'carnazas', title: 'Carnaza de pollo', description: 'Carnaza de pollo tan sabrosa que no creeras son para perro', price: 25.00, stock: 15, pictureURL: 'https://picsum.photos/700/400?random' },
                { id: '2', idCategory: 'carnazas', title: 'Carnaza de res', description: 'Carnaza de res tan sabrosa que no creeras son para perro', price: 25.00, stock: 10, pictureURL: 'https://picsum.photos/700/400?random' },
                { id: '3', idCategory: 'articulos-perro', title: 'Correa chica', description: 'Correo bonita para perros pequeños', price: 55.00, stock: 5, pictureURL: 'https://picsum.photos/700/400?random' },
                { id: '4', idCategory: 'carnazas', title: 'Palito de carnaza', description: 'Palito de carnaza para que saboree una botana tu perrito', price: 5.00, stock: 8, pictureURL: 'https://picsum.photos/700/400?random' },
                { id: '5', idCategory: 'articulos-perro', title: 'Cepillo para perro', description: 'Cepillo para perro y dejar sus dientes limpios', price: 70.00, stock: 6, pictureURL: 'https://picsum.photos/700/400?random' },
                { id: '6', idCategory: 'juguetes-perro', title: 'Pelota chica para perro', description: 'Pelota para perro que la puede masticar y no se rompe', price: 80.00, stock: 7, pictureURL: 'https://picsum.photos/700/400?random' },
                { id: '7', idCategory: 'juguetes-perro', title: 'Muñeco con nudos', description: 'Muñeco bonito para que tu perro juegue y no temas porque se rompa', price: 170.00, stock: 4, pictureURL: 'https://picsum.photos/700/400?random' },
                { id: '8', idCategory: 'juguetes-perro', title: 'Nudo para perro', description: 'Nudo para que tu perro juegue y puedas jalar o lo pueda compartir con otro perro', price: 120.00, stock: 9, pictureURL: 'https://picsum.photos/700/400?random' }
              ];

            arregloProductos = arregloProductos.filter(item => item.id === itemId);
            let productoEncontrado = arregloProductos[0];
            setProducto(productoEncontrado);
        }, 500);

    }, [itemId]);

    return (
        <>
            <ItemDetail producto={producto}></ItemDetail>
        </>
    );
}

export default ItemDetailContainer;