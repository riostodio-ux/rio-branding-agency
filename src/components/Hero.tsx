import { Container } from './Layout';
import Button from './Button';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();
    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>

            {/* Background Gradients (Subtle) */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(107, 255, 142, 0.08) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <Container style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '4rem' }}>

                {/* Subtle Label - Tighter spacing to headline */}
                <div
                    className="animate-fade-in"
                    style={{ marginBottom: '1.5rem' }}
                >
                    <span style={{
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '99px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'var(--color-primary)',
                        backgroundColor: 'rgba(255,255,255,0.03)'
                    }}>
                        Available for Q1 2026 Projects
                    </span>
                </div>

                {/* Main Headline - Massive, Tight, Reference Match */}
                <h1
                    className="text-huge animate-fade-in delay-100"
                    style={{
                        marginBottom: '2.5rem',
                        maxWidth: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontWeight: 600
                    }}
                >
                    WE BUILD THE <span style={{ color: 'var(--color-primary)' }}>BRAND.</span><br />
                    YOU BUILD THE BUSINESS.
                </h1>

                {/* Subhead - Body Text Style */}
                <p
                    className="animate-fade-in delay-200"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                        color: 'var(--color-text-muted)',
                        maxWidth: '520px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.7,
                        fontWeight: 400,
                        textTransform: 'none',
                        letterSpacing: 'normal'
                    }}
                >
                    We bridge the gap between "good design" and business growth.
                    Strategic branding & web design for companies ready to actually scale.
                </p>

                {/* CTAs - Matches Reference Rhythm */}
                <div
                    className="animate-fade-in delay-300 hero-cta-container"
                    style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}
                >
                    <Button size="lg" style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-bg-dark)',
                        padding: '1.25rem 3.5rem',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        borderRadius: '999px', // Full pill
                        boxShadow: '0 10px 30px rgba(137, 225, 171, 0.15)'
                    }} onClick={() => navigate('/work')}>
                        View Our Work
                    </Button>
                    <a href="/contact" style={{
                        color: 'var(--color-primary)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        borderBottom: '2px solid var(--color-primary)',
                        paddingBottom: '2px',
                        transition: 'all 0.2s',
                        letterSpacing: '0.02em'
                    }}>
                        Book a Strategy Call
                    </a>
                </div>

            </Container>
        </section>
    );
};

export default Hero;
