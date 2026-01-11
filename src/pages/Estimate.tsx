import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Package, PenTool, Monitor, ShoppingBag, CheckCircle2 } from 'lucide-react';
import EstimateHero from '../assets/estimate-hero.png';

// --- STYLES ---
const bodyFont = 'var(--font-nav)'; // Inter
const displayFont = "'Bebas Neue', sans-serif"; // Display

export default function Estimate() {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        // Step 1: Basics
        hasAssets: null as boolean | null,
        budget: '',

        // Step 2: Service
        projectType: '',

        // Step 3: Specs
        volume: '',
        features: [] as string[],
        copywriting: '',

        // Step 4: Vision (New)
        designStyle: '',
        references: '',
        competitors: '',

        // Step 5: Contact
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        additionalDetails: ''
    });

    const [showErr, setShowErr] = useState(false);

    // --- FORM LOGIC ---
    const handleSelect = (key: string, value: any) => {
        setSelections(prev => ({ ...prev, [key]: value }));
        if (showErr) setShowErr(false);
    };

    const toggleFeature = (feature: string) => {
        setSelections(prev => {
            const exists = prev.features.includes(feature);
            if (exists) return { ...prev, features: prev.features.filter(f => f !== feature) };
            return { ...prev, features: [...prev.features, feature] };
        });
    };

    const isStepValid = () => {
        if (step === 1) return selections.hasAssets !== null && selections.budget;
        if (step === 2) return !!selections.projectType;
        if (step === 3) return !!selections.volume;
        if (step === 4) return true; // Vision is optional/text fields
        if (step === 5) return selections.firstName && selections.email;
        return true;
    };

    const next = () => {
        if (isStepValid()) {
            setStep(s => s + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setShowErr(true);
        }
    };

    const back = () => setStep(s => s - 1);

    // --- DYNAMIC CONTENT HELPERS ---
    const getFeatures = () => {
        if (selections.projectType === 'Packaging Design') return ['Box Design', 'Label Design', 'Pouch / Bag', 'Custom Die-Lines', '3D Renders', 'Print-Ready Files', 'Sustainable Sourcing'];
        if (selections.projectType === 'Branding & Identity') return ['Logo Suite', 'Brand Guidelines', 'Typography System', 'Social Media Kit', 'Stationery', 'Pitch Deck'];
        return ['Blog', 'Booking System', 'Newsletter', 'Search', 'User Accounts', 'AI Chat Bot', 'Multi Language'];
    };

    const getVolumeOptions = () => {
        if (selections.projectType === 'Packaging Design') return ['1 Line / SKU', '2-5 SKUs', '5-10 SKUs', '10+ SKUs'];
        if (selections.projectType === 'Branding & Identity') return ['Startup (Basic)', 'Growth (Standard)', 'Rebrand (Full)', 'Enterprise'];
        if (selections.projectType === 'eCommerce Website') return ['Up to 10 Products', 'Up to 50 Products', '100+ Products'];
        return ['Up to 10 pages', 'Up to 20 pages', '50+ pages'];
    };

    // --- PRICING ---
    const calculateEstimate = () => {
        let baseMin = 0, baseMax = 0;
        let lineItems: any[] = [];

        // 1. Base Calculation
        if (selections.projectType === 'Packaging Design') {
            baseMin = 2500; baseMax = 6000;
            if (selections.volume === '2-5 SKUs') { baseMin += 2000; baseMax += 5000; }
            if (selections.volume === '5-10 SKUs') { baseMin += 5000; baseMax += 10000; }
            lineItems.push({ label: `Packaging Design (${selections.volume})`, min: baseMin, max: baseMax });
        } else if (selections.projectType === 'Branding & Identity') {
            baseMin = 4000; baseMax = 8000;
            if (selections.volume === 'Growth (Standard)') { baseMin += 3000; baseMax += 6000; }
            if (selections.volume === 'Rebrand (Full)') { baseMin += 10000; baseMax += 20000; }
            lineItems.push({ label: `Brand Identity (${selections.volume})`, min: baseMin, max: baseMax });
        } else {
            baseMin = 3000; baseMax = 6000;
            if (selections.projectType === 'eCommerce Website') { baseMin = 8000; baseMax = 15000; }
            if (selections.volume === '50+ pages') { baseMin += 5000; baseMax += 10000; }
            lineItems.push({ label: `Website Design (${selections.volume})`, min: baseMin, max: baseMax });
        }

        // 2. Features
        let featCostMin = 0, featCostMax = 0;
        selections.features.forEach(f => {
            let fMin = 500, fMax = 1500;
            if (f === 'Booking System') { fMin = 2000; fMax = 5000; }
            featCostMin += fMin; featCostMax += fMax;
            lineItems.push({ label: f, min: fMin, max: fMax });
        });

        // 3. Totals
        let subMin = baseMin + featCostMin;
        let subMax = baseMax + featCostMax;

        // Budget Adjustment
        if (selections.budget === '$30K+') { subMin = Math.max(subMin, 30000); subMax = Math.max(subMax, 50000); }

        return {
            lineItems,
            min: subMin,
            max: subMax,
            vatMin: subMin * 0.2,
            vatMax: subMax * 0.2,
            totalMin: subMin * 1.2,
            totalMax: subMax * 1.2
        };
    };

    const est = calculateEstimate();

    // --- STEPPER VISUAL ---
    const Stepper = () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
            {[1, 2, 3, 4, 5].map(num => {
                const isActive = step === num;
                const isPast = step > num;
                return (
                    <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: isActive || isPast ? 1 : 0.3 }}>
                        {/* Number Circle */}
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            backgroundColor: isActive ? '#6CE9A6' : (isPast ? '#6CE9A6' : 'rgba(255,255,255,0.1)'),
                            color: isActive || isPast ? '#131e1e' : 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 800, fontSize: '1.1rem', fontFamily: displayFont
                        }}>
                            {isPast ? <CheckCircle2 size={24} /> : num}
                        </div>

                        {/* Line */}
                        <div style={{
                            height: '2px', width: isActive ? '100px' : '60px',
                            backgroundColor: isActive || isPast ? '#6CE9A6' : 'rgba(255,255,255,0.1)',
                            transition: 'all 0.3s ease',
                            position: 'relative'
                        }}>
                            {/* Knob for active */}
                            {isActive && (
                                <motion.div
                                    layoutId="stepperKnob"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    style={{
                                        position: 'absolute', right: 0,
                                        top: 'calc(50% - 6px)', // Explicit center to avoid transform conflicts with layoutId
                                        width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#6CE9A6',
                                        boxShadow: '0 0 10px #6CE9A6',
                                        zIndex: 10
                                    }}
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );

    // --- MAIN RENDER ---
    return (
        <div style={{ backgroundColor: '#131e1e', minHeight: '100vh', color: 'white', fontFamily: bodyFont }}>

            {/* HERO BG ELEMENT */}
            <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 0, opacity: 0.1, pointerEvents: 'none' }}>
                <img src={EstimateHero} style={{ height: '100vh', objectFit: 'contain' }} />
            </div>

            <div className="estimate-container">

                {/* LEFT: STEPPER (Desktop) & TITLE */}
                <div className="stepper-sidebar">
                    <h1 style={{ fontSize: '3rem', fontFamily: displayFont, lineHeight: 1, marginBottom: '0.5rem' }}>
                        PROJECT<br /><span style={{ color: '#6CE9A6' }}>CALCULATOR</span>
                    </h1>
                    <p style={{ color: '#8899a6', fontSize: '0.9rem', marginBottom: '3rem' }}>
                        Build your custom estimate in 5 simple steps.
                    </p>

                    {step <= 5 && <Stepper />}
                </div>

                {/* MOBILE STEPPER (Simple indicator) */}
                <div className="mobile-stepper">
                    {[1, 2, 3, 4, 5].map(num => (
                        <div key={num} style={{
                            width: '100%', height: '4px', borderRadius: '2px',
                            background: step >= num ? '#6CE9A6' : 'rgba(255,255,255,0.1)',
                            transition: 'background 0.3s'
                        }} />
                    ))}
                </div>

                {/* RIGHT: FORM CONTENT */}
                <div style={{ minHeight: '60vh' }}>
                    <AnimatePresence mode="wait">

                        {/* STEP 1: BASICS */}
                        {step === 1 && (
                            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 style={h2Style}>Basics</h2>
                                <p style={subStyle}>Let's start with your foundation.</p>

                                <div style={{ marginBottom: '3rem' }}>
                                    <label style={labelStyle}>Do you have existing assets?</label>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={cardStyle(selections.hasAssets === true)} onClick={() => handleSelect('hasAssets', true)}>Yes, I have assets</div>
                                        <div style={cardStyle(selections.hasAssets === false)} onClick={() => handleSelect('hasAssets', false)}>No, starting fresh</div>
                                    </div>
                                </div>

                                <div>
                                    <label style={labelStyle}>Approximate Budget</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                                        {['Less than $5K', '$5K - $10K', '$10K - $20K', '$20K - $30K', '$30K+'].map(o => (
                                            <div key={o} style={cardStyle(selections.budget === o)} onClick={() => handleSelect('budget', o)}>{o}</div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: SERVICE */}
                        {step === 2 && (
                            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 style={h2Style}>Service</h2>
                                <p style={subStyle}>What are we building?</p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    {[
                                        { id: 'Packaging Design', icon: <Package size={28} />, desc: 'Box, label, and pouch design.' },
                                        { id: 'Branding & Identity', icon: <PenTool size={28} />, desc: 'Logo, strategy, and systems.' },
                                        { id: 'Services Website', icon: <Monitor size={28} />, desc: 'Business or portfolio site.' },
                                        { id: 'eCommerce Website', icon: <ShoppingBag size={28} />, desc: 'Online store setup.' }
                                    ].map(i => (
                                        <div key={i.id} onClick={() => { handleSelect('projectType', i.id); setSelections(p => ({ ...p, volume: '', features: [] })) }}
                                            style={{ ...cardStyle(selections.projectType === i.id), alignItems: 'flex-start', textAlign: 'left', padding: '2rem' }}>
                                            <div style={{ color: '#6CE9A6', marginBottom: '1rem' }}>{i.icon}</div>
                                            <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.25rem' }}>{i.id}</div>
                                            <div style={{ fontSize: '0.9rem', color: '#8899a6' }}>{i.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: SPECS (MERGED) */}
                        {step === 3 && (
                            <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 style={h2Style}>Specifications</h2>
                                <p style={subStyle}>Define the scope of work.</p>

                                <div style={{ marginBottom: '3rem' }}>
                                    <label style={labelStyle}>Scale: {selections.projectType === 'Packaging Design' ? 'SKU Count' : selections.projectType === 'Branding & Identity' ? 'Company Stage' : 'Page Count'}</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
                                        {getVolumeOptions().map(o => (
                                            <div key={o} style={cardStyle(selections.volume === o)} onClick={() => handleSelect('volume', o)}>{o}</div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label style={labelStyle}>Deliverables Required</label>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                        {getFeatures().map(f => (
                                            <div key={f} style={pillStyle(selections.features.includes(f))} onClick={() => toggleFeature(f)}>{f}</div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: VISION (NEW DETAILED STEP) */}
                        {step === 4 && (
                            <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 style={h2Style}>Vision & Style</h2>
                                <p style={subStyle}>Help us visualize the result.</p>

                                <div style={{ display: 'grid', gap: '2rem' }}>
                                    {/* DYNAMIC QUESTIONS BASED ON TYPE */}
                                    {selections.projectType === 'Packaging Design' && (
                                        <>
                                            <div>
                                                <label style={labelStyle}>Desired Style / Vibe</label>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                    {['Minimalist & Clean', 'Bold & Colorful', 'Luxury / Premium', 'Eco / Rustie'].map(s => (
                                                        <div key={s} style={cardStyle(selections.designStyle === s)} onClick={() => handleSelect('designStyle', s)}>{s}</div>
                                                    ))}
                                                </div>
                                            </div>
                                            <InputGroup label="Do you have reference images or competitor packaging?" placeholder="Paste links or describe references..." />
                                        </>
                                    )}

                                    {selections.projectType === 'Branding & Identity' && (
                                        <>
                                            <div>
                                                <label style={labelStyle}>Brand Archetype</label>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                    {['Modern & Tech', 'Heritage & Trust', 'Playful & Friendly', 'Exclusive & High-End'].map(s => (
                                                        <div key={s} style={cardStyle(selections.designStyle === s)} onClick={() => handleSelect('designStyle', s)}>{s}</div>
                                                    ))}
                                                </div>
                                            </div>
                                            <InputGroup label="Competitors to analyze?" placeholder="List competitor brands..." />
                                        </>
                                    )}

                                    {selections.projectType.includes('Website') && (
                                        <>
                                            <InputGroup label="Reference Websites (URLs)" placeholder="e.g., www.awwwards.com, ..." />
                                            <InputGroup label="What do you like about them?" placeholder="Smooth animations, clean layout, typography..." />
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 5: CONTACT */}
                        {step === 5 && (
                            <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 style={h2Style}>Finalize</h2>
                                <p style={subStyle}>Where should we send the estimate?</p>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <input style={inputStyle} placeholder="First Name" value={selections.firstName} onChange={e => handleSelect('firstName', e.target.value)} />
                                    <input style={inputStyle} placeholder="Last Name" value={selections.lastName} onChange={e => handleSelect('lastName', e.target.value)} />
                                </div>
                                <input style={{ ...inputStyle, width: '100%', marginBottom: '1.5rem' }} placeholder="Email Address" value={selections.email} onChange={e => handleSelect('email', e.target.value)} />
                                <textarea style={{ ...inputStyle, width: '100%', minHeight: '120px', resize: 'vertical' }} placeholder="Any other details?" value={selections.additionalDetails} onChange={e => handleSelect('additionalDetails', e.target.value)} />
                            </motion.div>
                        )}

                        {/* STEP 6: RESULTS (Hidden Step) */}
                        {step === 6 && (
                            <motion.div key="s6" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                                <div style={{ backgroundColor: 'white', color: '#131e1e', borderRadius: '1rem', padding: '3rem' }}>

                                    {/* Header Row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                        <div style={{ backgroundColor: '#131e1e', color: '#6CE9A6', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 800, fontSize: '1.25rem' }}>
                                            ${est.totalMin.toLocaleString()} - ${est.totalMax.toLocaleString()}+
                                        </div>
                                        <div style={{ fontWeight: 800, fontSize: '2rem', fontFamily: displayFont }}>RIO AGENCY</div>
                                    </div>

                                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', marginBottom: '1rem' }}>Investement Breakdown</div>

                                    {/* Line Items */}
                                    <div style={{ borderTop: '1px solid #eee' }}>
                                        {est.lineItems.map((item: any, idx: number) => (
                                            <div key={idx} style={lineItemStyle}>
                                                <span style={{ fontWeight: 600 }}>{item.label}</span>
                                                <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>${item.min.toLocaleString()} - ${item.max.toLocaleString()}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Context Details */}
                                    <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '0.5rem' }}>
                                        <div style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Project Context</div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
                                            <div>Type: <b>{selections.projectType}</b></div>
                                            <div>Scale: <b>{selections.volume}</b></div>
                                            {selections.designStyle && <div>Style: <b>{selections.designStyle}</b></div>}
                                            {selections.copywriting && <div>Copy: <b>{selections.copywriting}</b></div>}
                                        </div>
                                    </div>

                                    {/* Final Totals */}
                                    <div style={{ marginTop: '2rem', borderTop: '2px solid #131e1e', paddingTop: '1.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                                            <span>Subtotal</span>
                                            <span>${est.min.toLocaleString()} - ${est.max.toLocaleString()}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.95rem', opacity: 0.7 }}>
                                            <span>VAT (20%)</span>
                                            <span>${est.vatMin.toLocaleString()} - ${est.vatMax.toLocaleString()}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 800 }}>
                                            <span>Total Investment</span>
                                            <span>${est.totalMin.toLocaleString()} - ${est.totalMax.toLocaleString()}+</span>
                                        </div>
                                    </div>

                                    <div style={{ margin: '2rem 0', color: '#666', fontSize: '0.8rem' }}>
                                        *Includes: {selections.features.join(', ') || 'Standard Scope'}.
                                        {selections.projectType === 'eCommerce Website' && ' Monthly maintenance packages available from $200/mo.'}
                                    </div>

                                    <button onClick={() => window.location.reload()} style={{ backgroundColor: '#131e1e', color: '#6CE9A6', border: 'none', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Start New Calculation <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* CONTROLS */}
                    {step <= 5 && (
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '4rem' }}>
                            {step > 1 && (
                                <button onClick={back} style={{ ...btnStyle, background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>Back</button>
                            )}
                            <button onClick={next} style={{ ...btnStyle, background: '#6CE9A6', color: '#131e1e' }}>
                                {step === 5 ? 'Get Estimate' : 'Next Step'} <ArrowRight size={18} />
                            </button>
                        </div>
                    )}
                    {showErr && <div style={{ color: '#ff6b6b', marginTop: '1rem', fontSize: '0.9rem' }}>Please complete the selection.</div>}

                </div>
            </div>
        </div>
    );
}

// --- SUB-COMPONENTS & STYLES ---

const InputGroup = ({ label, placeholder }: any) => (
    <div>
        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>{label}</label>
        <textarea placeholder={placeholder} style={{
            width: '100%', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white', fontFamily: bodyFont
        }} />
    </div>
);

const h2Style: React.CSSProperties = { fontSize: '3rem', fontFamily: displayFont, marginBottom: '0.5rem' };
const subStyle: React.CSSProperties = { color: '#8899a6', marginBottom: '3rem', fontSize: '1.1rem' };
const labelStyle: React.CSSProperties = { display: 'block', marginBottom: '1rem', fontWeight: 600, fontSize: '1.1rem' };

const cardStyle = (active: boolean) => ({
    padding: '1.5rem', borderRadius: '0.75rem', cursor: 'pointer', transition: 'all 0.2s',
    border: active ? '2px solid #6CE9A6' : '1px solid rgba(255,255,255,0.1)',
    background: active ? 'rgba(108, 233, 166, 0.05)' : 'rgba(255,255,255,0.02)',
    color: active ? '#6CE9A6' : 'white',
    display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', textAlign: 'center' as const, fontWeight: 500
});

const pillStyle = (active: boolean) => ({
    padding: '0.75rem 1.5rem', borderRadius: '2rem', cursor: 'pointer',
    border: active ? '1px solid #6CE9A6' : '1px solid rgba(255,255,255,0.1)',
    background: active ? '#6CE9A6' : 'transparent',
    color: active ? '#131e1e' : 'white', fontWeight: 500
});

const inputStyle = {
    padding: '1.25rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.5rem', color: 'white', fontFamily: bodyFont, outline: 'none'
};

const btnStyle = {
    padding: '1rem 2rem', borderRadius: '2rem', cursor: 'pointer', border: 'none',
    fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: bodyFont
};

const lineItemStyle = {
    display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #eee'
};
