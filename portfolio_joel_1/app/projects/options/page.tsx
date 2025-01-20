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

const skills = {
  langlist: [
    {
      icon: <FaPython />,
      name: "Python",
      description: "Data analysis, machine learning, and backend development."
    }
  ],
  frameworklist: [
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
      description: `Library in Python for machine learning and deep learning.`
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
    <section className="container mx-auto px-4 py-6">
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
              <p className="text-accent font-medium text-lg">Aug 2024 - Dec 2024</p>
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
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-wide">Project Summary</h2>
            <p className="text-white/80 leading-relaxed">
              In the rapidly evolving intersection of finance and artificial intelligence, our team embarked on an
              ambitious project to redefine options pricing. As part of the advanced &apos;Machine Learning & Applications&apos;
              module, we challenged conventional methodologies by leveraging cutting-edge machine learning models to
              predict stock market option prices with unprecedented accuracy.
            </p>
            <p className="text-white/80 leading-relaxed">
              Our research focused on three powerful models: Support Vector Regression (SVR), Artificial Neural Networks
              (ANN), and Long Short-Term Memory networks (LSTM). By comparing these advanced techniques with traditional
              mathematical option pricing models, we aimed to uncover new insights and push the boundaries of financial
              modeling.
            </p>
            <p className="text-white/80 leading-relaxed">
              This project not only showcases the potential of machine learning in financial markets but also demonstrates
              our team&apos;s ability to apply theoretical knowledge to real-world challenges. The resulting paper, which
              meticulously details our methodology, findings, and analysis, stands as a testament to the innovative spirit
              driving the future of quantitative finance.
            </p>
          </div>
        </div>


        <div className="container mx-auto">
          <Tabs defaultValue="details" className="flex flex-col">
            <div className="flex flex-col gap-4">
              <TabsList className="flex flex-row gap-3 lg:gap-6">
                <TabsTrigger value='details' className="bg-secondary px-4 flex-grow xl:flex-grow-0">Project Details</TabsTrigger>
                <TabsTrigger value='paper' className="bg-secondary px-4 flex-grow xl:flex-grow-0">View Paper</TabsTrigger>
                <TabsTrigger value='techstack' className="bg-secondary px-4 flex-grow xl:flex-grow-0">Tech Stack</TabsTrigger>
              </TabsList>
            </div>

            <div className="min-h-[80vh] w-full pt-8 pb-12">
              {/* tab 1, project details */}
              <TabsContent value="details">
                <h2 className="text-3xl font-semibold tracking-wide mb-4">Project Details</h2>
                <OptionsDetails />
              </TabsContent>
              {/* tab 2, project paper */}
              <TabsContent value="paper" className="h-[60vh]">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-1/3 w-full h-full flex flex-col items-center justify-center space-y-4 p-4">
                    <h2 className="text-3xl font-semibold tracking-wide text-center">Report</h2>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      className="flex items-center gap-2 px-4 py-2 border rounded-full"
                    >
                      <span>Download</span>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="lg:w-2/3 w-full h-full">
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

