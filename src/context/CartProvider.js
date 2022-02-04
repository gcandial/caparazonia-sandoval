import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // const [mensajeCarrito, setMensajeCarrito] = useState('');
    // const agregaCarrito = () => setMensajeCarrito("¡Se agregaron " + articulos + " artículo(s) al carrito!");

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const indexItem = cart.findIndex(article => article.item.id === item.id);
            cart[indexItem].quantity = cart[indexItem].quantity + quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(article => article.item.itemId !== itemId);
        setCart(updatedCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(element => element.item.itemId === itemId);
    };

    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
            {children}
        </cartContext.Provider>
    )
};

export default CartProvider;