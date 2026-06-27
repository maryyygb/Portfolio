import { useState } from 'react';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='h-[8vh] w-[100%] bg-[#1C0F06]'>
        <div className='h-full w-full flex flex-row text-white justify-center items-center gap-6 sm:pl-12 sm:pr-12 pl-5 pr-5 text-[10px] sm:text-xl'>
            <h1 className='name-logo mr-auto text-[.75rem] sm:text-2xl'>MARY G.B.</h1>

              {/* DESKTOP RESPONSIVENESS */}
            <div className="nav-list-con hidden sm:flex gap-6">
                <p className='cursor-pointer'><a href="#">ABOUT</a></p>
                <p className='cursor-pointer'><a href="#">SKILLS</a></p>
                <p className='cursor-pointer'><a href="#">WORKS</a></p>
                <p className='cursor-pointer'><a href="#">REVIEWS</a></p>
                <p className='cursor-pointer'><a href="#">HIRE ME</a></p>
            </div>

            <button className='cursor-pointer sm:hidden'
                    onClick={() => setOpen(!open)}>=</button>
        </div>
        {/* MOBILE RESPONSIVENESS */}
        {open && (
          <div className="sm:hidden nav-list-con text-[10px] flex flex-col items-center gap-6 bg-[#1C0F06] p-4 text-white mt-0">
                <p className='cursor-pointer'><a href="#">ABOUT</a></p>
                <p className='cursor-pointer'><a href="#">SKILLS</a></p>
                <p className='cursor-pointer'><a href="#">WORKS</a></p>
                <p className='cursor-pointer'><a href="#">REVIEWS</a></p>
                <p className='cursor-pointer hire-me pt-2 pb-2 rounded-[1rem] w-[30%] text-center'><a href="#" className='w-full '>HIRE ME</a></p>
            </div>
        )}
    </div>
  )
}

export default Navbar