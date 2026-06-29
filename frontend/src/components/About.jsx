// import React from 'react';
import myPicture from "../assets/_me.png";
import { FaCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-screen w-screen/10 bg-[#221209] relative">
      <div className="lg:px-50 lg:py-30">
        <h4 className="text-xs text-orange-500/70 font-bold tracking-widest lg:text-2xl">
          WHO I AM
        </h4>
      </div>
      <div className="flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 justify-center items-center">
          <div className="photo-card px-6 rounded">
            <img
              src={myPicture}
              alt="My Picture"
              className="h-[30vh] lg:h-[60vh] w-auto lg:rounded-2xl border-1 border-orange-500/80 shadow-lg m-auto"
            />
          </div>
          <div className="about-card lg:w-[65%]">
            <h1 className="about-title lg:text-6xl text-orange-50 font-semibold tracking-wide mb-6">
              Turning <span className="italic text-orange-500/80">ideas</span>{" "}
              into remarkable products
            </h1>
            <div className="about-me text-orange-50 flex flex-col gap-5">
                <p>Hey - Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nobis id alias nulla blanditiis iusto quas consectetur ad natus! Architecto, nesciunt molestias exercitationem dignissimos porro reiciendis quo dolores veniam praesentium!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laboriosam totam nemo? Facilis doloremque, hic saepe sequi laudantium ullam fugit maiores itaque dignissimo</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam distinctio rerum sit commodi dignissimos quia.</p>
                <ul className="info flex flex-col gap-2 mt-3">
                    <li className="flex gap-2 items-center">
                        <span className="text-orange-500 text-xs"><FaCircle /></span> Based in Manila, Philippines - open to remote worldwide</li>
                    <li className="flex gap-2 items-center">
                        <span className="text-orange-500 text-xs"><FaCircle /></span> Can speak English - strong communicator</li>
                    <li className="flex gap-2 items-center">
                        <span className="text-orange-500 text-xs"><FaCircle /></span> Currently studying Information Technology at STI College - Marikina </li>
                    <li className="flex gap-2 items-center">
                        <span className="text-orange-500 text-xs"><FaCircle /></span> Available for freelance, part-time & full-time opportunities</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
