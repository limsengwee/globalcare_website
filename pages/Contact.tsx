
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#1a237e] py-20 px-4 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">How can we help? Our team is ready to answer your questions.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
            <p className="text-gray-500 mb-10">Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form action="https://formsubmit.co/shirely_sim@outlook.com" method="POST" className="space-y-6">
              {/* FormSubmit Honeypot (prevents spam) */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* FormSubmit Thank You Page (optional) */}
              <input type="hidden" name="_next" value={window.location.origin + "/#/contact"} />
              
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name</label>
                <input type="text" name="name" placeholder="Your Name" required className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#1a237e]" />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                <input type="email" name="email" placeholder="your.email@example.com" required className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#1a237e]" />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Subject</label>
                <input type="text" name="subject" placeholder="Subject of your message" required className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#1a237e]" />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                <textarea name="message" rows={6} placeholder="Tell us how we can help" required className="w-full border border-gray-200 rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#1a237e] resize-none"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#1a237e] text-white py-4 rounded font-bold hover:bg-blue-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-5">
            <div className="bg-gray-100 p-10 rounded-2xl border border-gray-200 sticky top-32">
                <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
                <p className="text-gray-500 mb-10 text-sm">For urgent support, please use our dedicated <a href="#/support" className="text-blue-600 underline">Service & Support page</a>.</p>
                
                <div className="space-y-10">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded shadow-sm text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase text-gray-400 mb-1">Email</h4>
                            <p className="font-medium text-gray-700">ask_sales@outlook.com</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded shadow-sm text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase text-gray-400 mb-1">Address</h4>
                            <p className="font-medium text-gray-700">111 North Bridge Road, #27-01 Peninsular Plaza, Singapore (179098)</p>
                        </div>
                    </div>
                    
                    <div className="pt-8 border-t border-gray-200">
                        <h4 className="font-bold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            {['LinkedIn', 'Twitter', 'YouTube'].map(social => (
                                <button key={social} className="text-xs font-bold text-gray-400 hover:text-[#1a237e] transition-colors">{social}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
