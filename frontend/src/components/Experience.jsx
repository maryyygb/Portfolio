import { FaCircle, FaCheck } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <div>
        <div className="exp-con relative bg-[#221209] text-orange-50 py-4 pb-20 px-8 lg:px-20">
          <div className="exp-div-one pt-10 pb-8">
            <h4 className="sec-titles-format">BACKGROUND</h4>
          </div>
          <div className="exp-div-two">
            <h2 className="exper-title font-bold tracking-wide">
              My <span className="text-orange-500 italic">Experiences</span>
            </h2>
            <p className="normal-t text-orange-50/70 text-sm w-[60vw] md:w-[500px]">
              A mix of freelance projects, part-time work, and hands-on school
              experience that shaped how I work and think.
            </p>
          </div>
          {/* Work experiences */}
          <div
            className="normal-t mt-7 py-1 bg-[#221209] text-orange-50/80 md:ml-8
          flex items-center justify-center xl:justify-start"
          >
            <ul
              className="backg-box grid gap-y-10 gap-x-4 px-2 pl-8 xl:pl-16
            border-l-1 border-solid border-orange-500
            xl:w-[60%]"
            >
              <li className="backg-con">
                <div className="exp-circle"></div>
                <div className="bg-header">
                  <div className="bg-h1">
                    <h2 className="bg-h-title">
                      E-Commerce Website
                    </h2>
                    <div className="bg-h-sub">
                      <div className="bg-worktype">Personal Project</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-location text-red-400">
                        Manila, Philippines
                      </div>
                    </div>
                  </div>
                  <div className="bg-h2">Present</div>
                </div>
                <div className="bg-des">
                  <p className="bg-des-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolor eos sed quo magnam vitae possimus minima distinctio
                    ullam obcaecati dolorum dignissimos iusto porro asperiores
                    deserunt nam fuga amet, voluptatum tempore?
                  </p>
                </div>
                <div className="bg-features">
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="bg-techs">
                  <div className="bg-tech-list">React</div>
                  <div className="bg-tech-list">Node JS</div>
                  <div className="bg-tech-list">Express JS</div>
                  <div className="bg-tech-list">MongoDB</div>
                  <div className="bg-tech-list">Git</div>
                  <div className="bg-tech-list">GSAP Animation</div>
                </div>
              </li>
              <li className="backg-con">
                <div className="exp-circle"></div>
                <div className="bg-header">
                  <div className="bg-h1">
                    <h2 className="bg-h-title">
                      Operational Support Assistant
                    </h2>
                    <div className="bg-h-sub">
                      <div className="bg-worktype">SJN Real Estate</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-worksetup italic">Seasonal</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-work-via">Hybrid</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-location text-red-400">
                        Nueva Ecija, Philippines
                      </div>
                    </div>
                  </div>
                  <div className="bg-h2">2022 - 2025</div>
                </div>
                <div className="bg-des">
                  <p className="bg-des-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolor eos sed quo magnam vitae possimus minima distinctio
                    ullam obcaecati dolorum dignissimos iusto porro asperiores
                    deserunt nam fuga amet, voluptatum tempore?
                  </p>
                </div>
                <div className="bg-features">
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="bg-techs">
                  <div className="bg-tech-list">React</div>
                  <div className="bg-tech-list">Node JS</div>
                  <div className="bg-tech-list">Express JS</div>
                  <div className="bg-tech-list">MongoDB</div>
                  <div className="bg-tech-list">Git</div>
                  <div className="bg-tech-list">GSAP Animation</div>
                </div>
              </li>
              <li className="backg-con">
                <div className="exp-circle"></div>
                <div className="bg-header">
                  <div className="bg-h1">
                    <h2 className="bg-h-title">Full Stack Developer</h2>
                    <div className="bg-h-sub">
                      <div className="bg-worktype">Kodego Bootcamp</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-worksetup italic">
                        Capstone Project
                      </div>
                      <FaCircle className="faCircle" />
                      <div className="bg-work-via">Online</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-location text-red-400">
                        Philippines
                      </div>
                    </div>
                  </div>
                  <div className="bg-h2">2025 (6 Mo)</div>
                </div>
                <div className="bg-des">
                  <p className="bg-des-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolor eos sed quo magnam vitae possimus minima distinctio
                    ullam obcaecati dolorum dignissimos iusto porro asperiores
                    deserunt nam fuga amet, voluptatum tempore?
                  </p>
                </div>
                <div className="bg-features">
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="bg-techs">
                  <div className="bg-tech-list">React</div>
                  <div className="bg-tech-list">Node JS</div>
                  <div className="bg-tech-list">Express JS</div>
                  <div className="bg-tech-list">MongoDB</div>
                  <div className="bg-tech-list">Git</div>
                  <div className="bg-tech-list">GSAP Animation</div>
                </div>
              </li>
              <li className="backg-con">
                <div className="exp-circle"></div>
                <div className="bg-header">
                  <div className="bg-h1">
                    <h2 className="bg-h-title">School Website</h2>
                    <div className="bg-h-sub">
                      <div className="bg-worktype">Dr. Ramon de Santos NHS</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-worksetup italic">
                        Research Project
                      </div>
                      <FaCircle className="faCircle" />
                      <div className="bg-work-via">F2F</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-location text-red-400">
                        Nueva Ecija, Philippines
                      </div>
                    </div>
                  </div>
                  <div className="bg-h2">2024 - Present</div>
                </div>
                <div className="bg-des">
                  <p className="bg-des-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolor eos sed quo magnam vitae possimus minima distinctio
                    ullam obcaecati dolorum dignissimos iusto porro asperiores
                    deserunt nam fuga amet, voluptatum tempore?
                  </p>
                </div>
                <div className="bg-features">
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="bg-fea-list">
                    <FaCheck className="faCheck" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="bg-techs">
                  <div className="bg-tech-list">React</div>
                  <div className="bg-tech-list">Node JS</div>
                  <div className="bg-tech-list">Express JS</div>
                  <div className="bg-tech-list">MongoDB</div>
                  <div className="bg-tech-list">Git</div>
                  <div className="bg-tech-list">GSAP Animation</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Educational Background */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
