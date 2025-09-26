import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const links = [
    { id: 2, href: '/honey', label: 'Honey' },
    { id: 3, href: '/blog', label: 'Blog' },
    { id: 4, href: '/about', label: 'About Us' },
    { id: 5, href: '/contact', label: 'Contact' },
    { id: 6, href: '/partnerships', label: 'PartnerShips' },
  ];
  const products = [
    { id: 1, href: '/honey', label: 'JARRAH Honey' },
    { id: 2, href: '/honey', label: 'RED GUM Honey' },
    { id: 3, href: '/honey', label: 'BALCKBUTT Honey' },
  ];
  const infor = [
    { id: 1, icon: <Phone className="h-5 w-5 text-amber-400" />, href: 'tel:+61432189874', label: '(+61) 0432 189 874' },
    { id: 2, icon: <Mail className="h-5 w-5 text-amber-400" />, href: '', label: 'export@aaan.com.au' },
    { id: 2, icon: <MapPin className="h-5 w-5 text-amber-400 mt-1" />, href: '', label: "MAREGE NATIVE FOODS PTY LTD Address: 15 Birripa Court, Rosebery, Northern Territory 0832, Australia" },
  ]
  return (
    <footer id="contact" className=" bg-[rgb(215,152,51)] text-black container  px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-800">🍯 HANA&apos;S HONEY</h3>
            <p className="text-black leading-relaxed">
              Bringing the purest, highest quality honey products from Vietnam&apos;s nature to every family.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-black-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-black-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-black-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.href} className="text-black- hover:text-amber-400 transition-colors">
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              {products.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.href} className="text-black hover:text-amber-400 transition-colors">
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              {infor.map((item, index) => {
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className='pt-2'>
                      {item.icon}
                    </div>
                    <span className="text-black text-sm break-words">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black-800 mt-12 pt-8">
          <div className="flex  items-center">
            <p className="text-black-400 text-sm">
              © 2025, HANA&apos;S HONEY / Powered by Shopify
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-black-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-black-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Use
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
