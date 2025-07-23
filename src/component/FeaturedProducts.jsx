import React, { useEffect, useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import ProductBox from './ProductBox';

const FeaturedProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.in/api/products?limit=20')
            .then(res => res.json())
            .then(data => {
                if (data && Array.isArray(data.products)) {
                    // Skip first 10 and take rest
                    setProducts(data.products.slice(10));
                } else {
                    console.error('Unexpected data structure:', data);
                }
            })
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    return (
        <div className='py-10'>
            <Container>

                <div className='flex items-center gap-4 mb-10'>

                    <hr className="hidden sm:block w-10 md:w-16 border-t border-gray-300" />

                    <h2 className='text-lg sm:text-xl md:text-2xl text-gray-800 font-extrabold'>
                        FEATURED PRODUCTS
                    </h2>

                    <hr className="flex-grow border-t border-gray-300" />

                    <span className='pointer-events-none select-none leading-none text-[28px] md:text-[30px] font-extrabold text-gray-300/70 hidden sm:block'>
                        FEATURED PRODUCTS
                    </span>

                </div>

                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 my-5'>
                    <ProductBox products={products} />
                </div>

            </Container>

        </div>
    )
}

export default FeaturedProducts