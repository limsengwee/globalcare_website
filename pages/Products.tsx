
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const capabilities = [
    { 
      id: 'system-interface',
      title: 'System Interface Solutions', 
      desc: 'Proprietary connectors, web APIs, and legacy system integration for seamless data flow.',
      modalTitle: 'System Interface Solutions',
      modalDesc: 'Our solutions act as the central nervous system for your enterprise, enabling seamless data flow between legacy systems, modern applications, and cloud services. We eliminate data silos and unlock new efficiencies.',
      features: [
        {
          title: 'Proprietary Connectors',
          desc: 'Custom-built adaptors for specialized or legacy systems, ensuring no part of your business is left behind.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h6v6H9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 4V2m6 2V2M4 9H2m2 6H2m18-6h2m-2 6h2M9 20v2m6-2v2" />
            </svg>
          )
        },
        {
          title: 'Robust Web APIs',
          desc: 'Develop and manage secure, scalable APIs that expose core business functions for new applications and partnerships.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="18" cy="5" r="3" strokeWidth="2" />
              <circle cx="6" cy="12" r="3" strokeWidth="2" />
              <circle cx="18" cy="19" r="3" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98" />
            </svg>
          )
        },
        {
          title: 'Legacy System Integration',
          desc: 'Modernize and extend the life of your critical legacy platforms by connecting them to your digital ecosystem.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="7" rx="2" strokeWidth="2" />
              <rect x="3" y="13" width="18" height="7" rx="2" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7.5h.01M7 16.5h.01" />
            </svg>
          )
        }
      ]
    },
    { 
      id: 'data-storage',
      title: 'Data & Storage Solutions', 
      desc: 'Scalable storage, secure data management, and cloud-ready architectures.',
      modalTitle: 'Data & Storage Solutions',
      modalDesc: 'We engineer scalable and secure data infrastructures for both on-premise and cloud-native environments, including hybrid models. Our solutions ensure your data is not just stored, but is also accessible, compliant, and ready to power your AI and analytics initiatives.',
      features: [
        {
          title: 'Enterprise Data Platforms',
          desc: 'Design and deployment of robust data lakes and warehouses that serve as a single source of truth for your organization.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7m0 10c0 1.657-3.582 3-8 3s-8-1.343-8-3m16-10c0 1.657-3.582 3-8 3S4 8.657 4 7m16 0c0-1.657-3.582-3-8-3S4 5.343 4 7" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3" />
            </svg>
          )
        },
        {
          title: 'VNA & Object Storage',
          desc: 'Vendor-Neutral Archives (VNA) and object storage solutions for cost-effective, long-term retention and easy retrieval of unstructured data.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="12" rx="2" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11h16M10 15h4" />
            </svg>
          )
        },
        {
          title: 'Cloud Migration & Strategy',
          desc: 'Expert guidance and execution for migrating your on-premise data infrastructure to the cloud, optimizing for cost, performance, and security.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          )
        }
      ]
    },
    { 
      id: 'customer-engagement',
      title: 'Customer Engagement', 
      desc: 'Portals, service automation, personalized content, and mobile applications.',
      modalTitle: 'Customer Engagement Solutions',
      modalDesc: 'We build sophisticated digital platforms that transform how you interact with your customers. From self-service portals to AI-powered support, our solutions create intuitive, efficient, and valuable user experiences.',
      features: [
        {
          title: 'Custom Client Portals',
          desc: 'Secure, intuitive, and feature-rich web portals for customers to manage their accounts, access services, and interact with your business.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
              <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
              <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2" />
            </svg>
          )
        },
        {
          title: 'Service & Support Automation',
          desc: 'Implement AI chatbots and automated workflows to provide instant support, answer common questions, and resolve issues 24/7.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM5 13a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6zM9 14h.01M15 14h.01M9 18h6" />
            </svg>
          )
        },
        {
          title: 'Personalized Digital Experiences',
          desc: 'Leverage user data and AI to deliver personalized content, recommendations, and services that increase engagement and loyalty.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          )
        }
      ]
    },
    { 
      id: 'custom-ai',
      title: 'Custom AI Solutions', 
      desc: 'AI Agent Development, BI integration, data processing workflow optimization.',
      modalTitle: 'Custom AI Solutions',
      modalDesc: 'We architect and build bespoke AI solutions that integrate seamlessly into your existing workflows, unlocking data-driven insights and automating complex processes to give you a competitive edge.',
      features: [
        {
          title: 'AI Agent Development',
          desc: 'Design and deployment of intelligent agents to automate tasks, interact with customers, and streamline business operations.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM5 13a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6zM9 14h.01M15 14h.01M9 18h6" />
            </svg>
          )
        },
        {
          title: 'Workflow Automation',
          desc: 'Leverage AI to optimize and automate your existing business workflows, reducing manual effort and increasing efficiency.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
               <circle cx="12" cy="12" r="3" strokeWidth="2" />
            </svg>
          )
        },
        {
          title: 'Data-driven Insights',
          desc: 'Utilize machine learning models to analyze your data, uncover hidden patterns, and provide predictive insights for better decision-making.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        },
        {
          title: 'Bespoke Builds',
          desc: 'Tailor-made AI solutions designed to solve your unique business challenges, from custom model training to specialized data processing pipelines.',
          icon: (
            <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )
        }
      ]
    },
  ];

  const closeModal = () => setActiveModal(null);
  const selectedModalData = capabilities.find(c => c.id === activeModal);

  return (
    <div className="flex flex-col relative">
      {/* Header Banner */}
      <section className="bg-[#1a237e] py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Products & Solutions</h1>
            <p className="text-blue-100 text-lg">Interoperability, enterprise data, and AI-driven discoverability—built for business.</p>
          </div>
          <Link to="/downloads" className="bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-2 rounded text-sm transition-colors backdrop-blur-sm">
             Download Center
          </Link>
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
              <Link to="/contact" className="w-full bg-[#1a237e] text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors text-center block">
                Claim Your PoC Trial
              </Link>
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
            {capabilities.map((cap) => (
              <div key={cap.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col h-full">
                <h3 className="font-bold mb-4 h-12 flex items-center">{cap.title}</h3>
                <p className="text-sm text-gray-500 flex-grow mb-6">{cap.desc}</p>
                <button 
                  onClick={() => cap.features && setActiveModal(cap.id)}
                  className="w-full py-2 border border-gray-200 text-xs font-semibold rounded hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!cap.features}
                >
                  Learn More
                </button>
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
                <Link to="/downloads" className="bg-[#1a237e] text-white px-8 py-3 rounded font-bold hover:bg-blue-800 transition-colors flex items-center justify-center">
                    Go to Download Center
                </Link>
                <Link to="/contact" className="border border-gray-200 px-8 py-3 rounded font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                    Contact Sales
                </Link>
            </div>
        </div>
      </section>

      {/* Modal Backdrop and Content */}
      {activeModal && selectedModalData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div className="bg-white w-full max-w-2xl rounded-[32px] relative z-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9l6 6m0-6l-6 6" />
              </svg>
            </button>

            <div className="px-10 py-12">
              <div className="text-center mb-10 px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {selectedModalData.modalTitle}
                </h2>
                <p className="text-gray-500 leading-relaxed text-[17px]">
                  {selectedModalData.modalDesc}
                </p>
              </div>

              <div className="space-y-8 mb-12">
                <h3 className="text-xl font-bold text-gray-900 px-2">Key Features</h3>
                
                <div className="space-y-6">
                  {selectedModalData.features?.map((feature, i) => (
                    <div key={i} className="flex gap-5 px-2">
                      <div className="shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-500 text-[15px] leading-snug">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to="/contact"
                onClick={closeModal}
                className="block w-full py-4 bg-[#1a237e] text-white text-center rounded-2xl font-bold text-lg hover:bg-blue-900 transition-colors shadow-lg"
              >
                Contact Us for a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
