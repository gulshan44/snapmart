import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {

    const getEstimatedDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date.toDateString();
};

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12 max-w-md text-center">
                <div className="text-green-500 text-6xl mb-4">✅</div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    Thank you for your order!
                </h1>

                <p className="text-gray-600 mb-6">
                    We've received your order and it’s being processed.
                </p>

                <div className="bg-green-50 text-green-800 rounded-md p-3 mb-4 text-sm">
                    Estimated Delivery: <strong>{getEstimatedDate()}</strong>
                </div>

                <p className="text-sm text-gray-500 mb-6">
                    An order confirmation has been sent to your email.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-indigo-600 text-white mb-2 px-6 py-3 rounded-full font-semibold text-sm hover:bg-indigo-700 transition"
                >
                    Continue Shopping
                </Link>{" "}

                <Link
                    to="/myorder"
                    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-indigo-700 transition"
                >
                   View my order
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
