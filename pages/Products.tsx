
import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#1a237e] py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Products & Solutions</h1>
            <p className="text-blue-100 text-lg">Interoperability, enterprise data, and AI-driven discoverability—built for business.</p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-2 rounded text-sm transition-colors backdrop-blur-sm">
             Download Center
          </button>
        </div>
      </section>

      {/* AISO Services Highlight */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 rounded-3xl p-8 lg:p-16 border border-gray-200">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">AI Search Optimization (AISO) Services</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Go beyond traditional SEO. Our AISO services use cutting-edge generative AI to make your content discoverable and understandable by large language models, building the topical authority required in the new era of AI-driven search.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Generate semantically-rich content that AI can parse and reference
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Automate complex technical optimization for AI crawlers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Gain predictive insights into how AI will interpret content discoverability
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-6">
                <svg className="w-8 h-8 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="font-bold mb-2">Limited-Time AISO Proof-of-Concept</h3>
              <p className="text-sm text-gray-500 mb-6">Not sure where to start? Let us demonstrate the power of AISO with a targeted Proof-of-Concept.</p>
              <div className="text-2xl font-black text-[#1a237e] mb-6">% Special Introductory Discount</div>
              <button className="w-full bg-[#1a237e] text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                Claim Your PoC Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-gray-500">Our foundational strengths tailored to meet your unique enterprise challenges.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'System Interface Solutions', desc: 'Proprietary connectors, web APIs, and legacy system integration for seamless data flow.' },
              { title: 'Data & Storage Solutions', desc: 'Scalable storage, secure data management, and cloud-ready architectures.' },
              { title: 'Customer Engagement', desc: 'Portals, service automation, personalized content, and mobile applications.' },
              { title: 'Custom AI Solutions', desc: 'AI Agent Development, BI integration, data processing workflow optimization.' },
            ].map((cap, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col h-full">
                <h3 className="font-bold mb-4 h-12 flex items-center">{cap.title}</h3>
                <p className="text-sm text-gray-500 flex-grow mb-6">{cap.desc}</p>
                <button className="w-full py-2 border border-gray-200 text-xs font-semibold rounded hover:bg-gray-50 transition-colors">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaged Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Packaged Solutions</h2>
                <p className="text-gray-500">Accelerate your Time-to-Value with our ready-to-deploy enterprise-grade software products.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl border border-gray-200 flex gap-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Nexus Integration Hub</h3>
                        <p className="text-sm text-gray-500 mb-4">An enterprise-grade middleware platform that connects disparate systems, applications, and data sources with a library of pre-built connectors.</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 flex gap-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Insight AI Analytics</h3>
                        <p className="text-sm text-gray-500 mb-4">A key business intelligence and predictive analytics solution, capable of deriving actionable insights and forecasts through intuitive dashboards.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Professional Services</h2>
                <p className="text-gray-500">Expert partnership to guide, build, and support your most critical technology initiatives.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-xl border border-gray-200 flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded">
                        <svg className="w-5 h-5 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 20c4.478 0 8.268-2.943 9.542-7H15M3 13h2a2 2 0 012 2v2a2 2 0 01-2 2H3a2 2 0 01-2-2v-2a2 2 0 012-2z"></path></svg>
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">Digital Transformation Consulting</h3>
                        <p className="text-sm text-gray-500">Strategic advisory services to help you plan and execute your technology roadmap, from cloud adoption to enterprise-wide AI integration.</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded">
                        <svg className="w-5 h-5 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">Managed Services & Support</h3>
                        <p className="text-sm text-gray-500">Ongoing operational management, proactive monitoring, and 24/7 support for your critical systems, ensuring reliability and performance.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Ready to Learn CTA */}
      <section className="bg-white py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to learn more?</h2>
            <p className="text-gray-500 mb-8">Visit our download center for brochures and technical specifications, or contact our team to discuss your project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#1a237e] text-white px-8 py-3 rounded font-bold hover:bg-blue-800 transition-colors flex items-center justify-center">
                    Go to Download Center
                </button>
                <Link to="/contact" className="border border-gray-200 px-8 py-3 rounded font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                    Contact Sales
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
