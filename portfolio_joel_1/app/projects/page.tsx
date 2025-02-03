"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

const projects = [
  {
    num: '01',
    title: 'Employee Scheduling Web Application',
    description: 'Led a software development project over 5 months as Scrum Master, lead DevOps engineer, and backend developer.',
    skills: ['App Development', 'Scrum'],
    href: 'projects/spm',
    src: '/spm/schedule_personal.png',
    inProgress: false,
  },
  {
    num: '02',
    title: 'Options Pricing using Machine Learning',
    description: 'Using machine learning models including SVR, artificial neural networks, and LSTM, to price options and evaluated performance.',
    skills: ['Machine Learning', 'Data Science'],
    href: 'projects/mla',
    src: '/mla/ann_initial2.png',
    inProgress: false,
  },

  // {
  //   num: '03',
  //   title: 'Project Management for Software Development',
  //   description: 'Led a software development project over 5 months as both Scrum Master and backend developer. Developed an HRMS scheduling web application.',
  //   skills: ['Scrum', 'Agile Development', 'Flask', 'Python'],
  //   href: 'projects/spm'
  // },
]

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    if (project.inProgress) {
      setIsModalOpen(true)
    }
  }



  return (
    <section className="min-h-[80vh] flex flex-col justify-center xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:gap-[60px]"
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between gap-3 border border-primary-foreground/20  lg:gap-6 group rounded-lg p-4 lg:p-6 "
              >
                {/* title */}
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-5">
                    <h2 className="text-[20px] xl:text-[30px] font-bold leading-none text-primary-foreground group-hover:text-accent transition-all duration-500">
                      <Link href={project.href}
                      >
                        {project.title}
                      </Link>
                    </h2>
                  </div>
                  <div className="flex justify-end">
                    {project.inProgress ? (
                      <button
                        onClick={() => handleProjectClick(project)}
                        className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-primary-foreground group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                      >
                        <BsArrowDownRight className="text-primary text-lg lg:text-3xl" />
                      </button>
                    ) : (
                      <Link
                        href={project.href}
                        className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-primary-foreground group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                      >
                        <BsArrowDownRight className="text-primary text-lg lg:text-3xl" />
                      </Link>
                    )}
                  </div>

                </div>

                {/* image */}
                <div className="relative w-full h-32 lg:h-64 rounded-lg">
                  <Image
                    src={project.src || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 rounded-lg"
                  />
                </div>


                {/* description */}
                <p className="text-primary-foreground/60 text-xs lg:text-sm">{project.description}</p>
                <div className="flex flex-row gap-4 flex-wrap">
                  {project.skills.map((skill, index) => {
                    return (
                      <div key={index}>
                        <div className="bg-secondary rounded-full px-4 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm">
                          {skill}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* border */}
                {/* <div className="border-b border-primary-foreground/20 w-full"></div> */}
              </div>
            )
          })}

        </motion.div>


      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Project in Progress</DialogTitle>
            <DialogDescription>
              This project is still in progress and not yet ready. Please check back again soon!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>

  );
}
