import { useState } from 'react'
import dp from '../assets/Untitled-1.jpg'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

function NavBar() {
  const [ show, setShow ] = useState(false)
  const showSideNav = () => {
    document.querySelector('#sideNav').style.display = 'block'
    setShow(true)
  }
  const closeSideNav = () => {
    document.querySelector('#sideNav').style.display = 'none'
    setShow(false)
  }
  return (
    <div className='fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md z-50'>
  <div className='flex justify-between px-8 py-4'>
    <div className='flex'>
      <img src={dp} alt="My picture" className='w-16 h-16 rounded-full border' />
      <h4 className='mt-4 ml-4 leading-10 poppins text-black font-bold tracking-widest'>DEVDAN</h4>
    </div>
    <nav>
      <ul className='hidden lg:flex gap-6 poppins mt-4'>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>HOME</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>FEATURES</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>PORTFOLIO</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>RESUME</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>TESTIMONIAL</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>PRICING</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>CONTACTS</a></li>
      </ul>
    </nav>
    {!show ? <AiOutlineMenu onClick={showSideNav} className='lg:hidden text-xl mt-4 pt-2 leading-10' /> :
    <GrClose onClick={closeSideNav} className='lg:hidden text-xl mt-4 pt-2 leading-10' />}
  </div>
  <nav id='sideNav' className='hidden h-screen w-full md:w-1/3 bg-light-white pl-8'>
    <ul className='poppins w-full'>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>HOME</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>FEATURES</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>PORTFOLIO</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>RESUME</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>TESTIMONIAL</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>PRICING</a></li>
        <li><a href="#" className='leading-10 text-light-black hover:text-pink text-sm'>CONTACTS</a></li>
      </ul>
    </nav>
</div>

  )
}

export default NavBar