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
        const newCart1 = cart.filter((item) => item.id !== itemid);
        setCart(newCart1);
    };

    const clear = () => setCart([]);

    const totalQuantity = cart.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    const totalPrice = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    const realStock = (item) => {
        const itemFound = cart.find((e) => item.id === e.id);
        if (itemFound) return item.stock - itemFound.quantity;
        return item.stock;
      };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalQuantity, totalPrice, realStock }}>
            {children}
        </CartContext.Provider>
    );
};