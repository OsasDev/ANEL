import React, { useState } from 'react';
import { contactInfo } from '../data/mock';
import { Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <div className="section-divider mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              Let's Build Media That{' '}
              <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-[#555555] mb-12">
              Have a project, campaign, or collaboration in mind? 
              We're ready to help you shape it.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-5 rounded-xl bg-white hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#A2CD3C]/10 flex items-center justify-center group-hover:bg-[#A2CD3C] transition-colors duration-300">
                  <Mail size={20} className="text-[#A2CD3C] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-[#555555]">Email us</p>
                  <p className="font-medium text-[#1a1a1a]">{contactInfo.email}</p>
                </div>
                <ArrowRight size={18} className="text-[#A2CD3C] ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-white">
                <div className="w-12 h-12 rounded-full bg-[#A2CD3C]/10 flex items-center justify-center">
                  <MapPin size={20} className="text-[#A2CD3C]" />
                </div>
                <div>
                  <p className="text-sm text-[#555555]">Location</p>
                  <p className="font-medium text-[#1a1a1a]">{contactInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-white">
                <div className="w-12 h-12 rounded-full bg-[#A2CD3C]/10 flex items-center justify-center">
                  <Clock size={20} className="text-[#A2CD3C]" />
                </div>
                <div>
                  <p className="text-sm text-[#555555]">Availability</p>
                  <p className="font-medium text-[#1a1a1a]">{contactInfo.availability}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#555555] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#1a1a1a] placeholder-gray-400 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#555555] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#1a1a1a] placeholder-gray-400 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#555555] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#1a1a1a] placeholder-gray-400 transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#555555] mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#1a1a1a] transition-all duration-300 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="brand">Brand & Visual Identity</option>
                    <option value="media">Media Design & Content</option>
                    <option value="campaign">Campaign & Creative Direction</option>
                    <option value="social">Social Media Management</option>
                    <option value="event">Event Branding</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#555555] mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#1a1a1a] placeholder-gray-400 resize-none transition-all duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
