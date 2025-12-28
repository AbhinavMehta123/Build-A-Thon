import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    // function
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        }
        else {
            mobileMenu.classList.add('hidden');
        }
    }
    return (
        <header className="flex justify-between
    items-center py-4 px-4 lg:px-20">
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-3xl md:text-4xl
        lg:text-5xl font-light m-0">
                BUILD-A-THON
            </h1>


            {/* Destop nav element */}
            <nav className="hidden md:flex items-center gap-12">
                <Link to='/' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="text-base tracking-wider
          transition-colors hover:text-gray-300 z-50">
                    HOME
                </Link>
                <Link to='/about' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-base tracking-wider
          transition-colors hover:text-gray-300 z-50">
                    ABOUT
                </Link>
                <Link to='/techstack' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000" className="text-base tracking-wider
          transition-colors hover:text-gray-300 z-50">
                    TECH STACK
                </Link>
                <Link to='/rules' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" className="text-base tracking-wider
          transition-colors hover:text-gray-300 z-50">
                    RULES
                </Link>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black
        py-3 px-8 rounded-full border-none font-medium transition-all
        duration-500 hover:bg-white cursor-pointer z-50">
                VIEW POSTER
            </button>

            {/* Mobile menu */}
            <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
                <i class='bx bx-menu'></i>
            </button>

            {/* slider bar */}

            <div id='mobileMenu' className=' hidden fixed top-16 bottom-0 right-0 left-0 p-5
      md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
                <nav className='flex flex-col gap-6
        items-center'>
                    <Link to='/' className="text-base tracking-wider
          transition-colors hover:text-gray-300 z-50">
                        HOME
                    </Link>
                    <Link to='/about' className="text-base tracking-wider
          transition-colors hover:text-gray-300 z-50">
                        ABOUT
                    </Link>
                    <Link to='/techstack' className="text-base tracking-wider
          transition-colors hover:text-gray-300 z-50" >
                        TECH STACK
                    </Link>
                    <Link to='/rules' className="text-base tracking-wider
          transition-colors hover:text-gray-300 z-50">
                        RULES
                    </Link>
                </nav>
            </div>

        </header>
    )
}

export default Navbar;