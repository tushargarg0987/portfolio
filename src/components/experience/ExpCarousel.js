import React, { useState } from 'react'
import { FaBriefcase, FaBuilding, FaRegCalendarAlt } from "react-icons/fa";
import { FaBuildingColumns, FaGraduationCap, FaLocationDot } from "react-icons/fa6";

const ExpCarousel = ({ experiences }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const newIndex = currentIndex === experiences.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = currentIndex === 0 ? experiences.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='flex justify-center items-center pt-10'>
            <div className="relative w-[70%] aspect-[2/1]">
                <div className="overflow-hidden h-full w-full">
                    <div className="flex h-full">
                        {experiences.map((experience, index) => (
                            <div className={`transition-opacity duration-500  ${index === currentIndex ? 'flex' : 'hidden'} h-full w-full bg-cover rounded-lg overflow-hidden`}>
                                <div className='bg-[#1A232C] w-full h-full grid grid-cols-5'>
                                    <div className=' col-span-2 bg-[#27C765] rounded-lg flex flex-col items-start px-6 py-8 gap-6'>
                                        <h1 className='text-slate-50 text-3xl font-semibold'>{experience.position}</h1>
                                        <h1 className='text-slate-50 text-2xl font-semibold flex items-center gap-3'><FaRegCalendarAlt /> {experience.duration}</h1>
                                        <h1 className='text-slate-50 text-2xl font-semibold flex items-center gap-3'>{experience.edu ?<FaGraduationCap /> : <FaBriefcase />} {experience.type}</h1>
                                        <h1 className='text-slate-50 text-2xl font-semibold flex items-center gap-3'><FaBuildingColumns /> {experience.company}</h1>
                                        <h1 className='text-slate-50 text-2xl font-semibold flex items-center gap-3'><FaLocationDot /> {experience.location}</h1>
                                    </div>
                                    <div className=' col-span-3 px-6 py-8'>
                                        <h1 className='text-slate-50 text-2xl font-semibold flex items-center gap-3 mb-2'>Worked On :</h1>
                                        <ul className='pl-4 wd-list mb-6'>
                                            {experience.wd.map((wd) => {
                                                return <li className='text-left text-gray-300 text-xl' dangerouslySetInnerHTML={{ __html: wd }}></li>
                                            })}
                                        </ul>
                                        <h1 className='text-slate-50 text-2xl font-semibold flex items-center gap-3 mb-2'>Description :</h1>
                                        <p className='text-left text-gray-300 text-xl mb-6'>{ experience.desc}</p>
                                        <h1 className='text-slate-50 text-2xl font-semibold flex items-center gap-3 my-2'>{experience.edu ? "Subjects :":"Tech Stack :"}</h1>
                                        <div className='flex gap-2 flex-wrap'>
                                            {experience.stack.map((tech) => {
                                                return <p className='text-md text-slate-800 bg-slate-300 px-3 font-semibold rounded-full'>{tech}</p>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {currentIndex > 0 && <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 -translate-x-[150%] text-white px-3 rounded-full focus:outline-none"
                    onClick={goToPrevSlide}
                >
                    <svg
                        fill="#7a7a7a"
                        height="2rem"
                        width="2rem"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 330 330"
                        xmlSpace="preserve"
                        stroke="#7a7a7a"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                id="XMLID_222_"
                                d="M79.394,154.389l150-149.996c5.857-5.858,15.355-5.858,21.213,0.001 c5.857,5.858,5.857,15.355-0.001,21.213L110.606,154.39l139.393,139.394c5.857,5.858,5.857,15.355,0.001,21.213 c-2.929,2.929-7.678,4.393-10.606,4.393c-3.839,0-7.678-1.464-10.607-4.394l-150-150.004c-2.814-2.813-4.394-6.628-4.394-10.606 C75,161.018,76.58,157.202,79.394,154.389z"
                            />{" "}
                        </g>
                    </svg>


                </button>}
                {currentIndex < experiences.length - 1 && <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 translate-x-[150%] text-white  px-3 py-1 rounded-full focus:outline-none"
                    onClick={goToNextSlide}
                >
                    <svg
                        fill="#7a7a7a"
                        height="2rem"
                        width="2rem"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 330 330"
                        xmlSpace="preserve"
                        stroke="#7a7a7a"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                id="XMLID_222_"
                                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                            />{" "}
                        </g>
                    </svg>
                </button>}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    {experiences.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 mx-1 bg-gray-500 rounded-full focus:outline-none ${index === currentIndex ? 'opacity-100' : 'opacity-50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExpCarousel