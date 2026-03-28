/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Mail, 
  Linkedin, 
  Twitter, 
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Pages
import HomePage from './pages/HomePage';
import SEOPage from './pages/SEOPage';
import ContentPage from './pages/ContentPage';
import AdsStrategyPage from './pages/AdsStrategyPage';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/#about' },
  { id: 'projects', label: 'Projects', path: '/#projects' },
  { id: 'seo', label: 'SEO', path: '/seo' },
  { id: 'content', label: 'Content', path: '/content' },
  { id: 'ads', label: 'Ads Strategy', path: '/ads' },
  { id: 'contact', label: 'Contact', path: '/#contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-brand-parchment/80 backdrop-blur-lg border-b border-brand-khaki/10 py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to="/"
            className="text-2xl font-serif font-bold text-brand-onyx"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            RITWIK.
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => {
                  if (item.path.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(item.path);
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-brand-khaki",
                  location.pathname === item.path ? "text-brand-khaki" : "text-brand-onyx/60"
                )}
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={() => handleNavClick('/#contact')}
              className="px-6 py-2 bg-brand-onyx text-brand-parchment rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-jet transition-colors shadow-lg shadow-brand-onyx/20"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-onyx"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-parchment flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => {
                  if (item.path.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(item.path);
                  } else {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="text-3xl font-serif text-brand-onyx hover:text-brand-khaki transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-brand-parchment border-t border-brand-khaki/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-serif font-bold text-brand-onyx">RITWIK.</div>
        <div className="text-brand-onyx/40 text-sm font-medium">
          © {new Date().getFullYear()} Ritwik Yadav. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {NAV_ITEMS.map(item => (
            <Link 
              key={item.id} 
              to={item.path} 
              onClick={(e) => {
                if (item.path.startsWith('/#')) {
                  e.preventDefault();
                  handleNavClick(item.path);
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 hover:text-brand-khaki transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-brand-onyx text-brand-parchment relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full -z-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-khaki rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-jet rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-serif mb-8 leading-tight">
            Ready to <span className="italic text-brand-khaki">Elevate</span> Your Brand?
          </h2>
          <p className="text-xl text-brand-parchment/60 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a href="mailto:ritwikyadav1998@gmail.com" className="flex items-center gap-4 text-2xl font-serif hover:text-brand-khaki transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              ritwikyadav1998@gmail.com
            </a>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/ritwik-yadav' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-khaki hover:text-brand-onyx transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-brand-khaki/30">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage scrollTo={scrollTo} />} />
            <Route path="/seo" element={<SEOPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/ads" element={<AdsStrategyPage />} />
          </Routes>
        </main>

        <ContactSection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
