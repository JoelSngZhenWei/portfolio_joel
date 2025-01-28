"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { ThemeToggleButton } from "./ThemeButton";

const links = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "resume", path: "/resume" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} >
      <SheetTrigger className="flex justify-center items-center">
        <HiMenuAlt3 className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetTitle></SheetTitle>
      <SheetContent className="flex flex-col text-primary-foreground h-full">
        {/* Logo */}
        <div className="mt-28 mb-20 text-center text-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-4xl font-semibold tracking-wide hover:text-accent transition-all duration-300">
              Joel Sng
            </h1>
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path); // Match subpaths

            return (
              <Link
                href={link.path}
                key={index}
                className={`${isActive ? "text-accent border-b-2 border-accent" : ""
                  } text-xl capitalize hover:text-accent transition-all duration-300 font-medium tracking-wide`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          {/* Theme Toggle Button */}
          <div className="justify-center">
            <ThemeToggleButton />
          </div>
        </nav>

      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
