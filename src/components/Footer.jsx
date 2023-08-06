import dp from '../assets/Untitled-1.jpg'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Footer() {
  return (
    <>
        <div className='max-w-screen-xl m-auto bg-dark-white grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8'>
        <div>
            <div className='flex'>
                <img src={dp} alt="My picture" className='w-16 h-16 rounded-full border' />
                <h4 className='mt-4 ml-4 leading-10 poppins tracking-widest'>DEVDAN</h4>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 pb-4 gap-4 mt-4'>
                    <a href='http://facebook.com/danielifeoluwa.ogunniyi' target='_blank' className='bg-gradient-to-r from-dark-white to-white shadow-md w-16 h-16 rounded-lg flex items-center justify-center content-center hover:shadow-lg duration-1000 cursor-pointer'>
                        <FiFacebook className='text-3xl' />
                    </a>
                    <a href='https://twitter.com/OgunniyiDanie12'  target='_blank' className='bg-gradient-to-r from-dark-white to-white shadow-md w-16 h-16 rounded-lg flex items-center justify-center content-center hover:shadow-lg duration-1000 cursor-pointer'>
                        <FiTwitter className='text-3xl' />
                    </a>
                    <a href='https://linkedin.com/in/daniel-ogunniyi-b368a2236' target='_blank' className='bg-gradient-to-r from-dark-white to-white shadow-md w-16 h-16 rounded-lg flex items-center justify-center content-center hover:shadow-lg duration-1000 cursor-pointer'>
                        <FiLinkedin className='text-3xl' />
                    </a>
            </div>
        </div>
        <div>
            <h3 className='text-pink text-xl montserrat'>QUICK LINK</h3>
            <ul className='mt-4 poppins'>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>About</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Portfolio</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Services</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Blog</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Contact</li>
            </ul>
        </div>
        <div>
            <h3 className='text-pink text-xl montserrat'>RESOURCES</h3>
            <ul className='mt-4 poppins'>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Authentication</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>System Status</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Terms of Service</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Pricing</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Over Right</li>
            </ul>
        </div>
        <div>
            <h3 className='text-pink text-xl montserrat'>DEVELOPERS</h3>
            <ul className='mt-4 poppins'>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Documentation</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Authentication</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>API Reference</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Support</li>
                <li className='text-light-black hover:text-pink cursor-pointer leading-10'>Open Source</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className='text-center pb-8 text-xl poppins'>© 2023. All rights reserved by DevDan</p>
    </>
  )
}

export default Footer