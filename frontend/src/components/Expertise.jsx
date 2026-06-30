// import React from 'react'

const Expertise = () => {
  return (
    <div className="relative bg-[#221209] text-orange-50 py-4 pb-20 px-8 lg:px-20">
        <div className="flex flex-col gap-8">
            <div className="exp-div-one pt-10">
                <h4 className="sec-titles-format">EXPERTISE</h4>
            </div>
            <div className="exp-div-two">
                <h2 className="exper-title font-bold tracking-wide mb-2">Technical <span className="text-orange-500 italic">Skills</span></h2>
                <p className="text-orange-50/70 text-base w-[50vw] md:w-[500px]">Technologies and tools I use to build end-to-end solutions - from concept to deployment.</p>
            </div>
            <div className="exp-div-three mt-2">
                <div className="skills-set grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-8 w-full">
                    <div className="skills">
                        <p className="skills-title">Front Development</p>
                        <ul className="tech">
                            <li className="t">CSS3</li>
                            <li className="t">React JS</li>
                            <li className="t">Tailwind CSS</li>
                            <li className="t">GSAP Animation</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <p className="skills-title">Backend Development</p>
                        <ul className="tech">
                            <li className="t">Java</li>
                            <li className="t">Node.js</li>
                            <li className="t">Express</li>
                            <li className="t">REST APIs</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <p className="skills-title">Design & UX</p>
                        <ul className="tech">
                            <li className="t">GSAP</li>
                            <li className="t">Figma</li>
                            <li className="t">UI System</li>
                            <li className="t">Wireframing</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <p className="skills-title">Database & Cloud</p>
                        <ul className="tech">
                            <li className="t">MongoDB</li>
                            <li className="t">MySQL Workbench</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <p className="skills-title">DevOps & Tools</p>
                        <ul className="tech">
                            <li className="t">Git</li>
                            <li className="t">Postman</li>
                            <li className="t">Basic Linux</li>
                            <li className="t">GitHub Actions</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <p className="skills-title">Other Tools</p>
                        <ul className="tech">
                            <li className="t">Canva</li>
                            <li className="t">Capcut</li>
                            <li className="t">Trello/Asana</li>
                            <li className="t">Claude/Gemini</li>
                            <li className="t">Google Workspace</li>
                            <li className="t">Google Calendar/Calendly</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expertise