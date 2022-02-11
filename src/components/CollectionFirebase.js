import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';
import ItemListContainer from '../components/ItemListContainer';

export default function TestCollectionFirebase() {

    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [existItems, setExistItems] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = (categoryId === undefined) ? db.collection("items") : db.collection("items").where('idCategory', '==', categoryId);

        itemCollection.get()
            .then((querySnapShot) => {
                if (querySnapShot.size === 0) {
                    console.log('No se encontraron items');
                    return;
                }
                console.log('Items encontrados');
                setItems(querySnapShot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                }));
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setExistItems(true);
            });
    }, [categoryId]);

    return (
        <>
            {
                existItems ?
                    <>
                        <ItemListContainer arrayItems={items} />
                    </>
                    :
                    <>
                        <h1>Cargando...</h1>
                    </>
            }
        </>
    );
}