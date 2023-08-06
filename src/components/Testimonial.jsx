import samod from '../assets/Raph-dp.jpg'
import { PiQuotes } from 'react-icons/pi'
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
function Testimonial() {
  return (
    <div className='max-w-screen-xl m-auto'>
        <div className="text-center">
            <h5 className='text-sm text-pink poppins tracking-widest font-semibold'>WHAT CLIENT SAY</h5>
            <h2 className='text-5xl text-black font-black leading-normal'>Testimonial</h2>
        </div>
        <div className="w-3/4 m-auto block lg:flex gap-8 pb-4">
            <div className='bg-gradient-to-r from-dark-white to-white shadow-md p-8 rounded-lg cursor-pointer duration-100 hover:shadow-lg'>
                    <img src={samod} alt="" className='w-full rounded-lg' />
                    <div className="flex justify-between mt-6">
                        <p className='text-pink text-sm poppins tracking-widest'>VST</p>
                    </div>
                    <h3 className='font-bold text-2xl mt-2 montserrat'>Raphael Eyitayo</h3>
                    <p className='poppins'>Screenwriter</p>
                </div>
            <div className='lg:w-3/4'>
                <div className='hidden lg:flex justify-between'>
                    <PiQuotes className='text-9xl text-light-grey' />
                    <div className='flex gap-8'>
                    <div className='w-20 h-20 p-4 border rounded-lg flex justify-center items-center'>
                        <AiOutlineArrowLeft className='text-3xl' />
                    </div>
                    <div className='w-20 h-20 p-4 border rounded-lg flex justify-center items-center'>
                        <AiOutlineArrowRight className='text-3xl' />
                    </div>

                    </div>
                </div>
                <div className='w-full bg-gradient-to-r from-dark-white to-white shadow-md py-8 px-4 mt-8 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-3xl font-bold montserrat'>Travel Mobile App Design.</h3>
                            <p className='poppins'>via Upwork - Mar. 2021 - Aug. 2021</p>
                        </div>
                        <div className='flex gap-2'>
                            <AiFillStar className='text-yellow' />
                            <AiFillStar className='text-yellow' />
                            <AiFillStar className='text-yellow' />
                            <AiFillStar className='text-yellow' />
                            <AiFillStar className='text-yellow' />
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 poppins'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sit nisi consequatur, quisquam, ut accusantium labore, quaerat eaque magnam sed eum aspernatur pariatur! Blanditiis impedit alias, consectetur voluptatum totam id?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial