import resume from '../assets/Ogunniyi Daniel CV.pdf'

function Resume() {
  return (
    <div>
        <div className="max-w-screen-xl m-auto text-center py-8">
            <h5 className='text-sm text-pink poppins tracking-widest font-semibold'>5+ YEARS OF EXPERIENCE</h5>
            <h2 className='text-5xl text-black font-black leading-normal montserrat pb-8'>My Resume</h2>
            <a href={resume} target='_blank' className='border rounded-lg py-4 px-8 mt-6 poppins text-sm text-black poppins tracking-widest font-semibold hover:shadow-lg duration-1000'>CLICK HERE TO DOWNLOAD</a>
        </div>
    </div>
  )
}

export default Resume