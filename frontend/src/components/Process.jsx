import { FaChessRook, FaCircle, FaLightbulb } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

const Process = () => {
  return (
    <div className="exp-con bg-[#221209]">
      <div className="px-8 py-24 lg:px-20">
        <div>
          <div className="exp-div-one">
            <h4 className="sec-titles-format">HOW I WORK</h4>
          </div>
          <div className="exp-div-two text-orange-50 pt-8">
            <h2 className="exper-title font-bold tracking-wide">
              My <span className="text-orange-500 italic">Process</span>
            </h2>
            <p className="normal-t text-orange-50/70 text-sm w-[60vw] md:w-[500px]">
              Regardless of the role, every engagement follows the same
              foundation -{" "}
              <span className="text-orange-50 italic">
                clear communication, structured execution,
              </span>{" "}
              and results you can actually rely on.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="process-c normal-t">
            <div className="flex gap-2 md:gap-4 flex-wrap">
              <div className="p-roles">
                <FaCircle className="h-[5px] md:h-[6px] text-orange-600" />
                <p className="p-role-name">Frontend Developer</p>
              </div>
              <div className="p-roles">
                <FaCircle className="h-[5px] md:h-[6px] text-orange-600" />
                <p className="p-role-name">Full Stack Developer</p>
              </div>
              <div className="p-roles">
                <FaCircle className="h-[5px] md:h-[6px] text-orange-600" />
                <p className="p-role-name">Virtual Assistant</p>
              </div>
            </div>
            <div className="five-process normal-t relative grid sm:grid-cols-3 gap-4 gap-y-8 xl:grid-cols-5 mt-12">
              <div className="absolute h-[90%] w-[1px] left-[50%] sm:h-[1px] sm:w-[68%] lg:w-[68%] xl:w-[80%] bg-red-500/90 top-4 sm:left-26 lg:left-38 xl:left-41 xl:top-4 z-0"></div>
              <div className="absolute hidden sm:block md:block lg:block h-[1px] sm:w-[29%] md:w-[30%] lg:w-[32%] xl:w-[80%] bg-red-500/90 sm:top-[57%] md:top-[55%] sm:left-[18%] lg:top-[60%] lg:left-38 xl:left-41 xl:top-4 z-0"></div>
              <div className="five-p-each z-10">
                <div
                  className="p-numbering bg-orange-600 text-orange-950 font-bold shadow-[0_0_5px_4px] 
        shadow-orange-600/40"
                >
                  1
                </div>
                <div className="p-icon text-yellow-400">
                  <FaLightbulb />
                </div>
                <div className="process-context">
                  <h3 className="p-title">Discover</h3>
                  <p className="p-des">
                    We talk about what you need, your goals, timeline, and any
                    tools or access I'll require.
                  </p>
                </div>
              </div>
              <div className="five-p-each z-10">
                <div className="p-numbering">2</div>
                <div className="p-icon text-sky-600">
                  <FaChessRook />
                </div>
                <div className="process-context">
                  <h3 className="p-title">Plan</h3>
                  <p className="p-des">
                    I map out the scope, break tasks into milestones, and set
                    clear expectations before starting.
                  </p>
                </div>
              </div>
              <div className="five-p-each z-10">
                <div className="p-numbering">3</div>
                <div className="p-icon text-sky-200">
                  <IoSettings />
                </div>
                <div className="process-context">
                  <h3 className="p-title">Execute</h3>
                  <p className="p-des">
                    I get to work - building, coding, or managing - and send
                    regular updates so you're never left guessing.
                  </p>
                </div>
              </div>
              <div className="five-p-each z-10">
                <div className="p-numbering">4</div>
                <div className="p-icon text-blue-300 text-xl">
                  <GiMagnifyingGlass />
                </div>
                <div className="process-context">
                  <h3 className="p-title">Review</h3>
                  <p className="p-des">
                    We review the output together. Feedback is welcomed,
                    revisions are handled, and quality is confirmed.
                  </p>
                </div>
              </div>
              <div className="five-p-each z-10">
                <div className="p-numbering">5</div>
                <div className="p-icon text-green-500 text-xl">
                  <TbTruckDelivery />
                </div>
                <div className="process-context">
                  <h3 className="p-title">Deliver</h3>
                  <p className="p-des">
                    Final output is handed off clean - deployed, documented, or
                    organized depending on the role.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-three-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
