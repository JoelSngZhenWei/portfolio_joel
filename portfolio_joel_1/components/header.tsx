"use client"

import * as React from "react"
import Link from "next/link"
import { Nav } from "./nav"
import MobileNav from "./MobileNav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-md">
      <div className="py-2 lg:py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="transition-all duration-300 hover:text-accent">
            <h1 className="text-xl xl:text-3xl font-semibold tracking-wide">Joel Sng</h1>
          </Link>

          {/* windows nav */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

