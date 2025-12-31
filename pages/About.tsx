
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Header Banner */}
      <section className="bg-[#1a237e] py-32 px-4 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-[64px] font-bold mb-6 tracking-tight">About Globalcare</h1>
          <p className="text-blue-100 text-xl md:text-2xl font-medium">Innovate to Build a Better World</p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">From Integration to Innovation</h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Globalcare began with a mission to solve complex <span className="font-bold text-gray-900 border-b-2 border-blue-500 pb-0.5">enterprise IT</span> challenges. Our foundation was built on designing secure, interoperable systems that bridge the gap between legacy platforms and modern workflows. We became experts in making information flow seamlessly and securely across the digital landscape.
              </p>
              <p>
                As the world shifted, we saw a new frontier emerging. The rise of generative AI created a monumental challenge: how can businesses ensure their knowledge is discoverable by AI? We realized that the future wasn't just about connecting systems—it was about structuring content to be understood by intelligent machines. This led to the birth of our pioneering concept: <span className="font-bold text-gray-900">AI Search Optimization (AISO)</span>.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col hover:border-blue-200 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-gray-900">Our Mission</h3>
                <div className="text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed">To empower organizations to thrive in the age of AI by making their content discoverable, understandable, and indispensable to intelligent systems.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col hover:border-blue-200 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-gray-900">Our Vision</h3>
                <div className="text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed">An ecosystem where AI can access and reference the world's knowledge with clarity and context, enabling a new wave of innovation for all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 bg-gray-100/60 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-gray-900 tracking-tight">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {[
              { 
                icon: (
                  <svg className="w-8 h-8 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ), 
                title: 'Pioneering', 
                desc: 'We are at the forefront of the new AI-driven era of discoverability, creating the standards and technologies that will define the future of search.' 
              },
              { 
                icon: (
                  <svg className="w-8 h-8 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3m0 0l2-2m-2 2l-2-2m5-13a5 5 0 11-10 0 5 5 0 0110 0zM17 12a5 5 0 01-5 5H7a1 1 0 01-1-1v-2a3 3 0 013-3h8a1 1 0 011 1v1z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a3 3 0 110 6 3 3 0 010-6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  </svg>
                ), 
                title: 'Innovative', 
                desc: 'We challenge conventional thinking and build forward-thinking solutions that deliver a distinct and sustainable competitive advantage.' 
              },
              { 
                icon: (
                  <svg className="w-8 h-8 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.5a4.5 4.5 0 01-4.5 4.5h-.75" />
                  </svg>
                ), 
                title: 'Expertise', 
                desc: 'Our deep roots in complex enterprise IT give us the unique ability to build robust, scalable, and secure AI solutions that work in the real world.' 
              },
              { 
                icon: (
                  <svg className="w-8 h-8 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ), 
                title: 'Integrity', 
                desc: 'We build trust through transparency, reliability, and an unwavering commitment to our clients\' success and long-term value.' 
              },
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-4">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Banner CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="bg-[#1a237e] rounded-3xl p-12 md:p-20 flex flex-col md:flex-row justify-between items-center text-white gap-10 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">Ready to Innovate?</h2>
                    <p className="text-blue-100 text-lg opacity-90">Let's discuss how we can build a better future together through technology and pioneering AISO strategies.</p>
                </div>
                <Link to="/contact" className="relative z-10 bg-white text-[#1a237e] px-12 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-1 shrink-0">
                    Contact Our Team
                </Link>
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]"></div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
