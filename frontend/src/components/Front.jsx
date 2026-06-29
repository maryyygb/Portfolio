// import React from "react";
import { TfiDownload, TfiArrowRight } from "react-icons/tfi";

const Front = () => {
  return (
    <div className="hero z-20 front-bg flex items-center h-[92vh] w-full p-5 sm:p-25 lg:pl-35">
      <div className="deco-sm hidden sm:block"></div>
      <div className="deco-sm2 hidden sm:block"></div>
      <div className="flex flex-col gap-2">
        <div className="dark-bg text-center text-[8px] tracking-widest rounded-[2rem] py-2 px-5 w-[45%] w-fit sm:text-sm lg:text-xl flex justify-center items-center sm:gap-1 md:gap-2">
          <div className="active-dot-mobile sm:w-2 sm:h-2 text-center sm:mt-[1px] mr-1"></div>
          AVAILABLE FOR WORK
        </div>
        <h1 className="role text-5xl font-bold sm:text-7xl lg:text-9xl lg:w-[60%] w-[90%]">
          Junior Web{" "}
          <span className="text-orange-500/60 italic">Developer</span> & Support
        </h1>
        <p className="text-orange-50/50 sm:text-2xl md:text-xl lg:text-3xl mt-3 sm:mt-6 sm:w-[80%]">
          Passionate about creating{" "}
          <span className="text-orange-50">user-friendly web solutions</span> and
          delivering{" "}
          <span className="text-orange-50">reliable backend support</span> that
          keeps businesses running smoothly.
        </p>
        <div className="text-orange-50 text-sm flex flex-row gap-2 sm:gap-5 sm:text-2xl sm:mt-6 mt-4">
          <a
            href=""
            className="or-grad px-6 py-2 bg-amber-500 rounded-full border-solid border-1 border-slate-500/80 border-dark sm:px-14 sm:py-4 sm:text-xl lg:text-3xl font-medium flex items-center gap-4"
          >
            See My Work <TfiArrowRight />
          </a>
          <a
            href=""
            className="pr-6 pl-6 pt-2 pb-2 sm:px-14 sm:py-4 sm:text-xl lg:text-3xl text-orange-50/80 rounded-full border-solid border-1 border-orange-50/25 z-40 flex gap-4 items-center"
          >
            Download CV <TfiDownload />
          </a>
        </div>
        <div className="experience-sec flex text-orange-50 my-6 md:my-10 lg:my-18 md:gap-10 gap-4">
          <div>
            <h3 className="exp-num text-3xl font-bold text-orange-500/90 lg:text-6xl md:text-4xl">1+</h3>
            <p className="text-xs text-orange-50/50 tracking-wide md:text-base lg:text-xl md:tracking-normal md:my-2 md:font-semibold">YEARS EXPERIENCE</p>
          </div>
          <div>
            <h3 className="exp-num text-3xl font-bold text-orange-500/90 lg:text-6xl md:text-4xl">6+</h3>
            <p className="text-xs text-orange-50/50 tracking-wide md:text-base lg:text-xl md:tracking-normal md:my-2 md:font-semibold">PERSONAL PPROJECTS</p>
          </div>
          <div>
            <h3 className="exp-num text-3xl font-bold text-orange-500/90 lg:text-6xl md:text-4xl">96%</h3>
            <p className="text-xs text-orange-50/50 tracking-wide md:text-base lg:text-xl md:tracking-normal md:my-2 md:font-semibold">CLIENT SATISFACTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
