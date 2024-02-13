import { useState } from "react"
import ExpCarousel from "./experience/ExpCarousel"
import ExpItem from "./experience/ExpItem"

function ExperiencePage() {
    const [selection, changeSelection] = useState(0);
    return (
        <div>
            <section className='sc-page bg-[#0F161C] py-10' id="exp-div">
                <h1 className="text-white text-left text-3xl">Experience</h1>
                <hr className='w-16 border-t-green-400 border-t-4 my-2 rounded-sm' />
                {/* <div className=" px-14 grid grid-cols-2 pt-12 pb-20">
                    <div>
                        <h1 className=" text-slate-100 text-left text-2xl uppercase font-bold mb-5 px-5">Professional experience</h1>
                        <div className="h-[65vh] overflow-y-scroll p-5 scroll-hidden">
                            <ExpItem title="MERN Stack Developer" margin='30px' time="August, 2023 - Present" institute="Snive" techStack="React, Tailwind CSS, Node.js, MongoDB " description={["Working on a chatbot service", "Developed the complete website for the company"]} />
                            <ExpItem title="Backend Developer" time="May, 2023 - June, 2023" institute="The Intern Bay" techStack="Node.js, MongoDB, Express.js, Socket.io"  description={["Developed a backend API for an Edutech platform", "Worked on sockets for live chat feature"]} />
                            
                        </div>
                    </div>
                    <div>
                        <h1 className=" text-slate-100 text-left text-2xl uppercase font-bold mb-5 px-5">Education</h1>
                        <div className="h-[65vh] overflow-y-scroll p-5 scroll-hidden">

                        <ExpItem title="Bachelor of Technology" margin='30px' time="2021 - 2025" institute="Indian Institute of Information Technology, Una" cgpa="CGPA - 8.64"  description={["Persuing my degree in Computer Science", "Studied about Networking, DSA, Agile Methodology"]} />
                        <ExpItem title="Post Metric" time="2020 - 2021" institute="Vasant Valley Public School, Ladda" cgpa="Percentage - 92%"  description={["Completed post matric with PCM", "Completed during CORONA time"]} />
                        </div>
                    </div>
                </div> */}
                <div className="flex justify-center">
                <div className="relative w-full mt-5 h-10 bg-[#1A232C] rounded-full max-w-[300px]" >
                    <div className="relative w-full h-full flex items-center">
                        <div
                            onClick={() => { changeSelection(!selection) }}
                            className="w-full flex justify-center text-gray-400 cursor-pointer"
                        >
                            <button>Experience</button>
                        </div>
                        <div
                            onClick={() => { changeSelection(!selection) }}
                            className="w-full flex justify-center text-gray-400 cursor-pointer"
                        >
                            <button>Education</button>
                        </div>
                        <span
                        className={`${selection
                                ? "left-1 text-white font-semibold"
                                : "left-1/2 -ml-1 text-white"
                            } shadow text-sm flex items-center justify-center h-[100%] transition-all duration-150 ease-linear top-[6px] absolute bg-[#27C765] -m-[6px] rounded-full w-[60%]`}
                    >
                        {selection ? "Experience" : "Education"}
                    </span>
                    </div>
                </div>
                </div>
                <ExpCarousel experiences={[
                    { position: "MERN Stack Developer", type: "Internship", duration: "Aug, 2023 - Feb, 2024", company: "Snive Technologies", location: 'Remote', stack: ["Reactjs", "Tailwind CSS", "Redux", "Nodejs", "MongoDB", "Figma", "Express.js"], wd: [`<p>Brand website i.e. <a target='_blank' href='https://www.snive.io/' class=' text-[#27C765]'>snive.io</a></p>`, `<p>Some more tools</p>`], desc: 'Developed the complete website for the company and also worked on various other tools and products.' },
                    { position: "Backend Developer", type: "Internship", duration: "June, 2023 - July, 2023", company: "The Intern Bay", location: 'Remote', stack: [], wd: [], desc: '' }
                    ]}
                />
            </section>
        </div>
    )
}

export default ExperiencePage