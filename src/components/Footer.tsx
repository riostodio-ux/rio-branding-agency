import { Container } from './Layout';
import { Instagram, Linkedin, Twitter, Shield, Lock, Star } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-bg-dark)', padding: '6rem 0', borderTop: '1px solid var(--color-border)' }}>
            <Container>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>

                    {/* Brand Column */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>RIO BRANDING</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '400px', lineHeight: 1.5, marginBottom: '2rem' }}>
                            We are Rio Branding — a creative agency building bold identities and digital experiences for brands ready to stand out.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="#" style={{ color: 'white', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '50%' }}><Linkedin size={20} /></a>
                            <a href="#" style={{ color: 'white', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '50%' }}><Twitter size={20} /></a>
                            <a href="#" style={{ color: 'white', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '50%' }}><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 style={{ textTransform: 'uppercase', marginBottom: '2rem', fontSize: '1rem', letterSpacing: '0.1em' }}>Navigation</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Services', 'What You Get', 'Our Work', 'Pricing', 'About', 'Contact'].map(item => (
                                <li key={item}><a href="#" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-text-muted)', transition: 'color 0.2s' }}>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Helpful Links */}
                    <div>
                        <h4 style={{ textTransform: 'uppercase', marginBottom: '2rem', fontSize: '1rem', letterSpacing: '0.1em' }}>Helpful Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Knowledge Hub', 'Brand Strategy Guide', 'ROI Calculator', 'Privacy Policy'].map(item => (
                                <li key={item}><a href="#" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-text-muted)', transition: 'color 0.2s' }}>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Badges / Logos Placeholder */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                            <Shield size={32} strokeWidth={1.5} />
                            <Lock size={32} strokeWidth={1.5} />
                            <Star size={32} strokeWidth={1.5} />
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>GDPR Ready • Climate Active</p>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    <div>© 2026 Rio Branding Agency. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
