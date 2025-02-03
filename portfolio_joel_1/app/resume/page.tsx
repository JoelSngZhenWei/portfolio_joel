"use client";
import { useState } from "react"

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi'

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaJava
} from 'react-icons/fa'
import {
  SiNextdotjs,
} from 'react-icons/si'
import { TbSql } from "react-icons/tb";
import { SiScikitlearn, SiPandas, SiTensorflow, SiSelenium, SiUipath, SiTableau, SiFlask } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { BsBarChartFill } from "react-icons/bs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";
import { SkillModal } from "@/components/SkillModal"
import ResumeEducation from '@/components/ResumeEducation';
import ResumeExperience from '@/components/ResumeExperience';
import ResumeCCA from '@/components/ResumeCCA';

interface Skill {
  icon: React.ReactElement
  name: string
  description: string
}

const skills = {
  title: "My Skills",
  description: "Extensive expertise in machine learning, automation, data manipulation, and software development. The following are languages, frameworks, libraries, and softwares I have experience in.",
  details: {
    Languages: {
      title: "Languages",
      list: [
        {
          icon: <FaPython />,
          name: "Python",
          description: "Data analysis, machine learning, and backend development."
        },
        {
          icon: <FaHtml5 />,
          name: "html5",
          description: "Web development."
        },
        {
          icon: <FaJs />,
          name: "javascript",
          description: "Adding interactivity and dynamic functionality to web applications."
        },
        {
          icon: <TbSql />,
          name: "SQL",
          description: "Managing and querying relational databases efficiently."
        },
        {
          icon: <FaJava />,
          name: "Java",
          description: "Application backend development."
        }
      ],
    },
    Frameworks: {
      title: "Frameworks",
      list: [
        {
          icon: <SiSelenium />,
          name: "Selenium",
          description: "Automating web browsers to perform testing, data collection, and scraping tasks."
        },
        {
          icon: <SiScikitlearn />,
          name: "ScikitLearn",
          description: "Machine learning library for Python, with tools for data analysis and predictive modeling."
        },
        {
          icon: <SiPandas />,
          name: "Pandas",
          description: "Python library for data manipulation and analysis."
        },
        {
          icon: <SiTensorflow />,
          name: "Tensor Flow",
          description: "Library in Python for machine learning and deep learning."
        },
        {
          icon: <SiFlask />,
          name: "Flask",
          description: "Python library for application backend development."
        },
        {
          icon: <SiNextdotjs />,
          name: "next.js",
          description: "Modern, react based framework for efficient web development."
        },
        {
          icon: <FaNodeJs />,
          name: "node.js",
          description: "For building fast and scalable server-side applications."
        },
        {
          icon: <FaReact />,
          name: "React.js",
          description: "Building component-based user interfaces."
        },
      ]
    },
    Software: {
      title: "Software",
      list: [
        {
          icon: <VscAzure />,
          name: "Azure",
          description: "Deploying, hosting, and monitoring cloud applications for company usage."
        },
        {
          icon: <FaAws />,
          name: "AWS",
          description: "Deploying and managing backend applications and databases."
        },
        {
          icon: <SiUipath />,
          name: "UiPath",
          description: "Low-code robotic process automation to automate repetitive tasks."
        },
        {
          icon: <SiTableau />,
          name: "Tableau",
          description: "Data visualization tool for creating interactive dashboards and reports."
        },
        {
          icon: <BsBarChartFill />,
          name: "PowerBI",
          description: "Visualizing data for business analytics."
        },

      ]
    }
  }
}

export default function Resume() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const openModal = (skill: Skill) => {
    setSelectedSkill(skill)
  }

  const closeModal = () => {
    setSelectedSkill(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex items-center justify-center py-3 lg:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col lg:flex-row gap-4'>
          <div className="flex flex-col w-full lg:max-w-[380px] mx-auto lg:mx-0 gap-2">
            <TabsList className="flex flex-row justify-center lg:justify-start w-full gap-2 lg:gap-6 lg:flex-col">
              <TabsTrigger value="experience" className="bg-secondary px-4 flex-grow lg:flex-grow-0">Experience</TabsTrigger>
              <TabsTrigger value="education" className="bg-secondary px-4 flex-grow lg:flex-grow-0">Education</TabsTrigger>
              <TabsTrigger value="skills" className="bg-secondary px-4 flex-grow lg:flex-grow-0">Skills</TabsTrigger>
              <TabsTrigger value="cca" className="bg-secondary px-4 flex-grow lg:flex-grow-0">CCA</TabsTrigger>
            </TabsList>
            <Button variant="outline" className="uppercase w-full lg:w-auto h-9">
              <a href="/assets/resume_joelsng.pdf" download="resume_joelsng.pdf" className="flex text-xs lg:text-base items-center justify-center gap-2 w-full">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
            </Button>
          </div>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* ------------------------------------------------------------------ */}
            {/* Resume experience, education, and cca must always be formatted the same */}
            {/* Changes to one must be reflected in the others */}
            {/* ------------------------------------------------------------------ */}

            {/* experience */}
            <TabsContent value='experience' className='w-full h-full'>
              <ResumeExperience />
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full h-full'>
              <ResumeEducation />
            </TabsContent>

            {/* skill */}
            <TabsContent value='skills' className='w-full'>
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-2 lg:gap-8 text-center lg:text-left'>
                  <h3 className='text-lg lg:text-4xl font-bold'>
                    {skills.title}
                  </h3>
                  <p className='max-w-2xl h-18 lg:h-20 text-primary-foreground/60 mx-auto lg:mx-0 text-sm lg:text-base'>
                    {skills.description}
                  </p>
                  <ScrollArea className='h-[400px] bg-secondary p-4 rounded-xl shadow-md'>
                    <div className="flex flex-col gap-2">
                      {Object.entries(skills.details).map(([key, { title, list }]) => (
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

            {/* cca */}
            <TabsContent value='cca' className='w-full h-full'>
              <ResumeCCA />
            </TabsContent>
          </div>

        </Tabs>
      </div >
      {selectedSkill && <SkillModal isOpen={!!selectedSkill} onClose={closeModal} skill={selectedSkill} />}
    </motion.div >
  );
}
