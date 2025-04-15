"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { navLinks } from "@/constants";
import MyButton from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavLinks = React.memo(() => (
  <nav className="flex flex-wrap items-center justify-center gap-12">
    {navLinks.map((link) => (
      <Link
        href={link.href}
        key={link.label}
        className="text-sm md:text-base font-medium text-gray-600 hover:text-[#a3704f] transition-colors duration-300 cursor-pointer"
      >
        {link.label}
      </Link>
    ))}
  </nav>
));

NavLinks.displayName = "NavLinks";

const Nav = () => {

  const [isOpen, setIsopen] = useState(false);
  
  const toggleMenu = () => {
    setIsopen(!isOpen);
  };


  return ( 
    // Desktop Navigation
    <div className="flex flex-col flex-1">
      <header className="border-b border-gray-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                loading="lazy"
                src="/RenoTzy.png"
                alt="logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-8">
            <NavLinks />
          </div>

          <div className="hidden max-md:block">
            {
              isOpen ? (<X width={30} height={30} onClick={toggleMenu} className="fixed right-12 top-12 cursor-pointer z-50 transition-all duration-300 hover:text-[#a3704f]"/>)
               : (
                <Menu width={30} height={30} onClick={toggleMenu} className="cursor-pointer hover:text-[#a3704f]" />
               )
            }
          </div>
          {
            isOpen && (
              <div className={`top-0 right-0 w-full bg-white shadow-md z-40 fixed h-full ${isOpen ? "flex" : "hidden"}`}>
               <ul className="flex flex-col items-center justify-center absolute gap-8 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                {navLinks.map(link => (
                  <li key={link.label} className="w-full text-center py-6 border-gray-200">
                    <Link href={link.href} className="block w-full font-bold text-gray-600 hover:text-[#a3704f] transition-colors duration-300 cursor-pointer no-underline" onClick={toggleMenu}>
                      {link.label}
                    </Link>
                  </li>
                ))}

               </ul>

              </div>
            )
          }

          

          <div className="hidden w-full md:w-auto md:flex justify-center md:justify-end">
            <Link href="/contact">
              <MyButton size="sm" variant="default">
                Contact Us 
              </MyButton>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
