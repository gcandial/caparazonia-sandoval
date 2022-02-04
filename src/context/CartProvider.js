import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const indexItem = cart.findIndex(article => article.item.id === item.id);
            cart[indexItem].quantity = cart[indexItem].quantity + quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { item: item, quantity: quantity }]);
        }
    };

    const isInCart = (itemId) => {
        return cart.some(article => article.item.id === itemId);
    };

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(article => article.item.id !== itemId);
        setCart(updatedCart);
    };

    const clear = () => {
        setCart([]);
    };

    return (
        <cartContext.Provider value={{ cart, addItem, isInCart, removeItem, clear }}>
            {children}
        </cartContext.Provider>
    )
};

export default CartProvider;