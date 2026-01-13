import { motion } from 'framer-motion';
import { Section, Container } from '../components/Layout';
import Button from '../components/Button';

const Contact = () => {
    const theme = {
        bg: '#213232',
        accent: '#6BFF8E',
        text: '#FFFFFF',
        muted: '#CFCFD6'
    };

    return (
        <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: theme.text }}>
            <Section style={{ padding: '10rem 0', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        placeholder="YOUR NAME"
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            borderBottom: '1px solid rgba(255,255,255,0.2)',
                                            padding: '1.5rem 0',
                                            fontSize: '1.5rem',
                                            color: 'white',
                                            outline: 'none',
                                            width: '100%',
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            letterSpacing: '1px'
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="YOUR EMAIL"
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            borderBottom: '1px solid rgba(255,255,255,0.2)',
                                            padding: '1.5rem 0',
                                            fontSize: '1.5rem',
                                            color: 'white',
                                            outline: 'none',
                                            width: '100%',
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            letterSpacing: '1px'
                                        }}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={4}
                                        placeholder="TELL US ABOUT THE PROJECT"
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            borderBottom: '1px solid rgba(255,255,255,0.2)',
                                            padding: '1.5rem 0',
                                            fontSize: '1.5rem',
                                            color: 'white',
                                            outline: 'none',
                                            width: '100%',
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            letterSpacing: '1px',
                                            resize: 'none'
                                        }}
                                    />
                                </div>

                                <div style={{ marginTop: '2rem' }}>
                                    <Button size="lg" style={{
                                        borderRadius: '0',
                                        backgroundColor: theme.text,
                                        color: theme.bg,
                                        width: '100%',
                                        fontSize: '1.25rem',
                                        padding: '1.5rem'
                                    }}>SEND INQUIRY</Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Contact;
