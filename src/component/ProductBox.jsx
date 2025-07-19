import React from 'react'
import { Link } from 'react-router-dom'

const ProductBox = ({ products }) => {
    return (
        <>

            {products.map(product => (

                <div key={product.id} className='shadow-lg rounded-md transition bg-white group overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]'>
                    <Link to={"/store/product-details" + product.id}>
                        <img
                            className='w-full object-cover rounded-t-md transition group-hover:scale-105'
                            src={product.image}
                            alt={product.title} />
                    </Link>

                    <div className='mt-2 p-4 space-y-2'>
                        <h3 className='text-base font-semibold text-gray-800 line-clamp-2'>{product.title}</h3>

                        <p className='text-gray-900 text-base font-semibold'>{product.category}</p>

                        <p className='font-semibold text-gray-900'>Price: ${product.price}</p>

                        <button className='mt-2 bg-indigo-600 cursor-pointer px-2 py-1 sm:px-3 sm:py-2 text-white text-base sm:text-[18px] rounded-sm'>Add to cart</button>
                    </div>

                </div>
            ))}

        </>

    );
};

export default ProductBox;