'use client';

import { Icon } from "@iconify/react";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useTheme } from "@/contexts/ThemeContext";

export default function LetsTalk() {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
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

    const supabase = createClient();

    const handleCheckbox = (value: string) => {
        setFormData(prev => ({
            ...prev,
            challenges: prev.challenges.includes(value)
                ? prev.challenges.filter(c => c !== value)
                : [...prev.challenges, value]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        if (!formData.role || !formData.scale) {
            setError('Please fill in all required fields.');
            setSubmitting(false);
            return;
        }

        const { error: submitError } = await supabase
            .from('inquiries')
            .insert([{
                role: formData.role,
                scale: formData.scale,
                challenges: formData.challenges,
                decision: formData.decision || null,
                prompt: formData.prompt || null,
                timing: formData.timing || null,
                advisors: formData.advisors || null,
            }]);

        setSubmitting(false);

        if (submitError) {
            setError('Something went wrong. Please try again.');
            console.error('Supabase error:', submitError);
        } else {
            setSubmitted(true);
        }
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
                                onClick={() => {
                                    setSubmitted(false);
                                    setFormData({
                                        role: '',
                                        scale: '',
                                        challenges: [],
                                        decision: '',
                                        prompt: '',
                                        timing: '',
                                        advisors: ''
                                    });
                                }}
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
                    <form onSubmit={handleSubmit} className="space-y-20">
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

                        {/* Vogue-style Submit Button */}
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
