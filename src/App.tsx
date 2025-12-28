import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Training from './pages/Training';
import Freelancing from './pages/Freelancing';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import logoImg from './assets/logo.jpeg';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer: React.FC = () => (
  <footer style={{
    paddingTop: '80px',
    paddingBottom: '40px',
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border)'
  }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
        gap: '48px',
        marginBottom: '48px'
      }}>
        {/* Brand */}
        <div style={{ gridColumn: 'span 1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <img
              src={logoImg}
              alt="Aaryan Editz Logo"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                objectFit: 'cover'
              }}
            />
            <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
              AARYAN EDITZ
            </span>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
            Empowering the next generation of visual storytellers with industry-level skills and real opportunities.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[Instagram, Youtube, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '20px' }}>Platform</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'Services', href: '/services' },
              { name: 'Training', href: '/training' },
              { name: 'Freelancing', href: '/freelancing' },
              { name: 'Portfolio', href: '/portfolio' }
            ].map((link, i) => (
              <li key={i}>
                <a href={link.href} style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '20px' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
            <li>sagarsaikolla@gmail.com</li>
            <li>+91 7286042944</li>
            <li>Ameerpet, Hyderabad</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        paddingTop: '32px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          © 2025 Aaryan Editz. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '24px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          <a href="#" style={{ transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Privacy Policy
          </a>
          <a href="#" style={{ transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="app bg-bg-color min-h-screen text-text-main">
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/freelancing" element={<Freelancing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <style>{`
        .app {
          overflow-x: hidden;
        }
        
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .page-transition {
          position: relative;
        }
      `}</style>
    </Router>
  );
};

export default App;
