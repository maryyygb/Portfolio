import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar h-[8vh] w-[100%] bg-[#1C0F06]/98 border-1 border-b-amber-700/30">
        <div className="h-full w-full flex flex-row text-white justify-center items-center gap-6 sm:pl-12 sm:pr-12 pl-5 pr-5 text-[10px] sm:text-xl">
            <h1 className="name-logo mr-auto text-xl sm:text-2xl lg:text-3xl">MARY G.B.</h1>

              {/* DESKTOP RESPONSIVENESS */}
            <div className="nav-list-con font-semibold hidden text-orange-50 sm:flex gap-8 sm:items-center sm:text-base md:text-xl lg:text-2xl">
                <p className='cursor-pointer hover:underline-orange-500/50 hover:underline-offset-2'><a href="#">ABOUT</a></p>
                <p className='cursor-pointer hover:underline-orange-500/50 hover:underline-offset-2'><a href="#">SKILLS</a></p>
                <p className='cursor-pointer hover:underline-orange-500/50 hover:underline-offset-2'><a href="#">WORKS</a></p>
                <p className='cursor-pointer hover:underline-orange-500/50 hover:underline-offset-2'><a href="#">REVIEWS</a></p>
                <p className="cursor-pointer or-grad px-8 py-3 rounded-full w-[30%] text-center font-medium"><a href="#">HIRE ME</a></p>
            </div>

            <button className='cursor-pointer text-lg text-orange-400/70 sm:hidden'
                    onClick={() => setOpen(!open)}><TiThMenu /></button>
        </div>
        {/* MOBILE RESPONSIVENESS */}
        {open && (
          <div className="sm:hidden font-semibold text-orange-50 nav-list-con text-xs flex flex-col items-center gap-6 bg-[#1C0F06] p-4 text-white mt-0 mb-4">
                <p className='cursor-pointer hover:underline-orange-500/50 hover:underline-offset-2'><a href="#">ABOUT</a></p>
                <p className='cursor-pointer hover:underline-orange-500/50 hover:underline-offset-2'><a href="#">SKILLS</a></p>
                <p className='cursor-pointer hover:underline-orange-500/50 hover:underline-offset-2'><a href="#">WORKS</a></p>
                <p className='cursor-pointer hover:underline-orange-500/50 hover:underline-offset-2'><a href="#">REVIEWS</a></p>
                <p className='cursor-pointer or-grad pt-2 pb-2 rounded-[1rem] w-[30%] text-center'><a href="#" className='w-full '>HIRE ME</a></p>
            </div>
        )}
    </div>
  )
}

export default Navbar