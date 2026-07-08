import img from "../assets/img.jpg";

const Portfolio = () => {
  return (
    <div className="exp-con relative bg-[#221209] text-orange-50 py-4 pb-20 px-8 lg:px-20">
      <div className="flex flex-col gap-8">
        <div className="exp-div-one pt-10">
          <h4 className="sec-titles-format">PORTFOLIO</h4>
        </div>
        <div className="exp-div-two">
          <h2 className="exper-title font-bold tracking-wide mb-2">
            Technical <span className="text-orange-500 italic">Skills</span>
          </h2>
          <p className="normal-t text-orange-50/70 text-sm w-[60vw] md:w-[500px]">
            A curated sample of recent projects - each built with obsessive
            attention to performance, design, and developer experience.
          </p>
        </div>
        <div>
          <ul className="projects normal-t grid md:grid-cols-2 gap-10 xl:w-2/4">
            <li className="relative rounded-3xl bg-orange-800/40  border-1 border-orange-500/40 rounded-3xl">
              <div className="relative">
                <p className="category absolute right-5 top-4 bg-orange-950 text-xs px-4 py-2 rounded-full text-orange-400">SOCIAL MEDIA</p>
                <img className="rounded-t-3xl" src={img} alt="" />
              </div>

              <div className="px-6 py-8 flex flex-col gap-2 border-solid border-t-1 border-orange-500/40">
                <h3 className="proj-title font-bold text-base tracking-wide">My Day</h3>
                <p className="description text-sm text-orange-50/60">
                  I built a mini social media platform called "My Day" that
                  functions similarly to Facebook, allowing users to connect and
                  share updates. It features user authentication, a live news
                  feed for posting content, and interactive media sharing to
                  capture everyday moments seamlessly.
                </p>
                <div className="tags flex gap-2 flex-wrap text-xs mt-3">
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">React</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">Node.js</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">MongoDB</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">Express JS</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">REST APIs</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">GSAP</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">Google Fonts</p>
                </div>
              </div>
            </li>
            <li className="relative rounded-3xl bg-orange-800/40 border-1 border-orange-500/40 rounded-3xl">
              <div className="relative">
                <p className="category absolute right-5 top-4 bg-orange-950 text-xs px-4 py-2 rounded-full text-orange-400">E-COMMERCE</p>
                <img className="rounded-t-3xl" src={img} alt="" />
              </div>
              <div className="px-6 py-8 flex flex-col gap-2 border-solid border-t-1 border-orange-500/40">
                <h3 className="proj-title font-bold text-base tracking-wide">SJN Real Estate Site</h3>
                <p className="description text-sm text-orange-50/60">
                  I engineered an e-commerce property marketplace for SJN Real
                  Estate designed to showcase active property listings with
                  comprehensive details. The platform allows interested clients
                  to effortlessly browse available real estate and connect
                  instantly with agents via direct phone calls or messaging
                  features.
                </p>
                <div className="tags flex gap-2 flex-wrap text-xs mt-3">
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">React</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">Node.js</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">MongoDB</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">Express JS</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">REST APIs</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">GSAP</p>
                  <p className="text-orange-500 bg-orange-300/20 px-2 py-1 rounded">Google Fonts</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
