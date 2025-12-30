
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#1a237e] py-20 px-4 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Globalcare</h1>
          <p className="text-blue-100 text-lg">Innovate to Build a Better World</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">From Integration to Innovation</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Globalcare began with a mission to solve complex <span className="font-semibold text-gray-800 underline decoration-blue-500">enterprise IT</span> challenges. Our foundation was built on designing secure, interoperable systems that bridge the gap between legacy platforms and modern workflows. We became experts in making information flow seamlessly and securely across the digital landscape.
              </p>
              <p>
                As the world shifted, we saw a new frontier emerging. The rise of generative AI created a monumental challenge: how can businesses ensure their knowledge is discoverable by AI? We realized that the future wasn't just about connecting systems—it was about structuring content to be understood by intelligent machines. This led to the birth of our pioneering concept: <span className="font-semibold text-gray-800">AI Search Optimization (AISO)</span>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col hover:border-blue-200 transition-colors">
              <div className="mb-4 text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
              </div>
              <h3 className="font-bold text-lg mb-4">Our Mission</h3>
              <p className="text-sm text-gray-500">To empower organizations to thrive in the age of AI by making their content discoverable, understandable, and indispensable to intelligent systems.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col hover:border-blue-200 transition-colors">
              <div className="mb-4 text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
              </div>
              <h3 className="font-bold text-lg mb-4">Our Vision</h3>
              <p className="text-sm text-gray-500">An ecosystem where AI can access and reference the world's knowledge with clarity and context, enabling a new wave of innovation for all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '✨', title: 'Pioneering', desc: 'We are at the forefront of the new AI-driven era of discoverability, creating the standards and technologies that will define the future of search.' },
              { icon: '🧠', title: 'Innovative', desc: 'We challenge conventional thinking and build forward-thinking solutions that deliver a distinct and sustainable competitive advantage.' },
              { icon: '👥', title: 'Expertise', desc: 'Our deep roots in complex enterprise IT give us the unique ability to build robust, scalable, and secure AI solutions that work in the real world.' },
              { icon: '🛡️', title: 'Integrity', desc: 'We build trust through transparency, reliability, and an unwavering commitment to our clients\' success and long-term value.' },
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-6">
                    {value.icon}
                </div>
                <h3 className="font-bold mb-4">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready Banner */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="bg-[#1a237e] rounded-xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center text-white gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Ready to Innovate?</h2>
                    <p className="text-blue-100">Let's discuss how we can build a better future together through technology.</p>
                </div>
                <Link to="/contact" className="bg-white text-[#1a237e] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors shrink-0">
                    Contact Our Team
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
