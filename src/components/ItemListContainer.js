import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";

function ItemListContainer({ saludo }) {
  const [arregloCatalogoProductos, setArregloCatalogoProductos] = useState([
    { id: 1, title: 'Carnaza de pollo', price: 25.00, stock: 15, pictureURL: 'https://source.unsplash.com/random/100x100?=animals' },
    { id: 2, title: 'Carnaza de res', price: 25.00, stock: 10, pictureURL: 'https://source.unsplash.com/random/100x100?=office' },
    { id: 3, title: 'Correa chica', price: 55.00, stock: 5, pictureURL: 'https://source.unsplash.com/random/100x100?page=3&query=office' },
    { id: 4, title: 'Palito de carnaza', price: 5.00, stock: 8, pictureURL: 'https://source.unsplash.com/random/100x100?page=1&query=animals' },
    { id: 5, title: 'Cepillo para perro', price: 70.00, stock: 6, pictureURL: 'https://source.unsplash.com/random/100x100?page=2&query=school' }
  ]);
  const [llegoPromesa, setLlegoPromesa] = useState(false);

  useEffect(() => {
    const promesaProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arregloCatalogoProductos);
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
        // arregloCatalogoProductos.map(item => <ItemList items={item} />)
        (llegoPromesa) ? arregloCatalogoProductos.map(item => <ItemList items={item} />) : <h1>Cargando...</h1> 
      }
    </>
  );
}

export default ItemListContainer;