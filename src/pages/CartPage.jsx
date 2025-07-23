import React from "react";
import EmptyCart from "../component/cart/EmptyCart";
import Cart from "../component/cart/CartItems";
import { useCart } from "../context/CartContext";

const CartPage = () => {

    const { cartItems, setCartItems } = useCart();

    return (
        <div>
            {cartItems.length === 0 ? (
                <EmptyCart />
            ) : (
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
            )}
        </div>
    );
};

export default CartPage;
