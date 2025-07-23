import React from "react";
import Container from "../Container";

const CartItems = ({ cartItems, setCartItems }) => {

    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCartItems([]);

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-[#cfdfff] to-[#f1f5f9]">
            <Container className="mx-auto grid p-0 grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Cart Items */}
                <div className="md:col-span-2 p-4 sm:p-6 rounded-2xl shadow border border-gray-400">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">
                            Cart
                            <span className="text-gray-500">{" "}({cartItems.length} products)</span>
                        </h2>
                        <button
                            onClick={clearCart}
                            className="text-red-500 text-sm hover:underline">
                            Clear cart
                        </button>
                    </div>

                    {/* Product List */}
                    <div className="space-y-4">

                        {cartItems.map((item) => (

                            <div key={item.id}
                                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl border border-gray-400 gap-4">

                                <div className="flex flex-col sm:flex-row w-full items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-xl "
                                    />

                                    <div>
                                        <h3 className="font-medium line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{item.color}</p>
                                    </div>

                                </div>

                                {/* Quantity and Price */}
                                <div className="flex items-center gap-6 flex-col sm:flex-row  w-full sm:w-auto">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => decreaseQty(item.id)}
                                            className="w-8 h-8 rounded-full border border-gray-300 text-xl flex items-center justify-center">
                                            −
                                        </button>

                                        <span className="font-medium">{item.quantity}</span>

                                        <button
                                            onClick={() => increaseQty(item.id)}
                                            className="w-8 h-8 rounded-full border border-gray-300 text-xl flex items-center justify-center">
                                            +
                                        </button>

                                    </div>

                                    <p className="font-semibold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 text-lg"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Promo + Total */}
                <div className="p-6 rounded-2xl bg-[#ecedfd] shadow space-y-6 self-start sticky top-24">
                    <div>
                        <label className="block mb-2 text-sm text-gray-700">
                            Promo code
                        </label>
                        <div className="flex flex-col sm:flex-row sm:gap-0 gap-2">
                            <input
                                type="text"
                                placeholder="Type here..."
                                className="flex-1 px-4 py-2 rounded-md sm:rounded-none sm:rounded-l-md border"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md sm:rounded-l-none">
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 sm:py-3 rounded-full font-semibold text-base transition duration-300">
                        Continue to checkout
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default CartItems;
