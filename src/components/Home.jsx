import photo from '../assets/photo.png'
import { LiaInvision } from 'react-icons/lia'
import { AiOutlineSketch } from 'react-icons/ai'
import { FaFigma } from 'react-icons/fa'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Home() {
  return (
    <div className='max-w-screen-xl m-auto block lg:flex'>
        <div className='mt-56 ml-8'>
            <h5 className='text-sm text-black poppins tracking-widest font-semibold'>WELCOME TO MY WORLD</h5>
            <h1 className='text-5xl text-black font-black leading-normal'>Hi, I’m <span className='text-pink'>Daniel Ogunniyi</span> <br /> a Full Stack Developer.</h1>
            <p className='poppins leading-relaxed mt-8 text-light-black w-4/5'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='block md:flex justify-between mt-40'>
                <div>
                    <p className='text-sm text-light-black poppins tracking-widest font-semibold'>FIND WITH ME</p>
                    <div className='flex gap-4 mt-4 pb-4'>
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
                <div className='pr-8'>
                    <p className='text-sm text-light-black poppins tracking-widest font-semibold'>BEST SKILL ON</p>
                    <div className='flex gap-4 mt-4 pb-4'>
                        <div className='bg-gradient-to-r from-dark-white to-white shadow-md w-16 h-16 rounded-lg flex items-center justify-center content-center'>
                            <LiaInvision className='text-3xl' />
                        </div>
                        <div className='bg-gradient-to-r from-dark-white to-white shadow-md w-16 h-16 rounded-lg flex items-center justify-center content-center'>
                            <AiOutlineSketch className='text-3xl' />
                        </div>
                        <div className='bg-gradient-to-r from-dark-white to-white shadow-md w-16 h-16 rounded-lg flex items-center justify-center content-center'>
                            <FaFigma className='text-3xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-28'>
            <img src={photo} alt="" className='w-4/5'/>
        </div>
    </div>
  )
}

export default Home