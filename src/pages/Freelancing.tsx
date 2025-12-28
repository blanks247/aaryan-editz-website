import React from 'react';
import { Briefcase, Target, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import weddingImg from '../assets/wedding.png';

const Freelancing: React.FC = () => {
    const steps = [
        { number: "01", title: "Learn the Skills", desc: "Complete our professional training program", icon: <Target /> },
        { number: "02", title: "Build Portfolio", desc: "Work on practice projects and assignments", icon: <Briefcase /> },
        { number: "03", title: "Get Assignments", desc: "Receive real client projects from us", icon: <TrendingUp /> },
        { number: "04", title: "Start Earning", desc: "Get paid for your quality work", icon: <DollarSign /> }
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                {/* Header */}
                <div style={{ maxWidth: '700px', margin: '0 auto 64px', textAlign: 'center' }}>
                    <h1 className="section-title">From Learning to Earning</h1>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        We don't just teach you – we help you build a successful freelance career with guaranteed project opportunities
                    </p>
                </div>

                {/* Steps */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                    gap: '24px',
                    marginBottom: '80px'
                }}>
                    {steps.map((step, i) => (
                        <div key={i} className="glass" style={{
                            padding: '32px 24px',
                            borderRadius: '16px',
                            position: 'relative',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: '900',
                                color: 'rgba(99, 102, 241, 0.1)',
                                position: 'absolute',
                                top: '16px',
                                left: '16px',
                                lineHeight: '1'
                            }}>
                                {step.number}
                            </div>

                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                margin: '0 auto 20px',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {step.icon}
                            </div>

                            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '8px' }}>
                                {step.title}
                            </h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                    gap: '48px',
                    alignItems: 'center',
                    marginBottom: '80px'
                }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '24px', lineHeight: '1.2' }}>
                            Why Freelance<br />With <span className="gradient-text">Us?</span>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {[
                                { title: "Guaranteed Work", desc: "Top students get direct access to our client base" },
                                { title: "Quality Review", desc: "We review your work before client delivery" },
                                { title: "Premium Rates", desc: "Earn industry-standard rates from day one" },
                                { title: "Ongoing Support", desc: "Continuous mentorship as you grow" }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        background: 'var(--primary)',
                                        borderRadius: '50%',
                                        marginTop: '8px',
                                        flexShrink: 0
                                    }}></div>
                                    <div>
                                        <h4 style={{ fontSize: '1.0625rem', fontWeight: '600', marginBottom: '4px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/contact" className="btn-primary" style={{ marginTop: '32px' }}>
                            Join Our Network <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }}>
                        <img src={weddingImg} alt="Freelancer Success" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>

                {/* Testimonial */}
                <div className="glass" style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '40px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                }}>
                    <p style={{ fontSize: '1.125rem', fontWeight: '600', lineHeight: '1.6', marginBottom: '16px', fontStyle: 'italic' }}>
                        "I went from a complete beginner to handling professional projects in just 3 months. The mentorship and project support are unmatched."
                    </p>
                    <div style={{ fontSize: '0.9375rem', fontWeight: '600', color: 'var(--primary)' }}>
                        — Karan Verma, Freelance Editor
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freelancing;
