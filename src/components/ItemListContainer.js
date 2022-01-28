import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {

  const [arregloCatalogoProductos, setArregloCatalogoProductos] = useState([]);
  const [llegoPromesa, setLlegoPromesa] = useState(false);

  useEffect(() => {
    const promesaProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        let arregloProductos = [
          { id: '1', idCategory: 'carnazas', title: 'Carnaza de pollo', description: 'Carnaza de pollo tan sabrosa que no creeras son para perro', price: 25.00, stock: 15, pictureURL: 'https://source.unsplash.com/random/100x100?=animals' },
          { id: '2', idCategory: 'carnazas', title: 'Carnaza de res', description: 'Carnaza de res tan sabrosa que no creeras son para perro', price: 25.00, stock: 10, pictureURL: 'https://source.unsplash.com/random/100x100?=office' },
          { id: '3', idCategory: 'articulos-perro', title: 'Correa chica', description: 'Correo bonita para perros pequeños', price: 55.00, stock: 5, pictureURL: 'https://source.unsplash.com/random/100x100?page=3&query=office' },
          { id: '4', idCategory: 'carnazas', title: 'Palito de carnaza', description: 'Palito de carnaza para que saboree una botana tu perrito', price: 5.00, stock: 8, pictureURL: 'https://source.unsplash.com/random/100x100?page=1&query=animals' },
          { id: '5', idCategory: 'articulos-perro', title: 'Cepillo para perro', description: 'Cepillo para perro y dejar sus dientes limpios', price: 70.00, stock: 6, pictureURL: 'https://source.unsplash.com/random/100x100?page=2&query=school' },
          { id: '6', idCategory: 'juguetes-perro', title: 'Pelota chica para perro', description: 'Pelota para perro que la puede masticar y no se rompe', price: 80.00, stock: 7, pictureURL: 'https://source.unsplash.com/random/100x100?page=2&query=school' },
          { id: '7', idCategory: 'juguetes-perro', title: 'Muñeco con nudos', description: 'Muñeco bonito para que tu perro juegue y no temas porque se rompa', price: 170.00, stock: 4, pictureURL: 'https://source.unsplash.com/random/100x100?page=2&query=school' },
          { id: '8', idCategory: 'juguetes-perro', title: 'Nudo para perro', description: 'Nudo para que tu perro juegue y puedas jalar o lo pueda compartir con otro perro', price: 120.00, stock: 9, pictureURL: 'https://source.unsplash.com/random/100x100?page=2&query=school' }
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
        (llegoPromesa) ? arregloCatalogoProductos.map(item => <ItemList key={item.id} items={item} />) : <h1>Cargando...</h1>
      }
    </>
  );
}

export default ItemListContainer;