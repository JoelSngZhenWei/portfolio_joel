"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"


const links = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "resume", path: "/resume" },
  { name: "contact", path: "/contact" },
]
export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        const isActive =
          link.path === "/"
            ? pathname === "/"
            : pathname.startsWith(link.path) // Highlight subpaths

        return (
          <Link
            href={link.path}
            key={index}
            className="relative capitalize font-semibold hover:text-accent transition-colors duration-300 py-0 tracking-wide text-primary-foreground"
          >
            {link.name}
            {isActive && (
              <motion.span
                layoutId="activeNavItem"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
