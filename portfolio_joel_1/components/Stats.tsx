"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion"

const stats = [
    {
        num: 1,
        text: "Years of experience",
    },
    {
        num: 8,
        text: "Projects",
    },
    {
        num: 860,
        text: "Code commits"
    }
]

const Stats = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.8, duration: 0.4, ease: "easeInOut" }
            }}
        >
            <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
                <div className="container-mx-auto">
                    <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none" >
                        {stats.map((item, index) => {
                            return (
                                <div key={index} className="flex-1 flex gap-3 items-center justify-center xl:justify-start bg-secondary rounded-xl p-4 lg:p-6 drop-shadow-sm">
                                    <CountUp
                                        end={item.num}
                                        duration={5}
                                        delay={2}
                                        className="text-3xl lg:text-5xl font-extrabold"
                                    />
                                    <p className='text-sm lg:text-base leading-snug text-primary-foreground/80'>
                                        {item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Stats
