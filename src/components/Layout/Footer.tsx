import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="grid bg-[rgb(215,152,51)] text-black rounded-b-2xl max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
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
              <li>
                <a href="#home" className="text-black- hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-black- hover:text-amber-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-black- hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black- hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="/honey" className="text-black- hover:text-amber-400 transition-colors">
                  Coffee Blossom Honey
                </a>
              </li>
              <li>
                <a href="/honey" className="text-black- hover:text-amber-400 transition-colors">
                  Longan Blossom Honey
                </a>
              </li>
              <li>
                <a href="/honey" className="text-black- hover:text-amber-400 transition-colors">
                  Wildflower Honey
                </a>
              </li>
              <li>
                <a href="/honey" className="text-black- hover:text-amber-400 transition-colors">
                  Honey Combo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-black-">(+61) 0432 189 874</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-black-">export@aaan.com.au</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1" />
                <span className="text-black-">
                  15 Birripa Court, <br/>Rosebery NT 083
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black-400 text-sm">
              © 2025, HANA&apos;S HONEY / Powered by Shopify
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-black-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-black-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
