"use client"

import { motion } from "framer-motion"
import { FaPython } from "react-icons/fa6"
import { SiPandas, SiScikitlearn, SiTensorflow } from "react-icons/si"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TechStack } from "@/components/TechStack"
import PdfViewer from "@/components/PdfViewer"

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
        {/* title section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 lg:pt-9 lg-pb-24">
          {/* Project Title */}
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight">
              Options Pricing with <span className="text-accent">Machine Learning</span>
            </h1>
          </div>
          {/* photo */}
          <div className="relative w-full h-50 md:h-96 rounded-lg">
            <Image
              src="/assets/ANN_initial.png"
              alt="Options Pricing Visualization"
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 hover:scale-105"
            />
            <p className="text-accent font-semibold">August 2023 - December 2023</p>
          </div>
        </div>

        {/* Project Introduction */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-wide">Project Introduction</h2>
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

        <div className="container mx-auto">
          <Tabs defaultValue="details" className="flex flex-col">
            <div className="flex flex-col gap-4">
              <TabsList className="flex flex-row gap-3 lg:gap-6">
                <TabsTrigger value='details' className="bg-secondary px-4 flex-grow xl:flex-grow-0">Project Details</TabsTrigger>
                <TabsTrigger value='paper' className="bg-secondary px-4 flex-grow xl:flex-grow-0">View Paper</TabsTrigger>
                <TabsTrigger value='techstack' className="bg-secondary px-4 flex-grow xl:flex-grow-0">Tech Stack</TabsTrigger>
              </TabsList>
            </div>

            <div className="min-h-screen w-full">
              {/* tab 1, project details */}
              <TabsContent value="details">
                <div>Project Details</div>
              </TabsContent>
              {/* tab 2, project paper */}
              <TabsContent value="paper">
                <PdfViewer pdfUrl="/assets/MLA_Final_Report.pdf" />
              </TabsContent>
              {/* tab 3, tech stack */}
              <TabsContent value="techstack">
                {/* Tech Stack */}
                <div>
                  <h2 className="text-2xl font-semibold tracking-wide mb-4">Tech Stack</h2>
                  <TechStack skills={skills} />
                </div>
              </TabsContent>
            </div>


          </Tabs>
        </div>

        {/* Paper.pdf found at public/assets/MLA_Final_Report.pdf*/}
        <h2 className="text-2xl font-semibold tracking-wide">Paper</h2>
        <span>pdf reader</span>
        {/* Project Details */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide">Project Details</h2>
          {/* Problem */}
          <div className="text-base text-white/70">
            The problem our group faced was...
          </div>
          {/* SVR */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">SVR</h3>
            <div className="text-base text-white/70">
              Our group employed SVR...
            </div>
          </div>
          {/* LSTM */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">LSTM</h3>
            <div className="text-base text-white/70">
              Our group employed LSTM...
            </div>
          </div>
          {/* Hybrid ANN */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">Hybrid ANN workflow</h3>
            <div className="text-base text-white/70">
              To over come the limitations of both, I proposed, built, and tested a hybrid classification and regression workflow...
            </div>
          </div>
        </div>
        {/* Project Conclusions */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide">Project Conclusions</h2>
          <div className="text-white/70">
            Conclusions
          </div>
        </div>
      </motion.div>
    </section>
  )
}

