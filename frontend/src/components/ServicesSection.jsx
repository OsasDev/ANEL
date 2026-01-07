import React, { useState } from 'react';
import { services } from '../data/mock';
import { ChevronDown, Check } from 'lucide-react';

export const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            Engineered Visibility for{' '}
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-lg text-[#555555]">
            From emerging brands to large organisations, Anel supports clients across multiple sectors 
            with media solutions designed for clarity, consistency, and scale.
          </p>
        </div>

        {/* Services Grid - Alternating Colors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            // Alternating: 0=white, 1=green, 2=white, 3=green, 4=white
            const isGreen = index % 2 === 1;
            
            return (
              <div
                key={service.id}
                className={`service-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? 'lg:col-span-2' : ''
                } ${
                  isGreen 
                    ? 'bg-[#A2CD3C] text-white' 
                    : 'bg-white text-[#1a1a1a]'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-5xl font-bold ${isGreen ? 'text-white/20' : 'text-[#A2CD3C]/20'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isGreen 
                      ? 'bg-white/20 text-white' 
                      : 'bg-[#A2CD3C]/10 text-[#A2CD3C]'
                  }`}>
                    {service.price}
                  </span>
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 ${isGreen ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  {service.title}
                </h3>
                <p className={`mb-4 ${isGreen ? 'text-white/90' : 'text-[#555555]'}`}>
                  {service.description}
                </p>

                {/* Expandable content */}
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className={`flex items-center gap-2 font-medium text-sm group ${
                    isGreen ? 'text-white' : 'text-[#A2CD3C]'
                  }`}
                >
                  What's Included
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      expandedService === service.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedService === service.id ? 'max-h-48 mt-4' : 'max-h-0'
                  }`}
                >
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm ${
                        isGreen ? 'text-white/90' : 'text-[#555555]'
                      }`}>
                        <Check size={14} className={isGreen ? 'text-white' : 'text-[#A2CD3C]'} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
