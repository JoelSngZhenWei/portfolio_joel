"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    num: '01',
    title: 'Options Pricing using Machine Learning',
    description: 'Using machine learning models including SVR, artificial neural networks, and LSTM, to price options and evaluating performance against traditional mathematical models.',
    skills: ['Machine Learning', 'Neural Networks'],
    href: 'projects/mla',
    inProgress: false,
  },
  {
    num: '02',
    title: 'Project Management for Software Development',
    description: 'Led a software development project over 5 months as both Scrum Master and backend developer. Developed an HRMS scheduling web application.',
    skills: ['App Development', 'Scrum'],
    href: 'projects/spm',
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
    <section className="min-h-[80vh] flex flex-col justify-center py-6 xl:py-0">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px] xl:gap-[60px]"
        >
          {projects.map((project, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-3 xl:gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-3xl lg:text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{project.num}</div>
                  {project.inProgress ? (
                    <button
                      onClick={() => handleProjectClick(project)}
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary-foreground group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </button>
                  ) : (
                    <Link
                      href={project.href}
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary-foreground group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  )}
                </div>
                {/* title */}
                <h2 className="text-[30px] xl:text-[42px] font-bold leading-none text-primary-foreground group-hover:text-accent transition-all duration-500">
                  <Link href={project.href}
                  >
                    {project.title}
                  </Link>
                </h2>
                {/* description */}
                <p className="text-primary-foreground/60 text-sm">{project.description}</p>
                <div className="flex flex-row gap-4 flex-wrap">
                  {project.skills.map((skill, index) => {
                    return (
                      <div key={index}>
                        <div className="bg-secondary rounded-full px-6 py-3 text-sm">
                          {skill}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* border */}
                <div className="border-b border-primary-foreground/20 w-full"></div>
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
