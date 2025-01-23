"use client";
import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Years of experience",
    },
    {
        num: 8,
        text: "Projects",
    },
    {
        num: 800,
        text: "Code commits"
    }
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container-mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none" >
                    {stats.map((item, index) => {
                        return (
                            <div key={index} className="flex-1 flex gap-3 items-center justify-center xl:justify-start bg-[#232329] rounded-xl p-4 lg:p-6">
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl lg:text-5xl font-extrabold"
                                />
                                <p className='text-sm lg:text-base leading-snug text-white/80'>
                                    {item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats
