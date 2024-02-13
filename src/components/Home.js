import coverImg from '../assets/cover.jpg'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function HomePage() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["MERN Stack Developer", "React Native Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 200,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className='w-full h-full' style={{ backgroundImage: `url(${coverImg})`, backgroundSize: 'cover' }} >
                <section className='sc-page bg-[#1A232C] grid grid-cols-3' id="home-div" >
                    <div className='flex justify-between flex-col h-full pl-20 col-span-2'>
                        <div></div>
                        <div className='flex justify-center flex-col h-full  gap-4'>
                            <h1 className='text-left text-5xl text-gray-400'>Hi,</h1>
                            <h1 className="text-slate-100 text-left text-7xl">I'm Tushar Garg</h1>
                            <h1 className='text-left text-5xl text-slate-300'><span className='text-green-300' ref={el}></span></h1>
                            <p className='text-left text-xl text-gray-400 pr-10'>I'm committed to crafting user-friendly websites and cross-platform mobile apps. With a focus on continuous learning and growth, I aspire to make a meaningful impact in the ever-evolving tech landscape.</p>
                            <div className='flex gap-4 pt-8'>
                                <button className='bg-slate-300 text-[#1A232C] font-bold px-5 py-3 rounded-lg text-[14px]'>MY PORTFOLIO</button>
                                <button className='bg-[#27C765] px-5 py-3 rounded-lg font-bold text-slate-50 text-[14px]'>HIRE ME</button>
                            </div>
                        </div>
                        <div className='pb-5'>
                            
                        </div>
                    </div>
                    <div>
                        <img src='/assets/profile.png' className='h-full right-0 ml-auto' />
                    </div>

                </section>
            </div>
        </>
    )
}

export default HomePage