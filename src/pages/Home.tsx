import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Section, Container } from '../components/Layout';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Check, X, Star, ArrowRight, ArrowUpRight } from 'lucide-react';

// Assets
import BirdWeb from '../assets/bird-web-hd.png';
import BirdBrand from '../assets/bird-brand-hd.png';
import BirdMsg from '../assets/bird-msg-hd.png';
import BirdVis from '../assets/bird-vis-hd.png';
import ProjectPayflow from '../assets/project-payflow.jpg';
import ProjectDataminder from '../assets/project-dataminder.jpg';
import TeamAlex from '../assets/team-alex.jpg';
import TeamSarah from '../assets/team-sarah.jpg';
import TeamMichael from '../assets/team-michael.jpg';
import TeamJess from '../assets/team-jess.jpg';
import CtaZap from '../assets/cta-zap.jpg';


const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Hero />

            {/* TRUST STRIP - Ticker Style - Infinite Loop */}
            <div style={{ backgroundColor: 'var(--color-primary)', padding: '1.5rem 0', overflow: 'hidden', display: 'flex' }}>
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                    style={{ display: 'flex', whiteSpace: 'nowrap' }}
                >
                    <div style={{ display: 'inline-block', color: 'black', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', paddingRight: '2rem' }}>
                        ★ TRUSTED BY AMBITIOUS FOUNDERS ★ STARTUPS ★ GROWING BRANDS ★ NO FLUFF ★ PURE STRATEGY
                    </div>
                    <div style={{ display: 'inline-block', color: 'black', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', paddingRight: '2rem' }}>
                        ★ TRUSTED BY AMBITIOUS FOUNDERS ★ STARTUPS ★ GROWING BRANDS ★ NO FLUFF ★ PURE STRATEGY
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div style={{ display: 'inline-block', color: 'black', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', paddingRight: '2rem' }}>
                        ★ TRUSTED BY AMBITIOUS FOUNDERS ★ STARTUPS ★ GROWING BRANDS ★ NO FLUFF ★ PURE STRATEGY
                    </div>
                    <div style={{ display: 'inline-block', color: 'black', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', paddingRight: '2rem' }}>
                        ★ TRUSTED BY AMBITIOUS FOUNDERS ★ STARTUPS ★ GROWING BRANDS ★ NO FLUFF ★ PURE STRATEGY
                    </div>
                </motion.div>
            </div>

            <div className="section-divider"></div>

            {/* SERVICES SECTION - GAME STYLE */}
            <Section style={{ padding: '8rem 0', overflow: 'hidden' }}>
                <Container>
                    {/* Data Definition */}
                    {(() => {
                        const services = [
                            {
                                id: 'web',
                                pill: 'WEB DESIGN',
                                title: <>WEB <br /> DESIGN</>,
                                bird: BirdWeb,
                                birdConfig: {
                                    width: '125px',
                                    rotate: '4deg',
                                    hoverRotate: '2deg',
                                    delay: '0s'
                                },
                                // Force 3 lines visual
                                desc: 'A professional website, forged to help your business grow stronger and faster.',
                                items: ['Custom design', 'Mobile-friendly', 'Built to convert', 'Easy to update']
                            },
                            {
                                id: 'brand',
                                pill: 'BRANDING',
                                title: <>BRAND <br /> IDENTITY</>,
                                bird: BirdBrand,
                                birdConfig: {
                                    width: '125px',
                                    rotate: '-3deg',
                                    hoverRotate: '-1.5deg',
                                    delay: '-2s'
                                },
                                // Force 3 lines visual
                                desc: 'Your brand, sharpened and consistent across every front it faces.',
                                items: ['Logo design', 'Visual style', 'Style guide', 'On-brand visuals']
                            },
                            {
                                id: 'msg',
                                pill: 'MESSAGING',
                                title: <>CLEAR <br /> MESSAGING</>,
                                bird: BirdMsg,
                                birdConfig: {
                                    width: '125px',
                                    rotate: '4deg',
                                    hoverRotate: '2deg',
                                    delay: '-4s'
                                },
                                // Force 3 lines visual
                                desc: 'Words that rally your audience and win hearts (and sales).',
                                items: ['Headline & copywriting', 'Calls-to-action', 'Industry specific', 'Content that connects']
                            },
                            {
                                id: 'vis',
                                pill: 'VISIBILITY',
                                title: <>ONLINE <br /> VISIBILITY</>,
                                bird: BirdVis,
                                birdConfig: {
                                    width: '125px',
                                    rotate: '-4deg',
                                    hoverRotate: '-2deg',
                                    delay: '-1.5s'
                                },
                                // Force 3 lines visual
                                desc: 'Be seen where it matters — across search, social, AI, and beyond.',
                                items: ['Strong SEO', 'Social integration', 'AI visibility', 'Local reach']
                            }
                        ];

                        const bulletRowHeight = '32px'; /* Standard height */

                        return (
                            <>
                                <style>{`
                                    /* Mobile Layout (Default) */
                                    .services-mobile { display: grid; grid-template-columns: 1fr; gap: 2rem; }
                                    .services-desktop { display: none; }

                                    /* Desktop Layout (Sliced Grid) */
                                    @media (min-width: 1100px) {
                                        .services-mobile { display: none; }
                                        .services-desktop { 
                                            display: grid; 
                                            grid-template-columns: repeat(4, 1fr); 
                                            column-gap: 1rem; /* Reduced gap for wider cards */
                                            row-gap: 0; 
                                            align-items: end; 
                                        }
                                    }

                                    /* BIRD ANIMATIONS & INTERACTION */
                                    @keyframes birdFloat {
                                        0%, 100% { transform: translateY(0px); }
                                        50% { transform: translateY(-3px); }
                                    }

                                    .bird-wrapper {
                                        position: absolute;
                                        z-index: 10;
                                        top: -65px; /* Higher offset to break out */
                                        right: -20px;
                                        filter: drop-shadow(0 10px 15px rgba(0,0,0,0.2));
                                        animation: birdFloat 7s ease-in-out infinite;
                                    }

                                    .bird-img {
                                        transform-origin: center center;
                                        transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1);
                                    }

                                    .service-header-cell:hover .bird-img {
                                        transform: translateY(-8px) rotate(var(--hover-rotate)) scale(1.05) !important;
                                    }
                                `}</style>

                                {/* MOBILE LAYOUT (Stacked Cards) */}
                                <div className="services-mobile">
                                    {services.map((service) => (
                                        <div key={service.id} className="service-card" style={{
                                            backgroundColor: 'white',
                                            borderRadius: '1.5rem',
                                            padding: '2.5rem 2rem 2.5rem 2rem',
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            border: 'none',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                        }}>
                                            <div className="bird-wrapper" style={{ animationDelay: service.birdConfig.delay }}>
                                                <img
                                                    src={service.bird}
                                                    alt={service.id}
                                                    className="bird-img"
                                                    style={{
                                                        width: service.birdConfig.width,
                                                        height: 'auto',
                                                        transform: `rotate(${service.birdConfig.rotate})`,
                                                        // @ts-ignore
                                                        '--hover-rotate': service.birdConfig.hoverRotate
                                                    }}
                                                />
                                            </div>
                                            <div style={{
                                                display: 'inline-block',
                                                backgroundColor: 'var(--color-primary)',
                                                color: '#1a1a1a',
                                                padding: '0.4rem 1rem',
                                                borderRadius: '999px',
                                                fontSize: '0.8rem',
                                                fontWeight: 800,
                                                fontFamily: "'Fredoka', sans-serif",
                                                marginBottom: '1.25rem',
                                                alignSelf: 'flex-start',
                                                border: '1px solid #1a1a1a'
                                            }}>
                                                {service.pill}
                                            </div>
                                            <h3 style={{
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: '3.5rem',
                                                lineHeight: 0.9,
                                                marginBottom: '1.25rem',
                                                color: '#1a1a1a',
                                                letterSpacing: '-0.02em'
                                            }}>
                                                {service.title}
                                            </h3>
                                            <p style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: '1rem',
                                                lineHeight: '1.5',
                                                color: '#4a4a4a',
                                                marginBottom: '2.5rem',
                                                fontWeight: 500
                                            }}>
                                                {service.desc}
                                            </p>
                                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', flex: 1, color: '#1a1a1a', fontFamily: "'Inter', sans-serif", fontSize: '1rem' }}>
                                                {service.items.map(item => (
                                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 500 }}>
                                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button style={{
                                                width: '100%',
                                                backgroundColor: 'var(--color-primary)',
                                                color: '#1a1a1a',
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontWeight: 800,
                                                borderRadius: '0.5rem',
                                                textTransform: 'uppercase',
                                                fontSize: '2rem',
                                                padding: '0.75rem',
                                                lineHeight: 1,
                                                letterSpacing: '0.02em'
                                            }}>
                                                Find Out More
                                            </Button>
                                        </div>
                                    ))}
                                </div>

                                {/* DESKTOP LAYOUT (Sliced Grid) */}
                                <div className="services-desktop">
                                    {/* ROW 1: HEADER (Bird, Pill, Title, Desc) */}
                                    {services.map((service) => (
                                        <div key={`header-${service.id}`} className="service-header-cell" style={{
                                            backgroundColor: 'white',
                                            borderTopLeftRadius: '1.5rem',
                                            borderTopRightRadius: '1.5rem',
                                            padding: '2rem 1.5rem 0 1.5rem', /* Reduced top padding */
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%'
                                        }}>
                                            <div className="bird-wrapper" style={{ animationDelay: service.birdConfig.delay }}>
                                                <img
                                                    src={service.bird}
                                                    alt={service.id}
                                                    className="bird-img"
                                                    style={{
                                                        width: service.birdConfig.width,
                                                        height: 'auto',
                                                        transform: `rotate(${service.birdConfig.rotate})`,
                                                        // @ts-ignore
                                                        '--hover-rotate': service.birdConfig.hoverRotate
                                                    }}
                                                />
                                            </div>

                                            {/* Pill */}
                                            <div style={{
                                                display: 'inline-block',
                                                backgroundColor: 'var(--color-primary)',
                                                color: '#1a1a1a',
                                                padding: '0.4rem 1rem',
                                                borderRadius: '999px',
                                                fontSize: '0.9rem',
                                                fontWeight: 800,
                                                fontFamily: "'Inter', sans-serif",
                                                marginBottom: '1rem', /* Reduced margin */
                                                alignSelf: 'flex-start',
                                                border: '1px solid #1a1a1a',
                                                boxShadow: '2px 2px 0px rgba(0,0,0,0.2)'
                                            }}>
                                                {service.pill}
                                            </div>

                                            {/* Title */}
                                            <h3 style={{
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: '4.5rem', /* Reduced from 5.5rem to save height */
                                                lineHeight: 0.85,
                                                marginBottom: '1rem',
                                                color: '#1a1a1a',
                                                letterSpacing: '-0.02em',
                                                marginTop: '0.25rem'
                                            }}>
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: '0.95rem', /* Slightly smaller */
                                                lineHeight: '1.4',
                                                color: '#1a1a1a',
                                                marginBottom: '1.5rem', /* Reduced margin */
                                                fontWeight: 400,
                                                maxWidth: '100%'
                                            }}>
                                                {service.desc}
                                            </p>
                                        </div>
                                    ))}

                                    {/* ROWS 2-5: BULLETS (Strict Alignment) */}
                                    {[0, 1, 2, 3].map((bulletIndex) => (
                                        services.map((service) => {
                                            const item = service.items[bulletIndex];
                                            return (
                                                <div key={`bullet-${service.id}-${bulletIndex}`} style={{
                                                    backgroundColor: 'white',
                                                    padding: '0 1.5rem', /* Matching padding */
                                                    height: bulletRowHeight,
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    {item && (
                                                        <div style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.5rem',
                                                            fontFamily: "'Inter', sans-serif",
                                                            fontSize: '0.95rem',
                                                            color: '#1a1a1a',
                                                            fontWeight: 500,
                                                            width: '100%',
                                                            overflow: 'hidden',
                                                            whiteSpace: 'nowrap',
                                                            textOverflow: 'ellipsis'
                                                        }}>
                                                            <div style={{ width: '5px', height: '5px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', flexShrink: 0 }}></div>
                                                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })
                                    ))}

                                    {/* SPACER ROW */}
                                    {services.map((service) => (
                                        <div key={`spacer-${service.id}`} style={{ backgroundColor: 'white', height: '1rem' }}></div>
                                    ))}

                                    {/* BOTTOM ROW: BUTTON */}
                                    {services.map((service) => (
                                        <div key={`btn-${service.id}`} style={{
                                            backgroundColor: 'white',
                                            borderBottomLeftRadius: '1.5rem',
                                            borderBottomRightRadius: '1.5rem',
                                            padding: '0 1.5rem 2rem 1.5rem', /* Reduced bottom/side padding */
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'flex-end',
                                            height: '100%'
                                        }}>
                                            <Button style={{
                                                width: '100%',
                                                backgroundColor: 'var(--color-primary)',
                                                color: '#1a1a1a',
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontWeight: 800,
                                                borderRadius: '0.5rem',
                                                textTransform: 'uppercase',
                                                fontSize: '1.75rem', /* Slightly smaller button text */
                                                padding: '0.75rem',
                                                lineHeight: 1,
                                                letterSpacing: '0.02em',
                                                boxShadow: 'none'
                                            }}>
                                                Find Out More
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </>
                        );
                    })()}


                </Container >
            </Section >

            <div className="section-divider"></div>

            {/* VALUE STATEMENT - MASSIVE BLOCK */}
            < Section style={{ padding: '8rem 0', borderTop: '2px solid var(--color-border)', borderBottom: '2px solid var(--color-border)' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <h2 className="text-large" style={{ lineHeight: 0.9 }}>
                            EVERYTHING <br /> YOUR BRAND NEEDS. <br />
                            <span style={{ color: 'var(--color-text-muted)' }}>NOTHING IT DOESN’T.</span>
                        </h2>
                        <div>
                            <p style={{ fontSize: '1.5rem', lineHeight: 1.5, marginBottom: '2rem', fontFamily: "'Inter', sans-serif" }}>
                                Not just a website — a complete brand foundation, backed by strategy and ongoing support, so you’re never left guessing what’s next.
                            </p>
                            <Button size="lg" style={{ backgroundColor: 'var(--color-primary)', color: 'black', width: '100%' }}>See What You Get</Button>
                        </div>
                    </div>
                </Container>
            </Section >

            <div className="section-divider"></div>

            {/* PROCESS / BENEFITS - Cards */}
            < Section style={{ padding: '10rem 0' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>

                        <div className="card">
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>STRATEGY FIRST</h3>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.5, color: 'var(--color-text-muted)', fontFamily: "'Inter', sans-serif" }}>We plan every brand and website around what actually drives growth. Design without strategy is just decoration.</p>
                        </div>

                        <div className="card">
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>CUSTOM BY DEFAULT</h3>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.5, color: 'var(--color-text-muted)', fontFamily: "'Inter', sans-serif" }}>No templates. No shortcuts. Every project is designed specifically for your business and audience.</p>
                        </div>

                        <div className="card">
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>YOU STAY IN CONTROL</h3>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.5, color: 'var(--color-text-muted)', fontFamily: "'Inter', sans-serif" }}>Your brand is yours — always. Easy updates, no lock-in, and clear ownership of all assets.</p>
                        </div>

                    </div>
                </Container>
            </Section >

            <div className="section-divider"></div>

            {/* WORK PREVIEW - List Layout */}
            < Section style={{ padding: '5rem 0 10rem', backgroundColor: '#213232', color: 'white' }}>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6rem', flexWrap: 'wrap', gap: '2rem' }}>
                        {/* Hiding the main header as the reference focuses on the projects themselves, but keeping it for structure if needed. 
                            Actually, the reference shows the project IS the content. I will keep a smaller section header or remove it if it conflicts. 
                            I'll keep the "OUR WORK" header but maybe smaller or less intrusive? 
                            The reference just shows the project. I will keep "OUR WORK" as the section title.
                        */}
                        <h2 style={{ fontSize: '5rem', margin: 0, color: 'white', lineHeight: 0.8 }}>OUR WORK</h2>
                        <Button style={{ backgroundColor: '#6BFF8E', color: 'black', fontWeight: 800, border: 'none' }}>VIEW ALL PROJECTS →</Button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>

                        {/* Project 1: PAYFLOW */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                            {/* Text Side */}
                            <div style={{ order: 1 }}>
                                <div style={{
                                    color: '#6BFF8E',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.05em',
                                    marginBottom: '1rem',
                                    fontFamily: "'Inter', sans-serif"
                                }}>
                                    FINTECH + STRATEGY
                                </div>
                                <h3 style={{
                                    fontSize: '6rem',
                                    lineHeight: 0.85,
                                    marginBottom: '1.5rem',
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    color: 'white'
                                }}>
                                    PAYFLOW
                                </h3>
                                <p style={{
                                    fontSize: '1.25rem',
                                    lineHeight: 1.5,
                                    color: '#CFCFD6',
                                    marginBottom: '2.5rem',
                                    maxWidth: '400px',
                                    fontFamily: "'Inter', sans-serif"
                                }}>
                                    Redefining trust for the decentralized economy.
                                </p>
                                <a href="#" style={{
                                    color: '#6BFF8E',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    borderBottom: '1px solid #6BFF8E',
                                    paddingBottom: '0.2rem',
                                    textTransform: 'uppercase'
                                }}>
                                    VIEW CASE STUDY <ArrowUpRight size={18} />
                                </a>
                            </div>

                            <div style={{
                                order: 2,
                                height: '450px',
                                backgroundColor: '#131e1e',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={ProjectPayflow}
                                    alt="Payflow Visual"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'all 0.5s ease',
                                        filter: 'brightness(0.7)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.filter = 'brightness(1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.filter = 'brightness(0.7)';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Project 2: DATAMINDER */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                            {/* Text Side */}
                            <div style={{ order: 1 }}>
                                <div style={{
                                    color: '#6BFF8E',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.05em',
                                    marginBottom: '1rem',
                                    fontFamily: "'Inter', sans-serif"
                                }}>
                                    SAAS + BRANDING
                                </div>
                                <h3 style={{
                                    fontSize: '6rem',
                                    lineHeight: 0.85,
                                    marginBottom: '1.5rem',
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    color: 'white'
                                }}>
                                    DATAMINDER
                                </h3>
                                <p style={{
                                    fontSize: '1.25rem',
                                    lineHeight: 1.5,
                                    color: '#CFCFD6',
                                    marginBottom: '2.5rem',
                                    maxWidth: '400px',
                                    fontFamily: "'Inter', sans-serif"
                                }}>
                                    Turning complex data into clear, actionable insights.
                                </p>
                                <a href="#" style={{
                                    color: '#6BFF8E',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    borderBottom: '1px solid #6BFF8E',
                                    paddingBottom: '0.2rem',
                                    textTransform: 'uppercase'
                                }}>
                                    VIEW CASE STUDY <ArrowUpRight size={18} />
                                </a>
                            </div>

                            <div style={{
                                order: 2,
                                height: '450px',
                                backgroundColor: '#131e1e',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={ProjectDataminder}
                                    alt="Dataminder Visual"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'all 0.5s ease',
                                        filter: 'brightness(0.7)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.filter = 'brightness(1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.filter = 'brightness(0.7)';
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </Container>
            </Section >

            <div className="section-divider"></div>

            {/* WHY RIO - CONTRAST COMPARISON */}
            < Section style={{ padding: '10rem 0' }}>
                <Container>
                    <h2 className="text-large" style={{ marginBottom: '6rem', textAlign: 'center' }}>WHY RIO?</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '0', alignItems: 'stretch' }}>

                        {/* Bad Options - WHITE CARD */}
                        <div style={{
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '4rem',
                            borderTopLeftRadius: '2rem',
                            borderBottomLeftRadius: '2rem',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <h3 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'black', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.9 }}>OTHER AGENCIES</h3>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1, fontFamily: "'Inter', sans-serif" }}>
                                {['Templates that look generic', 'No real strategy involved', 'You are on your own', 'Hidden costs & upsells', 'Ghost you after launch'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ backgroundColor: '#ef4444', padding: '0.25rem', borderRadius: '50%', display: 'flex' }}><X size={20} color="white" /></div>
                                        <span style={{ fontWeight: 600 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Rio - GREEN OUTLINE DARK CARD */}
                        <div style={{
                            backgroundColor: '#1F2923',
                            border: '2px solid var(--color-primary)',
                            padding: '4rem',
                            borderTopRightRadius: '2rem',
                            borderBottomRightRadius: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            zIndex: 1,
                            transform: 'scale(1.05)'
                        }}>
                            <h3 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>RIO BRANDING</h3>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1, fontFamily: "'Inter', sans-serif" }}>
                                {['Custom design built for you', 'Strategy-first approach', 'Ongoing support included', 'Transparent pricing', 'We stick around'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white' }}>
                                        <div style={{ backgroundColor: 'var(--color-primary)', padding: '0.25rem', borderRadius: '50%', display: 'flex' }}><Check size={20} color="black" /></div>
                                        <span style={{ fontWeight: 600 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </Container>
            </Section >

            <div className="section-divider"></div>

            {/* TEAM - PHOTO GRID */}
            < Section style={{ padding: '10rem 0' }}>
                <Container>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>ACCESS A SENIOR CREATIVE TEAM</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.5rem', fontFamily: "'Inter', sans-serif" }}>Small team, big results. Every project gets senior-level attention.</p>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        overflowX: 'auto',
                        paddingBottom: '2rem',
                        scrollSnapType: 'x mandatory',
                        overscrollBehaviorX: 'contain',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none' /* Firefox */
                    }} className="hide-scrollbar">
                        <style>{`
                            .hide-scrollbar::-webkit-scrollbar { display: none; }
                        `}</style>
                        {[
                            { name: "ALEX", role: "FOUNDER & STRATEGY", img: TeamAlex },
                            { name: "SARAH", role: "DESIGN LEAD", img: TeamSarah },
                            { name: "MICHAEL", role: "DEVELOPMENT", img: TeamMichael },
                            { name: "JESS", role: "COPY & CONTENT", img: TeamJess }
                        ].map((member, i) => (
                            <div key={i} className="card" style={{
                                position: 'relative',
                                minWidth: '280px',
                                height: '420px',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                flex: '0 0 auto',
                                scrollSnapAlign: 'start',
                                border: 'none',
                                backgroundColor: 'transparent'
                            }}>
                                {/* Full Height Image */}
                                <img src={member.img} alt={member.name} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%) brightness(0.9)',
                                    transition: 'all 0.5s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.filter = 'grayscale(100%) brightness(0.9)';
                                    }}
                                />

                                {/* Gradient Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '60%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                    pointerEvents: 'none'
                                }}></div>

                                {/* Text Content Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: '1.5rem',
                                    zIndex: 10
                                }}>
                                    <h3 style={{
                                        fontSize: '3rem',
                                        marginBottom: '0.25rem',
                                        lineHeight: 0.85,
                                        color: 'white',
                                        fontFamily: "'Bebas Neue', sans-serif"
                                    }}>
                                        {member.name}
                                        <Check size={20} color="#00ff00" className="sticker" style={{ display: 'inline', marginLeft: '0.5rem', verticalAlign: 'middle' }} />
                                    </h3>
                                    <p style={{
                                        color: 'rgba(255,255,255,0.7)',
                                        fontWeight: 500,
                                        fontSize: '1rem',
                                        fontFamily: "'Inter', sans-serif",
                                        margin: 0
                                    }}>
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section >

            <div className="section-divider"></div>

            {/* TESTIMONIALS - GREEN CARDS */}
            < Section style={{ padding: '10rem 0' }}>
                <Container>
                    <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>OUR CLIENTS' WORDS.</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        {[
                            { text: "Rio transformed our digital presence completely. The design quality and attention to detail exceeded our expectations.", author: "Zak S.", company: "Founder, Fintech" },
                            { text: "They didn't just build us a website - they engineered a platform that understands our customers better than they understand themselves.", author: "Chris T.", company: "CEO, Growth Co." },
                            { text: "Rio understood that we're not just selling a product - we're sharing a culture. The website tells our story through every pixel.", author: "Mitchell R.", company: "Director, Studio" }
                        ].map((testimonial, i) => (
                            <div key={i} style={{ backgroundColor: 'rgba(107, 255, 142, 0.1)', border: '1px solid var(--color-primary)', padding: '3rem', borderRadius: '1.5rem' }}>
                                <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex', gap: '0.25rem' }}>
                                    {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="var(--color-primary)" />)}
                                </div>
                                <p style={{ fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '2rem', fontFamily: "'Inter', sans-serif" }}>"{testimonial.text}"</p>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '1.1rem', fontFamily: "'Inter', sans-serif" }}>{testimonial.author}</div>
                                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontFamily: "'Inter', sans-serif" }}>{testimonial.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section >

            <div className="section-divider"></div>

            {/* INSIGHTS */}
            < Section style={{ padding: '10rem 0' }}>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3rem' }}>WHAT WE HAVE TO SAY</h2>
                        <a href="#" style={{ fontSize: '1.2rem', fontWeight: 600 }}>READ OUR ARTICLES →</a>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
                        <div style={{ borderTop: '1px solid var(--color-border)', padding: '2rem 0', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)' }}>01</span>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>HOW TO CHOOSE A BRANDING AGENCY IN 2026</h3>
                                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', fontFamily: "'Inter', sans-serif" }}>Learn how to evaluate partners, spot red flags, and find the right fit for your growth stage.</p>
                            </div>
                            <ArrowRight size={32} style={{ marginLeft: 'auto' }} />
                        </div>
                        <div style={{ borderTop: '1px solid var(--color-border)', padding: '2rem 0', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)' }}>02</span>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>WHY YOUR WEBSITE ISN'T CONVERTING</h3>
                                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', fontFamily: "'Inter', sans-serif" }}>Common mistakes that kill conversion rates and how to fix them with better UX and messaging.</p>
                            </div>
                            <ArrowRight size={32} style={{ marginLeft: 'auto' }} />
                        </div>
                    </div>
                </Container>
            </Section >

            {/* FIT CHECK */}
            < Section style={{ padding: '10rem 0' }}>
                <Container>
                    <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>ARE WE A GOOD FIT?</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                        <div style={{ padding: '2rem' }}>
                            <h4 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>GREAT MATCH IF:</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.25rem', fontFamily: "'Inter', sans-serif" }}>
                                {['You want results, not just visuals', 'You see branding as an investment', 'You value clarity and transparency', 'You want a long-term creative partner'].map(item => (
                                    <li key={item} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: 'var(--color-primary)', padding: '0.25rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Check size={24} color="black" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ padding: '2rem', opacity: 0.6 }}>
                            <h4 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>PROBABLY NOT IF:</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.25rem', fontFamily: "'Inter', sans-serif" }}>
                                {['You want the cheapest option', 'You’re looking for a quick template', 'You don’t care about brand consistency', 'You need it done yesterday'].map(item => (
                                    <li key={item} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: '#ef4444', padding: '0.25rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <X size={24} color="white" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section >

            {/* PRICING INTRO - FEATURE CARDS */}
            <Section style={{ padding: '8rem 0', backgroundColor: '#213232' }}>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '5rem', lineHeight: 0.8, marginBottom: '1.5rem', fontFamily: "'Bebas Neue', sans-serif" }}>WHAT IT COSTS</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '500px', fontFamily: "'Inter', sans-serif" }}>
                                We've built a calculator to help you understand the investment you'll need for your website project.
                            </p>
                        </div>
                        <div style={{ textAlign: 'right', display: 'none' }}> {/* Hidden for now to match layout focus */}
                            <Button style={{ backgroundColor: 'transparent', border: '1px solid white', color: 'white' }}>CALCULATE PROJECT COSTS →</Button>
                        </div>
                    </div>

                    {/* TOP ROW: 3 CARDS */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ backgroundColor: 'white', color: 'black', padding: '2.5rem', borderRadius: '1.5rem', minHeight: '200px' }}>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif", color: 'black' }}>QUICK</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500, fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>Complete in a few minutes with our simple 5-step process</p>
                        </div>
                        <div style={{ backgroundColor: 'white', color: 'black', padding: '2.5rem', borderRadius: '1.5rem', minHeight: '200px' }}>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif", color: 'black' }}>TRANSPARENT</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500, fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>See a detailed breakdown of costs with no hidden fees</p>
                        </div>
                        <div style={{ backgroundColor: 'white', color: 'black', padding: '2.5rem', borderRadius: '1.5rem', minHeight: '200px' }}>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif", color: 'black' }}>TAILORED TO YOU</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500, fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>Customized recommendations based on your specific requirements</p>
                        </div>
                    </div>

                    {/* BOTTOM ROW: CALCULATOR DETAILS + IMAGE */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', alignItems: 'stretch' }}>

                        {/* LEFT: Calculator Details */}
                        <div style={{ backgroundColor: 'white', color: 'black', padding: '3rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <h3 style={{ fontSize: '3rem', marginBottom: '2rem', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.9, color: 'black' }}>THE CALCULATOR PROVIDES:</h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {[
                                        'Accurate price range for your website project',
                                        'Detailed breakdown of costs and features',
                                        'Options to enhance your site’s functionality',
                                        'Instant email copy of your custom estimate'
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                                            <div style={{ width: '20px', height: '20px', backgroundColor: '#6CE9A6', borderRadius: '50%' }}></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ marginTop: '3rem', alignSelf: 'flex-end' }}>
                                <Button
                                    size="lg"
                                    style={{ backgroundColor: '#6CE9A6', color: 'black', border: 'none', fontSize: '1.25rem', padding: '1rem 2rem' }}
                                    onClick={() => navigate('/estimate')}
                                >
                                    Estimate Your Project Cost
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Image/Stats Card */}
                        <div style={{
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            position: 'relative',
                            minHeight: '400px',
                            backgroundColor: '#222'
                        }}>
                            <img src={ProjectDataminder} alt="Stats" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '2rem',
                                right: '2rem',
                                backgroundColor: 'rgba(20, 20, 20, 0.8)',
                                backdropFilter: 'blur(10px)',
                                padding: '1.5rem',
                                borderRadius: '1rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>
                                    <strong style={{ color: '#fff' }}>93%</strong> of our clients say our initial estimates match final project costs
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* TESTIMONIAL BOTTOM */}
                    <div style={{ marginTop: '4rem', maxWidth: '800px' }}>
                        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '0.5rem', color: '#ccc', fontFamily: "'Inter', sans-serif" }}>
                            "The calculator gave us a clear picture of costs before we even spoke to anyone. The actual quote matched exactly what the calculator estimated!"
                        </p>
                        <p style={{ color: '#888', fontFamily: "'Inter', sans-serif" }}>- Sarah T., Small Business Owner</p>
                    </div>

                </Container>
            </Section>

            {/* FINAL CTA - GREEN BLOCK OVERHAUL */}
            < Section style={{ padding: '10rem 0' }}>
                <Container>
                    <div style={{ backgroundColor: '#2A3B31', border: 'none', padding: '6rem', borderRadius: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4rem', color: 'white' }}>

                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <h2 className="text-large" style={{ lineHeight: 0.9, marginBottom: '2rem', color: 'white' }}>
                                TAKE THE NEXT STEP. <br /> UNLOCK YOUR BRAND'S <br /> TRUE POWER.
                            </h2>
                            <p style={{ fontSize: '1.5rem', marginBottom: '3rem', opacity: 0.9 }}>
                                The longer you stall, the longer your competitors win. Let's change that.
                            </p>
                            <Button
                                size="lg"
                                style={{ backgroundColor: 'var(--color-primary)', color: 'black', padding: '1.5rem 3rem', fontSize: '1.5rem', fontWeight: 700 }}
                                onClick={() => window.location.href = '/contact'}
                            >
                                START PROJECT
                            </Button>
                        </div>

                        {/* Abstract "Sword" Graphic Placeholder -> Real Asset */}
                        <div style={{ width: '300px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={CtaZap} alt="Energy" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(107, 255, 142, 0.4))' }} />
                        </div>

                    </div>
                </Container>
            </Section >
        </>
    );
};

export default Home;
