"use client"

import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export default function Options() {
  return (
    <section className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease:"easeIn"}
        }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Options Pricing Project</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Exciting content is on its way! We&apos;re working hard to bring you insights into options pricing using machine
          learning.
        </p>
        <div className="flex items-center justify-center mb-8">
          <Loader2 className="mr-2 h-8 w-8 animate-spin text-accent" />
          <span className="text-lg font-semibold">This page is under construction. Check back in a few days.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">What to Expect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>In-depth analysis of machine learning in options pricing</li>
              <li>Comparison with traditional mathematical models</li>
              <li>Interactive demonstrations and visualizations</li>
              <li>Code snippets and explanations</li>
            </ul>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Python for data processing and model implementation</li>
              <li>TensorFlow and PyTorch for neural networks</li>
              <li>Scikit-learn for traditional machine learning models</li>
              <li>Interactive charts and graphs for data visualization</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

