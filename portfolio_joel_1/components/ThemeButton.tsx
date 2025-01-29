"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggleButton() {
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    const isLightMode = document.documentElement.classList.contains("light")
    setLightMode(isLightMode)
  }, [])

  const toggleTheme = () => {
    const newLightMode = !lightMode
    setLightMode(newLightMode)
    document.documentElement.classList.toggle("light", newLightMode)
    localStorage.setItem("theme", newLightMode ? "light" : "dark")
  }

  return (
    <Button
      variant="themechange"
      size='icon'
      className="lg:shadow-lg overflow-hidden"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: lightMode ? 0 : 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full flex items-center justify-center"
      >
        <Sun
          className={`h-[18px] w-[18px] absolute ${lightMode ? "scale-100" : "scale-0"} transition-transform duration-500`}
        />
        <Moon
          className={`h-[18px] w-[18px] absolute ${lightMode ? "scale-0" : "scale-100"} transition-transform duration-500`}
        />
      </motion.div>
    </Button>
  )
}

