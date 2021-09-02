import React, { useContext, useState, createContext } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.some((item) => item.id === id);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cart.map((cartElement) => {
                if (cartElement.id === item.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity };
                } else return cartElement;
            });
            setCart(newCart);
        } else {
            setCart((prev) => [...prev, { ...item, quantity }]);
        }
    }

    const removeItem = (itemid) => {
        setCart(cart.filter((e) => !itemid));
    };

    const clear = () => setCart([]);

    const totalItems = cart.reduce((acc, item) => {
        return acc + item.quantity;
    }, []);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};