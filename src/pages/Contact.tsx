import { motion } from 'framer-motion';
import { Section, Container } from '../components/Layout';
import Button from '../components/Button';
import { useState } from 'react';

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwX08O2he_oIYLnwIuOBqYUPmg3wWClb5JVoamGzeFDxXyss8SfGm3rcmrWQiND_joh/exec";
const API_KEY = "rio_contact_9fA7kLQ2xZ81PpR4mS";

type ContactPayload = {
    name: string;
    email: string;
    message: string;
};

async function sendContact(payload: ContactPayload) {
    const res = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
            apiKey: API_KEY,
            ...payload,
        }),
    });

    const text = await res.text();
    const data = JSON.parse(text);

    if (data.result !== "success") {
        throw new Error(data.message || "Failed to send message");
    }
}

const Contact = () => {
    const theme = {
        bg: '#213232',
        accent: '#6BFF8E',
        text: '#FFFFFF',
        muted: '#CFCFD6'
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user types
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
        if (status === 'success' || status === 'error') setStatus('idle');
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
        e.preventDefault();

        let newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            setStatus('sending');
            try {
                await sendContact(formData);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset status after a delay
                setTimeout(() => setStatus('idle'), 5000);
            } catch (error) {
                console.error('Error sending form:', error);
                setStatus('error');
            }
        }
    };

    return (
        <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: theme.text }}>
            <Section style={{ paddingTop: '14rem', paddingBottom: '10rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="contact-header-section">
                <style>{`
                    @media (max-width: 768px) {
                        .contact-header-section {
                            padding-top: 14rem !important;
                        }
                    }
                `}</style>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>

                        {/* Left Side: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{
                                fontSize: 'clamp(5rem, 10vw, 8rem)',
                                lineHeight: 0.85,
                                marginBottom: '4rem',
                                fontFamily: "'Bebas Neue', sans-serif"
                            }}>
                                LET'S <br />
                                <span style={{ color: theme.accent }}>BUILD.</span>
                            </h1>

                            <p style={{
                                fontSize: '1.5rem',
                                lineHeight: '1.4',
                                marginBottom: '3rem',
                                maxWidth: '400px',
                                color: theme.muted,
                                fontFamily: "'Inter', sans-serif"
                            }}>
                                Serious inquiries only. We are typically booked 1-2 months in advance.
                            </p>

                            <a href="mailto:riostodio@gmail.com" style={{
                                fontSize: '2rem',
                                borderBottom: `2px solid ${theme.accent}`,
                                display: 'inline-block',
                                marginBottom: '4rem',
                                color: theme.text,
                                fontFamily: "'Bebas Neue', sans-serif"
                            }}>
                                riostodio@gmail.com
                            </a>

                            <div style={{ display: 'flex', gap: '4rem' }}>
                                <div>
                                    <div style={{ color: theme.accent, marginBottom: '0.5rem', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem' }}>OFFICE</div>
                                    <div style={{ fontSize: '1.1rem', fontFamily: "'Inter', sans-serif" }}>Los Angeles, CA</div>
                                </div>
                                <div>
                                    <div style={{ color: theme.accent, marginBottom: '0.5rem', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem' }}>SOCIAL</div>
                                    <div style={{ fontSize: '1.1rem', fontFamily: "'Inter', sans-serif" }}>@riobranding</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ paddingTop: '2rem' }}
                        >
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        minHeight: '400px',
                                        textAlign: 'center',
                                        border: `1px solid ${theme.accent}`,
                                        padding: '3rem'
                                    }}
                                >
                                    <h2 style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: '4rem',
                                        color: theme.accent,
                                        marginBottom: '1rem',
                                        lineHeight: 1
                                    }}>
                                        MESSAGE RECEIVED
                                    </h2>
                                    <p style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '1.25rem',
                                        color: theme.text,
                                        marginBottom: '2rem'
                                    }}>
                                        Thank you for reaching out. <br />
                                        We'll be in touch shortly.
                                    </p>
                                    <Button size="lg" style={{
                                        borderRadius: '0',
                                        backgroundColor: theme.text,
                                        color: theme.bg,
                                        padding: '1rem 3rem',
                                        cursor: 'pointer',
                                        fontSize: '1rem'
                                    }}
                                        onClick={() => setStatus('idle')}
                                    >
                                        SEND ANOTHER
                                    </Button>
                                </motion.div>
                            ) : (
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }} onSubmit={handleSubmit}>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="text"
                                            placeholder="YOUR NAME"
                                            value={formData.name}
                                            onChange={(e) => handleChange('name', e.target.value)}
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                borderBottom: `1px solid ${errors.name ? '#ff4d4d' : 'rgba(255,255,255,0.2)'}`,
                                                padding: '1.5rem 0',
                                                fontSize: '1.5rem',
                                                color: 'white',
                                                outline: 'none',
                                                width: '100%',
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                letterSpacing: '1px',
                                                transition: 'border-color 0.3s'
                                            }}
                                        />
                                        {errors.name && <span style={{ color: '#ff4d4d', fontSize: '0.9rem', position: 'absolute', bottom: '-1.5rem', left: 0, fontFamily: "'Inter', sans-serif" }}>{errors.name}</span>}
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="email"
                                            placeholder="YOUR EMAIL"
                                            value={formData.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                borderBottom: `1px solid ${errors.email ? '#ff4d4d' : 'rgba(255,255,255,0.2)'}`,
                                                padding: '1.5rem 0',
                                                fontSize: '1.5rem',
                                                color: 'white',
                                                outline: 'none',
                                                width: '100%',
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                letterSpacing: '1px',
                                                transition: 'border-color 0.3s'
                                            }}
                                        />
                                        {errors.email && <span style={{ color: '#ff4d4d', fontSize: '0.9rem', position: 'absolute', bottom: '-1.5rem', left: 0, fontFamily: "'Inter', sans-serif" }}>{errors.email}</span>}
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <textarea
                                            rows={4}
                                            placeholder="TELL US ABOUT THE PROJECT"
                                            value={formData.message}
                                            onChange={(e) => handleChange('message', e.target.value)}
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                borderBottom: `1px solid ${errors.message ? '#ff4d4d' : 'rgba(255,255,255,0.2)'}`,
                                                padding: '1.5rem 0',
                                                fontSize: '1.5rem',
                                                color: 'white',
                                                outline: 'none',
                                                width: '100%',
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                letterSpacing: '1px',
                                                resize: 'none',
                                                transition: 'border-color 0.3s'
                                            }}
                                        />
                                        {errors.message && <span style={{ color: '#ff4d4d', fontSize: '0.9rem', position: 'absolute', bottom: '-1.5rem', left: 0, fontFamily: "'Inter', sans-serif" }}>{errors.message}</span>}
                                    </div>

                                    <div style={{ marginTop: '2rem' }}>
                                        <Button size="lg" style={{
                                            borderRadius: '0',
                                            backgroundColor: status === 'success' ? '#6BFF8E' : (status === 'error' ? '#ff4d4d' : theme.text),
                                            color: status === 'success' ? '#213232' : theme.bg,
                                            width: '100%',
                                            fontSize: '1.25rem',
                                            padding: '1.5rem',
                                            cursor: status === 'sending' ? 'wait' : 'pointer',
                                            opacity: status === 'sending' ? 0.7 : 1
                                        }}
                                            onClick={(e: React.MouseEvent) => handleSubmit(e)}
                                            disabled={status === 'sending'}
                                        >
                                            {status === 'sending' ? 'SENDING...' : (status === 'success' ? 'MESSAGE SENT' : (status === 'error' ? 'ERROR - TRY AGAIN' : 'SEND INQUIRY'))}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Contact;
