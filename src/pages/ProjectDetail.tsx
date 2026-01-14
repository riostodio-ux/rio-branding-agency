import { useParams, useNavigate } from 'react-router-dom';
import { Section, Container } from '../components/Layout';
import Button from '../components/Button';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

// Assets (reusing for demo)
import ProjectPayflow from '../assets/project-payflow.jpg';
import ProjectDataminder from '../assets/project-dataminder.jpg';

const projects: any = {
    'apex-finance': {
        client: 'APEX FINANCE',
        title: 'Redefining Trust for the Decentralized Economy',
        year: '2026',
        services: ['Branding', 'Web Design', 'Strategy'],
        desc: 'Apex Finance needed to bridge the gap between complex DeFi protocols and institutional investors. We created a visual identity that whispers "security" while shouting "innovation".',
        challenge: 'The DeFi space is cluttered with dark modes and neon gradients. Apex needed to look like a bank, not a discord server, while maintaining its crypto-native roots.',
        solution: 'We developed a design system based on Swiss typography and a muted, "fiat-friendly" color palette, juxtaposed with abstract 3D visualizations representing blockchain data.',
        img: ProjectPayflow
    },
    'nebula-ai': {
        client: 'NEBULA AI',
        title: 'The Face of Invisible Intelligence',
        year: '2025',
        services: ['Identity', '3D Motion', 'Product Design'],
        desc: 'Nebula is an AI infrastructure layer. They are everywhere and nowhere. Our job was to give form to the formless.',
        challenge: 'How do you brand a utility that exists solely in the background? The brand needed to feel ethereal yet grounded, powerful yet invisible.',
        solution: 'We focused on what Nebula *does* rather than what it *is*. The visual identity uses particle effects and fluid motion to represent data processing in real-time.',
        img: ProjectDataminder
    },
    'veloce': {
        client: 'VELOCE',
        title: 'Speed, Dust, and Luxury Automotive Design',
        year: '2026',
        services: ['Web Design', 'Strategy', 'Content Direction'],
        desc: 'Veloce builds bespoke off-road luxury vehicles. They sell freedom, not just cars.',
        challenge: 'Veloce needed a digital experience that matched the visceral feeling of driving their cars. Static images weren\'t enough.',
        solution: 'We built an immersive, WebGL-powered website where users can explore the vehicle in a 3D environment, complete with sound design and interactive technical specs.',
        img: ProjectPayflow
    }
};

const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projects[projectId || ''] || projects['apex-finance']; // Fallback

    const theme = {
        bg: '#213232',
        accent: '#6BFF8E',
        text: '#FFFFFF',
        muted: '#CFCFD6'
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) return <div>Project not found</div>;

    return (
        <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: theme.text }}>

            {/* Nav Back */}
            <div style={{ padding: '2rem', position: 'fixed', top: '6rem', left: 0, zIndex: 50 }}>
                <Button variant="glass" size="sm" onClick={() => navigate('/work')}>
                    <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Work
                </Button>
            </div>

            {/* Hero */}
            <Section style={{ paddingTop: '14rem', paddingBottom: '4rem' }} className="project-detail-header-section">
                <style>{`
                    @media (max-width: 768px) {
                        .project-detail-header-section {
                            padding-top: 14rem !important;
                        }
                    }
                `}</style>
                <Container>
                    <div style={{ color: theme.accent, fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '1px' }}>
                        {project.client} — {project.year}
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 6rem)',
                        lineHeight: 0.9,
                        fontFamily: "'Bebas Neue', sans-serif",
                        maxWidth: '900px',
                        marginBottom: '4rem'
                    }}>
                        {project.title}
                    </h1>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                        {project.services.map((s: string) => (
                            <span key={s} style={{
                                padding: '0.5rem 1rem',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '99px',
                                fontSize: '0.9rem',
                                color: theme.muted
                            }}>{s}</span>
                        ))}
                    </div>

                    <div style={{ width: '100%', height: '60vh', overflow: 'hidden', borderRadius: '4px' }}>
                        <img src={project.img} alt={project.client} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </Container>
            </Section>

            {/* Content */}
            <Section style={{ padding: '4rem 0 8rem' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '1.5rem', color: theme.accent }}>The Challenge</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: theme.muted, fontFamily: "'Inter', sans-serif" }}>
                                {project.challenge}
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '1.5rem', color: theme.accent }}>The Solution</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: theme.muted, fontFamily: "'Inter', sans-serif" }}>
                                {project.solution}
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <Container style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '2rem' }}>Ready to build your legacy?</h2>
                    <Button size="lg" style={{ backgroundColor: theme.accent, color: theme.bg }} onClick={() => navigate('/contact')}>Start Project</Button>
                </Container>
            </Section>
        </div>
    );
};

export default ProjectDetail;
