"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

const links = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "resume", path: "/resume" },
    { name: "contact", path: "/contact" },
];

const MobileNav2 = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger className="flex justify-center items-center">
                <IoMenu className="text-[32px] text-accent" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <h1 className="text- font-semibold tracking-wide hover:text-accent transition-all duration-300">
                                Joel Sng
                            </h1>
                        </Link>
                    </DrawerTitle>
                    <DrawerDescription></DrawerDescription>
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
                                        } capitalize hover:text-accent transition-all duration-300 font-medium tracking-wide`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    );
};

export default MobileNav2;
