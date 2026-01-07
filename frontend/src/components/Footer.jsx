import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { socialLinks, contactInfo } from '../data/mock';

const logoUrl = "https://customer-assets.emergentagent.com/job_7c9bbf9b-d50f-4d25-88a5-0c3c648aae11/artifacts/kbkh2455_Asset%20416.png";

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logoUrl} alt="Anel" className="h-14 w-auto mb-6" />
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Anel is a media firm built for brands that want to be seen, understood, and remembered. 
              We combine strategy, creativity, and digital execution to craft media experiences that connect.
            </p>
            <div className="flex gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#A2CD3C] transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#A2CD3C] transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#A2CD3C] transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-[#A2CD3C] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[#A2CD3C] transition-colors duration-200"
              >
                <Mail size={18} className="text-[#A2CD3C]" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-[#A2CD3C] mt-0.5" />
                <span className="text-sm">{contactInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              The entirety of this site is protected by copyright ©2026 Anel.
            </p>
            <p className="text-gray-500 text-sm">
              Designed with purpose and impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
