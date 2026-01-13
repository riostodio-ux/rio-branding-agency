import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './Layout';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import SymbolLogo from '../assets/symbol-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Work', path: '/work' },
        { name: 'Process', path: '/process' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,

                backgroundColor: scrolled ? 'rgba(33, 50, 50, 0.95)' : 'transparent', // Dark Green glass for scrolled state
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
                transition: 'all 0.3s ease',
                padding: scrolled ? '1rem 0' : '1.5rem 0',
                userSelect: 'none',
                WebkitUserSelect: 'none'
            }}
        >
            <Container className="flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src={SymbolLogo} alt="RIO" style={{ height: '60px', width: 'auto' }} />
                    <span style={{
                        fontFamily: "'Fredoka', sans-serif",
                        fontSize: '3rem',
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        color: 'var(--color-text-white)',
                        marginBottom: '-4px' // Optical alignment
                    }}>
                        rio
                    </span>
                </Link>

                {/* Desktop Nav - Centered */}
                <div className="desktop-nav" style={{
                    display: 'none',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    gap: '2.5rem',
                    alignItems: 'center'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="nav-link"
                            style={{
                                color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text-white)',
                                fontSize: '1.1rem',
                                fontWeight: 500,
                                opacity: location.pathname === link.path ? 1 : 0.8,
                                transition: 'opacity 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = location.pathname === link.path ? '1' : '0.8'}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right CTA */}
                <div className="desktop-cta" style={{ display: 'none' }}>
                    <Button onClick={() => window.location.href = '/contact'}>Start a Project</Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        color: 'var(--color-text-white)',
                        background: 'transparent',
                        border: 'none',
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'var(--color-bg-dark)',
                        padding: '2rem',
                        borderBottom: '1px solid var(--color-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button style={{ width: '100%' }} onClick={() => window.location.href = '/contact'}>Start a Project</Button>
                </div>
            )}

            {/* Responsive Styles Injection */}
            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
