"use client"

import { motion } from "framer-motion"
import { FaPython } from "react-icons/fa6"
import { SiPandas, SiScikitlearn, SiTensorflow } from "react-icons/si"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TechStack } from "@/components/TechStack"
import OptionsDetails from "@/components/OptionsDetails"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import PdfView from "@/components/PdfView"
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"

const skills = {
  langlist: [
    {
      icon: <FaPython />,
      name: "Python",
      description: "This was the primary language our analysis was conducted in, leveraging other libraries and frameworks to manipulate data and construct our machine learning models."
    }
  ],
  frameworklist: [
    {
      icon: <SiScikitlearn />,
      name: "ScikitLearn",
      description: "Used to assist in model creation and conduct hyper parameter tuning on number of nodes, learning rate, batch size, and epochs. Used to construct our SVR model."
    },
    {
      icon: <SiPandas />,
      name: "Pandas",
      description: "Python library for multipurpose data manipulation and analysis, used for our exploratory data analysis and preparing our data for use by our models."
    },
    {
      icon: <SiTensorflow />,
      name: "Tensor Flow",
      description: `Used to construct our ANN models and LSTM models. Provided a powerful, open-source resource for us to more easily build and refine our deep learning models.`
    },
  ]
}
const handleDownload = () => {
  const link = document.createElement("a")
  link.href = "/assets/MLA_Final_Report.pdf"
  link.download = "MLA_Final_Report.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Options() {
  return (
    <section className="container mx-auto  py-2 lg:py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
        className=""
      >
        {/* top section */}
        <div className="pb-8">
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
                In this project my group sought to analyse different machine learning techniques in tackling a notoriously complex task: <span className="font-bold text-white">Options Pricing</span>. We contrasted our models&apos; performance to a traditional and widely used mathematical model.
              </p>
              <p className="text-white/80 leading-relaxed">
                My specific contributions to this project were sourcing the data sets, the entirety of exploratory data analysis, and constructing the ANN model. What I was most proud of in my ANN approach was developing a hybrid ANN approach that used both a classification ANN and a regression ANN, and proved to be the most successful model we employed.
              </p>
              <p className="text-white/80 leading-relaxed">
                This project was undertaken as part of an SMU module, &apos;IS460 Machine Learning &amp; Applications&apos;. My group received an A+ for this project.
              </p>
            </div>
          </div>
        </div>


        <div className="container mx-auto">
          <Tabs defaultValue="details" className="flex flex-col">
            <div className="flex flex-col gap-4 sticky top-20 z-50">
              <TabsList className="flex flex-row gap-3 lg:gap-6">
                <TabsTrigger value='details' className="bg-secondary px-4 flex-grow xl:flex-grow-0">Details</TabsTrigger>
                <TabsTrigger value='paper' className="bg-secondary px-4 flex-grow xl:flex-grow-0">Report</TabsTrigger>
                <TabsTrigger value='techstack' className="bg-secondary px-4 flex-grow xl:flex-grow-0">Tech Stack</TabsTrigger>
              </TabsList>
            </div>

            <div className="min-h-[50vh] w-full pt-8 pb-2 px-2">
              {/* tab 1, project details */}
              <TabsContent value="details">
                <h2 className="text-2xl font-semibold tracking-wide mb-4">Project Details</h2>
                <OptionsDetails />
              </TabsContent>
              {/* tab 2, project paper */}
              <TabsContent value="paper" className="">
                <div className="flex flex-col lg:flex-row lg:h-[80vh]">
                  <div className="lg:w-1/3 w-full flex flex-col gap-2 place-content-center pb-12 place-items-center h-[60vh] lg:h-full">
                    <h2 className="text-2xl font-semibold tracking-wide">Report</h2>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      className="flex items-center gap-2 px-4 py-2 text-lg rounded-full w-48"
                    >
                      <span>Download</span>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="lg:w-2/3 hidden lg:block ">
                    <PdfView />
                  </div>
                </div>
              </TabsContent>

              {/* tab 3, tech stack */}
              <TabsContent value="techstack">
                {/* Tech Stack */}
                <div>
                  <TechStack skills={skills} />
                </div>
              </TabsContent>
            </div>


          </Tabs>
        </div>
      </motion.div>
    </section>
  )
}

