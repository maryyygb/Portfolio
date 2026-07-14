import { FaCircle } from "react-icons/fa";

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
          <div className="normal-t mt-7 py-1 px-2 pl-8 bg-[#221209] text-orange-50/80 border-l-1 border-solid border-orange-500 md:ml-8">
            <ul className="backg-box grid lg:w-4/4 gap-y-8 gap-x-4">
              <li className="backg-con">
                <div className="bg-header">
                  <div className="bg-h1">
                    <h2 className="bg-h-title">Title name here</h2>
                    <div className="bg-h-sub">
                      <div className="bg-worktype">Self-Employed</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-worksetup">Freelance</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-work-via">Remote</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-location">Philippines</div>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="bg-techs"></div>
              </li>
              <li className="backg-con">
                <div className="bg-header">
                  <div className="bg-h1">
                    <h2 className="bg-h-title">Title name here</h2>
                    <div className="bg-h-sub">
                      <div className="bg-worktype">Self-Employed</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-worksetup">Freelance</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-work-via">Remote</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-location">Philippines</div>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="bg-techs"></div>
              </li>
              <li className="backg-con">
                <div className="bg-header">
                  <div className="bg-h1">
                    <h2 className="bg-h-title">Title name here</h2>
                    <div className="bg-h-sub">
                      <div className="bg-worktype">Self-Employed</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-worksetup">Freelance</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-work-via">Remote</div>
                      <FaCircle className="faCircle" />
                      <div className="bg-location">Philippines</div>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="bg-techs"></div>
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
