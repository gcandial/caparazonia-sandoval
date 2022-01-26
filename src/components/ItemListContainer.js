import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {

  const [arregloCatalogoProductos, setArregloCatalogoProductos] = useState([]);
  const [llegoPromesa, setLlegoPromesa] = useState(false);

  useEffect(() => {
    const promesaProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        let arregloProductos = [
            { id: '1', title: 'Carnaza de pollo', description: 'Carnaza de pollo tan sabrosa que no creeras son para perro', price: 25.00, stock: 15, pictureURL: 'https://source.unsplash.com/random/100x100?=animals' },
            { id: '2', title: 'Carnaza de res', description: 'Carnaza de res tan sabrosa que no creeras son para perro', price: 25.00, stock: 10, pictureURL: 'https://source.unsplash.com/random/100x100?=office' },
            { id: '3', title: 'Correa chica', description: 'Correo bonita para perros pequeños', price: 55.00, stock: 5, pictureURL: 'https://source.unsplash.com/random/100x100?page=3&query=office' },
            { id: '4', title: 'Palito de carnaza', description: 'Palito de carnaza para que saboree una botana tu perrito', price: 5.00, stock: 8, pictureURL: 'https://source.unsplash.com/random/100x100?page=1&query=animals' },
            { id: '5', title: 'Cepillo para perro', description: 'Cepillo para perro y dejar sus dientes limpios', price: 70.00, stock: 6, pictureURL: 'https://source.unsplash.com/random/100x100?page=2&query=school' }
        ];
        resolve(arregloProductos);
      }, 2000);
    })

    promesaProductos
      .then(res => {
        setArregloCatalogoProductos(res)
        setLlegoPromesa(true)
      })
      .catch(err => { console.log('Hubo un error al obtener el arreglo ' + err) })
  });

  return (
    <>
      {
        (llegoPromesa) ? arregloCatalogoProductos.map(item => <ItemList items={item} />) : <h1>Cargando...</h1>
      }
    </>
  );
}

export default ItemListContainer;