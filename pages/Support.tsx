
import React from 'react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#1a237e] py-20 px-4 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Service & Support</h1>
          <p className="text-blue-100 text-lg">Resources and assistance to keep your operations running smoothly.</p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: '📖', title: 'Knowledge Base', desc: 'Guides for system integration, workflows, and common tasks.', action: 'Browse Articles', path: '#' },
            { icon: '📥', title: 'Downloads', desc: 'Client tools, software installers, and latest release notes.', action: 'View Downloads', path: '/downloads' },
            { icon: '🎧', title: 'Remote Support', desc: 'Get a session code and we\'ll connect securely to assist.', action: 'Start Session', path: '#' },
            { icon: '🎓', title: 'Training', desc: 'Quick refreshers and onboarding for your team.', action: 'See Modules', path: '#' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-8 flex-grow leading-relaxed">{item.desc}</p>
              {item.path.startsWith('/') ? (
                <Link to={item.path} className="w-full py-2 border border-gray-200 text-xs font-semibold rounded hover:bg-gray-50 transition-colors text-center block">
                  {item.action}
                </Link>
              ) : (
                <button className="w-full py-2 border border-gray-200 text-xs font-semibold rounded hover:bg-gray-50 transition-colors">
                  {item.action}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Report an Issue Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Report an Issue</h2>
            <p className="text-gray-500 mb-10">Tell us what went wrong by filling out the form below. Your report is sent directly to our support team and an issue ticket will be created automatically.</p>
            
            <form action="https://formsubmit.co/shirely_sim@outlook.com" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name</label>
                  <input type="text" name="name" placeholder="Your Name" required className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#1a237e]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                  <input type="email" name="email" placeholder="you@emailglobalcare.com" required className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#1a237e]" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Site / Hospital / Company</label>
                  <input type="text" name="organization" placeholder="Your Organization" required className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#1a237e]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Contact Number</label>
                  <input type="tel" name="phone" placeholder="Your Phone Number" required className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#1a237e]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Describe the issue</label>
                <textarea name="message" rows={4} placeholder="Please provide as much detail as possible..." required className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#1a237e] resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#1a237e] text-white py-4 rounded font-bold hover:bg-blue-800 transition-colors">
                Send Report
              </button>
            </form>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 self-start">
            <h3 className="text-2xl font-bold mb-6">How We Respond</h3>
            <p className="text-gray-500 mb-8">Our commitment is to resolve your issues promptly and efficiently.</p>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-red-100 rounded text-red-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                    <h4 className="font-bold">Critical Issues</h4>
                    <p className="text-sm text-gray-500">Immediate triage by an on-call engineer, 24/7.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                    <h4 className="font-bold">Standard Cases</h4>
                    <p className="text-sm text-gray-500">First response within one business day from our dedicated support specialists.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                </div>
                <div>
                    <h4 className="font-bold">Secure Assistance</h4>
                    <p className="text-sm text-gray-500">We may invite you to a secure remote session for faster, hands-on resolution.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
