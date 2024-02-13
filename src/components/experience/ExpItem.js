function ExpItem({ title, time, institute, description, techStack, margin, cgpa }) {
    return (
        <div className="exp-item-div" style={margin ? { paddingBottom: margin } : {}}>
            <h1 className="text-white text-left text-2xl uppercase font-bold">{title}</h1>
            <h1 className="text-white text-left text-lg bg-slate-800 px-3 py-1 rounded-md my-2">{time}</h1>
            <h1 className="text-white text-left text-xl font-light italic mb-3">{institute}</h1>
            <h1 className="text-white text-left text-lg font-light mb-3">{techStack ? `Tech Stack - ${techStack}` : cgpa}</h1>
            <ul style={{paddingLeft: '1rem'}}>
                {description && description.map((item) => {
                    return <li className="exp-list"><h1 className="text-white text-left text-lg font-light">{item}</h1></li>
                })}
            </ul>
        </div>
    )
}

export default ExpItem