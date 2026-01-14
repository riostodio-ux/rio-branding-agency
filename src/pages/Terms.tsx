import { Container, Section } from '../components/Layout';

const Terms = () => {
    return (
        <div style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--color-bg-dark)', color: 'white' }}>
            <Section>
                <Container>
                    <h1 style={{ fontSize: '4rem', fontFamily: "'Bebas Neue', sans-serif", marginBottom: '2rem' }}>Terms of Service</h1>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '800px' }}>
                        <p style={{ marginBottom: '1.5rem' }}>Last updated: January 2026</p>
                        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif" }}>1. Agreement to Terms</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy.
                        </p>
                        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif" }}>2. Intellectual Property</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The content, features, and functionality of our services are owned by Rio Branding Agency and are protected by international copyright, trademark, and other intellectual property laws.
                        </p>
                        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: "'Bebas Neue', sans-serif" }}>3. Limitation of Liability</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In no event shall Rio Branding Agency be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
                        </p>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Terms;
