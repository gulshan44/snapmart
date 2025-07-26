import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import { FiSearch } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useCart } from '../context/CartContext';

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Store", path: "/store" },
    { name: "Contact Us", path: "/contact" },
    { name: "My Order", path: "/myorder" },
];

const Navbar = () => {

    const [showSearchBar, setShowSearchBar] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const { cartItems } = useCart();

    const totalItems = cartItems.length;

    return (

        <>

            <header className='shadow-md py-3 sticky top-0 z-10 bg-white/70'>

                <Container className='flex justify-between items-center'>
                    {/* logo */}
                    <div>
                        <Link to="/" className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600">SnapMart</Link>
                    </div>

                    {/* navbar link */}
                    <nav className='hidden md:flex items-center ml-auto'>
                        <ul className='flex items-center gap-10 text-[18px] font-semibold text-gray-700'>
                            {
                                navLinks.map((link) => (
                                    <li key={link.path}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-indigo-600 border-b-2 border-indigo-600 transition-all pb-1"
                                                    : "hover:text-indigo-600 transition"
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                )
                                )
                            }

                        </ul>

                    </nav>

                    {/* Right: Icons (Search, Cart, Menu) */}
                    <div className="flex items-center gap-4 md:gap-5 ml-7">
                        <button
                            onClick={() => setShowSearchBar(true)}
                            className="text-xl text-gray-700 cursor-pointer hover:text-indigo-600"
                        >
                            <FiSearch />
                        </button>

                        <NavLink to="/cart"
                            className={({ isActive }) =>
                                `relative hover:text-indigo-600 ${isActive ? "text-indigo-600" : "text-gray-700"
                                }`
                            }>
                            <FaCartArrowDown className="h-6 w-6" />
                            {totalItems > 0 && (
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full absolute -top-3 -right-3">
                                    {totalItems}
                                </span>
                            )}
                        </NavLink>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMobileMenu(true)}
                            className="text-2xl text-gray-700 md:hidden"
                        >
                            <HiOutlineMenuAlt3 />
                        </button>

                    </div>

                </Container>

            </header>

            {/* search bar */}
            <div
                className={`flex justify-center items-center fixed top-15 left-0 z-50 w-full p-4 bg-gray-100 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${showSearchBar ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full md:w-[50%] border px-4 py-2 rounded-full text-black font-semibold"
                />
                <RxCross1
                    className="text-xl ml-3 cursor-pointer hover:text-red-500 transition"
                    onClick={() => setShowSearchBar(false)}
                />
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-[998] p-6 shadow-2xl transform transition-transform duration-500 ease-in-out ${mobileMenu ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div>
                    <Link to="/" className="text-2xl sm:text-3xl font-bold text-indigo-600">SnapMart</Link>
                </div>
                <RxCross1
                    className="text-2xl ml-auto mb-6 cursor-pointer hover:text-red-500"
                    onClick={() => setMobileMenu(false)}
                />
                <ul className="flex flex-col gap-6 font-semibold text-gray-800 text-lg">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={() => setMobileMenu(false)}
                                className={({ isActive }) =>
                                    isActive ? "text-indigo-600" : "hover:text-indigo-600 transition"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Backdrop */}
            {mobileMenu && (
                <div
                    className="fixed inset-0 bg-black/40 z-[997]"
                    onClick={() => setMobileMenu(false)}
                ></div>
            )}

        </>

    )
}

export default Navbar