// import React from "react";

const Front = () => {
  return (
    <div className="z-20 front-bg flex items-center h-[92vh] w-full p-5 sm:p-25">
      <div className="deco-sm hidden sm:block"></div>
      <div className="flex flex-col gap-2">
        <div className="dark-bg text-center text-[8px] tracking-widest rounded-[2rem] pt-2 pb-2 pl-5 pr-5 w-[45%] w-fit sm:text-xl flex justify-center items-center sm:gap-2">
          <div className="active-dot-mobile sm:w-2 sm:h-2 text-center sm:mt-[1px] mr-1"></div>
          AVAILABLE FOR WORK
        </div>
        <h1 className="role text-5xl font-bold sm:text-9xl sm:w-[60%]">
          Junior Web <span className="text-amber-600/60 italic">Developer</span>{" "}
          & Support
        </h1>
        <p className="text-white/50 sm:text-3xl mt-3 sm:mt-6 sm:w-[80%]">
          Passionate about creating{" "}
          <span className="text-white">user-friendly web solutions</span> and
          delivering{" "}
          <span className="text-white">reliable backend support</span> that
          keeps businesses running smoothly.
        </p>
        <div
          className="text-white flex flex-row gap-2 sm:gap-5 sm:text-2xl
         sm:mt-6 mt-1"
        >
          <a
            href=""
            className="or-grad pr-6 pl-6 pt-2 pb-2 bg-amber-500 rounded-full border-solid border-1 border-slate-500/80 border-dark sm:pl-14 sm:pr-14 sm:pt-4 sm:pb-4 sm:text-3xl text-black font-medium"
          >
            See My Work →
          </a>
          <a
            href=""
            className="pr-6 pl-6 pt-2 pb-2 sm:pl-14 sm:pr-14 sm:pt-4 sm:pb-4 sm:text-3xl text-white/80 rounded-full border-solid border-1 border-white/25"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Front;
