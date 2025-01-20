"use client"

import { useEffect, useState } from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

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
    num: 690,
    text: "Code commits",
  },
]

const StatItem = ({ num, text }: { num: number; text: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  console.log(inView)

  return (
    <div
      ref={ref}
      className="flex-1 flex gap-4 items-center justify-center xl:justify-start bg-[#232329] rounded-xl p-3 lg:p-6"
    >
      <CountUp
        start={0}
        end={num}
        duration={4}
        delay={2}
        className="text-2xl lg:text-5xl font-extrabold"
        useEasing={true}
        useGrouping={true}
        separator=","
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
      <p className="text-sm lg:text-base leading-snug text-white/80">{text}</p>
    </div>
  )
}

const Stats = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <StatItem key={index} num={item.num} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

