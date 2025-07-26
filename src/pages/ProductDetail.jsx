import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useProduct();
    const { addToCart } = useCart();

    const [readMore, setReadMore] = useState(false);

    if (products.length === 0) {
        return <p className="text-center py-10 text-gray-500 text-lg">Loading product...</p>;
    }

    const product = products.find((p) => p.id == id);

    if (!product) {
        return <p className="text-center py-10 text-gray-500 text-lg">Product not found.</p>;
    }

    const handleAddToCart = () => {
        addToCart({ ...product });
    };

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-2">
                
                {/* Product Image */}
                <div className="flex justify-center items-center bg-gray-50 p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Product Details */}
                <div className="p-6 space-y-3">
                    {/* Category Badge */}
                    <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                    </span>

                    <h1 className="text-base md:text-xl font-bold text-gray-800">{product.title}</h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-yellow-500">
                        <FaStar /> {product.rating?.rate || 4.5} / 5
                        <span className="text-gray-500 text-sm">({product.rating?.count || 100} reviews)</span>
                    </div>

                    {/* Price */}
                    <div>
                        <p className="text-3xl font-bold text-indigo-600">${product.price}</p>
                        <p className="text-gray-500 text-sm line-through">${(product.price * 1.2).toFixed(2)}</p>
                    </div>

                    {/* Brand Info */}
                    <div className="text-gray-700 text-sm space-y-1">
                        <p><span className="font-semibold">Brand:</span> {product.brand}</p>
                        <p><span className="font-semibold">Model:</span> {product.model}</p>
                        <p><span className="font-semibold">Color:</span> {product.color}</p>
                    </div>

                    {/* Description with Read More */}
                    <div className="text-gray-600 text-sm md:text-base">
                        {readMore
                            ? product.description
                            : `${product.description.substring(0, 120)}...`}
                        
                        {product.description.length > 120 && (
                            <button
                                onClick={() => setReadMore(!readMore)}
                                className="text-indigo-600 ml-2 font-semibold hover:underline"
                            >
                                {readMore ? "Read Less" : "Read More"}
                            </button>
                        )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
