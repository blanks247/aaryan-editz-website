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

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

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
            background: scrolled || isMenuOpen ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
            backdropFilter: scrolled || isMenuOpen ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ padding: '1rem var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                                    color: location.pathname === link.href ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                {link.name}
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
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '8px'
                        }}
                        className="mobile-toggle"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        paddingTop: '24px',
                        paddingBottom: '24px',
                        borderTop: '1px solid var(--border)',
                        marginTop: '16px',
                        height: '100vh', // Cover full screen
                        background: 'rgba(10, 10, 10, 0.95)'
                    }} className="mobile-menu">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '500',
                                    color: location.pathname === link.href ? 'var(--primary)' : 'var(--text-primary)',
                                    padding: '12px 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>
                            Get Started
                        </Link>
                    </div>
                )}
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
