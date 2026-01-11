import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    style,
    ...props
}) => {

    const baseStyles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '999px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        border: 'none',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
        ...style
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--color-primary)',
            color: 'black',
            border: '1px solid var(--color-primary)',
        },
        outline: {
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.3)',
        },
        glass: {
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.2)',
        }
    };

    const sizes = {
        sm: { padding: '0.6rem 1.2rem', fontSize: '0.85rem' },
        md: { padding: '1rem 2rem', fontSize: '1rem' },
        lg: { padding: '1.25rem 3rem', fontSize: '1.15rem' },
    };

    const appliedStyle = {
        ...baseStyles,
        ...variants[variant],
        ...sizes[size],
    };

    return (
        <button
            className={`btn-hover-effect ${className}`}
            style={appliedStyle}
            {...props}
        >
            {/* Sheen Effect overlay handled via CSS class and pseudo-elements in localized style block for portability, 
          or simpler: just use the hover effect defined in CSS or inline keyframes. 
          Actually, let's use a pure CSS class approach for the sheen if defined in index.css, 
          but here we'll insert a span structure to ensure it works. 
      */}
            <div className="sheen-container" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderRadius: '999px',
                pointerEvents: 'none'
            }}>
                <div className="sheen" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                    transform: 'translateX(-150%) skewX(-20deg)',
                    // Animation is handled by the group hover in CSS or we can add a style tag
                }}></div>
            </div>

            <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {children}
            </span>

            <style>{`
        .btn-hover-effect:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(107, 255, 142, 0.4);
        }
        .btn-hover-effect:active {
          transform: scale(0.95);
        }
        .btn-hover-effect:hover .sheen {
          animation: sheen 0.6s forwards;
        }
        @keyframes sheen {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
      `}</style>
        </button>
    );
};

export default Button;
