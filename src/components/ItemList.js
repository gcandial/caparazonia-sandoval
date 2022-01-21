import React, {useEffect, useState} from "react";
import Item from "./Item";

function ItemList({ items }) {
    // const [arregloProducto, setArregloProducto] = useState([]);
    // const [llegoPromesa, setLlegoPromesa] = useState(false);

    // useEffect(() => {
    //     const promesaProductos = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(items);
    //         }, 2000);
    //     })

    //     promesaProductos
    //         .then( res => {
    //             setArregloProducto(res)
    //             setLlegoPromesa(true)
    //         })
    //         .catch( err => {console.log('Hubo un error al obtener el arreglo ' + err)} )
    // });

    return (
        <>            
            { 
                // (llegoPromesa) ? <Item item={arregloProducto}></Item> : null 
                <Item item={items}></Item>
            }
        </>
    );
}

export default ItemList;