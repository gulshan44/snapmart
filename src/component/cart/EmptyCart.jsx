import React from 'react'
import { Link } from "react-router-dom";
import Container from '../Container'

const EmptyCart = () => {
    return (
        <div className='min-h-[90vh] sm:min-h-[80vh] flex items-center justify-center px-4 text-center bg-gradient-to-br from-[#cfdfff] to-[#f1f5f9]'>
            <Container>
                <div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                        alt="Empty Cart Icon"
                        className='w-28 h-28 mx-auto mb-6 opacity-90 drop-shadow-lg' />

                    <h2 className='text-[18px] sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-3'>
                        Your SnapCart is Empty 😶
                    </h2>

                    <p className='text-gray-700 mb-6 text-[14px] sm:text-base'>
                        Looks like you haven’t added anything to your cart yet.
                        Discover top deals and new arrivals curated just for you.
                    </p>

                    <Link to='/'
                        className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 hover:from-blue-600 hover:to-purple-600 rounded-full text-md font-semibold shadow-md transition duration-300'>
                        Start Shopping
                    </Link>
                </div>
            </Container>

        </div>
    )
}

export default EmptyCart