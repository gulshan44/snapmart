import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import FooterColumn from './FooterColumn'
import { footerLinks } from './footerLink'

const Footer = () => {


    return (
        <div className='bg-indigo-50'>

            <Container>

                <div className='flex flex-col items-center text-center gap-4 py-16'>

                    <Link to="/" className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600">SnapMart</Link>

                    <p className="text-gray-600 max-w-xl">
                        Electronics product actual teachings of the great explorer of the truth, the molder of human happiness. No one rejects.
                    </p>

                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-16'>
                    {footerLinks.map((col, i) => (
                        <FooterColumn key={i} title={col.title} links={col.links} />
                    ))}

                    <div className=''>
                        <h3 className='text-lg font-bold mb-3 text-gray-900'>CONTACT INFO</h3>

                        <div className='text-gray-600 space-y-2'>
                            <h4 className='text-gray-800 font-semibold'>Address</h4>
                            <p>You address will be here Lorem Ipsum text</p>

                            <h4 className='text-gray-800 font-semibold'>Phone</h4>
                            <p>123456789</p>
                            <p>123456789</p>

                            <h4 className='text-gray-800 font-semibold'>Web</h4>
                            <p>info@snapmart.com</p>
                            <p>support@snapmart.com</p>
                        </div>

                    </div>

                </div>

                <hr className='text-gray-300' />

                <p className="py-5 text-center text-sm md:text-base">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-medium text-gray-800">SnapMart</span> | Built with{" "}
                    <span className="font-medium text-gray-800">React + Vite</span>
                </p>

            </Container>

        </div>
    )
}

export default Footer