"use client";
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi'

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws
} from 'react-icons/fa'

import {
  SiNextdotjs,
} from 'react-icons/si'
import { TbSql } from "react-icons/tb";
import { SiScikitlearn, SiPandas, SiTensorflow, SiSelenium, SiUipath, SiTableau, SiFlask } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { BsBarChartFill } from "react-icons/bs";


// Software Tools: Azure, PowerBi, UiPath, Tableau

// about data
const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia enim assumenda magnam? Dicta nobis, voluptatibus cumque incidunt dolore ex aut exercitationem excepturi molestias, tempore illo perferendis nam at voluptatem?',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Joel Sng'
    },
    {
      fieldName: 'Phone',
      fieldValue: '+65 8499 2823'
    },
    {
      fieldName: 'Email',
      fieldValue: 'joelsngzw@gmail.com'
    },
    {
      fieldName: 'Experience',
      fieldValue: '2+ years'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Singaporean'
    },
    {
      fieldName: 'LinkedIn',
      fieldValue: 'https://www.linkedin.com/in/joelsngzw'
    },
  ]
}

// experience data
const experience = {
  icon: '',
  title: 'My Experience',
  description: "Experienced in data science, analytics, and software development, with specialties in machine learning, NLP, RPA, and cloud development to deliver impactful solutions.",
  items: [
    {
      company: 'Zurich Insurance',
      position: 'Data Science Intern',
      duration: 'Jan 2025 - Present'
    },
    {
      company: 'Housing & Development Board',
      position: 'Data Analyst Intern',
      duration: 'Jan 2024 - Aug 2024'
    },
    {
      company: 'PwC',
      position: 'Digital Transformation Consulting Intern',
      duration: 'May 2023 - Aug 2023'
    }
  ]
}

// education data
const education = {
  icon: '',
  title: 'My Education',
  description: 'Double degree first class honours student from Singapore Management University. Dean\'s list for all applicable years. Former president of committee overseeing 22 community service clubs in SMU, former member of SMU Student Association Council, former president of SMU\'s largest community service project.',
  items: [
    {
      instituition: 'Singapore Management University',
      degree: 'Double Bachelor Degree in Info Systems and Business Management',
      duration: 'Aug 2021 - Present'
    },
    {
      instituition: 'St Andrew\'s Junior College',
      degree: 'Singapore Cambridge GCE Advanced Level',
      duration: 'Jan 2017 - Dec 2018'
    },
    {
      instituition: 'St Joseph\'s Institution',
      degree: 'Singapore Cambridge GCE Ordinary Level',
      duration: 'Jan 2013 - Dec 2016'
    },
  ]
}

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem ipsum, perspiciatis perferendis nemo obcaecati expedita unde? Consectetur quisquam quis debitis est voluptas? Aut sequi quasi ducimus iusto doloribus maiores.",
  langlist: [
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
    }
  ],
  frameworklist: [
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
  ],
  softwarelist: [
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


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";


export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-row justify-center xl:justify-normal xl:flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience' className='bg-[#232329] px-4'>Experience</TabsTrigger>
            <TabsTrigger value='education' className='bg-[#232329] px-4'>Education</TabsTrigger>
            <TabsTrigger value='skills' className='bg-[#232329] px-4'>Skills</TabsTrigger>
            <TabsTrigger value='about' className='bg-[#232329] px-4'>About me</TabsTrigger>
            <Button variant="outline" size="lg" className="uppercase ">
              <a href="/assets/resume_joelsng.pdf" download="resume_joelsng.pdf" className='flex items-center gap-2'>
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
            </Button>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full h-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {experience.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full h-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {education.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[400px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.instituition}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>

            {/* skill */}
            <TabsContent value='skills' className='w-full'>
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {skills.title}
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                  <ScrollArea className='h-[400px]'>
                    <div className='flex flex-col gap-2'>
                      <span className='text-accent font-bold'>Langauges</span>
                      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                        {skills.langlist.map((lang, index) => {
                          return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group'>
                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{lang.icon}</div>
                                    <span className='capitalize group-hover:text-accent transition-all duration-300'>{lang.name}</span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>
                                      {lang.description}
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          )
                        })}
                      </ul>

                      <span className='text-accent font-bold'>Libraries and Frameworks</span>
                      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                        {skills.frameworklist.map((fw, index) => {
                          return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group'>
                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{fw.icon}</div>
                                    <span className='capitalize group-hover:text-accent transition-all duration-300'>{fw.name}</span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>
                                      {fw.description}
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          )
                        })}
                      </ul>

                      <span className='text-accent font-bold'>Software</span>
                      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                        {skills.softwarelist.map((sw, index) => {
                          return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group '>
                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{sw.icon}</div>
                                    <span className='capitalize group-hover:text-accent transition-all duration-300'>{sw.name}</span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>
                                      {sw.description}
                                    </p>
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

            {/* about */}
            <TabsContent value='about' className='w-full h-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-2-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>

        </Tabs>
      </div >
    </motion.div >
  );
}
