import React from 'react';

export const Container = ({ children, className = '', style = {} }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
    return (
        <div
            className={className}
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 1.5rem',
                width: '100%',
                ...style
            }}
        >
            {children}
        </div>
    );
};

export const Section = ({ children, className = '', id = '', style = {} }: { children: React.ReactNode, className?: string, id?: string, style?: React.CSSProperties }) => {
    return (
        <section
            id={id}
            className={className}
            style={{
                padding: '6rem 0',
                position: 'relative',
                width: '100%',
                ...style
            }}
        >
            {children}
        </section>
    );
};
