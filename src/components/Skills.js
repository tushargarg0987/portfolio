import SkillComp from "./skills/SkillComp"

function SkillsPage() {
    return (
        <>
            <section className='sc-page bg-[#0F161C] py-10' id="skills-div">
                <h1 className="text-white text-left text-3xl">Skills</h1>
                <hr className='w-16 border-t-green-400 border-t-4 my-2 rounded-sm' />
                <div className="grid lg:grid-cols-3 gap-4 overflow-y-scroll scroll-hidden h-full md:grid-cols-2 sm:grid-cols-1 py-4 pb-8">
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={90} name={"React"} logo={"react"} color={'#149ECA'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={80} name={"JavaScript"} logo={"javascript"} color={'#F7DF1E'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={70} name={"MySQL"} logo={"mysql"} color={'#4479A1'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={80} name={"Node.js"} logo={"node.js"} color={'#339933'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={60} name={"Svelte"} logo={"svelte"} color={'#FF3F00'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={80} name={"MongoDB"} logo={"mongodb"} color={'#47A248'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={70} name={"Electron"} logo={"electron"} color={'#47848F'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={80} name={"React Native"} logo={"react"} color={'#149ECA'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={90} name={"Express"} logo={"express"} color={'#CD786F'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={80} name={"Socket.io"} logo={"socket.io"} color={'#6B7DB4'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={90} name={"Bootstrap"} logo={"bootstrap"} color={'#7952B3'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={90} name={"Tailwind CSS"} logo={"tailwindcss"} color={'#06B6D4'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={90} name={"C"} logo={"c"} color={'#A8B9CC'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={80} name={"C++"} logo={"c%2B%2B"} color={'#FCC624'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={60} name={"Python"} logo={"python"} color={'#3776AB'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={90} name={"HTML"} logo={"html5"} color={'#E34F26'} />
                        <SkillComp circumference={(50 * 2 * Math.PI)} percent={90} name={"CSS"} logo={"css3"} color={'#C51A4A'} />
                </div>
            </section>
        </>
    )
}

export default SkillsPage