import React, { useState } from 'react'; // Added useState
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // 1. Create a state to track if the menu is open
    const [isOpen, setIsOpen] = useState(false);

    // 2. Function to toggle state
    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    // 3. Function to explicitly close the menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative">
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
                BUILD-A-THON
            </h1>

            {/* Desktop nav element */}
            <nav className="hidden md:flex items-center gap-12">
                <Link to='/' className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">HOME</Link>
                <Link to='/about' className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">ABOUT</Link>
                <Link to='/techstack' className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">TECH STACK</Link>
                <Link to='/rules' className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">RULES</Link>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
                VIEW POSTER
            </button>

            {/* Mobile menu Toggle Button */}
            <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50 text-white'>
                <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i> {/* Icon changes when open */}
            </button>

            {/* Mobile Slider Bar */}
            <div
                className={`${isOpen ? 'flex' : 'hidden'} fixed top-0 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black/90 backdrop-blur-md flex-col items-center justify-center`}
            >
                <nav className='flex flex-col gap-8 items-center'>
                    {/* Added closeMenu to every Link */}
                    <Link to='/' onClick={closeMenu} className="text-xl tracking-widest transition-colors hover:text-[#e99b63] z-50">
                        HOME
                    </Link>
                    <Link to='/about' onClick={closeMenu} className="text-xl tracking-widest transition-colors hover:text-[#e99b63] z-50">
                        ABOUT
                    </Link>
                    <Link to='/techstack' onClick={closeMenu} className="text-xl tracking-widest transition-colors hover:text-[#e99b63] z-50">
                        TECH STACK
                    </Link>
                    <Link to='/rules' onClick={closeMenu} className="text-xl tracking-widest transition-colors hover:text-[#e99b63] z-50">
                        RULES
                    </Link>

                    
                    <button
                        onClick={closeMenu}
                        className="mt-4 bg-[#a7a7a7] text-black py-4 px-12 rounded-full border-none font-bold transition-all duration-500 hover:bg-white cursor-pointer z-50 uppercase tracking-widest text-xs"
                    >
                        VIEW POSTER
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;