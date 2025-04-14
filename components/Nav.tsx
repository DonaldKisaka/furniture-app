"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { navLinks } from "@/constants";
import MyButton from "@/components/ui/button";

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
  return (
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
