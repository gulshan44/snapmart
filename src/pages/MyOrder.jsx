import React from "react";
import { useCart } from "../context/CartContext";

const MyOrder = () => {
  const { orders, clearOrders } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-8">My Orders</h1>

        {orders.length === 0 ? (
          <div className="bg-white text-center py-10 rounded-xl shadow">
            <p className="text-gray-500 text-lg">No orders placed yet.</p>
          </div>
        ) : (
          <div className="space-y-6">

            <button
              onClick={clearOrders}
              className="bg-red-600 text-white px-4 py-2 rounded-md mb-6 hover:bg-red-700"
            >
              Clear All Orders
            </button>

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
              >
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      Order ID: {order.id}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Ordered on {order.date} | Delivery by {order.deliveryDate}
                    </p>
                  </div>
                  <span className="text-indigo-600 font-semibold text-lg mt-2 sm:mt-0">
                    Total: ${order.total}
                  </span>
                </div>

                {/* Order Items */}
                <div className="divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center py-3"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <p className="font-medium text-gray-700">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <span className="font-semibold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Payment Info */}
                <div className="mt-4 flex justify-between text-sm text-gray-600">
                  <span>Payment: {order.paymentMethod}</span>
                  <button className="text-indigo-600 hover:underline">
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
