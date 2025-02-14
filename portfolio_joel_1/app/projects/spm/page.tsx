"use client"

import { motion } from "framer-motion"
import { FaPython } from "react-icons/fa6"
import { SiConfluence, SiFlask, SiGithub, SiGithubactions, SiJavascript, SiJira, SiNextdotjs, SiPytest, SiPythonanywhere, SiSelenium, SiTailwindcss, SiVercel } from "react-icons/si"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SPMDetails from "@/components/DetailSPM"
import { Button } from "@/components/ui/button"
import PdfView from "@/components/PdfView"
import { FaAws, FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SkillModal } from "@/components/SkillModal"
import { useState } from "react"
import { ScrollAreaWithProgress } from "@/components/ui/scroll-area-progress"

interface Skill {
  icon: React.ReactElement
  name: string
  description: string
}

const skills = {
  Languages: {
    title: "Languages",
    list: [
      {
        icon: <FaPython />,
        name: "Python",
        description: "Backend app development, logic, and processing.",
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
        description: "Used to structure web content for frontend development.",
      },
      {
        icon: <FaCss3 />,
        name: "CSS",
        description: "Used to improve design and UI/UX for frontend development.",
      },
      {
        icon: <SiJavascript />,
        name: "Javascript",
        description: "Implemented dynamic functionality, interactivity, and animations for frontend development.",
      },
    ],
  },
  Backend: {
    title: "Backend",
    list: [
      {
        icon: <SiFlask />,
        name: "Flask",
        description: "Development of RESTful APIs in Python for backend microservices.",
      },
      {
        icon: <SiPythonanywhere />,
        name: "PythonAnywhere",
        description: "Hosted Python Flask application for testing and production environments.",
      },
      {
        icon: <FaAws />,
        name: "AWS RDS",
        description: "Managed relational databases for storing and accessing project employee data.",
      },
    ],
  },
  Frontend: {
    title: "Frontend",
    list: [
      {
        icon: <FaReact />,
        name: "React.JS",
        description: "Built interactive user interfaces with reusable components.",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.JS",
        description: "ReactJS wrapper that allows for development of server-side rendered web applications with enhanced performance.",
      },
      {
        icon: <SiVercel />,
        name: "Vercel",
        description: "Deployment and monitoring platform for web application frontend.",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
        description: "Framework for enhancing ease and efficiency of frontend designing process.",
      },
    ],
  },
  Testing: {
    title: "Testing",
    list: [
      {
        icon: <SiPytest />,
        name: "PyTest",
        description: "Automated backend testing for Python Flask application and RESTful API routes.",
      },
      {
        icon: <SiSelenium />,
        name: "Selenium",
        description: "Automated frontend testing using browser automation for UI testing and quality assurance.",
      },
      {
        icon: <SiGithubactions />,
        name: "GitHub Actions",
        description: "Implemented CI/CD pipelines for automating testing workflows on git push.",
      },
    ],
  },
  Collaboration: {
    title: "Collaboration",
    list: [
      {
        icon: <SiGithub />,
        name: "GitHub",
        description: "Managed version control and collaborative development workflows.",
      },
      {
        icon: <SiJira />,
        name: "Jira",
        description: "Organized and tracking of project tasks during fortnightly sprints.",
      },
      {
        icon: <SiConfluence />,
        name: "Confluence",
        description: "Documenting of project plans, meeting notes, and shared information.",
      },
    ],
  },
}


