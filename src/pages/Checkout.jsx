import React, { useState } from "react";
import { useCart } from '../context/CartContext';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const { cartItems, setCartItems, setOrders } = useCart();
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [upiID, setUpiID] = useState("");

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const estimatedDate = new Date();
    estimatedDate.setDate(estimatedDate.getDate() + 5);
    const deliveryDate = estimatedDate.toDateString();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (paymentMethod === "upi" && !upiID) {
            toast.error("Please enter your UPI ID...");
            return;
        }

        const newOrder = {
            id: `ORD-${Date.now()}`,
            items: cartItems,
            total: subtotal.toFixed(2),
            paymentMethod,
            date: new Date().toLocaleDateString(),
            deliveryDate
        };

        setOrders((prev) => [...prev, newOrder]);

        toast.success("🎉 Order Placed Successfully!");

        setCartItems([]);

        setTimeout(() => {
            navigate("/thankyou");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                {/* Address Form */}
                <div className="md:col-span-2 bg-white p-6 rounded-xl shadow space-y-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-600">Shipping Information</h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="input" required />
                            <input type="text" placeholder="Last Name" className="input" required />
                        </div>

                        <input type="email" placeholder="Email Address" className="input w-full" required />
                        <input type="text" placeholder="Street Address" className="input w-full" required />

                        <div className="grid sm:grid-cols-3 gap-4">
                            <input type="text" placeholder="City" className="input" required />
                            <input type="text" placeholder="State" className="input" required />
                            <input type="text" placeholder="PIN Code" className="input" required />
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-600 text-white w-full cursor-pointer py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
                        >
                            Place Order
                        </button>
                    </form>
                </div>

                {/* 🧾 Order Summary */}
                <div className="bg-white p-6 rounded-xl shadow space-y-4">
                    <h3 className="text-xl font-semibold border-b pb-2">Order Summary</h3>

                    <div className="flex justify-between text-gray-700">
                        <span>Items ({cartItems.length})</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <p className="text-sm text-green-600">Estimated Delivery: {deliveryDate}</p>

                    <div className="space-y-3 text-sm text-gray-700">
                        <h4 className="font-semibold">Payment Method</h4>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="payment"
                                value="cod"
                                checked={paymentMethod === "cod"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Cash on Delivery
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="payment"
                                value="upi"
                                checked={paymentMethod === "upi"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            UPI / Card / NetBanking
                        </label>
                    </div>

                    {paymentMethod === "upi" && (
                        <div className="mt-4">
                            <input
                                type="text"
                                value={upiID}
                                onChange={(e) => setUpiID(e.target.value)}
                                placeholder="Enter your UPI ID"
                                className="input w-full"
                            />
                            {upiID && !upiID.includes("@") && (
                                <p className="text-red-500 text-sm mt-1">Invalid UPI ID</p>
                            )}
                        </div>
                    )}


                    <ul className="bg-indigo-100 text-indigo-800 text-sm p-4 rounded-md space-y-1">
                        <li>✔ Cash on Delivery available</li>
                        <li>✔ Track your order after payment</li>
                        <li>✔ Free returns within 7 days</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
