
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { db, isFirebaseConfigured } from './firebase';
import Home from './pages/Home';
import Products from './pages/Products';
import Support from './pages/Support';
import About from './pages/About';
import Contact from './pages/Contact';
import DownloadCenter from './pages/DownloadCenter';
import AdminPortal from './pages/AdminPortal';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Support', path: '/support' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-gray-900 leading-none">
            Globalcare
          </span>
          <span className="text-[13px] text-gray-500 mt-1 font-medium">
            Innovate to Build a Better World
          </span>
        </Link>
        
        <div className="flex items-center">
          <div className="hidden lg:flex space-x-8 mr-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors hover:text-[#00aeef] ${
                  isActive(item.path) ? 'text-[#00aeef]' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-16 6h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 flex flex-col items-center space-y-4">
           {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold ${isActive(item.path) ? 'text-[#00aeef]' : 'text-gray-800'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-red-600"
            >
              Admin Portal
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ececec] text-gray-500 py-10 px-6 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold text-gray-900 leading-none">Globalcare</span>
          <span className="text-[11px] font-medium mt-1">Innovate to Build a Better World</span>
        </div>
        
        <div className="text-[13px] font-medium text-gray-400">
          © 2025 Globalcare. All rights reserved.
        </div>
        
        <div className="flex gap-4 items-center">
          <Link to="/admin" className="text-[11px] hover:text-gray-900 transition-colors opacity-0 hover:opacity-100 uppercase tracking-widest font-bold">Admin</Link>
          <a href="#" className="hover:text-gray-900 transition-colors">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [attachments, setAttachments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only attempt to connect if Firebase is configured
    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }

    const q = query(collection(db, "attachments"), orderBy("updated", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAttachments(docs);
      setLoading(false);
    }, (error) => {
      console.error("Firestore listening error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/downloads" element={<DownloadCenter attachments={attachments} loading={loading} />} />
            <Route path="/admin" element={<AdminPortal attachments={attachments} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
