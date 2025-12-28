import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import weddingImg from '../assets/wedding.png';
import socialImg from '../assets/social.png';

const Portfolio: React.FC = () => {
    const projects = [
        { title: "Luxury Wedding Film", category: "Wedding", img: weddingImg },
        { title: "Instagram Viral Reel", category: "Social Media", img: socialImg },
        { title: "Corporate Presentation", category: "Commercial", img: heroImg },
        { title: "Event Highlight Reel", category: "Wedding", img: weddingImg },
        { title: "YouTube Shorts Pack", category: "Social Media", img: socialImg },
        { title: "Product Launch Video", category: "Commercial", img: heroImg },
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                {/* Header */}
                <div style={{ maxWidth: '700px', margin: '0 auto 48px', textAlign: 'center' }}>
                    <h1 className="section-title">Our Work</h1>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        A showcase of projects we've delivered for clients worldwide
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                    gap: '24px',
                    marginBottom: '64px'
                }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="glass"
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    padding: '6px 12px',
                                    background: 'rgba(0,0,0,0.7)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    color: 'var(--primary-light)'
                                }}>
                                    {project.category}
                                </div>
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '8px' }}>
                                    {project.title}
                                </h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                    View Project →
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="glass" style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '40px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    background: 'rgba(99, 102, 241, 0.05)'
                }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.6', marginBottom: '24px', fontStyle: 'italic' }}>
                        "Aaryan Editz transformed our wedding footage into something we'll cherish forever. Truly exceptional quality and professionalism."
                    </div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: '600', color: 'var(--primary)' }}>
                        — Priya & Rahul, Mumbai
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
