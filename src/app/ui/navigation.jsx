import React from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";


export default function Navigation() {
    return (
        <React.StrictMode>
            <nav className="fixed top-0 left-0 z-50 w-full bg-transparent flex flex-row justify-between items-center px-10 py-5 border-b-1 rounded-lg backdrop-blur-sm">
                {/* Brand */}
                <Link href="/">
                    <p className="font-semibold text-4xl text-white">Flex</p>
                </Link>

                {/* Desktop: Navigation Links */}
                <div className="flex-row gap-10 lg:flex hidden">
                    <Link className="text-white font-light uppercase hover:text-[#f1f1f1] active:text-[#fdfdfd]" href="/about">About Us</Link> 
                    <Link className="text-white font-light uppercase hover:text-[#f1f1f1] active:text-[#fdfdfd]" href="/services">Services</Link>
                    <Link className="text-white font-light uppercase hover:text-[#f1f1f1] active:text-[#fdfdfd]" href="/projects">Projects</Link>
                    <Link className="text-white font-light uppercase hover:text-[#f1f1f1] active:text-[#fdfdfd]" href="/careers">Careers</Link>
                    <Link className="text-white font-light uppercase hover:text-[#f1f1f1] active:text-[#fdfdfd]" href="/contact-us">Contact Us</Link>
                </div>

                {/* Mobile: Navigation Dropdown */}
                <Dropdown backdrop="blur" className="bg-[#1d1d1d]">
                    {/* Mobile: Menu Button */}
                    <DropdownTrigger>
                        <button className="block lg:hidden bg-[#1d1d1d] hover:bg-[#2c2c2c] active:border-0 rounded-full p-3">
                            <HiOutlineMenuAlt3 size={21} />
                        </button>
                    </DropdownTrigger>

                    <DropdownMenu variant="flat" className="h-screen w-screen bg-[#1d1d1d]" aria-label="menu actions">
                        <DropdownItem key="about" className="py-5" 
                            description="Unveiling the story behind our brand. Dive into our story, values and what makes us tick."
                        >
                            <Link className="text-white font-normal uppercase active:text-[#f1f1f1]" href="/about">About Us</Link>
                        </DropdownItem>

                        <DropdownItem key="services" className="py-5"
                            description="We offer a range of services. Explore what we offer to make your vision a reality."
                        >
                            <Link className="text-white font-normal uppercase active:text-[#f1f1f1]" href="/services">Services</Link>
                        </DropdownItem>

                        <DropdownItem key="projects" className="py-5"
                            description="Here is the brilliance we've brought to life. Get a glimpse of the projects we've brought to life."
                        >
                            <Link className="text-white font-normal uppercase active:text-[#f1f1f1]" href="/projects">Projects</Link>
                        </DropdownItem>

                        <DropdownItem key="careers" className="py-5"
                            description="Join our talented team! Discover the exciting opportunities that await you here."
                        >
                            <Link className="text-white font-normal uppercase active:text-[#f1f1f1]" href="/careers">Careers</Link>
                        </DropdownItem>
                        
                        <DropdownItem key="contact-us" className="py-5"
                            description="Let's chat - we're here to help."
                        >
                            <Link className="text-white font-normal uppercase active:text-[#f1f1f1]" href="/contact-us">Contact Us</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </nav>
        </React.StrictMode>
    );
}