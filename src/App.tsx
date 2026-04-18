import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Training from './pages/Training';
import Freelancing from './pages/Freelancing';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { Instagram, Youtube, Linkedin } from 'lucide-react';
import logoImg from './assets/logo.jpeg';
import raventraxLogo from './assets/raventrax.png';
import cSuiteLogo from './assets/c_suite.png';

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
              alt="Aaryan Media Logo"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                objectFit: 'cover'
              }}
            />
            <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
              AARYAN MEDIA
            </span>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
            Need result-focused digital marketing services? Let's talk growth, perfromance and scale.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { Icon: Instagram, href: 'https://www.instagram.com/sagarsai.kolla?igsh=MWQ4MzFhaWRqN2llMw==' },
              { Icon: Youtube, href: 'https://youtube.com/@sagarsaikolla?si=IqYTr8QFfT0Nzpno' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/sagar-sai-kolla-132162349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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



        {/* Contact Info */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '20px' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
            <li>sagar@aaryanmedia.com</li>
            <li>+91 7286042944</li>
            <li>Ameerpet, Hyderabad</li>
          </ul>
        </div>
      </div>

      {/* Partners Carousel */}
      <div style={{
        paddingTop: '40px',
        paddingBottom: '20px',
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        marginBottom: '20px'
      }}>
        <h4 style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: '700', marginBottom: '32px' }}>Our Partners</h4>
        
        <div className="partners-carousel-wrapper" style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}>
          <div className="partners-carousel">
            {[...Array(10)].map((_, arrayIndex) => (
              <React.Fragment key={arrayIndex}>
                <a href="https://raventrax.com/" target="_blank" rel="noopener noreferrer" className="partner-item">
                  <img src={raventraxLogo} alt="Raventrax" />
                  <span>Raventrax</span>
                </a>
                <a href="https://new-c-suite.vercel.app/" target="_blank" rel="noopener noreferrer" className="partner-item">
                  <img src={cSuiteLogo} alt="C-Suite" />
                  <span>C-Suite</span>
                </a>
                <a href="https://freshhpick.com/" target="_blank" rel="noopener noreferrer" className="partner-item">
                  <img src="https://www.google.com/s2/favicons?domain=freshhpick.com&sz=128" alt="Freshhpick" />
                  <span>Freshhpick</span>
                </a>
              </React.Fragment>
            ))}
          </div>
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
          © 2025 Aaryan Media. All rights reserved.
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
        
        .partners-carousel-wrapper {
          width: 100%;
          overflow: hidden;
        }
        
        .partners-carousel {
          display: flex;
          width: max-content;
          animation: scroll 15s linear infinite;
        }
        
        .partners-carousel:hover {
          animation-play-state: paused;
        }
        
        .partner-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          margin: 0 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: var(--text-main);
          min-width: max-content;
        }
        
        .partner-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }
        
        .partner-item img {
          width: 32px;
          height: 32px;
          border-radius: 6px;
        }
        
        .partner-item span {
          font-weight: 600;
          font-size: 1.125rem;
          letter-spacing: 0.5px;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 10)); }
        }
      `}</style>
    </Router>
  );
};

export default App;
