import React from 'react';
import { teamMembers } from '../data/mock';
import { Linkedin } from 'lucide-react';

export const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            Meet the Minds Behind{' '}
            <span className="gradient-text">Anel</span>
          </h2>
          <p className="text-lg text-[#555555]">
            A team of passionate creatives, strategists, and digital experts 
            committed to elevating your brand.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group"
            >
              <div className="team-card relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Hover overlay with LinkedIn link */}
                <div className="absolute inset-0 bg-[#A2CD3C]/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#A2CD3C] transition-colors duration-300"
                    >
                      <Linkedin size={22} />
                    </a>
                  )}
                </div>
                
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-white/80 text-sm">{member.role}</p>
                </div>
              </div>
              
              <p className="text-sm text-[#555555]">{member.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
