import { TfiArrowRight } from "react-icons/tfi";

const Action = () => {
  return (
    <div className="relative exp-con px-10 py-24 text-center bg-[#221209] text-orange-50 overflow-hidden">
      <div className="ac-deco1"></div>
      <div className="ac-deco2"></div>
      <div>
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <p className="normal-t text-xs font-bold tracking-wide text-orange-600">
              LET'S BUILD TOGETHER
            </p>
            <h1 className="action-title text-5xl lg:text-6xl font-bold w-3/4">
              Ready to make something{" "}
              <span className="italic text-orange-400">great?</span>
            </h1>
            <p className="normal-t text-sm w-3/4 md:w-2/4 text-orange-50/50">
              I'm currently availble for freelance projects and full-time
              opportunities. If you have a project in mind or just want to
              connect, my inbox is always open.
            </p>
          </div>
          <div className="normal-t grid gap-4 sm:grid-cols-2">
            <button className="or-grad px-8 py-4 rounded-full border-1 border-slate-950/40 text-orange-950 font-bold flex gap-2 items-center hover:cursor-pointer hover:shadow-[0_0_10px_2px] hover:shadow-orange-700 hover:text-orange-900">
              Send Me a Message <TfiArrowRight />
            </button>
            <button className="px-8 py-4 rounded-full border-1 border-orange-50/50 font-bold hover:cursor-pointer hover:cursor-pointer hover:shadow-[0_0_10px_2px] hover:shadow-slate-500">
              Check My LinkedIn
            </button>
          </div>
          <div className="normal-t text-xs">
            <p className="reach-d text-orange-50/50 font-semibold">
              Or reach me directly at{" "}
              <span className="font-bold text-orange-500 italic">
                basilio.marygrace.eviota@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
