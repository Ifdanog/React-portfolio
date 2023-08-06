import { BsCodeSlash, BsPhone } from 'react-icons/bs'
import { FiCodepen, FiDatabase } from 'react-icons/fi'
import { HiOutlineBookOpen } from 'react-icons/hi'
function Features() {
  return (
    <div className='max-w-screen-xl m-auto px-8'>
        <h5 className='text-sm text-pink poppins tracking-widest font-semibold'>FEATURES</h5>
        <h2 className='text-5xl text-black font-black leading-normal montserrat'>What I Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-black mt-8'>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md py-16 px-8 pb-4 rounded-lg cursor-pointer duration-1000 hover:shadow-lg'>
                <BsCodeSlash className='text-7xl pb-4 text-pink' />
                <h3 className='font-bold text-2xl montserrat text-black'>Frontend Development</h3>
                <p className='mt-6 poppins text-light-black'>I will handle anything from the conversion of the UI UX design to a functional website.</p>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md py-16 px-8 rounded-lg cursor-pointer duration-1000 hover:shadow-lg'>
                <FiCodepen className='text-7xl pb-4 text-pink' />
                <h3 className='font-bold text-2xl montserrat text-black'>Backend Development</h3>
                <p className='mt-6 poppins text-light-black'>If you have a already made frontend website or application, I can build the backend needed for the website's functionality.</p>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md py-16 px-8 rounded-lg cursor-pointer duration-1000 hover:shadow-lg'>
                <HiOutlineBookOpen className='text-7xl pb-4 text-pink' />
                <h3 className='font-bold text-2xl montserrat text-black'>Full Stack Development</h3>
                <p className='mt-6 poppins text-light-black'>Bring your dream while I turn it into a reality for you, as I build both the frontend and backend of your project to make it into a full fledge website.</p>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md py-16 px-8 mb-4 rounded-lg cursor-pointer duration-1000 hover:shadow-lg'>
                <BsPhone className='text-7xl pb-4 text-pink' />
                <h3 className='font-bold text-2xl montserrat text-black'>App Development</h3>
                <p className='mt-6 poppins text-light-black'>We’ll handle everything from to app development process until it is time to make your project live.</p>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md py-16 px-8 mb-4 rounded-lg cursor-pointer duration-1000 hover:shadow-lg'>
                <FiDatabase className='text-7xl pb-4 text-pink' />
                <h3 className='font-bold text-2xl montserrat text-black'>SEO Optimization</h3>
                <p className='mt-6 poppins text-light-black'>Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!</p>
            </div>
        </div>
    </div>
  )
}

export default Features