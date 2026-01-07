import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { stats } from '../data/mock';

export const HeroSection = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#A2CD3C]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#A2CD3C]/5 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-[#A2CD3C]/40 animate-float" />
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-[#A2CD3C]/30 animate-float delay-300" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A2CD3C]/10 border border-[#A2CD3C]/20 mb-8 animate-fade-in-up">
            <Sparkles size={16} className="text-[#A2CD3C]" />
            <span className="text-sm font-medium text-[#555555]">Media Architects for Modern Brands</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] leading-tight mb-8 animate-fade-in-up delay-100">
            We Transform Ideas Into{' '}
            <span className="gradient-text">Purpose-Driven</span>{' '}
            Digital Experiences
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#555555] max-w-2xl mb-12 leading-relaxed animate-fade-in-up delay-200">
            Anel bridges the gap between aesthetics and business ROI. We craft media experiences 
            that connect audiences to brands in meaningful, memorable ways.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Our Work
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 animate-fade-in-up delay-400">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#A2CD3C]">{stats.projectsCompleted}</p>
              <p className="text-sm text-[#555555] mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#A2CD3C]">{stats.clientSatisfaction}</p>
              <p className="text-sm text-[#555555] mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#A2CD3C]">{stats.yearsExperience}</p>
              <p className="text-sm text-[#555555] mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
