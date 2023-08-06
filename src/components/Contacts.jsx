import myPic from '../assets/IMG-20220717-WA0007.jpg'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Contacts() {
  return (
    <div className='max-w-screen-xl m-auto'>
        <div className="text-center">
            <h5 className='text-sm text-pink poppins tracking-widest font-semibold'>CONTACT</h5>
            <h2 className='text-5xl text-black font-black leading-normal'>Contact With Me</h2>
        </div>
        <div className='lg:grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 py-4'>
            <div className='col-span-1 bg-gradient-to-r from-dark-white to-white shadow-md p-8 rounded-lg cursor-pointer duration-1000 hover:shadow-lg mb-10'>
                <img src={myPic} alt="" className='w-full rounded-lg hover:scale-105 duration-1000' />
                <h3 className='font-bold text-2xl mt-2 montserrat'>Daniel Ogunniyi</h3>
                <p className='text-dark-grey mt-2 poppins'>Full Stack Developer</p>
                <p className='text-dark-grey mt-4 poppins'>I am available for freelance work. Connect with me via and call in to my account.</p>

                <p><span className='text-dark-grey poppins'>Phone:</span> <a href="tel:+2348126123194" className='hover:text-pink text-grey'>+234 812 612 3194</a></p>
                <p><span className='text-dark-grey poppins'>Email:</span> <a href="mailto:ogunniyidanif18@gmail.com" className='hover:text-pink text-grey'>ogunniyidanif18@gmail.com</a></p>

                <div className='flex justify-between pt-10'>
                <div>
                    <p className='poppins'>FIND WITH ME</p>
                    <div className='flex gap-4 mt-4'>
                        <div className='bg-gradient-to-r from-dark-white to-white shadow-md w-16 h-16 rounded-lg flex items-center justify-center content-center'>
                            <FiFacebook className='text-3xl' />
                        </div>
                        <div className='bg-gradient-to-r from-dark-white to-white shadow-md w-16 h-16 rounded-lg flex items-center justify-center content-center'>
                            <FiTwitter className='text-3xl' />
                        </div>
                        <div className='bg-gradient-to-r from-dark-white to-white shadow-md w-16 h-16 rounded-lg flex items-center justify-center content-center'>
                            <FiLinkedin className='text-3xl' />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <form className='w-full col-span-2 py-4 px-8 bg-gradient-to-r from-dark-white to-white shadow-md rounded-lg'>
                <div className='block md:grid grid-cols-2 gap-8'>
                    <div>
                        <label htmlFor="name" className='text-sm text-light-black pb-2 poppins tracking-widest font-semibold'>YOUR NAME</label> <br />
                        <input type="text" className='rounded-lg w-full border border-grey h-14 py-2 px-4' />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="number" className='text-sm text-light-black pb-2 poppins tracking-widest font-semibold'>PHONE NUMBER</label> <br />
                        <input type="number" className='rounded-lg w-full border border-grey h-14 py-2 px-4' />
                    </div>
                </div>
                <div className='mt-4'>
                    <label htmlFor="email" className='text-sm text-light-black pb-2 poppins tracking-widest font-semibold'>EMAIL</label> <br />
                    <input type="email" className='rounded-lg w-full border border-grey h-14 py-2 px-4' />
                </div>
                <div className='mt-4'>
                    <label htmlFor="subject" className='text-sm text-light-black pb-2 poppins tracking-widest font-semibold'>SUBJECT</label> <br />
                    <input type="text" className='rounded-lg w-full border border-grey h-14 py-2 px-4' />
                </div>
                <div className='mt-4'>
                    <label htmlFor="message" className='text-sm text-light-black pb-2 poppins tracking-widest font-semibold'>MESSAGE</label> <br />
                    <textarea className='rounded-lg w-full border border-grey h-60 py-2 px-4'></textarea>
                </div>
                <button type="submit" className='w-full border shadow-md hover:shadow-lg border-grey rounded-lg py-4 mt-6 poppins text-sm text-black poppins tracking-widest font-semibold'>SEND MESSAGE</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts