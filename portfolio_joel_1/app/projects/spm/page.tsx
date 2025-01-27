"use client"

import { motion } from "framer-motion"
import { FaPython } from "react-icons/fa6"
import { SiAmazonrds, SiConfluence, SiFlask, SiGithub, SiGithubactions, SiJavascript, SiJira, SiNextdotjs, SiPytest, SiPythonanywhere, SiSelenium, SiTailwindcss, SiVercel } from "react-icons/si"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OptionsDetails from "@/components/OptionsDetails"
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
        description: "Primary language for analysis, data manipulation, and machine learning model development.",
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
        description: "Used to structure web content for frontend development projects.",
      },
      {
        icon: <FaCss3 />,
        name: "CSS",
        description: "Styled and designed web pages for improved user interface and experience.",
      },
      {
        icon: <SiJavascript />,
        name: "Javascript",
        description: "Implemented dynamic functionality and interactivity for web applications.",
      },
    ],
  },
  Backend: {
    title: "Backend",
    list: [
      {
        icon: <SiFlask />,
        name: "Flask",
        description: "Built RESTful APIs for backend services and integrated machine learning models.",
      },
      {
        icon: <FaAws />,
        name: "AWS",
        description: "Provided cloud resources for scalable and efficient model deployment.",
      },
      {
        icon: <SiPythonanywhere />,
        name: "PythonAnywhere",
        description: "Hosted Python applications for testing and production environments.",
      },
      {
        icon: <SiAmazonrds />,
        name: "Amazon RDS",
        description: "Managed relational databases for storing and accessing project data.",
      },
    ],
  },
  Frontend: {
    title: "Frontend",
    list: [
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
        description: "Enhanced frontend designs with a utility-first CSS framework.",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.JS",
        description: "Developed server-side rendered web applications with enhanced performance.",
      },
      {
        icon: <FaReact />,
        name: "React.JS",
        description: "Built interactive user interfaces with reusable components.",
      },
      {
        icon: <SiVercel />,
        name: "Vercel",
        description: "Deployed web applications with efficient and scalable hosting solutions.",
      },
    ],
  },
  Testing: {
    title: "Testing",
    list: [
      {
        icon: <SiPytest />,
        name: "PyTest",
        description: "Automated testing for Python applications and backend functionalities.",
      },
      {
        icon: <SiSelenium />,
        name: "Selenium",
        description: "Conducted browser automation for UI testing and quality assurance.",
      },
      {
        icon: <SiGithubactions />,
        name: "GitHub Actions",
        description: "Implemented CI/CD pipelines for automated testing and deployment.",
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
        description: "Organized and tracked project tasks using Agile methodologies.",
      },
      {
        icon: <SiConfluence />,
        name: "Confluence",
        description: "Documented project plans, workflows, and shared knowledge effectively.",
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
    <section className="container mx-auto  py-3 lg:py-0">
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
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Options Pricing with <span className="text-accent">Machine Learning</span>
              </h1>
              <div className="flex flex-row gap-3 items-center justify-between">
                <p className="text-accent font-medium text-lg">Aug 2024 - Dec 2024</p>
                <Button variant="outline" asChild className="px-3 py-6 lg:px-3 lg:py-6">
                  <Link
                    href="https://github.com/JoelSngZhenWei/MLA_OptionsPricing"
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
                src="/assets/ANN_initial.png"
                alt="Options Pricing Visualization"
                width={500}
                height={300}
                className="transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Project Summary */}
          <div className="px-2">
            <h2 className="text-2xl font-semibold tracking-wide">Summary</h2>
            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                In this project my group sought to analyse different machine learning techniques in tackling a
                notoriously complex task: <span className="font-bold text-white">Options Pricing</span>. We contrasted
                our models&apos; performance to a traditional and widely used mathematical model.
              </p>
              <p className="text-white/80 leading-relaxed">
                My specific contributions to this project were sourcing the data sets, the entirety of exploratory data
                analysis, and constructing the ANN model. What I was most proud of in my ANN approach was developing a
                hybrid ANN approach that used both a classification ANN and a regression ANN, and proved to be the most
                successful model we employed.
              </p>
              <p className="text-white/80 leading-relaxed">
                This project was undertaken as part of an SMU module, &apos;IS460 Machine Learning &amp;
                Applications&apos;. My group received an A+ for this project.
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-[80vh] flex items-center justify-center mb-2 lg:mb-4">
          <div className="container mx-auto">
            <Tabs defaultValue="details" className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full lg:max-w-[380px] mx-auto lg:mx-0 gap-6">
                <TabsList className="flex flex-row justify-center lg:justify-start w-full gap-2 lg:gap-6 lg:flex-col">
                  <TabsTrigger value="details" className="bg-secondary px-4 flex-grow lg:flex-grow-0">
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="report" className="bg-secondary px-4 flex-grow lg:flex-grow-0">
                    Report
                  </TabsTrigger>
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
                      <OptionsDetails />
                    </ScrollAreaWithProgress>
                  </div>
                </TabsContent>

                {/* report */}
                <TabsContent value="report" className="w-full h-full">
                  <div className="flex flex-col gap-2 lg:gap-2  text-center lg:text-left h-[70vh] lg:h-[80vh] ">
                    <h3 className="text-lg lg:text-3xl font-bold">Report</h3>
                    <p className="h-12 max-w-2xl text-xs lg:text-base text-white/80 mx-auto lg:mx-0">
                      My group wrote a research paper-style report on our findings with extensive citations, details on
                      the mathematical formulas involved in our models, and possible future work.
                    </p>
                    <div className="h-[55vh] lg:h-[80vh]">
                      <PdfView />
                    </div>
                  </div>
                </TabsContent>

                {/* tech stack */}
                <TabsContent value="techstack" className="w-full h-full">
                  <div className="flex flex-col gap-[30px] h-[70vh] lg:h-[80vh]">
                    <div className="flex flex-col gap-2 lg:gap-2 text-center lg:text-left">
                      <h3 className="text-lg lg:text-3xl font-bold">Tech Stack</h3>
                      <p className="h-12 max-w-2xl text-xs lg:text-base text-white/80 mx-auto lg:mx-0">
                        The languages, frameworks, and libraries my group employed in our project. Click on each icon to
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
                                          className="w-full h-[90px] lg:h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group"
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


                          {/* 

                          <span className="text-accent font-bold">Languages</span>
                          <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                            {skills.langlist.map((lang, index) => {
                              return (
                                <li key={index}>
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger
                                        className="w-full h-[90px] lg:h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group"
                                        onClick={() => openModal(lang)}
                                      >
                                        <div className="text-3xl lg:text-5xl group-hover:text-accent transition-all duration-300">
                                          {lang.icon}
                                        </div>
                                        <span className="capitalize text-sm lg:text-base group-hover:text-accent transition-all duration-300">
                                          {lang.name}
                                        </span>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>{lang.description}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </li>
                              )
                            })}
                          </ul>

                          <span className="text-accent font-bold">Frontend</span>
                          <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                            {skills.frontendlist.map((item, index) => {
                              return (
                                <li key={index}>
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger
                                        className="w-full h-[90px] lg:h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group"
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
                              )
                            })}
                          </ul>

                          <span className="text-accent font-bold">Backend</span>
                          <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                            {skills.backendlist.map((item, index) => {
                              return (
                                <li key={index}>
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger
                                        className="w-full h-[90px] lg:h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group"
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
                              )
                            })}
                          </ul>

                          <span className="text-accent font-bold">Testing</span>
                          <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                            {skills.testlist.map((item, index) => {
                              return (
                                <li key={index}>
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger
                                        className="w-full h-[90px] lg:h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group"
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
                              )
                            })}
                          </ul> */}
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

