"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    num: '01',
    title: 'Options Pricing using Machine Learning',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit deleniti!',
    skills: ['Machine Learning', 'Neural Networks', 'Python'],
    href: 'projects/options'
  },
  {
    num: '02',
    title: 'Project Management for Software Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illo tenetur provident!',
    skills: ['SCRUM', 'Agile Development', 'Flask', 'Python'],
    href: ''
  },
  // {
  //   num: '03',
  //   title: 'Options Pricing using Machine Learning',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit deleniti!',
  //   href: ''
  // },
  // {
  //   num: '04',
  //   title: 'Options Pricing using Machine Learning',
  //   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit deleniti!',
  //   href: ''
  // },
]

export default function Projects() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((project, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{project.num}</div>
                  <Link href={project.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{project.description}</p>
                <div className="flex flex-row gap-4">
                  {project.skills.map((skill, index) => {
                    return (
                      <div key={index}>
                        <div className="bg-[#27272c] rounded-full px-6">
                          {skill}
                        </div>

                      </div>
                    )
                  })}
                </div>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}

        </motion.div>


      </div>
    </section>

  );
}
