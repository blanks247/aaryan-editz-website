import React, { useState } from 'react';
import {
    Target, Share2, Search, Zap,
    MessageCircle, Monitor, ArrowRight, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetail {
    title: string;
    description: string;
}

interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: React.ReactNode;
    features: ServiceDetail[];
    cta: string;
    ctaLink: string; // usually /contact
}

const Services: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const services: Service[] = [
        {
            id: 'digital-strategy',
            title: "Digital Strategy",
            shortDescription: "We create a clear digital roadmap aligned with your business goals, ensuring every campaign delivers real impact and measurable growth.",
            fullDescription: "In a crowded digital landscape, hope is not a strategy. We build comprehensive execution roadmaps that align your brand objectives with market opportunities. Our strategic framework ensures every dollar spent contributes to tangible business growth.",
            icon: <Target size={32} />,
            features: [
                { title: "Market Research", description: "Deep dive analysis of your industry, competitors, and target audience behavior." },
                { title: "Brand Positioning", description: "Defining your unique value proposition and voice in the market." },
                { title: "Execution Roadmap", description: "Step-by-step quarterly plans aligned with your revenue goals." },
                { title: "KPI Definition", description: "Setting clear, measurable metrics to track success and ROI." }
            ],
            cta: "Build your roadmap",
            ctaLink: "/contact"
        },
        {
            id: 'social-media',
            title: "Social Media Marketing",
            shortDescription: "We plan, create, and manage social media campaigns that build brand presence, engage audiences, and drive consistent leads.",
            fullDescription: "Social media is where brands build relationships, not just visibility. We manage your social presence with a focus on consistency, engagement, and meaningful growth that supports real business outcomes.",
            icon: <Share2 size={32} />,
            features: [
                { title: "Content Planning", description: "We create platform-specific content strategies aligned with your brand voice and audience behaviour." },
                { title: "Creative Execution", description: "From posts to reels and stories, we develop visuals and messaging that stop the scroll and spark interest." },
                { title: "Community Engagement", description: "We help brands build trust by responding, engaging, and nurturing conversations with their audience." },
                { title: "Performance Tracking", description: "We analyze reach, engagement, and conversions to continuously refine what works best." }
            ],
            cta: "Build your brand socially",
            ctaLink: "/contact"
        },
        {
            id: 'seo',
            title: "Search Engine Optimization (SEO)",
            shortDescription: "Boost your website visibility and rank higher on Google with data-driven SEO strategies that bring long-term organic traffic.",
            fullDescription: "Visibility is power in the digital world. Our SEO service helps your business get found by the right audience at the right time, driving consistent and high-quality organic traffic.",
            icon: <Search size={32} />,
            features: [
                { title: "Website Optimization", description: "We improve site structure, speed, and on-page elements to meet search engine best practices." },
                { title: "Keyword Strategy", description: "We identify search terms that attract intent-driven traffic, not just vanity rankings." },
                { title: "Content Optimization", description: "We align website content with search demand to improve relevance and authority." },
                { title: "Performance Monitoring", description: "We track rankings and traffic to ensure continuous improvement and stability." }
            ],
            cta: "Improve your search presence",
            ctaLink: "/contact"
        },
        {
            id: 'performance-marketing',
            title: "Performance Marketing",
            shortDescription: "ROI-focused advertising using Google Ads and Meta Ads to generate quality leads, sales, and scalable growth.",
            fullDescription: "Every campaign should deliver measurable returns. Our performance marketing focuses on generating leads, sales, and growth through data-backed advertising strategies.",
            icon: <Zap size={32} />,
            features: [
                { title: "Paid Advertising", description: "We manage Google Ads and social media ads with precision targeting and budget efficiency." },
                { title: "Funnel Optimization", description: "We design ad journeys that guide users from awareness to conversion smoothly." },
                { title: "Data Analysis", description: "We track performance metrics to optimize campaigns in real time." },
                { title: "ROI Focus", description: "Every decision is driven by cost efficiency and measurable results." }
            ],
            cta: "Drive measurable results",
            ctaLink: "/contact"
        },
        {
            id: 'content-marketing',
            title: "Content & Engagement Marketing",
            shortDescription: "Powerful content that connects—videos, creatives, and copy designed to attract attention and build trust with your audience.",
            fullDescription: "Content is what defines your brand voice. We create meaningful content that educates, inspires, and builds long-term engagement with your audience.",
            icon: <MessageCircle size={32} />,
            features: [
                { title: "Brand Storytelling", description: "We craft narratives that communicate your values and purpose clearly." },
                { title: "Content Creation", description: "From videos and creatives to written content, we deliver assets that resonate." },
                { title: "Engagement Strategy", description: "We focus on interaction, retention, and audience connection—not just views." },
                { title: "Consistency Framework", description: "We maintain uniform messaging across platforms to strengthen brand recall." }
            ],
            cta: "Create content that connects",
            ctaLink: "/contact"
        },
        {
            id: 'web-development',
            title: "Website Design & Development",
            shortDescription: "High-performing, mobile-friendly websites built to attract, engage, and convert visitors into customers.",
            fullDescription: "Your website is your digital foundation. We build user-focused websites that balance design, performance, and functionality to convert visitors into customers.",
            icon: <Monitor size={32} />,
            features: [
                { title: "User Experience Design", description: "We design intuitive layouts that guide users effortlessly through your site." },
                { title: "Responsive Development", description: "Websites optimized for mobile, tablet, and desktop performance." },
                { title: "Conversion Optimization", description: "We structure pages to encourage inquiries, sign-ups, and actions." },
                { title: "Ongoing Support", description: "We ensure your website remains updated, secure, and scalable." }
            ],
            cta: "Start your project",
            ctaLink: "/contact"
        }
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
            <div className="container">
                {/* Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 80px', textAlign: 'center' }}>
                    <h1 className="section-title">Our Services</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Comprehensive digital solutions to scale your brand and drive business growth.
                    </p>
                </div>

                {/* Services Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '32px'
                }}>
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            whileHover={{ y: -8 }}
                            className="glass"
                            style={{
                                padding: '40px',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => setSelectedService(service)}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                marginBottom: '24px'
                            }}>
                                {service.icon}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>
                                {service.title}
                            </h3>

                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-secondary)',
                                lineHeight: '1.6',
                                marginBottom: '32px',
                                flex: 1
                            }}>
                                {service.shortDescription}
                            </p>

                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: 'var(--primary)',
                                    fontWeight: '600',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    padding: 0
                                }}
                            >
                                Read More <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Service Modal */}
                <AnimatePresence>
                    {selectedService && (
                        <>
                            {/* Modal Overlay Container */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 100,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '20px'
                                }}
                            >
                                {/* Backdrop */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0,0,0,0.8)',
                                        backdropFilter: 'blur(8px)'
                                    }}
                                    onClick={() => setSelectedService(null)}
                                />

                                {/* Modal Content */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        maxWidth: '800px',
                                        maxHeight: '90vh',
                                        background: 'var(--bg-secondary)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '24px',
                                        zIndex: 101,
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                    }}
                                >
                                    {/* Header */}
                                    <div style={{
                                        padding: '32px',
                                        borderBottom: '1px solid var(--border)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        background: 'var(--bg-primary)',
                                        flexShrink: 0
                                    }}>
                                        <div style={{ paddingRight: '40px' }}>
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                color: 'var(--primary)',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                fontSize: '0.9rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em'
                                            }}>
                                                {selectedService.icon} Service Detail
                                            </div>
                                            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', lineHeight: '1.2' }}>
                                                {selectedService.title}
                                            </h2>
                                        </div>
                                        <button
                                            onClick={() => setSelectedService(null)}
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                border: 'none',
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                color: 'var(--text-secondary)',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    {/* Body */}
                                    <div style={{
                                        padding: '32px',
                                        overflowY: 'auto',
                                        flex: 1
                                    }}>
                                        <p style={{
                                            fontSize: '1.125rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.7',
                                            marginBottom: '40px'
                                        }}>
                                            {selectedService.fullDescription}
                                        </p>

                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                            gap: '24px',
                                            marginBottom: '40px'
                                        }}>
                                            {selectedService.features.map((feature, idx) => (
                                                <div key={idx} style={{
                                                    background: 'rgba(255,255,255,0.03)',
                                                    padding: '24px',
                                                    borderRadius: '16px',
                                                    border: '1px solid rgba(255,255,255,0.05)'
                                                }}>
                                                    <h4 style={{
                                                        fontSize: '1.125rem',
                                                        fontWeight: '700',
                                                        marginBottom: '8px',
                                                        color: 'white'
                                                    }}>
                                                        {feature.title}
                                                    </h4>
                                                    <p style={{
                                                        fontSize: '0.9375rem',
                                                        color: 'var(--text-secondary)',
                                                        lineHeight: '1.6'
                                                    }}>
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{
                                            padding: '24px',
                                            background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
                                            borderRadius: '16px',
                                            border: '1px solid rgba(99, 102, 241, 0.2)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            gap: '16px'
                                        }}>
                                            <div>
                                                <div style={{ fontWeight: '700', fontSize: '1.125rem', marginBottom: '4px' }}>
                                                    Ready to get started?
                                                </div>
                                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                                                    Transform your business with our {selectedService.title} strategies.
                                                </div>
                                            </div>
                                            <Link
                                                to={selectedService.ctaLink}
                                                className="btn-primary"
                                                onClick={() => setSelectedService(null)}
                                            >
                                                {selectedService.cta} <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Services;
