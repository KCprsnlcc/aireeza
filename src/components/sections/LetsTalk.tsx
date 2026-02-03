'use client';

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useTheme } from "@/contexts/ThemeContext";
import { initScrollAnimations } from "@/hooks/useScrollAnimation";

export default function LetsTalk() {
    const { theme } = useTheme();
    const [stage, setStage] = useState<'stage1' | 'stage2'>('stage1');
    const [inquiryId, setInquiryId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        // Stage 1: Contact Information
        fullName: '',
        email: '',
        phone: '',
        // Stage 2: Strategic Questions
        role: '',
        scale: '',
        challenges: [] as string[],
        decision: '',
        prompt: '',
        timing: '',
        advisors: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

    const supabase = createClient();

    // Reinitialize scroll animations when stage changes to stage2
    useEffect(() => {
        if (stage === 'stage2') {
            // Small delay to ensure DOM is updated with stage2 elements
            setTimeout(() => {
                initScrollAnimations();
            }, 100);
        }
    }, [stage]);

    // Validation functions
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string) => {
        const phoneRegex = /^[+]?[\d\s\-\(\)]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    };

    const validateFullName = (name: string) => {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name.trim()) && name.trim().split(' ').length >= 2 && name.trim().length >= 3;
    };

    const validateStage1 = () => {
        const errors: {[key: string]: string} = {};
        
        if (!formData.fullName.trim()) {
            errors.fullName = 'Full name is required';
        } else if (!validateFullName(formData.fullName)) {
            errors.fullName = 'Please enter a valid full name (at least 2 words)';
        }
        
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            errors.phone = 'Please enter a valid phone number (at least 10 digits)';
        }
        
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleStage1Submit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateStage1()) {
            return;
        }
        
        setSubmitting(true);
        setError(null);

        try {
            const { data, error: submitError } = await supabase
                .from('inquiries')
                .insert([{
                    full_name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    status: 'incomplete'
                }])
                .select()
                .single();

            if (submitError) throw submitError;
            
            setInquiryId(data.id);
            setStage('stage2');
        } catch (err) {
            setError('Something went wrong. Please try again.');
            console.error('Supabase error:', err);
        } finally {
            setSubmitting(false);
        }
    };

    const handleStage2Submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        if (!formData.role || !formData.scale) {
            setError('Please fill in all required fields.');
            setSubmitting(false);
            return;
        }

        try {
            const { error: submitError } = await supabase
                .from('inquiries')
                .update({
                    role: formData.role,
                    scale: formData.scale,
                    challenges: formData.challenges,
                    decision: formData.decision || null,
                    prompt: formData.prompt || null,
                    timing: formData.timing || null,
                    advisors: formData.advisors || null,
                    status: 'pending'
                })
                .eq('id', inquiryId);

            if (submitError) throw submitError;
            
            setSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please try again.');
            console.error('Supabase error:', err);
        } finally {
            setSubmitting(false);
        }
    };

    const handleCheckbox = (value: string) => {
        setFormData(prev => ({
            ...prev,
            challenges: prev.challenges.includes(value)
                ? prev.challenges.filter(c => c !== value)
                : [...prev.challenges, value]
        }));
    };

    const resetForm = () => {
        setStage('stage1');
        setInquiryId(null);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            role: '',
            scale: '',
            challenges: [],
            decision: '',
            prompt: '',
            timing: '',
            advisors: ''
        });
        setValidationErrors({});
    };

    return (
        <section id="lets-talk" className={`py-32 border-b relative overflow-hidden ${
            theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
        }`}>
            {/* Vogue-style background decoration */}
            <div className="absolute top-0 left-0 w-48 h-full opacity-5">
                <div className="text-8xl font-black tracking-tighter writing-mode-vertical">
                    CONTACT
                </div>
            </div>
            
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Vogue-style header */}
                <div className="text-center mb-32 zoom-in">
                    <div className="flex items-center justify-center gap-8 mb-8">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">06</span>
                        <div className={`h-px w-24 ${
                            theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-300'
                        }`}></div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ LET'S TALK</span>
                    </div>
                    
                    <h2 className={`text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.7] mb-16 ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                        CLARITY
                        <span className={`block text-6xl md:text-7xl lg:text-8xl font-light tracking-wider mt-4 ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            BEFORE
                        </span>
                        <span className="block text-6xl md:text-7xl lg:text-8xl font-light tracking-wider">
                            ACTING
                        </span>
                    </h2>
                    
                    <p className={`text-lg font-thin leading-relaxed tracking-wide max-w-3xl mx-auto ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                        If you are navigating a meaningful financial decision, this conversation is designed to assess context and fit.
                    </p>
                </div>

                {/* Vogue-style intake form */}
                <div className={`relative p-16 lg:p-24 slide-in-left border-l-4 ${
                    theme === 'dark' 
                        ? 'bg-neutral-900/20 border-neutral-800' 
                        : 'bg-neutral-50 border-neutral-300'
                }`}>
                    <div className={`absolute left-6 top-8 text-6xl font-black opacity-10 ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>"</div>
                    {submitted ? (
                        <div className="text-center py-24">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-12 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-emerald-500/20' : 'bg-emerald-500/10'
                            }`}>
                                <Icon icon="solar:check-circle-linear" className={`w-10 h-10 transition-colors duration-700 ${
                                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                                }`} />
                            </div>
                            <h3 className={`text-3xl font-black tracking-tight mb-6 ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>Inquiry Received</h3>
                            <p className={`text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>
                                Thank you for reaching out. I will review your submission and respond within 48 hours if there is a potential fit.
                            </p>
                            <button
                                onClick={resetForm}
                                className={`inline-flex items-center gap-3 group transition-all duration-500 ${
                                    theme === 'dark' 
                                        ? 'text-neutral-400 hover:text-white' 
                                        : 'text-neutral-600 hover:text-black'
                                }`}
                            >
                                <span className="text-xs font-black uppercase tracking-[0.3em]">Submit another inquiry</span>
                                <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={stage === 'stage1' ? handleStage1Submit : handleStage2Submit} className="space-y-20">
                            {stage === 'stage1' && (
                                <>
                                    {/* Stage 1: Contact Information */}
                                    <div className="space-y-16">
                                        <div className={`pb-12 border-b ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}>
                                            <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-8 pb-3 border-b ${theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}>Contact Information</h3>
                                            <p className={`text-xs font-light tracking-wide mb-8 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>Please provide your contact details to begin the conversation:</p>
                                            
                                            <div className="space-y-8">
                                                {/* Full Name */}
                                                <div>
                                                    <label className={`block text-xs font-black uppercase tracking-[0.3em] mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Full Name *</label>
                                                    <input
                                                        type="text"
                                                        value={formData.fullName}
                                                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                                        placeholder="Enter your full name"
                                                        className={`w-full border p-6 focus:outline-none transition-colors resize-none font-light leading-relaxed tracking-wide ${theme === 'dark' ? 'bg-neutral-950 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-white' : 'bg-white border-neutral-300 text-black placeholder:text-neutral-400 focus:border-black'} ${validationErrors.fullName ? 'border-red-500' : ''}`}
                                                    />
                                                    {validationErrors.fullName && (
                                                        <p className="text-red-400 text-xs font-light mt-2">{validationErrors.fullName}</p>
                                                    )}
                                                </div>

                                                {/* Email */}
                                                <div>
                                                    <label className={`block text-xs font-black uppercase tracking-[0.3em] mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Email Address *</label>
                                                    <input
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                        placeholder="Enter your email address"
                                                        className={`w-full border p-6 focus:outline-none transition-colors resize-none font-light leading-relaxed tracking-wide ${theme === 'dark' ? 'bg-neutral-950 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-white' : 'bg-white border-neutral-300 text-black placeholder:text-neutral-400 focus:border-black'} ${validationErrors.email ? 'border-red-500' : ''}`}
                                                    />
                                                    {validationErrors.email && (
                                                        <p className="text-red-400 text-xs font-light mt-2">{validationErrors.email}</p>
                                                    )}
                                                </div>

                                                {/* Phone */}
                                                <div>
                                                    <label className={`block text-xs font-black uppercase tracking-[0.3em] mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Phone Number *</label>
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                        placeholder="Enter your phone number (include country code)"
                                                        className={`w-full border p-6 focus:outline-none transition-colors resize-none font-light leading-relaxed tracking-wide ${theme === 'dark' ? 'bg-neutral-950 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-white' : 'bg-white border-neutral-300 text-black placeholder:text-neutral-400 focus:border-black'} ${validationErrors.phone ? 'border-red-500' : ''}`}
                                                    />
                                                    {validationErrors.phone && (
                                                        <p className="text-red-400 text-xs font-light mt-2">{validationErrors.phone}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stage 1 Submit Button */}
                                        <div className="pt-16 text-center">
                                            {error && (
                                                <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                                                    <p className="text-sm font-light text-red-400">{error}</p>
                                                </div>
                                            )}
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className={`inline-flex items-center gap-4 px-12 py-6 rounded-full transition-all duration-700 font-black text-xs uppercase tracking-[0.3em] disabled:opacity-50 disabled:cursor-not-allowed group ${
                                                    theme === 'dark' 
                                                        ? 'bg-white text-black hover:bg-neutral-200 hover:scale-105' 
                                                        : 'bg-black text-white hover:bg-neutral-800 hover:scale-105'
                                                }`}>
                                                {submitting ? (
                                                    <>
                                                        <Icon icon="solar:spinner-linear" className="w-5 h-5 animate-spin" />
                                                        Proceeding...
                                                    </>
                                                ) : (
                                                    <>
                                                        Continue to Strategic Questions
                                                        <span className="transition-transform duration-700 group-hover:translate-x-2">→</span>
                                                    </>
                                                )}
                                            </button>
                                            <p className={`text-xs font-light leading-relaxed tracking-wide mt-8 max-w-2xl mx-auto ${
                                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                                            }`}>
                                                Continue to the next step to provide more context.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {stage === 'stage2' && (
                                <>
                                    {/* Role */}
                                    <div className={`pb-12 border-b stagger-item ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}>
                                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-8 pb-3 border-b ${theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}>Your Role in the Business</h3>
                                        <p className={`text-xs font-light tracking-wide mb-8 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>Which best describes your position:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                'Founder or Co-founder',
                                                'Executive leader (CEO, CFO, COO, President)',
                                                'Board member or advisor',
                                                'Senior leader with decision authority'
                                            ].map((option) => (
                                                <label key={option} className="flex items-center gap-4 cursor-pointer group p-4 rounded-lg transition-all duration-500 hover:bg-neutral-900/20">
                                                    <input
                                                        type="radio"
                                                        name="role"
                                                        value={option}
                                                        checked={formData.role === option}
                                                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                                                        className="w-5 h-5 text-white border-neutral-600 bg-transparent focus:ring-white focus:ring-2"
                                                    />
                                                    <span className={`text-sm font-light leading-relaxed tracking-wide transition-colors ${theme === 'dark' ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'}`}>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Business Scale */}
                                    <div className={`pb-12 border-b stagger-item ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}>
                                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-8 pb-3 border-b ${theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}>Business Scale</h3>
                                        <p className={`text-xs font-light tracking-wide mb-8 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>Which range best reflects your current operation:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                'Pre-revenue or early stage',
                                                'Growing organization with an operating team',
                                                'Scaling or multi-entity business',
                                                'Established organization with complex operations'
                                            ].map((option) => (
                                                <label key={option} className="flex items-center gap-4 cursor-pointer group p-4 rounded-lg transition-all duration-500 hover:bg-neutral-900/20">
                                                    <input
                                                        type="radio"
                                                        name="scale"
                                                        value={option}
                                                        checked={formData.scale === option}
                                                        onChange={(e) => setFormData({...formData, scale: e.target.value})}
                                                        className="w-5 h-5 text-white border-neutral-600 bg-transparent focus:ring-white focus:ring-2"
                                                    />
                                                    <span className={`text-sm font-light leading-relaxed tracking-wide transition-colors ${theme === 'dark' ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'}`}>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Primary Challenge */}
                                    <div className={`pb-12 border-b stagger-item ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}>
                                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-8 pb-3 border-b ${theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}>Primary Challenge</h3>
                                        <div className="space-y-6">
                                            {[
                                                'Profitability and performance clarity',
                                                'Cash flow and growth tradeoffs',
                                                'Strategic planning or scenario evaluation',
                                                'Governance, oversight, or readiness for change'
                                            ].map((option) => (
                                                <label key={option} className="flex items-center gap-4 cursor-pointer group p-4 rounded-lg transition-all duration-500 hover:bg-neutral-900/20">
                                                    <input
                                                        type="checkbox"
                                                        value={option}
                                                        checked={formData.challenges.includes(option)}
                                                        onChange={() => handleCheckbox(option)}
                                                        className="w-5 h-5 text-white border-neutral-600 bg-transparent focus:ring-white focus:ring-2 rounded"
                                                    />
                                                    <span className={`text-sm font-light leading-relaxed tracking-wide transition-colors ${theme === 'dark' ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'}`}>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* The Decision */}
                                    <div className={`pb-12 border-b stagger-item ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}>
                                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-8 pb-3 border-b ${theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}>The Decision You Are Facing</h3>
                                        <p className={`text-xs font-light tracking-wide mb-8 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>What decision are you currently trying to make or prepare for?</p>
                                        <textarea
                                            value={formData.decision}
                                            onChange={(e) => setFormData({...formData, decision: e.target.value})}
                                            placeholder="Describe the decision you're facing..."
                                            className={`w-full border p-6 focus:outline-none transition-colors resize-none font-light leading-relaxed tracking-wide ${theme === 'dark' ? 'bg-neutral-950 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-white' : 'bg-white border-neutral-300 text-black placeholder:text-neutral-400 focus:border-black'}`}
                                            rows={5}
                                        />
                                    </div>

                                    {/* What Prompted This */}
                                    <div className={`pb-12 border-b stagger-item ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}>
                                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-8 pb-3 border-b ${theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}>What Prompted This Now</h3>
                                        <p className={`text-xs font-light tracking-wide mb-8 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>Why does this decision matter at this point:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                'Growth or expansion pressure',
                                                'Cash flow or profitability concerns',
                                                'Increased complexity or risk',
                                                'Upcoming board, investor, or strategic review'
                                            ].map((option) => (
                                                <label key={option} className="flex items-center gap-4 cursor-pointer group p-4 rounded-lg transition-all duration-500 hover:bg-neutral-900/20">
                                                    <input
                                                        type="radio"
                                                        name="prompt"
                                                        value={option}
                                                        checked={formData.prompt === option}
                                                        onChange={(e) => setFormData({...formData, prompt: e.target.value})}
                                                        className="w-5 h-5 text-white border-neutral-600 bg-transparent focus:ring-white focus:ring-2"
                                                    />
                                                    <span className={`text-sm font-light leading-relaxed tracking-wide transition-colors ${theme === 'dark' ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'}`}>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Timing and Urgency */}
                                    <div className={`pb-12 border-b stagger-item ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}>
                                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-8 pb-3 border-b ${theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}>Timing and Urgency</h3>
                                        <p className={`text-xs font-light tracking-wide mb-8 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>When do you need clarity to move forward:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                'Immediate decision required',
                                                'Within the next 30 to 60 days',
                                                'Planning for the next quarter or two',
                                                'Exploratory, no fixed timeline'
                                            ].map((option) => (
                                                <label key={option} className="flex items-center gap-4 cursor-pointer group p-4 rounded-lg transition-all duration-500 hover:bg-neutral-900/20">
                                                    <input
                                                        type="radio"
                                                        name="timing"
                                                        value={option}
                                                        checked={formData.timing === option}
                                                        onChange={(e) => setFormData({...formData, timing: e.target.value})}
                                                        className="w-5 h-5 text-white border-neutral-600 bg-transparent focus:ring-white focus:ring-2"
                                                    />
                                                    <span className={`text-sm font-light leading-relaxed tracking-wide transition-colors ${theme === 'dark' ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'}`}>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* How You Work With Advisors */}
                                    <div className="stagger-item">
                                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-8 pb-3 border-b ${theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}>How You Typically Work With Advisors</h3>
                                        <p className={`text-xs font-light tracking-wide mb-8 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>Which best reflects your expectations:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                'Strategic thought partnership and challenge',
                                                'Decision support and framing',
                                                'Ongoing advisory relationship',
                                                'Not sure yet'
                                            ].map((option) => (
                                                <label key={option} className="flex items-center gap-4 cursor-pointer group p-4 rounded-lg transition-all duration-500 hover:bg-neutral-900/20">
                                                    <input
                                                        type="radio"
                                                        name="advisors"
                                                        value={option}
                                                        checked={formData.advisors === option}
                                                        onChange={(e) => setFormData({...formData, advisors: e.target.value})}
                                                        className="w-5 h-5 text-white border-neutral-600 bg-transparent focus:ring-white focus:ring-2"
                                                    />
                                                    <span className={`text-sm font-light leading-relaxed tracking-wide transition-colors ${theme === 'dark' ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'}`}>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stage 2 Submit Button */}
                                    <div className="pt-16 text-center">
                                        {error && (
                                            <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                                                <p className="text-sm font-light text-red-400">{error}</p>
                                            </div>
                                        )}
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className={`inline-flex items-center gap-4 px-12 py-6 rounded-full transition-all duration-700 font-black text-xs uppercase tracking-[0.3em] disabled:opacity-50 disabled:cursor-not-allowed group ${
                                                theme === 'dark' 
                                                    ? 'bg-white text-black hover:bg-neutral-200 hover:scale-105' 
                                                    : 'bg-black text-white hover:bg-neutral-800 hover:scale-105'
                                            }`}>
                                            {submitting ? (
                                                <>
                                                    <Icon icon="solar:spinner-linear" className="w-5 h-5 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    Discuss a Strategic Question
                                                    <span className="transition-transform duration-700 group-hover:translate-x-2">→</span>
                                                </>
                                            )}
                                        </button>
                                        <p className={`text-xs font-light leading-relaxed tracking-wide mt-8 max-w-2xl mx-auto ${
                                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                                        }`}>
                                            This is a short, focused conversation to determine fit and next steps.
                                        </p>
                                    </div>
                                </>
                            )}
                        </form>
                    )}
                </div>

                {/* Vogue-style footer note */}
                <div className="text-center mt-16 zoom-in">
                    <div className={`inline-block p-8 border-t-2 border-b-2 ${
                        theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                    }`}>
                        <p className={`text-xs font-light leading-relaxed tracking-wide ${
                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                        }`}>
                            This conversation is intended for leaders seeking clarity on high-impact decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
