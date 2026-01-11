import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Section, Container } from '../components/Layout';
import { Check } from 'lucide-react';
import Button from '../components/Button';

const Process = () => {
    const navigate = useNavigate();
    const theme = {
        bg: '#213232',
        accent: '#6BFF8E',
        text: '#FFFFFF',
        muted: '#CFCFD6'
    };

    const steps = [
        {
            num: '01',
            title: 'IMMERSION',
            desc: 'We don’t start with design. We start with truth. We audit your market, question your assumptions, and find the gap everyone else missed.',
            deliverables: ['Brand Audit', 'Competitor Analysis', 'Stakeholder Interviews']
        },
        {
            num: '02',
            title: 'BLUEPRINT',
            desc: 'Strategy isn’t a document; it’s a war plan. We define exactly who you are, who you aren’t, and how you win.',
            deliverables: ['Positioning Strategy', 'Voice & Tone', 'Brand Architecture']
        },
        {
            num: '03',
            title: 'VISUALS',
            desc: 'We translate strategy into a visual language that can’t be ignored. Bold, cohesive, and scalable.',
            deliverables: ['Visual Identity', 'Motion System', 'Design Guidelines']
        },
        {
            num: '04',
            title: 'CODE',
            desc: 'Performance is non-negotiable. We build pixel-perfect, high-speed digital experiences that convert.',
            deliverables: ['Web Development', 'WebGL Interactions', 'CMS Integration']
        },
        {
            num: '05',
            title: 'LAUNCH',
            desc: 'We don’t just hand over files. We equip you to launch with impact and sustain momentum.',
            deliverables: ['Launch Strategy', 'Asset Handoff', 'Growth Support']
        }
    ];

    return (
        <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: theme.text }}>
            <Section style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
                <Container>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(4rem, 8vw, 7rem)',
                            lineHeight: '0.9',
                            maxWidth: '1200px',
                            fontFamily: "'Bebas Neue', sans-serif",
                            marginBottom: '6rem',
                            textTransform: 'uppercase'
                        }}
                    >
                        Trust the <span style={{ color: theme.accent }}>Process.</span><br />
                        Trust the <span style={{ WebkitTextStroke: `2px ${theme.accent}`, color: 'transparent' }}>Result.</span>
                    </motion.h1>
                </Container>
            </Section>

            <Container style={{ paddingBottom: '6rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '4rem',
                                padding: '4rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'rgba(255,255,255,0.02)',
                                alignItems: 'center'
                            }}
                        >
                            {/* Number & Title */}
                            <div>
                                <div style={{
                                    fontSize: '5rem',
                                    fontWeight: 400,
                                    color: 'rgba(255,255,255,0.1)',
                                    lineHeight: 0.8,
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    marginBottom: '1rem'
                                }}>{step.num}</div>
                                <h3 style={{
                                    fontSize: '3rem',
                                    marginBottom: '1.5rem',
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    color: theme.text
                                }}>{step.title}</h3>
                                <p style={{
                                    color: theme.muted,
                                    lineHeight: '1.6',
                                    fontSize: '1.2rem',
                                    maxWidth: '500px',
                                    fontFamily: "'Inter', sans-serif"
                                }}>{step.desc}</p>
                            </div>

                            {/* Deliverables */}
                            <div style={{ borderLeft: `1px solid ${theme.accent}`, paddingLeft: '2rem' }}>
                                <h4 style={{
                                    fontSize: '1.25rem',
                                    textTransform: 'uppercase',
                                    color: theme.accent,
                                    marginBottom: '1.5rem',
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    letterSpacing: '1px'
                                }}>Deliverables</h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {step.deliverables.map((item, i) => (
                                        <li key={i} style={{ color: theme.text, fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <Check size={16} color={theme.accent} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>

            <Section style={{ textAlign: 'center', padding: '10rem 0' }}>
                <Container>
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem', fontFamily: "'Bebas Neue', sans-serif" }}>Start Step 01 Today.</h2>
                    <Button size="lg" style={{ backgroundColor: theme.accent, color: theme.bg }} onClick={() => navigate('/contact')}>INITIATE PROJECT</Button>
                </Container>
            </Section>
        </div>
    );
};

export default Process;
