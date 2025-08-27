"use client"
import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
// import Link from 'next/link';
import CustomLink from '../loading-spiner/custom-link';
import { usePathname } from 'next/navigation';
import TranslateSwitcher from '../GoogleTranslate/TranslateSwitcher';
// import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActiveLink = (href: string): boolean => {
    if (href === '/') return false
    return pathname === href;
  }

  const links = [
    { id: 1, href: '/', label: 'Home' },
    { id: 2, href: '/honey', label: 'Honey' },
    { id: 3, href: '/blog', label: 'Blog' },
    { id: 4, href: '/about', label: 'About Us' },
    { id: 5, href: '/contact', label: 'Contact' },
    { id: 6, href: '/partnerships', label: 'Global PartnerShips' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xl h-14 px-4">
          <span className="leading-none flex items-center gap-2">
            <Phone size={24} className="text-honey-500"/> 
            <a href="tel:+61432189874" className="text-sm md:text-xl font-medium hover:text-honey-500">(+61) 0432 189 874</a>
          </span>
          <TranslateSwitcher />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-row md:flex-col justify-center items-center  ">

        {/* Logo */}
        <div className="w-full">
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
        <div className="flex-shrink-0  md:w-full text-center p-1">
          <h1 className="text-3xl md:text-5xl font-bold text-black notranslate ">HANNA&apos;S HONEY</h1>
        </div>


        <div className="flex justify-between items-center h-16 font-body text-[1.3rem] font-inherit ">

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-black font-semibold">
            {links.map((item, index) => {
              return (
                <CustomLink
                  key={index} href={item.href}
                  className={`group relative text-2xl ${isActiveLink(item.href) ? "text-amber-500" : "text-gray-900 "} hover:text-amber-600 transition-colors duration-300`}>
                  {item.label}
                  <span className={`absolute left-0 bottom-0 h-[4px] rounded-2xl bg-amber-600 transition-all duration-300 group-hover:w-full ${isActiveLink(item.href) ? "w-full " : "w-0 group-hover:w-full "}  `}></span>
                </CustomLink>
              )
            })}
          </nav>

        </div>

        {/* Mobile Navigation Overlay */}

        <div className={`fixed inset-0 z-50 bg-[#F7D375] flex flex-col h-full w-full transform transition-transform duration-300 ease-in-out 
            ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
          `}>
          {/* Top bar with close and cart/search */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#f3c96b]">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-14 h-14 p-0 text-3xl font-bold text-black focus:outline-none focus:ring-2 focus:ring-amber-500 active:bg-[#ffe59e] rounded-full transition-all duration-150 hover:bg-[#ffe59e] cursor-pointer bg-transparent z-50"
              aria-label="Đóng menu"
              tabIndex={0}
              style={{ backgroundClip: 'padding-box' }}
            >
              <X className="h-8 w-8 pointer-events-none" />
            </button>
            <h2 className="text-3xl font-bold tracking-wide text-black text-center flex-1 -ml-8">HANA HONEY</h2>

          </div>

          <nav className="flex-1 flex flex-col gap-2 px-6 py-8 text-xl font-semibold ">
            {links.map((item, index) => (
              <a key={index} href={item.href} className=" py-4 border-b border-[#f3c96b]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
