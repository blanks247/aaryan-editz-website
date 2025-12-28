import React from 'react';
import { Camera, Instagram, Image, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import weddingImg from '../assets/wedding.png';
import socialImg from '../assets/social.png';
import photoImg from '../assets/photo.png';

const Services: React.FC = () => {
    const services = [
        {
            title: "Wedding & Event Editing",
            description: "Transform your special moments into cinematic masterpieces with professional wedding video editing. We handle everything from raw footage to final delivery.",
            image: weddingImg,
            icon: <Camera size={28} />,
            features: ["Cinematic Color Grading", "Multi-Camera Sync", "Sound Design", "Fast Turnaround"]
        },
        {
            title: "Social Media Content",
            description: "Boost your online presence with engaging Instagram Reels and YouTube Shorts that capture attention and drive engagement.",
            image: socialImg,
            icon: <Instagram size={28} />,
            features: ["Viral-Ready Edits", "Dynamic Captions", "Trending Effects", "Quick Delivery"]
        },
        {
            title: "Photo Retouching",
            description: "Professional photo editing services for portraits, products, and commercial photography with meticulous attention to detail.",
            image: photoImg,
            icon: <Image size={28} />,
            features: ["Skin Retouching", "Color Correction", "Background Removal", "Product Enhancement"]
        }
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                {/* Header */}
                <div style={{ maxWidth: '700px', margin: '0 auto 64px', textAlign: 'center' }}>
                    <h1 className="section-title">Professional Editing Services</h1>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Industry-leading video and photo editing solutions tailored to your needs
                    </p>
                </div>

                {/* Services */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', maxWidth: '1100px', margin: '0 auto' }}>
                    {services.map((service, idx) => (
                        <div key={idx} style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                            gap: '40px',
                            alignItems: 'center'
                        }}>
                            {/* Image */}
                            <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                                <div style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    aspectRatio: '16/10',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                                }}>
                                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    borderRadius: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    marginBottom: '24px'
                                }}>
                                    {service.icon}
                                </div>

                                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: '800', marginBottom: '16px', lineHeight: '1.2' }}>
                                    {service.title}
                                </h2>

                                <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '32px' }}>
                                    {service.features.map((feature, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                                            <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="btn-primary">
                                    Get a Quote <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ marginTop: '80px', textAlign: 'center', maxWidth: '600px', margin: '80px auto 0' }}>
                    <h3 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '16px' }}>
                        Need a Custom Solution?
                    </h3>
                    <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>
                        We offer tailored editing packages for businesses and content creators with unique requirements
                    </p>
                    <Link to="/contact" className="btn-outline">
                        Discuss Your Project
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
