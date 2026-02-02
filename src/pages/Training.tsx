import React from 'react';
import { Check, CheckCircle, Award, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Training: React.FC = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                {/* Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 64px', textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 20px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        borderRadius: '50px',
                        marginBottom: '24px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#818cf8'
                    }}>
                        <Award size={14} />
                        Professional Certification
                    </div>

                    <h1 className="section-title">Video Editing <span className="gradient-text">Training</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
                        Master industry-standard tools and techniques. From zero to professional video editor in months.
                    </p>
                </div>

                {/* Courses Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '32px',
                    maxWidth: '1000px',
                    margin: '0 auto 80px'
                }}>
                    {/* Short Term Course */}
                    <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', position: 'relative', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '32px' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'var(--text-primary)',
                                borderRadius: '100px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                marginBottom: '24px'
                            }}>
                                2 Months Duration
                            </span>
                            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>Short-Term Course</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '8px', color: 'white' }}>
                                ₹30,000
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>Perfect for quick learning and immediate start.</p>
                        </div>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', flex: 1 }}>
                            {[
                                'Master Premiere Pro & After Effects',
                                'Focus on Video Editing & Motion Graphics',
                                '100% Job Guarantee',
                                'OR Freelancing Career Training',
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--text-primary)' }}>
                                    <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Check size={14} color="white" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Enroll Now
                        </Link>
                    </div>

                    {/* Long Term Course */}
                    <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', position: 'relative', border: '1px solid var(--primary)', background: 'linear-gradient(145deg, rgba(99, 102, 241, 0.1) 0%, rgba(10, 10, 10, 0.4) 100%)', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', padding: '4px 16px', borderRadius: '100px', fontSize: '0.875rem', fontWeight: '700', color: 'white' }}>
                            RECOMMENDED
                        </div>
                        <div style={{ marginBottom: '32px' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                background: 'rgba(99, 102, 241, 0.2)',
                                color: 'var(--primary)',
                                borderRadius: '100px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                marginBottom: '24px'
                            }}>
                                5 Months Duration
                            </span>
                            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>Long-Term Course</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '8px', color: 'white' }}>
                                ₹50,000
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>Complete career transformation package.</p>
                        </div>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', flex: 1 }}>
                            {[
                                'Everything in Short-Term Course',
                                'Extended Internship Program',
                                'Advanced Freelancing Training',
                                'Real-time Project Experience',
                                'Portfolio Building',
                                'Guaranteed Job Placement'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--text-primary)' }}>
                                    <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Check size={14} color="white" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Enroll Now
                        </Link>
                    </div>
                </div>

                {/* Benefits */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                    gap: '20px',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {[
                        { icon: <Award />, title: "Certified Training", desc: "Industry-recognized certificates" },
                        { icon: <Users />, title: "Personal Mentorship", desc: "One-on-one guidance" },
                        { icon: <Briefcase />, title: "Job Guarantee", desc: "Real client projects" },
                    ].map((item, i) => (
                        <div key={i} className="glass" style={{
                            padding: '24px',
                            borderRadius: '12px',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                margin: '0 auto 16px'
                            }}>
                                {item.icon}
                            </div>
                            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h4>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Training;
