import React, { useState } from 'react';
import { portfolioProjects, portfolioCategories } from '../data/mock';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="section-divider mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              Work That Moves{' '}
              <span className="gradient-text">Brands Forward</span>
            </h2>
            <p className="text-lg text-[#555555]">
              Browse key projects demonstrating how Anel has partnered with clients to bring ideas to life, 
              turning creative challenges into impactful outcomes.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'All'
                  ? 'bg-[#A2CD3C] text-white'
                  : 'bg-gray-100 text-[#555555] hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#A2CD3C] text-white'
                    : 'bg-gray-100 text-[#555555] hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card group cursor-pointer card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#A2CD3C] text-white text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.client}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[#555555] text-sm mb-2">{project.summary}</p>
                <p className="text-[#A2CD3C] font-medium text-sm">{project.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#A2CD3C] font-semibold hover:gap-3 transition-all duration-300"
          >
            Explore All Projects
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
