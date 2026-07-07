// import React from "react";
import { TfiDownload, TfiArrowRight } from "react-icons/tfi";

const Front = () => {
  return (
    <div className="hero z-20 front-bg flex items-center h-screen w-full p-5 sm:p-25 lg:pl-35">
      <div className="deco-sm -right-[600px] -bottom-[600px] sm:block z-10 md:-right-[600px] md:-bottom-[550px] lg:-right-[200px]"></div>
      <div className="deco-sm2 -right-[180px] -bottom-[600px] sm:block z-10 md:-right-[200px] lg:-right-[100px]"></div>
      <div className="flex flex-col gap-2 pt-8 md:pt-28 lg:pt-36 z-40 px-2 sm:px-0">
        <div className="dark-bg text-center text-[8px] tracking-widest rounded-[2rem] py-2 px-5 w-[45%] w-fit sm:text-sm lg:text-sm flex justify-center items-center sm:gap-1 md:gap-2">
          <div className="active-dot-mobile sm:w-2 sm:h-2 text-center sm:mt-[1px] mr-1"></div>
          AVAILABLE FOR WORK
        </div>
        <h1 className="role text-5xl font-bold sm:text-6xl lg:text-8xl xl:text-11xl lg:w-[60%] w-[90%] text-orange-50">
          Junior Web <span className="text-orange-500 italic">Developer</span> &
          Support
        </h1>
        <p className="normal-t text-orange-50/50 text-sm sm:text-2xl md:text-xl lg:text-2xl mt-3 sm:mt-6 sm:w-[80%] xl:text-xl">
          Passionate about creating{" "}
          <span className="text-orange-50">user-friendly web solutions</span>{" "}
          and delivering{" "}
          <span className="text-orange-50">reliable backend support</span> that
          keeps businesses running smoothly.
        </p>
        <div className="normal-t text-orange-900 text-sm flex flex-row gap-2 sm:gap-5 sm:text-2xl sm:mt-6 mt-4">
          <a
            href=""
            className="or-grad text-xs px-4 py-2 bg-amber-500 rounded-full border-solid border-1 border-slate-500/80 border-dark sm:px-14 sm:py-4 sm:text-xl lg:text-xl font-medium flex items-center gap-3 hover:cursor-pointer hover:shadow-[0_0_10px_2px] hover:shadow-orange-800"
          >
            See My Work <TfiArrowRight />
          </a>
          <a
            href=""
            className="text-xs px-4 py-2 sm:px-14 sm:py-4 sm:text-xl lg:text-xl text-orange-50/80 rounded-full border-solid border-1 border-orange-50/25 z-40 flex gap-2 items-center hover:cursor-pointer hover:shadow-[0_0_10px_2px] hover:shadow-slate-500"
          >
            Download CV <TfiDownload />
          </a>
        </div>
        <div className="experience-sec flex text-orange-50 mt-6 md:my-10 lg:my-18 md:gap-10 gap-4 px-4 z-50">
          <div>
            <h3 className="exp-num text-3xl sm:text-4xl font-bold text-orange-500/90 lg:text-6xl md:text-5xl">
              1+
            </h3>
            <p className="normal-t text-[11px]/3 text-orange-50/50 tracking-wide md:text-sm lg:text-base xl:text-md md:tracking-normal md:my-2 md:font-semibold">
              YEARS EXPERIENCE
            </p>
          </div>
          <div>
            <h3 className="exp-num text-3xl sm:text-4xl font-bold text-orange-500/90 lg:text-6xl md:text-5xl">
              6+
            </h3>
            <p className="normal-t text-[11px]/3 text-orange-50/50 tracking-wide md:text-sm lg:text-base xl:text-md md:tracking-normal md:my-2 md:font-semibold">
              PERSONAL PPROJECTS
            </p>
          </div>
          <div>
            <h3 className="exp-num text-3xl sm:text-4xl font-bold text-orange-500/90 lg:text-6xl md:text-5xl">
              96%
            </h3>
            <p className="normal-t text-[11px]/3 text-orange-50/50 tracking-wide md:text-sm lg:text-base xl:text-md md:tracking-normal md:my-2 md:font-semibold">
              CLIENT SATISFACTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
