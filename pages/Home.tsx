
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
      description: 'Structure your content for AI consumption. Our platform enriches your articles, blog posts, and product descriptions with semantic meaning and structured data, making it effortlessly discoverable and understandable for generative AI.',
      features: [
        {
          title: 'Generative AI Content',
          desc: 'Produce content with semantic depth, designed for AI models to easily parse, understand, and reference in their responses.'
        },
        {
          title: 'Automated Schema Markup',
          desc: 'Automatically generate and inject rich, structured data (JSON-LD) so AI can comprehend the entities, relationships, and context within your content.'
        },
        {
          title: 'Topical Authority Builder',
          desc: 'Analyze knowledge gaps to build comprehensive content hubs that establish your site as a definitive source for AI-driven information retrieval.'
        },
        {
          title: 'Semantic Analysis',
          desc: "Optimize content to ensure it's semantically rich and contextually complete, improving its value and discoverability for LLMs."
        }
      ]
    },
    { 
      title: 'Technical AISO', 
      items: ['Internal Link Structuring', 'Automated Core Web Vitals', 'Crawl Budget Optimization', 'Log File Analysis'],
      hasModal: true,
      description: "Ensure your website's technical foundation is perfectly tuned for AI crawlers. Our platform automates complex optimizations to guarantee your content is accessible, indexable, and efficiently processed by AI systems.",
      features: [
        {
          title: 'Internal Link Structuring',
          desc: 'Automatically build a logical site architecture that helps AI understand content relationships and thematic hierarchies.'
        },
        {
          title: 'Automated Core Web Vitals',
          desc: 'Continuously analyze and implement fixes for site speed and user experience, ensuring AI crawlers can access your content quickly and efficiently.'
        },
        {
          title: 'Crawl Budget Optimization',
          desc: 'Analyze how AI and search crawlers interact with your site, ensuring they prioritize and process your most important pages.'
        },
        {
          title: 'Log File Analysis',
          desc: 'Automatically process and analyze server log files to gain deep insights into crawler behavior and identify technical barriers to AI discoverability.'
        }
      ]
    },
    { 
      title: 'Analytics & Reporting', 
      items: ['Predictive SERP Tracking', 'Automated Anomaly Detection', 'Voice Search Analytics', 'Full-Funnel Attribution'],
      hasModal: true,
      description: 'Shift from reactive to predictive analytics. Our AI-powered platform helps you understand how your content is being discovered and used by AI, tracking its influence beyond traditional search results.',
      features: [
        {
          title: 'Predictive SERP Tracking',
          desc: "Forecast how changes in AI models and search trends will impact your content's discoverability, allowing for proactive strategy adjustments."
        },
        {
          title: 'Automated Anomaly Detection',
          desc: 'Receive real-time alerts for significant shifts in traffic or AI crawler behavior, so you can address issues before they impact discoverability.'
        },
        {
          title: 'Voice & Conversational AI Analytics',
          desc: 'Track and optimize for the growing volume of voice and conversational AI queries, understanding the intent behind the questions.'
        },
        {
          title: 'Full-Funnel Attribution',
          desc: "Connect your content's presence in AI-driven answers to user engagement, leads, and revenue, proving the true ROI of AISO."
        }
      ]
    },
    { 
      title: 'Custom AI Models', 
      modalTitle: 'Discover Custom AISO Solutions',
      items: ['Bespoke AI Models', 'Proprietary Data Integration', 'Competitor AI Analysis', 'Predictive Analytics'],
      hasModal: true,
      description: 'Leverage our deep expertise in large language models and search algorithms to build generative AI solutions that structure your content to be found, understood, and referenced by AI.',
      features: [
        {
          title: 'Bespoke AI Models',
          desc: 'We build custom AI models trained on your data to identify unique content strategies that enhance discoverability within AI ecosystems.'
        },
        {
          title: 'Proprietary Data Integration',
          desc: 'Integrate your sales data, customer feedback, and other business intelligence to create a holistic AISO strategy that aligns with your business goals.'
        },
        {
          title: 'Competitor AI Analysis',
          desc: "Use AI to reverse-engineer the AISO strategies of your competitors, identifying how their content is surfaced to inform your own approach."
        },
        {
          title: 'Predictive Analytics',
          desc: 'Go beyond reacting to algorithm changes. Our predictive models help you anticipate AI trends and proactively optimize your content\'s structure and discoverability.'
        }
      ]
    },
  ];

  const modalData = capabilities.find(c => c.title === activeModal);

  return (
    <div className="flex flex-col relative">
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-[72px] font-bold text-[#111] mb-8 leading-[1.1] tracking-tight">
            The New Era of Discoverability:<br />
            <span className="text-[#00aeef]">AI Search Optimization</span>
          </h1>
          <p className="text-[#888] max-w-4xl mx-auto mb-16 text-lg md:text-[22px] leading-relaxed font-normal">
            Don't just rank. Be the source. We structure your content to be discovered, understood, and referenced by generative AI, ensuring you're found in the new era of search.
          </p>
          
          <div className="max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] bg-gray-100 border border-gray-200">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/C8A7ooofFDA?autoplay=1&mute=1&rel=0&modestbranding=1" 
                title="AISO Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* AISO Platform Capabilities */}
      <section className="bg-[#eeeeee] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-black tracking-tight">AISO Platform Capabilities</h2>
            <p className="text-gray-500 text-lg font-medium">Our comprehensive AI-powered suite for mastering content discoverability in the age of AI.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((card, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-bold text-xl mb-10 text-gray-900 leading-tight h-14 flex items-center justify-center">
                  {card.title}
                </h3>
                <ul className="text-[15px] text-gray-700 space-y-4 mb-12 flex-grow w-full text-left">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                      </svg>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => card.hasModal && setActiveModal(card.title)}
                  className="w-full py-3.5 px-6 rounded-xl bg-gray-50 border border-gray-100 text-[15px] font-bold text-gray-800 hover:bg-gray-100 transition-all"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-24 px-6 border-t border-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-6">
            Generative AI
          </div>
          <h2 className="text-4xl md:text-[56px] font-bold mb-8 text-black leading-[1.1] tracking-tight">
            Achieve Unfair Advantages in AI Discoverability
          </h2>
          <p className="text-[#888] mb-12 text-lg leading-relaxed max-w-3xl mx-auto">
            Our deep expertise in large language models allows us to structure your content to be found, understood, and referenced by AI, giving you a distinct competitive edge.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left mb-12">
            {[
              "Generate Semantically-Rich Content at Scale",
              "Automate Technical Optimization for AI Crawlers",
              "Predict Shifts in AI-driven Search",
              "Gain Deeper Insights from AI Analytics"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full border border-[#00aeef] flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#00aeef]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[17px] font-semibold text-gray-800">{text}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setActiveModal('Custom AI Models')}
            className="w-full max-w-[700px] py-3.5 border border-gray-200 rounded-xl text-[15px] font-bold text-gray-800 bg-gray-50/50 hover:bg-gray-50 transition-colors"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Ready CTA Section */}
      <section className="bg-[#1a237e] py-32 px-6 text-center text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-[48px] font-bold mb-6 tracking-tight whitespace-normal md:whitespace-nowrap">
            Ready to Be Discovered by AI?
          </h2>
          <p className="text-blue-100/70 text-[19px] mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
            Speak with our AISO specialists to see how our AI can revolutionize your content strategy and drive exponential growth in the new era of search.
          </p>
          <button 
            onClick={() => setActiveModal('Custom AI Models')}
            className="inline-block px-14 py-4 bg-[#ececec] text-gray-800 font-bold rounded-xl hover:bg-white transition-all shadow-lg text-[16px]"
          >
            Request a Demo
          </button>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </section>

      {/* Modal Backdrop and Content */}
      {activeModal && modalData && (
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
                  {modalData.modalTitle || modalData.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-[17px]">
                  {modalData.description}
                </p>
              </div>

              <div className="space-y-8 mb-12">
                <h3 className="text-xl font-bold text-gray-900 px-2">Key Features</h3>
                
                <div className="space-y-6">
                  {modalData.features?.map((feature, i) => (
                    <div key={i} className="flex gap-5 px-2">
                      <div className="shrink-0 mt-1">
                        <svg className="w-6 h-6 text-[#283593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
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

export default Home;
