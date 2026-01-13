import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { socialLinks, contactInfo } from '../data/mock';

const logoUrl = "https://customer-assets.emergentagent.com/job_7c9bbf9b-d50f-4d25-88a5-0c3c648aae11/artifacts/kbkh2455_Asset%20416.png";

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

// Behance icon component
const BehanceIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

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
              <a
                href={socialLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#A2CD3C] transition-colors duration-300"
              >
                <BehanceIcon size={18} />
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
