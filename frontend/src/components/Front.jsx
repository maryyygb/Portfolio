import React from "react";

const Front = () => {
  return (
    <div className="front-bg flex items-center h-[92vh] w-full p-5 sm:p-25">
      <div className="flex flex-col gap-2">
        <div className="dark-bg text-center text-[8px] tracking-widest rounded-[2rem] pt-2 pb-2 pl-5 pr-5 w-[45%] w-fit sm:text-xl flex justify-center items-center sm:gap-4">
          <div className="active-dot-mobile sm:w-2 sm:h-2 text-center sm:mt-[1px] mr-1"></div>
          AVAILABLE FOR WORK
        </div>
        <h1 className="role text-5xl font-bold sm:text-9xl sm:w-[60%]">
          Junior Web <span className="text-amber-600/60">Developer</span> &
          Support
        </h1>
        <p className="text-white/50 sm:text-3xl mt-4 sm:w-[80%]">
          Passionate about creating{" "}
          <span className="text-white">user-friendly web solutions</span> and
          delivering{" "}
          <span className="text-white">reliable backend support</span> that
          keeps businesses running smoothly.
        </p>
        <div
          className="text-white flex flex-row gap-4 sm:text-2xl
         sm:mt-4"
        >
          <a href="" className="pr-4 pl-4 pt-2 pb-2 bg-amber-500 rounded-full border-solid border-1 border-dark">See My Work</a>
          <a href="" className="pr-4 pl-4 pt-2 pb-2 rounded-full border-solid border-2">Let's Talk</a>
        </div>
      </div>
    </div>
  );
};

export default Front;
