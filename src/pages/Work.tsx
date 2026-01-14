import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Section, Container } from '../components/Layout';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';

// Assets
import ProjectPayflow from '../assets/project-payflow.jpg';
import ProjectDataminder from '../assets/project-dataminder.jpg';

const Work = () => {
    const navigate = useNavigate();
    const theme = {
        bg: '#213232',
        accent: '#6BFF8E',
        text: '#FFFFFF',
        muted: '#CFCFD6'
    };

    const projects = [
        {
            client: 'APEX FINANCE',
            slug: 'apex-finance',
            desc: 'Redefining trust for the decentralized economy.',
            year: '2026',
            tags: ['Branding', 'Web Design'],
            img: ProjectPayflow
        },
        {
            client: 'NEBULA AI',
            slug: 'nebula-ai',
            desc: 'The face of invisible intelligence.',
            year: '2025',
            tags: ['Identity', '3D Motion'],
            img: ProjectDataminder
        },
        {
            client: 'VELOCE',
            slug: 'veloce',
            desc: 'Speed, dust, and luxury automotive design.',
            year: '2026',
            tags: ['Web Design', 'Strategy'],
            img: ProjectPayflow // Reused as placeholder
        }
    ];

    return (
        <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: theme.text }}>

            {/* Header */}
            <Section style={{ paddingTop: '14rem', paddingBottom: '4rem' }} className="work-header-section">
                <style>{`
                    @media (max-width: 768px) {
                        .work-header-section {
                            padding-top: 14rem !important;
                        }
                    }
                `}</style>
                <Container>
                    <h1 style={{
                        fontSize: 'clamp(5rem, 10vw, 11rem)',
                        lineHeight: 0.8,
                        marginBottom: '4rem',
                        fontFamily: "'Bebas Neue', sans-serif",
                        color: theme.text
                    }}>
                        SELECTED <br />
                        <span style={{
                            color: theme.accent
                        }}>WORK.</span>
                    </h1>
                    <p style={{
                        color: theme.muted,
                        fontSize: '1.25rem',
                        maxWidth: '500px',
                        lineHeight: 1.5,
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        We don't fill portfolios. We build case studies that define categories.
                    </p>
                </Container>
            </Section>

            {/* Projects */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            padding: '6rem 0',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        className="project-row"
                    >
                        <Container>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                                {/* Text Info */}
                                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                    <div style={{
                                        fontSize: '1.2rem',
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        marginBottom: '1rem',
                                        color: theme.accent,
                                        letterSpacing: '1px'
                                    }}>
                                        {project.year} — {project.tags.join(' + ')}
                                    </div>
                                    <h2 style={{
                                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                                        lineHeight: 0.9,
                                        marginBottom: '2rem',
                                        fontFamily: "'Bebas Neue', sans-serif"
                                    }}>
                                        {project.client}
                                    </h2>
                                    <p style={{
                                        fontSize: '1.5rem',
                                        color: theme.muted,
                                        maxWidth: '450px',
                                        fontFamily: "'Inter', sans-serif",
                                        lineHeight: 1.4,
                                        marginBottom: '3rem'
                                    }}>
                                        {project.desc}
                                    </p>

                                    <Link to={`/work/${project.slug}`} style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        fontWeight: 600,
                                        fontFamily: "'Inter', sans-serif",
                                        color: theme.text,
                                        borderBottom: `1px solid ${theme.accent}`,
                                        paddingBottom: '0.25rem',
                                        cursor: 'pointer',
                                        textDecoration: 'none'
                                    }}>
                                        View Case Study <ArrowUpRight size={18} color={theme.accent} />
                                    </Link>
                                </div>

                                {/* Visual Preview */}
                                <div style={{
                                    order: index % 2 === 0 ? 2 : 1,
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    aspectRatio: '16/10',
                                    backgroundColor: '#1a1a1a'
                                }}>
                                    <img src={project.img} alt={project.client} style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%) contrast(1.1)',
                                        transition: 'all 0.6s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.filter = 'grayscale(0%) contrast(1)';
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1)';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    />
                                </div>
                            </div>
                        </Container>
                    </motion.div>
                ))}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
            </div>

            {/* CTA */}
            <Section style={{ padding: '8rem 0', textAlign: 'center' }}>
                <Container>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontFamily: "'Bebas Neue', sans-serif",
                        marginBottom: '2rem',
                        lineHeight: 1
                    }}>
                        Ready to be our next <br /><span style={{ color: theme.accent }}>Success Story?</span>
                    </h2>
                    <Button size="lg" style={{ backgroundColor: theme.accent, color: theme.bg }} onClick={() => navigate('/contact')}>GET STARTED</Button>
                </Container>
            </Section>
        </div>
    );
};

export default Work;
