import { Container, Section } from '../components/Layout';

const Privacy = () => {
    return (
        <div style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--color-bg-dark)', color: 'white' }}>
            <Section>
                <Container>
                    <h1 style={{ fontSize: '4rem', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '2rem' }}>Privacy Policy</h1>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '800px' }}>
                        <p style={{ marginBottom: '1.5rem' }}>Last updated: January 2026</p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            At Rio Branding Agency, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information.
                        </p>
                        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif" }}>1. Information We Collect</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or subscribe to our newsletter.
                        </p>
                        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif" }}>2. How We Use Your Information</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information.
                        </p>
                        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif" }}>3. Contact Us</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            If you have any questions about this Privacy Policy, please contact us at hello@riobranding.com.
                        </p>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Privacy;
