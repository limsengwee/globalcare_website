
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  const capabilities = [
    { 
      title: 'Content & Schema AI', 
      items: ['Generative AI Content', 'Automated Schema Markup', 'Topical Authority Builder', 'Semantic Analysis'],
      hasModal: true,
      description: 'Structure your content for AI consumption. Our platform enriches your digital assets with semantic meaning and structured data, making it effortlessly discoverable for generative AI.',
      features: [
        { title: 'Generative AI Content', desc: 'Produce content with semantic depth designed for AI models to easily parse.' },
        { title: 'Automated Schema Markup', desc: 'Automatically generate and inject JSON-LD context into your ecosystem.' }
      ]
    },
    { 
      title: 'Technical AISO', 
      items: ['Internal Link Structuring', 'Automated Core Web Vitals', 'Crawl Budget Optimization', 'Log File Analysis'],
      hasModal: true,
      description: "Ensure your technical foundation is perfectly tuned for AI crawlers. We automate complex optimizations to guarantee your content is accessible and indexable.",
      features: [
        { title: 'Crawl Budget Optimization', desc: 'Ensure AI and search crawlers prioritize and process your most important pages first.' },
        { title: 'Automated Core Web Vitals', desc: 'Continuously analyze and implement fixes for site speed and performance.' }
      ]
    },
    { 
      title: 'Analytics & Reporting', 
      items: ['Predictive SERP Tracking', 'Automated Anomaly Detection', 'Voice Search Analytics', 'Full-Funnel Attribution'],
      hasModal: true,
      description: 'Shift from reactive to predictive analytics. Understand how your content is discovered and used beyond traditional search results.',
      features: [
        { title: 'Predictive SERP Tracking', desc: 'Forecast how changes in AI models will impact your visibility in real-time.' },
        { title: 'Voice Search Analytics', desc: 'Track and optimize for the growing volume of conversational AI queries.' }
      ]
    },
    { 
      title: 'Custom AI Models', 
      modalTitle: 'Discover Custom AISO Solutions',
      items: ['Bespoke AI Models', 'Proprietary Data Integration', 'Competitor AI Analysis', 'Predictive Analytics'],
      hasModal: true,
      description: 'Leverage our expertise to build bespoke generative AI solutions tailored to your unique enterprise knowledge base.',
      features: [
        { title: 'Bespoke AI Models', desc: 'Custom models trained on your data to identify unique discoverability strategies.' },
        { title: 'Competitor AI Analysis', desc: 'Reverse-engineer competitor AISO strategies to inform your own approach.' }
      ]
    },
  ];

  const modalData = capabilities.find(c => c.title === activeModal);

  return (
    <div className="flex flex-col relative bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-[80px] font-black text-[#111] mb-8 leading-[1.05] tracking-tight">
            The New Era of Discoverability:<br />
            <span className="text-[#00aeef]">AI Search Optimization</span>
          </h1>
          <p className="text-[#666] max-w-3xl mx-auto mb-16 text-xl md:text-[24px] leading-relaxed font-medium">
            Don't just rank. Be the source. We structure your content to be found, understood, and referenced by generative AI.
          </p>
          
          <div className="max-w-5xl mx-auto aspect-video rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] bg-black border border-gray-100">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/C8A7ooofFDA?autoplay=1&mute=1&rel=0&modestbranding=1" 
                title="AISO Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* AISO Platform Capabilities */}
      <section className="bg-gray-50 py-28 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-black tracking-tight">Platform Capabilities</h2>
            <p className="text-gray-500 text-lg">Master content discoverability in the age of intelligent machines.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((card, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[24px] shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-xl mb-10 text-gray-900 leading-tight h-14 flex items-center justify-center">
                  {card.title}
                </h3>
                <ul className="text-[15px] text-gray-600 space-y-5 mb-12 flex-grow w-full text-left">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => card.hasModal && setActiveModal(card.title)}
                  className="w-full py-4 px-6 rounded-2xl bg-[#f8f9fa] border border-gray-100 text-[14px] font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                >
                  Explore Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full text-[12px] font-black text-blue-600 uppercase tracking-widest mb-6">
                Future-Ready
              </div>
              <h2 className="text-4xl md:text-[56px] font-bold mb-8 text-black leading-[1.05] tracking-tight">
                Unfair Advantage in the Era of AI
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Our deep expertise in large language models allows us to structure your content to be found, understood, and referenced by AI, giving you a distinct competitive edge that traditional SEO cannot match.
              </p>
              <Link to="/about" className="text-[#00aeef] font-bold hover:underline inline-flex items-center gap-2">
                Learn about our AISO Methodology
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { t: "Semantic Precision", d: "Content optimized for AI entity extraction." },
                { t: "Technical Authority", d: "Clean site architecture for rapid AI crawling." },
                { t: "Predictive Intelligence", d: "Anticipate model shifts before they happen." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1">{item.t}</h4>
                  <p className="text-sm text-gray-500">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready CTA Section */}
      <section className="bg-[#1a237e] py-32 px-6 text-center text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-[64px] font-black mb-8 tracking-tight">
            Ready to Be Discovered?
          </h2>
          <p className="text-blue-100/80 text-[20px] mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
            Speak with our AISO specialists to see how our platform can revolutionize your content discoverability.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-16 py-5 bg-[#00aeef] text-white font-bold rounded-2xl hover:bg-white hover:text-[#1a237e] transition-all shadow-2xl text-[18px] transform hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]"></div>
      </section>

      {/* Modal Backdrop and Content */}
      {activeModal && modalData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeModal}></div>
          <div className="bg-white w-full max-w-2xl rounded-[40px] relative z-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <button onClick={closeModal} className="absolute top-8 right-8 p-2 text-gray-400 hover:text-gray-900 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="px-12 py-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight text-center">{modalData.modalTitle || modalData.title}</h2>
              <p className="text-gray-500 text-center text-lg leading-relaxed mb-12">{modalData.description}</p>
              <div className="space-y-8 mb-12">
                {modalData.features?.map((f, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#00aeef]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{f.title}</h4>
                      <p className="text-gray-500 leading-snug">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" onClick={closeModal} className="block w-full py-5 bg-gray-900 text-white text-center rounded-2xl font-bold text-lg hover:bg-[#1a237e] transition-all">
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
