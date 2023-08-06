import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import bookList from '../assets/Book List Project.png'
import drawingApp from '../assets/Drawing App Project.png'
import natours from '../assets/Natours Project.png'
import numberGuesser from '../assets/Number Guesser Project.png'
import signUpForm from '../assets/Signup Form Project.png'
import taskList from '../assets/Task List Project.png'
import tracalorie from '../assets/Tracalorie Project.png'
import { useState } from 'react'

function Portfolio() {
    const [ like, setLike ] = useState(true);

  return (
    <div className='max-w-screen-xl m-auto'>
        <div className="text-center">
            <h5 className='text-sm text-pink poppins tracking-widest font-semibold'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
            <h2 className='text-5xl text-black font-black leading-normal montserrat'>My Portfolio</h2>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-black mt-8 px-8 pb-4'>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md p-8 rounded-lg cursor-pointer duration-100 hover:shadow-lg'>
                <img src={bookList} alt="" className='rounded-lg' />
                <div className="flex justify-between mt-6">
                    <p className='text-pink text-sm poppins tracking-widest'>GALLERY</p>
                    {like ? <AiFillHeart onClick={() => setLike(!like)} /> : <AiOutlineHeart onClick={() => setLike(!like)} />}
                </div>
                <h3 className='font-bold text-black text-2xl mt-2 montserrat'>Book List Project</h3>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md p-8 rounded-lg cursor-pointer duration-100 hover:shadow-lg'>
                <img src={drawingApp} alt="" className='rounded-lg' />
                <div className="flex justify-between mt-6">
                    <p className='text-pink text-sm poppins tracking-widest'>GALLERY</p>
                    {like ? <AiFillHeart onClick={() => setLike(!like)} /> : <AiOutlineHeart onClick={() => setLike(!like)} />}
                </div>
                <h3 className='font-bold text-black text-2xl mt-2 montserrat'>Drawing App Project</h3>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md p-8 rounded-lg cursor-pointer duration-100 hover:shadow-lg'>
                <img src={natours} alt="" className='rounded-lg' />
                <div className="flex justify-between mt-6">
                    <p className='text-pink text-sm poppins tracking-widest'>GALLERY</p>
                    {like ? <AiFillHeart onClick={() => setLike(!like)} /> : <AiOutlineHeart onClick={() => setLike(!like)} />}
                </div>
                <h3 className='font-bold text-black text-2xl mt-2 montserrat'>Natours Project</h3>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md p-8 rounded-lg cursor-pointer duration-100 hover:shadow-lg'>
                <img src={numberGuesser} alt="" className='rounded-lg' />
                <div className="flex justify-between mt-6">
                    <p className='text-pink text-sm poppins tracking-widest'>GALLERY</p>
                    {like ? <AiFillHeart onClick={() => setLike(!like)} /> : <AiOutlineHeart onClick={() => setLike(!like)} />}
                </div>
                <h3 className='font-bold text-black text-2xl mt-2 montserrat'>Number Guesser Project</h3>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md p-8 rounded-lg cursor-pointer duration-100 hover:shadow-lg'>
                <img src={signUpForm} alt="" className='rounded-lg' />
                <div className="flex justify-between mt-6">
                    <p className='text-pink text-sm poppins tracking-widest'>GALLERY</p>
                    {like ? <AiFillHeart onClick={() => setLike(!like)} /> : <AiOutlineHeart onClick={() => setLike(!like)} />}
                </div>
                <h3 className='font-bold text-black text-2xl mt-2 montserrat'>Signup Form Project</h3>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md p-8 rounded-lg cursor-pointer duration-100 hover:shadow-lg'>
                <img src={taskList} alt="" className='rounded-lg' />
                <div className="flex justify-between mt-6">
                    <p className='text-pink text-sm poppins tracking-widest'>GALLERY</p>
                    {like ? <AiFillHeart onClick={() => setLike(!like)} /> : <AiOutlineHeart onClick={() => setLike(!like)} />}
                </div>
                <h3 className='font-bold text-black text-2xl mt-2 montserrat'>Task List Project</h3>
            </div>
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md p-8 rounded-lg cursor-pointer duration-100 hover:shadow-lg'>
                <img src={tracalorie} alt="" className='rounded-lg' />
                <div className="flex justify-between mt-6">
                    <p className='text-pink text-sm poppins tracking-widest'>GALLERY</p>
                    {like ? <AiFillHeart onClick={() => setLike(!like)} /> : <AiOutlineHeart onClick={() => setLike(!like)} />}
                </div>
                <h3 className='font-bold text-black text-2xl mt-2 montserrat'>Tracalorie Project</h3>
            </div>
        </div>
    </div>
  )
}

export default Portfolio