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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-5xl font-bold text-[#A2CD3C]/20">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#A2CD3C]/10 text-[#A2CD3C] text-sm font-medium">
                  {service.price}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                {service.title}
              </h3>
              <p className="text-[#555555] mb-4">
                {service.description}
              </p>

              {/* Expandable content */}
              <button
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                className="flex items-center gap-2 text-[#A2CD3C] font-medium text-sm group"
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
                    <li key={i} className="flex items-center gap-2 text-sm text-[#555555]">
                      <Check size={14} className="text-[#A2CD3C]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
