import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        setTimeout(() => {
            let arregloProductos = [
                { id: '1', title: 'Carnaza de pollo', description: 'Carnaza de pollo tan sabrosa que no creerás son para perro', price: 25.00, stock: 15, pictureURL: 'https://source.unsplash.com/random/100x100?=animals' },
                { id: '2', title: 'Carnaza de res', description: 'Carnaza de res tan sabrosa que no creerás son para perro', price: 25.00, stock: 10, pictureURL: 'https://source.unsplash.com/random/100x100?=office' },
                { id: '3', title: 'Correa chica', description: 'Correo bonita para perros pequeños', price: 55.00, stock: 5, pictureURL: 'https://source.unsplash.com/random/100x100?page=3&query=office' },
                { id: '4', title: 'Palito de carnaza', description: 'Palito de carnaza para que saboree una botana tu perrito', price: 5.00, stock: 8, pictureURL: 'https://source.unsplash.com/random/100x100?page=1&query=animals' },
                { id: '5', title: 'Cepillo para perro', description: 'Cepillo para perro y dejar sus dientes limpios', price: 70.00, stock: 6, pictureURL: 'https://source.unsplash.com/random/100x100?page=2&query=school' }
            ];

            arregloProductos = arregloProductos.filter(item => item.id === itemId);
            let productoEncontrado = arregloProductos[0];
            setProducto(productoEncontrado);
        }, 2000);

    }, []);

    return (
        <>
            <ItemDetail producto={producto}></ItemDetail>
        </>
    );
}

export default ItemDetailContainer;