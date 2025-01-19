"use client"

import * as React from "react"
import Link from "next/link"
import { Nav } from "./nav"
import MobileNav from "./MobileNav"
 
export function Header() {

  return (
    <header>
      <div className="py-8 xl:py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href='/'>
            <h1 className="text-3xl font-semibold accent">Joel Sng</h1>
          </Link>

          {/* windows nav */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />

          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav/>
          </div>
        </div>
        
        
      </div>
    </header>
  )
}