export default function SPM() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const openModal = (skill: Skill) => {
    setSelectedSkill(skill)
  }

  const closeModal = () => {
    setSelectedSkill(null)
  }

  return (
    <section className="container mx-auto  py-3 lg:py-0 text-primary-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="gap-8 flex flex-col"
      >
        {/* top section */}
        <div className="">
          {/* title section */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-12 py-12 lg:py-16">
            {/* Project Title and Date */}
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold  mb-4">
                Employee Scheduling Web Application with 
                <br />
                <span className="text-accent">DevOps Focus</span>
              </h1>
              <div className="flex flex-row gap-3 items-center justify-between">
                <p className="text-accent font-medium text-lg">Aug 2024 - Dec 2024</p>
                <Button variant="outline" asChild className="px-3 py-6 lg:px-3 lg:py-6">
                  <Link
                    href="https://github.com/yaokiet/all-in-one-fullstack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <span className="font-bold text-lg">Repo</span>
                    {/* <FaExternalLinkAlt className="w-5 h-5" /> */}
                    <FaGithub className="w-7 h-7" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* photo */}
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/spm/schedule_personal.png"
                alt="Schedule Page from Application Home"
                width={500}
                height={300}
                className="transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg "
              />
            </div>
          </div>

          {/* Project Summary */}
          <div className="px-2">
            <h2 className="text-2xl font-semibold tracking-wide">Summary</h2>
            <div className="space-y-4">
              <p className="text-primary-foreground/80 leading-relaxed">
                My group developed an employee scheduling application while documenting our project processes, particularly how we facilitated Scrum during this project, DevOps processes, and CI/CD practices. Our backend was developed in Flask, and our frontend was developed in Next.JS. We utilised a <span className="text-primary-foreground font-bold">Model-View-Controller</span> architecture for our application.
              </p>
              <p className="text-2xl text-primary-foreground font-bold leading-relaxed">
                My Specific Contributions:
              </p>
              <ul className="list-disc list-inside text-primary-foreground/80">
                <li>
                  <span className="font-bold text-primary-foreground">Scrum master</span> for this project, maintaining collaboration platforms such as Jira and Confluence and facilitating standups, reviews, and retrospectives.
                </li>
                <li>
                  <span className="font-bold text-primary-foreground">Lead DevOps engineer</span>, implemented entire CI/CD and testing pipeline for automated testing, integration, and deployment of web application. Handled deployment of backend and database.
                </li>
                <li>
                  <span className="font-bold text-primary-foreground">Backend developer</span>, worked on developing backend application models and controllers in Flask connected to a relational database.
                </li>
              </ul>
              <p className="text-primary-foreground/80 leading-relaxed">
                This project was undertaken as part of an SMU module, &apos;IS212 Software Project Management&apos;. I received a distinction for my part in this project and for this module overall.
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center mb-2 lg:mb-4">
          <div className="container mx-auto">
            <Tabs defaultValue="details" className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full lg:max-w-[300px] mx-auto lg:mx-0 gap-6">
                <TabsList className="flex flex-row justify-center lg:justify-start w-full gap-2 lg:gap-6 lg:flex-col">
                  <TabsTrigger value="details" className="bg-secondary px-4 flex-grow lg:flex-grow-0">
                    Details
                  </TabsTrigger>
                  {/* <TabsTrigger value="video" className="bg-secondary px-4 flex-grow lg:flex-grow-0">
                    Video Demo
                  </TabsTrigger> */}
                  {/* <TabsTrigger value="slides" className="bg-secondary px-4 flex-grow lg:flex-grow-0">
                    Slides
                  </TabsTrigger> */}
                  {/* <TabsTrigger value="docs" className="bg-secondary px-4 flex-grow lg:flex-grow-0">
                    Docs
                  </TabsTrigger> */}
                  <TabsTrigger value="techstack" className="bg-secondary px-4 flex-grow lg:flex-grow-0">
                    Tech Stack
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* content */}
              <div className="w-full min-h-[70vh] lg:min-h-[80vh]">
                {/* details */}
                <TabsContent value="details" className="w-full h-full">
                  <div className="flex flex-col gap-2 lg:gap-2  text-center lg:text-left h-[70vh] lg:h-[80vh]">
                    <h3 className="text-2xl lg:text-3xl font-bold">Project Details</h3>
                    <ScrollAreaWithProgress className="bg-primary text-left h-[70vh] lg:h-[80vh] w-full">
                      <SPMDetails />
                    </ScrollAreaWithProgress>
                  </div>
                </TabsContent>

                {/* video demo */}
                <TabsContent value="video" className="w-full h-full">
                  <div className="flex flex-col gap-2 lg:gap-2  text-center lg:text-left h-[70vh] lg:h-[80vh] ">
                    <h3 className="text-lg lg:text-3xl font-bold">Video Demo</h3>
                    <p className="h-12 max-w-2xl text-xs lg:text-base text-primary-foreground/80 mx-auto lg:mx-0">
                      Here is a video demonstration of the use of our application to conduct scheduling and management of employee scheduling.
                    </p>
                    <div className="h-[55vh] lg:h-[80vh] border">
                      Video
                    </div>
                  </div>
                </TabsContent>

                {/* slides */}
                <TabsContent value="slides" className="w-full h-full">
                  <div className="flex flex-col gap-2 lg:gap-2  text-center lg:text-left h-[70vh] lg:h-[80vh] ">
                    <h3 className="text-lg lg:text-3xl font-bold">Slides Summary</h3>
                    <p className="h-12 max-w-2xl text-xs lg:text-base text-primary-foreground/80 mx-auto lg:mx-0">
                      A short slide deck detailing and summarising our project, Scrum practices we utilised, and CI/CD measures we implemented.
                    </p>
                    <div className="h-[55vh] lg:h-[80vh]">
                      <PdfView pdfPath="/assets/spm_slides.pdf" fileName="spm_slides.pdf" />
                    </div>
                  </div>
                </TabsContent>

                {/* tech stack */}
                <TabsContent value="techstack" className="w-full h-full">
                  <div className="flex flex-col gap-[30px] h-[70vh] lg:h-[80vh]">
                    <div className="flex flex-col gap-2 lg:gap-2 text-center lg:text-left">
                      <h3 className="text-lg lg:text-3xl font-bold">Tech Stack</h3>
                      <p className="h-12 max-w-2xl text-xs lg:text-base text-primary-foreground/80 mx-auto lg:mx-0">
                        The languages, frameworks, libraries, and software platforms my group employed in our project. Click on each icon to
                        learn more.
                      </p>
                      <ScrollArea className=" bg-secondary p-4 rounded-xl flex h-[55vh] lg:h-[67.5vh]">
                        <div className="flex flex-col gap-2">
                          {Object.entries(skills).map(([key, { title, list }]) => (
                            <div key={key}>
                              <span className="text-accent font-bold">{title}</span>
                              <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                                {list.map((item, index) => (
                                  <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger
                                          className="w-full h-[90px] lg:h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group shadow-md"
                                          onClick={() => openModal(item)}
                                        >
                                          <div className="text-3xl lg:text-5xl group-hover:text-accent transition-all duration-300">
                                            {item.icon}
                                          </div>
                                          <span className="capitalize text-sm lg:text-base group-hover:text-accent transition-all duration-300">
                                            {item.name}
                                          </span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{item.description}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>

        {selectedSkill && <SkillModal isOpen={!!selectedSkill} onClose={closeModal} skill={selectedSkill} />}
      </motion.div>
    </section>
  )
}

