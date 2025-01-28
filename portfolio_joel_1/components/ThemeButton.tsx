'use client'

import { useState, useEffect } from 'react'
import { Sun } from 'lucide-react'
import { FaMoon } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function ThemeToggleButton() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark')
        setDarkMode(isDarkMode)
    }, [])

    const toggleTheme = () => {
        const newDarkMode = !darkMode
        setDarkMode(newDarkMode)
        document.documentElement.classList.toggle('dark', newDarkMode)
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
        >
            <Button
                variant="outline"
                size="icon"
                className="fixed bottom-12 right-12 rounded-full shadow-lg overflow-hidden"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                <motion.div
                    initial={false}
                    animate={{ rotate: darkMode ? 360 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <FaMoon className={`h-[1.2rem] w-[1.2rem] absolute ${darkMode ? 'scale-0' : 'scale-100'} transition-transform duration-500`} />
                    <Sun className={`h-[1.2rem] w-[1.2rem] absolute ${darkMode ? 'scale-100' : 'scale-0'} transition-transform duration-500`} />
                </motion.div>
            </Button>
        </motion.div>
    )
}
