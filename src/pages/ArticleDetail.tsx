import { useParams, Navigate } from 'react-router-dom';
import { Container, Section } from '../components/Layout';

const articles = {
    'how-to-choose-branding-agency': {
        title: "How to Choose a Branding Agency in 2026",
        date: "Jan 12, 2026",
        content: (
            <>
                <p>Choosing the right branding agency is a critical decision that can shape your company's future for years to come. In 2026, the landscape is more competitive and fragmented than ever.</p>
                <h3>1. Define Your Goals</h3>
                <p>Before you even start looking, know what you want to achieve. Are you launching a new product? Rebranding an existing company? Or just looking for a visual refresh?</p>
                <h3>2. Look for Strategic Fit</h3>
                <p>Don't just look at their portfolio. Look at how they think. Do they ask the right questions? Do they challenge your assumptions? A true partner will push you to be better.</p>
                <h3>3. Check Their Track Record</h3>
                <p>Look for case studies that demonstrate real ROI. Beautiful design is great, but does it drive results?</p>
            </>
        )
    },
    'why-website-not-converting': {
        title: "Why Your Website Isn't Converting",
        date: "Jan 08, 2026",
        content: (
            <>
                <p>You have traffic, but no sales. It's a common problem. Here are the most likely reasons why your visitors are leaving without taking action.</p>
                <h3>1. Confusing Value Proposition</h3>
                <p>If a user can't tell what you do within 5 seconds of landing on your site, they're gone. Be clear, not clever.</p>
                <h3>2. Poor User Experience (UX)</h3>
                <p>Is your site slow? Is it hard to navigate on mobile? friction kills conversion. Make it easy for people to give you money.</p>
                <h3>3. lack of Social Proof</h3>
                <p>People buy from people they trust. Show testimonials, case studies, and logos of clients you've worked with.</p>
            </>
        )
    },
    'roi-of-good-design': {
        title: "The ROI of Good Design",
        date: "Dec 28, 2025",
        content: (
            <>
                <p>Design is often seen as a cost, but it's actually an investment. Here is how good design pays off.</p>
                <h3>1. Increased Perceived Value</h3>
                <p>A premium brand commands premium pricing. Apple is the classic example, but it applies to every industry.</p>
                <h3>2. Customer Loyalty</h3>
                <p>People bond with brands that have a strong identity. Good design creates an emotional connection.</p>
                <h3>3. Marketing Efficiency</h3>
                <p>A distinctive brand is easier to remember and cheaper to market. You don't have to shout as loud if you stand out.</p>
            </>
        )
    }
};

const ArticleDetail = () => {
    const { slug } = useParams();
    const article = articles[slug as keyof typeof articles];

    if (!article) {
        return <Navigate to="/knowledge" replace />;
    }

    return (
        <div style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--color-bg-dark)', color: 'white' }}>
            <Section>
                <Container>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: '1rem', fontFamily: "'Inter', sans-serif" }}>{article.date}</div>
                        <h1 style={{ fontSize: '3rem', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '3rem', lineHeight: 1 }}>{article.title}</h1>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {article.content}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default ArticleDetail;
