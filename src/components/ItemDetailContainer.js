import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ producto }) {

    const { itemId } = useParams();
    const [item, setItem] = useState([]);
    const [existItem, setExistItem] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const miItem = itemCollection.doc(itemId);

        miItem.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('No existe el item :c');
                    return
                }
                console.log('item encontrado :D');
                setItem({ id: doc.id, ...doc.data() });
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setExistItem(true);
            });
    }, [itemId]);

    return (
        <>
            {
                existItem ?
                    <ItemDetail producto={item}></ItemDetail>
                    :
                    <>
                        <h1>Cargando...</h1>
                    </>
            }
        </>
    );
}

export default ItemDetailContainer;