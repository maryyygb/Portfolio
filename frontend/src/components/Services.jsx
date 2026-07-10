import { FaCheckCircle, FaCircle } from "react-icons/fa";

const Services = () => {
  return (
    <div className="exp-con bg-[#221209] px-8 py-20 lg:px-20 normal-t">
      <div>
        <div>
          <div className="exp-div-one">
            <h4 className="sec-titles-format">WHAT I OFFER</h4>
          </div>
          <div className="exp-div-two text-orange-50 pt-8">
            <h2 className="exper-title font-bold tracking-wide">
              Services & <span className="text-orange-500 italic">Rates</span>
            </h2>
            <p className="normal-t text-orange-50/70 text-sm w-[60vw] md:w-[500px]">
              Transparent pricing, zero surprises. Every engagement includes
              clear communication, timely delivery, and quality work you can
              rely on.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="text-orange-50 grid md:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-8">
            <div className="skills p-8 border-1 border-solid border-orange-600/35 shadow-[0_0_15px_5px] 
        shadow-orange-800/30">
              <div className="role-sec-1">
                <p className="role-n">
                  01 <span className="role-w">role</span>
                </p>
                <h2 className="role-title">Frontend Developer</h2>
                <p className="role-des">
                  Responsive UIs built in MERN Stack. I turn designs into fast,
                  accessible, and polished web experiences.
                </p>
              </div>
              <div className="role-rating">
                <p className="pricing gap-11">
                  <span className="dollar-s">$</span>{" "}
                  <span className="ratings absolute left-5 -top-5">7</span> /hr
                </p>
                <p className="mono">
                  Monthly retainer available - <span>$700 / mo</span>
                </p>
                <p className="mono">25 hours / week - <span className="line-through font-bold text-orange-300 text-sm">$758</span></p>
                <p className="mono">Mon - Fri only</p>
              </div>
              <div className="mt-3">
                <p className="included">WHAT'S INCLUDED</p>
                <ul className="offers-c">
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Responsive UI Development
                    (React JS)
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Tailwind CSS & Custom
                    component design systems
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Landing pages & marketing
                    websites
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Figma-to-code
                    implementation
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Website Animations (GSAP)
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Other
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Willing to learn other
                    tools/programming languages
                  </li>
                </ul>
              </div>
            </div>
            <div className="skills p-8 border-1 border-solid border-orange-600/35 shadow-[0_0_15px_5px] 
        shadow-orange-800/30">
              <div className="role-sec-1">
                <p className="role-n">
                  02 <span className="role-w">role</span>
                </p>
                <h2 className="role-title">Full Stack Developer</h2>
                <p className="role-des">
                  End-to-end product development - from database architecture to
                  deployed UI. I own the full lifecycle of what I build.
                </p>
              </div>
              <div className="role-rating">
                <p className="pricing gap-16">
                  <span className="dollar-s">$</span>{" "}
                  <span className="ratings left-4 -top-5">10</span> /hr
                </p>
                <p className="mono">
                  Monthly retainer available - <span>$1000 / mo</span>
                </p>
                <p className="mono">25 hours / week - <span className="line-through font-bold text-orange-300 text-sm">$1083</span></p>
                <p className="mono">Mon - Fri only</p>
              </div>
              <div className="mt-3">
                <p className="included">WHAT'S INCLUDED</p>
                <ul className="offers-c">
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Full-stack app
                    development (React + Node.js)
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> REST API & GraphQL design
                    and implementation
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Database design - MongoDB
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Authentication &
                    role-based access control
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Third-party integration
                    (Stripe, OAuth, APIs)
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Cloud deployment (Vercel,
                    Supabase)
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Code review,
                    documentation & handoff
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Post-launch support (14
                    days included)
                  </li>
                </ul>
              </div>
            </div>
            <div className="skills p-8 border-1 border-solid border-orange-600/35 relative overflow-hidden bg-orange-900">
            <div className="r-03 absolute top-0 left-0 bg-orange-500 h-1 w-full shadow-[0_1px_10px] shadow-orange-500"></div>
            <div className="r-03 absolute bottom-0 left-0 bg-orange-500 h-1 w-full shadow-[0_1px_10px] shadow-orange-500"></div>
              <div className="role-sec-1">
                <p className="role-n">
                  03 <span className="role-w">role</span>
                </p>
                <h2 className="role-title">
                  Virtual Assistant (Basic Package)
                </h2>
                <p className="role-des">
                  Reliable, tech-savvy remote support. I handle the operational
                  tasks that eat your time so you can focus on growing your
                  business.
                </p>
              </div>
              <div className="role-rating">
                <p className="pricing gap-12">
                  <span className="dollar-s">$</span>{" "}
                  <span className="ratings left-5 -top-5">5</span> /hr
                </p>
                <p className="mono">
                  Monthly Salary - <span>$542 / mo</span>
                </p>
                <p className="mono">25 hours / week - Mon-Fri only</p>
              </div>
              <div className="mt-3">
                <p className="included">WHAT'S INCLUDED</p>
                <ul className="offers-c">
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Email & calendar
                    management
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Data entry, research &
                    documentation
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Social media scheduling &
                    content posting
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Basic graphic design
                    (Canva, etc.)
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> File organization &
                    Google Workspace admin
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Spreadsheet management
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Inbox handling
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Other digital assistant
                    work. Mainly base on discussion.
                  </li>
                </ul>
              </div>
            </div>
            <div className="skills p-8  border-1 border-solid border-orange-600/35 shadow-[0_0_15px_5px] 
        shadow-orange-800/30">
              <div className="role-sec-1">
                <p className="role-n">
                  04 <span className="role-w">role</span>
                </p>
                <h2 className="role-title">Virtual Assistant (Star Package)</h2>
                <p className="role-des">
                  Specialized service not only provide basic operational support
                  but including Web Development/Management.
                </p>
              </div>
              <div className="role-rating">
                <p className="pricing gap-12">
                  <span className="dollar-s">$</span>{" "}
                  <span className="ratings left-5 -top-3">8</span> /hr
                </p>
                <p className="mono">
                  Monthly retainer available - <span>$860 / mo</span>
                </p>
                <p className="mono">25 hours / week - <span className="line-through font-bold text-orange-300 text-sm">$867</span></p>
                <p className="mono">Mon - Fri only</p>
              </div>
              <div className="mt-3">
                <p className="included">WHAT'S INCLUDED</p>
                <ul className="offers-c">
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Email & calendar
                    management
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Data entry, research &
                    documentation
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Social media scheduling &
                    content posting
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Basic graphic design
                    (Canva, etc.)
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> File organization &
                    Google Workspace admin
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Spreadsheet management
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Other digital assistant
                    work. Mainly base on discussion.
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Customer support & inbox
                    handling
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Basic video editing
                    (Capcut, etc.)
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Website
                    redesign / Basic landing site development
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Website Updates
                  </li>
                  <li className="offers">
                    <FaCheckCircle className="mt-[2px] text-orange-600" /> Additional AI Automation
                    (n8n)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <p className="flex gap-1 text-orange-50/40 text-xs italic"><FaCircle className="h-[5px] mt-[5px] text-orange-700" /> All rates are in USD. Available for short-term projects, long-term contracts & part-time engagements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
