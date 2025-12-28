import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center 
    min-h-[calc(90vh-6rem)] text-center px-6">

      <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="max-w-xl z-10">
        {/* Intro badge */}
        <div className='relative w-[95%] sm:w-48 h-10 mx-auto
        bg-gradient-to-r from-[#656565] to-[#e99b63]
        shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
          <div className='absolute inset-[3px] bg-black
          rounded-full flex items-center justify-center gap-1'>
            <i className='bx bxs-diamond'></i>
            INTRODUCING
          </div>
        </div>

        {/* Main heading */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-semibold tracking-wider my-8'>
          EMAIL FOR <br /> DEVELOPERS
        </h1>

        {/* Description */}
        <p className='text-base sm:text-lg tracking-wider text-gray-400 
        max-w-[30rem] mx-auto'>
          The best way to reach humans instead of spam folders,
          deliver transactional and marketing emails at scale.
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-6 justify-center mt-12'>
          <Link to='/documentation' className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full
          sm:text-lg text-sm font-semibold tracking-wider transition-all
          duration-300 hover:bg-[#1a1a1a]'>
            DOCUMENTATION <i className='bx bx-link-external'></i>
          </Link>

          <Link to='/getstarted' className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full
          sm:text-lg text-sm font-semibold tracking-wider transition-all
          duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'>
            GET STARTED <i className='bx bx-link-external'></i>

          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home;