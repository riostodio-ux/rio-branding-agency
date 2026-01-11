import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', mMove);
            document.addEventListener('mouseenter', mEnter);
            document.addEventListener('mouseleave', mLeave);
            document.addEventListener('mousedown', mDown);
            document.addEventListener('mouseup', mUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', mMove);
            document.removeEventListener('mouseenter', mEnter);
            document.removeEventListener('mouseleave', mLeave);
            document.removeEventListener('mousedown', mDown);
            document.removeEventListener('mouseup', mUp);
        };

        const mMove = (el: MouseEvent) => {
            setPosition({ x: el.clientX, y: el.clientY });
        };

        const mEnter = () => {
            setHidden(false);
        };

        const mLeave = () => {
            setHidden(true);
        };

        const mDown = () => {
            setClicked(true);
        };

        const mUp = () => {
            setClicked(false);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    return (
        <motion.div
            className="custom-cursor"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '24px',
                height: '24px',
                border: '1.5px solid var(--color-accent)', // Match accent
                backgroundColor: 'var(--color-accent)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference'
            }}
            animate={{
                x: position.x - 12,
                y: position.y - 12,
                scale: clicked ? 0.8 : 1,
                opacity: hidden ? 0 : 1
            }}
            transition={{
                type: 'spring',
                mass: 0.1, // Lightweight feeling
                stiffness: 800,
                damping: 30, // No overshoot
                opacity: { duration: 0.2 }
            }}
        />
    );
};

export default CustomCursor;
