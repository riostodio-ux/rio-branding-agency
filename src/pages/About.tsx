import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Section, Container } from '../components/Layout';
import Button from '../components/Button';

const About = () => {
    const navigate = useNavigate();
    const theme = {
        bg: '#213232',
        accent: '#6BFF8E',
        text: '#FFFFFF',
        muted: '#CFCFD6'
    };

    return (
        <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: theme.text }}>
            <Section style={{ paddingTop: '14rem', paddingBottom: '6rem' }} className="about-header-section">
                <style>{`
                    @media (max-width: 768px) {
                        .about-header-section {
                            padding-top: 14rem !important;
                        }
                    }
                `}</style>
                <Container>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(5rem, 10vw, 9rem)',
                            lineHeight: '0.85',
                            marginBottom: '4rem',
                            fontFamily: "'Bebas Neue', sans-serif",
                            textTransform: 'uppercase'
                        }}
                    >
                        We Don't Just Design. <br />
                        <span style={{ color: theme.accent }}>We Define.</span>
                    </motion.h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: "'Bebas Neue', sans-serif", color: theme.text }}>THE TRUTH</h3>
                            <p style={{ color: theme.muted, fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.5', fontFamily: "'Inter', sans-serif", maxWidth: '500px' }}>
                                Most agencies play it safe. They give you what you ask for, not what you need.
                                <br /><br />
                                <strong>Rio is different.</strong> We aren't here to fill space. We're here to take yours.
                                We build brands that mandate attention, clear the noise, and establish authority from day one.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                padding: '3rem',
                                borderRadius: '0',
                                borderLeft: `2px solid ${theme.accent}`
                            }}
                        >
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: "'Bebas Neue', sans-serif" }}>OUR CODE</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    'Clarity over Cleverness',
                                    'Impact over Volume',
                                    'Strategy before Pixels',
                                    'Confidence is Currency'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                                        <div style={{ width: '8px', height: '8px', background: theme.accent, borderRadius: '50%' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* MANIFESTO STRIP */}
            <Section style={{ backgroundColor: 'black', padding: '4rem 0' }}>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        {['NO TEMPLATES', 'NO BULLSHIT', 'NO LIMITS'].map((text, i) => (
                            <span key={i} style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: '2rem',
                                color: 'rgba(255,255,255,0.5)',
                                letterSpacing: '2px'
                            }}>{text}</span>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section style={{ padding: '8rem 0' }}>
                <Container style={{ textAlign: 'left', maxWidth: '800px', marginLeft: 0 }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.9 }}>
                        Ready to Stop <span style={{ color: theme.muted }}>Whispering?</span>
                    </h2>
                    <Button size="lg" style={{ backgroundColor: theme.accent, color: theme.bg, fontSize: '1.25rem', padding: '1rem 3rem' }} onClick={() => navigate('/contact')}>GET LOUD</Button>
                </Container>
            </Section>
        </div>
    );
};

export default About;
