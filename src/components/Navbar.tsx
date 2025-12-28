import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Training', href: '/training' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: scrolled || isMenuOpen ? 'rgba(5, 5, 10, 0.95)' : 'transparent',
            backdropFilter: 'blur(20px)',
            borderBottom: scrolled || isMenuOpen ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
            <div className="container" style={{ padding: '1rem var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 51 }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                            src={logoImg}
                            alt="Aaryan Editz Logo"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                objectFit: 'cover',
                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)'
                            }}
                        />
                        <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
                            AARYAN EDITZ
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                style={{
                                    fontSize: '0.9375rem',
                                    fontWeight: '500',
                                    color: location.pathname === link.href ? 'white' : 'var(--text-secondary)',
                                    transition: 'color 0.2s ease',
                                    position: 'relative'
                                }}
                            >
                                {link.name}
                                {location.pathname === link.href && (
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: 'var(--primary)',
                                        borderRadius: '2px',
                                        boxShadow: '0 0 8px var(--primary)'
                                    }} />
                                )}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.9375rem' }}>
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'block',
                            background: isMenuOpen ? 'rgba(255,255,255,0.1)' : 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '10px',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease'
                        }}
                        className="mobile-toggle"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    background: 'linear-gradient(180deg, rgba(5, 5, 15, 0.98) 0%, rgba(10, 10, 25, 0.98) 100%)',
                    backdropFilter: 'blur(20px)',
                    paddingTop: '100px', // Space for navbar
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                    opacity: isMenuOpen ? 1 : 0,
                    visibility: isMenuOpen ? 'visible' : 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 50,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }} className="mobile-menu">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: location.pathname === link.href ? 'white' : 'rgba(255,255,255,0.6)',
                                padding: '16px 20px',
                                borderRadius: '16px',
                                background: location.pathname === link.href ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                                border: location.pathname === link.href ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                transition: 'all 0.3s ease',
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                transitionDelay: `${i * 0.05}s`
                            }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                            {location.pathname === link.href && (
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }} />
                            )}
                        </Link>
                    ))}

                    <div style={{ marginTop: '24px', transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.3s', transition: 'all 0.3s ease' }}>
                        <Link
                            to="/contact"
                            className="btn-primary"
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                padding: '16px',
                                fontSize: '1.125rem',
                                borderRadius: '16px'
                            }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle,
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
