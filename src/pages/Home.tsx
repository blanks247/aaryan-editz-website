import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle, Video, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import weddingImg from '../assets/wedding.png';
import socialImg from '../assets/social.png';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 20px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                borderRadius: '50px',
                                marginBottom: '32px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                color: '#818cf8'
                            }}>
                                <Play size={14} fill="currentColor" />
                                Professional Video & Photo Editing Platform
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                                fontWeight: '800',
                                lineHeight: '1.1',
                                marginBottom: '24px',
                                letterSpacing: '-0.02em'
                            }}>
                                Master Video Editing &<br />
                                <span className="gradient-text">Launch Your Career</span>
                            </h1>

                            <p style={{
                                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                color: 'var(--text-secondary)',
                                marginBottom: '40px',
                                lineHeight: '1.6',
                                maxWidth: '700px',
                                margin: '0 auto 40px'
                            }}>
                                Learn Adobe Premiere Pro & After Effects from industry experts. Get hands-on training and start earning through real client projects.
                            </p>

                            <div style={{
                                display: 'flex',
                                gap: '16px',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginBottom: '64px'
                            }}>
                                <Link to="/training" className="btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                                    Start Learning <ArrowRight size={20} />
                                </Link>
                                <Link to="/contact" className="btn-outline" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                                    Book Consultation
                                </Link>
                            </div>

                            {/* Hero Image */}
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                marginBottom: '48px'
                            }}>
                                <img src={heroImg} alt="Professional Editing Workspace" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>

                            {/* Stats */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '32px',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                {[
                                    { number: '500+', label: 'Trained Students' },
                                    { number: '1000+', label: 'Projects Delivered' },
                                    { number: '98%', label: 'Success Rate' }
                                ].map((stat, i) => (
                                    <div key={i} style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>
                                            {stat.number}
                                        </div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section style={{ paddingTop: '80px', paddingBottom: '80px', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <h2 className="section-title">Our Services</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Professional editing solutions for every need
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px'
                    }}>
                        {[
                            {
                                title: 'Wedding Cinematography',
                                desc: 'Transform raw footage into cinematic memories',
                                image: weddingImg,
                                icon: <Video className="text-primary" />
                            },
                            {
                                title: 'Social Media Content',
                                desc: 'Instagram Reels & YouTube Shorts that go viral',
                                image: socialImg,
                                icon: <Users className="text-primary" />
                            },
                            {
                                title: 'Professional Training',
                                desc: 'Master editing tools with expert guidance',
                                image: heroImg,
                                icon: <Award className="text-primary" />
                            }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -8 }}
                                className="glass"
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        {service.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6' }}>{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '48px' }}>
                        <Link to="/services" className="btn-outline">
                            View All Services <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '48px' }}>Why Choose Aaryan Editz</h2>

                        <div style={{ display: 'grid', gap: '24px' }}>
                            {[
                                { title: 'Industry Expert Instructors', desc: 'Learn from professionals with 10+ years of experience' },
                                { title: '100% Job Guarantee', desc: 'Get placed in real projects immediately after training' },
                                { title: 'Lifetime Support', desc: 'Access to our community and mentorship forever' },
                                { title: 'Learn by Doing', desc: 'Work on real client projects during your training' }
                            ].map((item, i) => (
                                <div key={i} className="glass" style={{
                                    padding: '24px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'start'
                                }}>
                                    <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ paddingTop: '80px', paddingBottom: '80px', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="glass" style={{
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        borderRadius: '24px',
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        background: 'rgba(99, 102, 241, 0.05)'
                    }}>
                        <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '16px' }}>
                            Ready to Start Your Journey?
                        </h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                            Join hundreds of successful students who transformed their passion into a profitable career
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
                                Book Free Consultation
                            </Link>
                            <Link to="/portfolio" className="btn-outline" style={{ padding: '1rem 2.5rem' }}>
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
