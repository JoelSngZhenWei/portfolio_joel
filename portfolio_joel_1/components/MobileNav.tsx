"use client";

import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiMenuAlt3 } from "react-icons/hi";

const links = [
    {
        name: 'home',
        path: "/"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: 'contact',
        path: '/contact'
    }
]

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className='flex justify-center items-center'>
                <HiMenuAlt3 className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetTitle></SheetTitle>
            <SheetContent className='flex flex-col text-white'>
                {/* Logo */}
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <h1 className='text-4xl font-semibold'>Joel Sng</h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link 
                                href={link.path} 
                                key={index} 
                                className={`${link.path === pathname ? "accent border-b-2 border-accent" : ""} text-xl capitalize hover:accent transition-all`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav

