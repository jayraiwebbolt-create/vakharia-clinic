import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-dental-teal rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold">DentalCare</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Providing exceptional dental care with state-of-the-art technology and compassionate service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Treatments</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/treatments/dental-implants" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/treatments/invisalign" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Invisalign®
                </Link>
              </li>
              <li>
                <Link href="/treatments/teeth-whitening" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/treatments/veneers-smile-designing" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Veneers & Smile Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dental-teal flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  123 Dental Street, Medical District, City, State 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-dental-teal flex-shrink-0" />
                <a href="tel:+1234567890" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-dental-teal flex-shrink-0" />
                <a href="mailto:info@dentalcare.com" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  info@dentalcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DentalCare. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-dental-teal transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-dental-teal transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-dental-teal transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
