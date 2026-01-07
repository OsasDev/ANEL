import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import { clientLogos } from '../data/mock';

const pillars = [
  {
    icon: Target,
    title: 'Vision',
    description: 'To inspire clarity and purpose in every brand story.'
  },
  {
    icon: Lightbulb,
    title: 'Mission',
    description: 'Deliver intelligent design solutions that drive measurable results.'
  },
  {
    icon: TrendingUp,
    title: 'Approach',
    description: 'Human-centric, insight-driven, and outcome-oriented.'
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              More Than Design. We Are{' '}
              <span className="gradient-text">Media Architects.</span>
            </h2>
            <p className="text-lg text-[#555555] leading-relaxed mb-6">
              Anel is a media firm built for brands that want to be seen, understood, and remembered. 
              We combine strategy, creativity, and digital execution to craft media experiences that 
              connect audiences to brands in meaningful ways.
            </p>
            <p className="text-lg text-[#555555] leading-relaxed">
              From visual identity to content production and digital campaigns, we help organisations 
              tell their stories consistently across platforms with purpose and impact.
            </p>
          </div>
          
          {/* Right Content - Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-[#A2CD3C]/5 transition-colors duration-300 card-hover"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#A2CD3C]/10 flex items-center justify-center">
                  <pillar.icon size={24} className="text-[#A2CD3C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">{pillar.title}</h3>
                  <p className="text-[#555555]">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Clients Section */}
        <div className="mt-24">
          <h3 className="text-lg font-semibold text-[#1a1a1a] text-center mb-2">Brands, Institutions & Creators</h3>
          <p className="text-center text-[#555555] max-w-2xl mx-auto mb-12">
            We work with startups, corporate brands, educational institutions, NGOs, and personal brands. 
            Our strength lies in adapting media solutions to different scales and industries.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Startups', 'Corporate Brands', 'Educational Institutions', 'NGOs', 'Personal Brands'].map((client) => (
              <div
                key={client}
                className="px-6 py-3 rounded-full bg-gray-100 text-[#555555] text-sm font-medium hover:bg-[#A2CD3C]/10 hover:text-[#A2CD3C] transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
