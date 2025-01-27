"use client"

import { motion } from "framer-motion"
import { FaPython } from "react-icons/fa6"
import { SiPandas, SiScikitlearn, SiTensorflow } from "react-icons/si"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OptionsDetails from "@/components/OptionsDetails"
import { Button } from "@/components/ui/button"
import PdfView from "@/components/PdfView"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SkillModal } from "@/components/SkillModal"
import { useState } from "react"

interface Skill {
  icon: React.ReactElement
  name: string
  description: string
}

const skills = {
  langlist: [
    {
      icon: <FaPython />,
      name: "Python",
      description:
        "This was the primary language our analysis was conducted in, leveraging other libraries and frameworks to manipulate data and construct our machine learning models.",
    },
  ],
  frameworklist: [
    {
      icon: <SiScikitlearn />,
      name: "ScikitLearn",
      description:
        "Used to assist in model creation and conduct hyper parameter tuning on number of nodes, learning rate, batch size, and epochs. Used to construct our SVR model.",
    },
    {
      icon: <SiPandas />,
      name: "Pandas",
      description:
        "Python library for multipurpose data manipulation and analysis, used for our exploratory data analysis and preparing our data for use by our models.",
    },
    {
      icon: <SiTensorflow />,
      name: "Tensor Flow",
      description: `Used to construct our ANN models and LSTM models. Provided a powerful, open-source resource for us to more easily build and refine our deep learning models.`,
    },
  ],
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
              <div className="w-full min-h-[70vh] lg:min-h-[80vh] border border-red-900">
                {/* details */}
                <TabsContent value="details" className="w-full h-full">
                  <div className="flex flex-col gap-2 lg:gap-2  text-center lg:text-left h-[70vh] lg:h-[80vh]">
                    <h3 className="text-2xl lg:text-3xl font-bold">Project Details</h3>
                    <ScrollArea className="bg-primary text-left h-[70vh] lg:h-[80vh]">
                      <OptionsDetails />
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* report */}
                <TabsContent value="report" className="w-full h-full">
                  <div className="flex flex-col gap-2 lg:gap-2  text-center lg:text-left h-[70vh] lg:h-[80vh] border">
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
                  <div className="flex flex-col gap-[30px] h-[70vh] lg:h-[80vh] border">
                    <div className="flex flex-col gap-2 lg:gap-2 text-center lg:text-left">
                      <h3 className="text-lg lg:text-3xl font-bold">Tech Stack</h3>
                      <p className="h-12 max-w-2xl text-xs lg:text-base text-white/80 mx-auto lg:mx-0">
                        The languages, frameworks, and libraries my group employed in our project. Click on each icon to
                        learn more.
                      </p>
                      <ScrollArea className=" bg-secondary p-4 rounded-xl flex h-[55vh] lg:h-[67.5vh]">
                        <div className="flex flex-col gap-2">
                          <span className="text-accent font-bold">Languages</span>
                          <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                            {skills.langlist.map((lang, index) => {
                              return (
                                <li key={index}>
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger
                                        className="w-full h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group"
                                        onClick={() => openModal(lang)}
                                      >
                                        <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                          {lang.icon}
                                        </div>
                                        <span className="capitalize group-hover:text-accent transition-all duration-300">
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

                          <span className="text-accent font-bold">Libraries and Frameworks</span>
                          <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                            {skills.frameworklist.map((fw, index) => {
                              return (
                                <li key={index}>
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger
                                        className="w-full h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group"
                                        onClick={() => openModal(fw)}
                                      >
                                        <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                          {fw.icon}
                                        </div>
                                        <span className="capitalize group-hover:text-accent transition-all duration-300">
                                          {fw.name}
                                        </span>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>{fw.description}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </li>
                              )
                            })}
                          </ul>
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

