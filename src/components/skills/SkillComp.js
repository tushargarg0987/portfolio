function SkillComp({ circumference, percent, name, color, logo }) {
    return (
        <div className="flex items-center flex-wrap max-w-md px-10 bg-[#1A232C] shadow-xl rounded-2xl h-20 my-8 mr-4">
            <div className="flex items-center justify-center -m-6 overflow-hidden bg-[#1A232C] rounded-full">
                <svg className="w-32 h-32 transform translate-x-1 translate-y-1" aria-hidden="true">
                    <circle
                        className="text-gray-300"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                    <circle
                        style={{ color: color }}
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (percent / 100) * circumference}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                </svg>
                <span className="text-2xl left-20" style={{ marginLeft: '-26px', transform: 'translateX(-52px)',color: color }}>{`${percent}`}</span>
            </div>
            {/* <span className="ml-auto text-xl font-medium text-blue-600 hidden sm:block">+25%</span> */}
            <span className="ml-auto text-xl font-medium text-blue-600  h-full flex items-center">
                <img src={`https://img.shields.io/badge/-%23ffffff00.svg?style=for-the-badge&logo=${logo}&logoColor=${color}`} className="h-full"></img>
                <p className=" font-medium text-white sm:text-xl" style={{marginLeft: '-45px'}}>{name}</p>
            </span>
        </div>

    )
}

export default SkillComp