import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("snapmart-cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("snapmart-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const exists = cartItems.find((item) => item.id === product.id);

        if (exists) {
            toast.error("Already in cart!");
            return;
        }

        setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
        toast.success("Added to cart");
    };


    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider
            value={{ cartItems, setCartItems, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

// 🔹 Custom hook
export const useCart = () => useContext(CartContext);
