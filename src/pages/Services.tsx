import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section, Container } from '../components/Layout';
import Button from '../components/Button';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
    const navigate = useNavigate();
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    const theme = {
        bg: '#213232',
        accent: '#6BFF8E',
        text: '#FFFFFF',
        muted: '#CFCFD6'
    };

    const servicesList = [
        {
            title: 'STRATEGY',
            subtitle: 'THE BLUEPRINT',
            desc: 'We don’t guess. We research, defining your unique position in the market so you can dominate it.'
        },
        {
            title: 'IDENTITY',
            subtitle: 'THE FACE',
            desc: 'Logos are cheap. Legacy is built on systems. We design comprehensive visual languages that scream authority.'
        },
        {
            title: 'DIGITAL',
            subtitle: 'THE ENGINE',
            desc: 'Websites that look like art and sell like machines. High performance, zero fluff, maximum conversion.'
        },
        {
            title: 'CONTENT',
            subtitle: 'THE VOICE',
            desc: 'Copy that converts. Visuals that stop the scroll. We tell your story the way it matches your ambition.'
        }
    ];

    return (
        <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: theme.text }}>
            <Section style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
                <Container>
                    {/* Massive Header */}
                    <h1 style={{
                        fontSize: 'clamp(4rem, 8vw, 7rem)',
                        lineHeight: 0.85,
                        marginBottom: '6rem',
                        fontFamily: "'Bebas Neue', sans-serif",
                        textTransform: 'uppercase'
                    }}>
                        We Don't Do "Full Service." <br />
                        <span style={{ color: theme.accent }}>We Do What Matters.</span>
                    </h1>

                    {/* Manifesto List */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {servicesList.map((service, index) => (
                            <div
                                key={index}
                                style={{
                                    borderTop: '1px solid rgba(255,255,255,0.1)',
                                    padding: '4rem 0',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s ease'
                                }}
                                onMouseEnter={() => setHoveredService(index)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>

                                    {/* Number */}
                                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: theme.accent, opacity: 0.8 }}>
                                        0{index + 1}
                                    </span>

                                    {/* Title */}
                                    <h2 style={{
                                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                                        margin: 0,
                                        lineHeight: 0.9,
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        color: hoveredService === index ? theme.accent : 'white',
                                        transition: 'color 0.3s ease',
                                        flex: 1
                                    }}>
                                        {service.title}
                                    </h2>

                                    {/* Description */}
                                    <div style={{ maxWidth: '400px', paddingTop: '1rem' }}>
                                        <h4 style={{
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: '1.5rem',
                                            marginBottom: '1rem',
                                            color: theme.muted
                                        }}>
                                            {service.subtitle}
                                        </h4>
                                        <p style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: '1.1rem',
                                            lineHeight: 1.5,
                                            color: theme.muted,
                                            opacity: hoveredService === index ? 1 : 0.6,
                                            transition: 'opacity 0.3s'
                                        }}>
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div style={{
                                        transform: hoveredService === index ? 'rotate(45deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.4s ease',
                                        color: theme.accent
                                    }}>
                                        <ArrowUpRight size={48} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}></div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section style={{ padding: '8rem 0' }}>
                <Container style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '2rem' }}>
                        SEE THE WORK
                    </h2>
                    <Button size="lg" style={{
                        backgroundColor: 'transparent',
                        border: `1px solid ${theme.accent}`,
                        color: theme.accent
                    }} onClick={() => navigate('/work')}>
                        VIEW PORTFOLIO
                    </Button>
                </Container>
            </Section>
        </div>
    );
};

export default Services;
