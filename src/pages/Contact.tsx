import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import contactImg from '../assets/contact.png';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // EmailJS Configuration
            // Sign up at https://www.emailjs.com/ and replace these values:
            const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
            const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
            const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

            await emailjs.send(
                serviceID,
                templateID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    interest: formData.interest,
                    message: formData.message,
                    to_email: 'sagarsaikolla@gmail.com' // Your receiving email
                },
                publicKey
            );

            setStatus('success');
            setFormData({ name: '', email: '', interest: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Email send failed:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // WhatsApp number (format: country code + number without + or spaces)
    const whatsappNumber = '917286042944'; // Company WhatsApp number
    const whatsappMessage = encodeURIComponent('Hello Aaryan Editz! I would like to inquire about your services.');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                {/* Header */}
                <div style={{ maxWidth: '700px', margin: '0 auto 64px', textAlign: 'center' }}>
                    <h1 className="section-title">Get In Touch</h1>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Ready to start your editing journey or need professional services? We're here to help.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: '40px',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Left: Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {/* Image */}
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            aspectRatio: '16/10',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}>
                            <img src={contactImg} alt="Contact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Contact Cards */}
                        <div style={{ display: 'grid', gap: '16px' }}>
                            {[
                                { icon: <Mail className="text-primary" size={20} />, label: 'Email', value: 'sagarsaikolla@gmail.com', link: 'mailto:sagarsaikolla@gmail.com' },
                                { icon: <Phone className="text-primary" size={20} />, label: 'Phone', value: '+91 7286042944', link: 'tel:+917286042944' },
                                { icon: <MapPin className="text-primary" size={20} />, label: 'Location', value: 'Ameerpet, Hyderabad', link: 'https://maps.app.goo.gl/1U67dznTDWv5qA126' }
                            ].map((item, i) => (
                                <div key={i} className="glass" style={{
                                    padding: '20px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'center',
                                    cursor: item.link ? 'pointer' : 'default'
                                }} onClick={() => item.link && window.open(item.link, '_blank')}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        background: 'rgba(99, 102, 241, 0.1)',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', fontWeight: '600' }}>
                                            {item.label}
                                        </div>
                                        <div style={{ fontSize: '0.9375rem', fontWeight: '500' }}>
                                            {item.value}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* WhatsApp Button */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass"
                                style={{
                                    padding: '20px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    border: '1px solid rgba(37, 211, 102, 0.3)',
                                    background: 'rgba(37, 211, 102, 0.05)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)';
                                    e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.3)';
                                }}
                            >
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    background: '#25D366',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <MessageCircle size={20} color="white" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', fontWeight: '600' }}>
                                        WHATSAPP
                                    </div>
                                    <div style={{ fontSize: '0.9375rem', fontWeight: '500', color: '#25D366' }}>
                                        Chat with us instantly
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="glass" style={{
                        padding: '40px',
                        borderRadius: '16px',
                        border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>Send us a Message</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.9375rem' }}>
                            Fill out the form and we'll get back within 24 hours
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Name & Email */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        style={{
                                            width: '100%',
                                            padding: '12px 16px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontSize: '0.9375rem',
                                            outline: 'none',
                                            transition: 'all 0.2s'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        style={{
                                            width: '100%',
                                            padding: '12px 16px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontSize: '0.9375rem',
                                            outline: 'none',
                                            transition: 'all 0.2s'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                                    />
                                </div>
                            </div>

                            {/* Service */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                                    I'm Interested In *
                                </label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '8px',
                                        color: 'white',
                                        fontSize: '0.9375rem',
                                        outline: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="">Select a Service</option>
                                    <option value="Wedding Video Editing">Wedding Video Editing</option>
                                    <option value="Social Media Content">Social Media Content</option>
                                    <option value="Professional Training">Professional Training</option>
                                    <option value="Freelance Partnership">Freelance Partnership</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell us about your project or goals..."
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '8px',
                                        color: 'white',
                                        fontSize: '0.9375rem',
                                        outline: 'none',
                                        resize: 'vertical',
                                        fontFamily: 'inherit',
                                        lineHeight: '1.6'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                                ></textarea>
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div style={{
                                    padding: '12px 16px',
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    borderRadius: '8px',
                                    color: '#22c55e',
                                    fontSize: '0.875rem'
                                }}>
                                    ✓ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div style={{
                                    padding: '12px 16px',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: '8px',
                                    color: '#ef4444',
                                    fontSize: '0.875rem'
                                }}>
                                    ✗ Failed to send message. Please try WhatsApp or email directly.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    padding: '14px',
                                    opacity: status === 'sending' ? 0.7 : 1,
                                    cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </button>

                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '8px' }}>
                                Note: To enable email functionality, configure EmailJS in the Contact.tsx file
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    bottom: '32px',
                    right: '32px',
                    width: '60px',
                    height: '60px',
                    background: '#25D366',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
                    cursor: 'pointer',
                    zIndex: 1000,
                    transition: 'transform 0.3s ease',
                    animation: 'pulse 2s infinite'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <MessageCircle size={28} color="white" />
            </a>

            <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.6); }
        }
      `}</style>
        </div>
    );
};

export default Contact;
