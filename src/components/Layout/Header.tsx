"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
// import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="announcement-bar__message  flex flex-col items-center text-xl bg-black w-full text-white py-3 h-13">
        <p>Can you contact to us: (+61) 0432 189 874</p>
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
          <h1 className="text-4xl md:text-5xl font-bold text-black ">HANNA&apos;S HONEY</h1>
        </div>

        <div className="flex justify-between items-center h-16 font-body text-[1.3rem] font-inherit ">

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-black font-semibold">
            <Link href="/" className=" hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link href="/honey" className=" hover:text-amber-600 transition-colors">
              Products
            </Link>

            <Link href="/blog" className=" hover:text-amber-600 transition-colors">
              Blog
            </Link>

            <Link href="/about" className=" hover:text-amber-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className=" hover:text-amber-600 transition-colors">
              Contact
            </Link>

            <Link href="/partnerships" className="hover:text-amber-600 transition-colors">Global PartnerShips</Link>
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
          {/* Menu items: chỉ lấy từ Desktop Navigation */}
          <nav className="flex-1 flex flex-col gap-2 px-6 py-8 text-lg font-semibold">
            <Link href="/" className="py-4 border-b border-[#f3c96b]">Home</Link>
            <Link href="/honey" className="py-4 border-b border-[#f3c96b]">Products</Link>
            <Link href="/blog" className="py-4 border-b border-[#f3c96b]">Blog</Link>
            <Link href="/about" className="py-4 border-b border-[#f3c96b]">About Us</Link>
            <Link href="/contact" className="py-4 border-b border-[#f3c96b]">Contact</Link>
            <Link href="/global-partnerships" className="py-4 border-b border-[#f3c96b]">Global PartnerShips</Link>
          </nav>

        </div>


      </div>
    </header>
  );
};

export default Header;
