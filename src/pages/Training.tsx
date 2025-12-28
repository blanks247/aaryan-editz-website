import React from 'react';
import { CheckCircle, Award, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Training: React.FC = () => {
    const courses = [
        {
            title: "Adobe Premiere Pro Mastery",
            duration: "8 Weeks",
            level: "Beginner to Pro",
            modules: ["Interface & Workspace", "Advanced Cutting Techniques", "Color Grading Mastery", "Audio Engineering", "Export Optimization"]
        },
        {
            title: "After Effects & Motion Graphics",
            duration: "10 Weeks",
            level: "Intermediate",
            modules: ["Core Fundamentals", "Typography Animation", "Advanced Compositing", "3D Camera Tracking", "Plugin Ecosystem"]
        }
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                {/* Header */}
                <div style={{ maxWidth: '700px', margin: '0 auto 64px', textAlign: 'center' }}>
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
                        Industry-Certified Training
                    </div>

                    <h1 className="section-title">Professional Video Editing Training</h1>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Learn from industry experts and start your freelance career with guaranteed project placements
                    </p>
                </div>

                {/* Benefits */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                    gap: '20px',
                    marginBottom: '64px'
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

                {/* Courses */}
                <div style={{ maxWidth: '900px', margin: '0 auto 64px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '32px', textAlign: 'center' }}>
                        Our <span className="gradient-text">Training Programs</span>
                    </h2>

                    <div style={{ display: 'grid', gap: '32px' }}>
                        {courses.map((course, i) => (
                            <div key={i} className="glass" style={{
                                padding: '32px',
                                borderRadius: '16px',
                                border: '1px solid rgba(99, 102, 241, 0.15)'
                            }}>
                                <div style={{ marginBottom: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '16px', marginBottom: '12px' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{course.title}</h3>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '4px' }}>{course.level}</div>
                                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{course.duration}</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
                                    {course.modules.map((module, mi) => (
                                        <div key={mi} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                            <CheckCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                                            <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{module}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="btn-primary">
                                    Download Curriculum <ArrowRight size={18} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="glass" style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '48px 32px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    background: 'rgba(99, 102, 241, 0.05)'
                }}>
                    <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '16px' }}>
                        Ready to Start?
                    </h3>
                    <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>
                        Join the next batch and begin your journey to becoming a professional video editor
                    </p>
                    <Link to="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>
                        Enroll Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Training;
