"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"

const projects = [
  {
    num: "01",
    title: "Options Pricing using Machine Learning",
    description:
      "Using machine learning models including SVR, artificial neural networks, and LSTM, to price options and evaluating performance against traditional mathematical models.",
    skills: ["Machine Learning", "Neural Networks", "Python"],
    href: "projects/options",
  },
  {
    num: "02",
    title: "Project Management for Software Development",
    description:
      "Led a software development project over 5 months as both Scrum Master and backend developer. Developed an HRMS scheduling web application.",
    skills: ["Scrum", "Agile Development", "Flask", "Python"],
    href: "",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleProjectClick = (index: number) => {
    setActiveProject(activeProject === index ? null : index)
  }

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px] xl:gap-[60px]"
        >
          {projects.map((project, index) => {
            const isActive = activeProject === index
            return (
              <div
                key={index}
                className={`flex-1 flex flex-col justify-center gap-3 xl:gap-6 group cursor-pointer lg:cursor-default`}
                onClick={() => isSmallScreen && handleProjectClick(index)}
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className={`text-3xl xl:text-5xl font-extrabold text-outline text-accent text-transparent 
                    lg:group-hover:text-outline-hover transition-all duration-500
                    ${isActive ? "text-outline-hover" : ""}`}
                  >
                    {project.num}
                  </div>
                  <Link
                    href={project.href}
                    className={`w-[70px] h-[70px] rounded-full flex justify-center items-center
                      transition-all duration-500
                      ${isActive || (isActive && isSmallScreen) ? "bg-accent -rotate-45" : "bg-white"}
                      lg:group-hover:bg-accent lg:group-hover:-rotate-45`}
                    onClick={(e) => {
                      if (isSmallScreen) {
                        e.preventDefault()
                        handleProjectClick(index)
                      }
                      e.stopPropagation()
                    }}
                  >
                    <BsArrowDownRight className={`text-3xl ${isActive ? "text-white" : "text-primary"}`} />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className={`text-[30px] xl:text-[42px] font-bold leading-none
                  lg:group-hover:text-accent transition-all duration-500
                  ${isActive ? "text-accent" : "text-white"}`}
                >
                  {project.title}
                </h2>
                {/* description */}
                <p className="text-white/60 text-sm">{project.description}</p>
                <div className="flex flex-row gap-4 flex-wrap">
                  {project.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-[#27272c] rounded-full px-6 py-3 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

