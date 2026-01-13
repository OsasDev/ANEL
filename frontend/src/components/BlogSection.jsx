import React, { useState } from 'react';
import { blogPosts } from '../data/mock';
import { ArrowRight, Calendar, Tag, X } from 'lucide-react';

export const BlogSection = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="section-divider mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              Design Thinking | Business Growth | Digital Trends
            </h2>
            <p className="text-lg text-[#555555]">
              Stay updated with actionable insights, industry trends, and design thinking 
              perspectives from the Anel team.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`bg-gray-50 rounded-2xl p-8 transition-all duration-300 h-full ${
                index === 0 ? 'md:flex md:gap-12 md:items-start' : ''
              } ${expandedPost === post.id ? 'bg-[#A2CD3C]/5' : 'hover:bg-[#A2CD3C]/5'}`}>
                {/* Featured image placeholder for first article */}
                {index === 0 && (
                  <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-[#A2CD3C]/20 to-[#A2CD3C]/5 flex items-center justify-center">
                      <span className="text-6xl">✨</span>
                    </div>
                  </div>
                )}
                
                <div className={index === 0 ? 'md:flex-1' : ''}>
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-sm text-[#555555]">
                      <Tag size={14} className="text-[#A2CD3C]" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[#555555]">
                      <Calendar size={14} className="text-[#A2CD3C]" />
                      {post.date}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`font-bold text-[#1a1a1a] mb-3 ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}>
                    {post.title}
                  </h3>
                  
                  {/* Excerpt or Full Content */}
                  {expandedPost === post.id ? (
                    <div className="text-[#555555] mb-4 whitespace-pre-line leading-relaxed">
                      {post.fullContent}
                    </div>
                  ) : (
                    <p className="text-[#555555] mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  
                  {/* Read more / Close button */}
                  <button
                    onClick={() => togglePost(post.id)}
                    className="inline-flex items-center gap-2 text-[#A2CD3C] font-medium text-sm hover:gap-3 transition-all duration-300"
                  >
                    {expandedPost === post.id ? (
                      <>
                        Close
                        <X size={16} />
                      </>
                    ) : (
                      <>
                        Read More
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
