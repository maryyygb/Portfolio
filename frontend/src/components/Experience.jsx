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
              A mix of freelance projects, part-time work, and hands-on school experience that shaped how I work and think.
            </p>
          </div>
        </div>
        {/* Work experiences */}
        <div>
            <ul className="backg-box">
                <li className="backg-con">
                    <div className="bg-header">
                        <div className="bg-h1"></div>
                        <div className="bg-h2"></div>
                    </div>
                    <div className="bg-des"></div>
                    <div className="bg-features"></div>
                    <div className="bg-techs"></div>
                </li>
                <li className="backg-con">
                    <div className="bg-header">
                        <div className="bg-h1"></div>
                        <div className="bg-h2"></div>
                    </div>
                    <div className="bg-des"></div>
                    <div className="bg-features"></div>
                    <div className="bg-techs"></div>
                </li>
                <li className="backg-con">
                    <div className="bg-header">
                        <div className="bg-h1"></div>
                        <div className="bg-h2"></div>
                    </div>
                    <div className="bg-des"></div>
                    <div className="bg-features"></div>
                    <div className="bg-techs"></div>
                </li>
            </ul>
        </div>
        {/* Educational Background */}
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Experience;
