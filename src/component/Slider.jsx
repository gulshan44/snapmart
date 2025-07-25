import React, { useEffect, useState } from 'react'
import Container from './Container';
import { Link } from 'react-router-dom'

const images = [
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg',
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg',
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg',
    'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg',
]

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setCurrentSlide(
                        (currentValue) => {
                            if (currentValue == images.length - 1) {
                                return 0;
                            } else {
                                return currentValue + 1;
                            }
                        }
                    )
                }, 2000
            )

            return () => {
                clearInterval(interval); // clean up code - unmounting
            }
        }, []
    );

    return (
        <section className='py-6 sm:py-10'>
            <Container className='flex justify-between flex-col-reverse md:flex-row items-center'>

                <div className='w-full md:w-1/2 text-center md:text-left mt-4 sm:mt-0'>

                    <h2 className='typewriter text-xl sm:text-2xl font-bold text-indigo-700 mb-4'>Created by Gulshan Verma</h2>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4'>One stop solution <span className='text-indigo-600 font-bold'>Snapmart</span></h2>

                    <p className='text-base sm:text-lg text-gray-600 mb-4'>Discover the latest headphones, earphones, mobiles, tablets etc.</p>
                    <p className='text-base sm:text-lg text-gray-600 mb-4'>Exclusive deals just for you!</p>

                    <Link to='/store' className='bg-gray-200 rounded text-indigo-600 py-2 px-4 font-medium sm:px-6 text-base sm:text-lg hover:bg-indigo-600 hover:text-white transition-all'>Shop Now</Link>

                </div>

                <div className='w-full md:w-1/2 relative h-80 sm:h-90 md:h-96 lg:h-[500px] flex justify-center items-center overflow-hidden duration-500'>
                    <div className='relative h-full w-full'>

                        {
                            images.map(
                                (image, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Slide ${index}`}
                                            className={`slide absolute w-full h-full object-cover transition-opacity ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                                        />
                                    )
                                }
                            )

                        }

                    </div>
                </div>

            </Container>
        </section>
    )
};

export default Slider