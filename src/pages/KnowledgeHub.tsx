import { Container, Section } from '../components/Layout';
import { Link } from 'react-router-dom';

const KnowledgeHub = () => {
    return (
        <div style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--color-bg-dark)', color: 'white' }}>
            <Section>
                <Container>
                    <h1 style={{ fontSize: '4rem', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '2rem' }}>Knowledge Hub</h1>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '4rem', maxWidth: '600px' }}>
                        Insights, strategies, and guides to help you build a better brand.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "How to Choose a Branding Agency in 2026", desc: "Key factors to consider when selecting a creative partner.", date: "Jan 12, 2026", slug: "how-to-choose-branding-agency" },
                            { title: "Why Your Website Isn't Converting", desc: "Common UX mistakes that are killing your conversion rates.", date: "Jan 08, 2026", slug: "why-website-not-converting" },
                            { title: "The ROI of Good Design", desc: "Measuring the business impact of a strong visual identity.", date: "Dec 28, 2025", slug: "roi-of-good-design" }
                        ].map((article, i) => (
                            <Link to={`/knowledge/${article.slug}`} key={i} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                <div style={{ border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '1rem', transition: 'transform 0.3s ease', height: '100%', cursor: 'pointer' }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: '1rem', fontFamily: "'Inter', sans-serif" }}>{article.date}</div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>{article.title}</h3>
                                    <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>{article.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default KnowledgeHub;
