"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Quote, ShieldCheck } from "lucide-react";

// Replace the quote text below with genuine, authorized feedback before launch.
// Do not publish invented testimonials as actual patient experiences.
const testimonials = [
    {
        subject: "Transcending Psychiatry",
        quote: "[Insert an authentic, approved anonymous quote about the experience with Transcending Psychiatry.]",
    },
    {
        subject: "Joe · Psychiatric Provider",
        quote: "[Insert an authentic, approved anonymous quote about Joe's listening, communication, or approach to care.]",
    },
    {
        subject: "Transcending Psychiatry",
        quote: "[Insert another authentic, approved anonymous quote about the practice.]",
    },
    {
        subject: "Joe · Psychiatric Provider",
        quote: "[Insert another authentic, approved anonymous quote about Joe.]",
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const current = testimonials[currentIndex];

    const navigate = (step: number) => {
        setDirection(step);
        setCurrentIndex((index) =>
            (index + step + testimonials.length) % testimonials.length
        );
    };

    const goTo = (index: number) => {
        if (index === currentIndex) return;
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    useEffect(() => {
        const timer = window.setInterval(() => {
            setDirection(1);
            setCurrentIndex((index) => (index + 1) % testimonials.length);
        }, 7000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-heading"
            className="relative overflow-hidden bg-[#fffaf6] py-20 sm:py-24 lg:py-28"
        >
            <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#ff7426]/[0.06] blur-[100px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#ff9b58]/[0.10] blur-[100px]" />

            <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-10 hidden h-72 w-96 opacity-[0.08] md:block">
                <svg viewBox="0 0 420 320" className="h-full w-full">
                    <circle cx="145" cy="160" r="112" fill="none" stroke="#FF5A1F" strokeWidth="2" />
                    <circle cx="215" cy="160" r="112" fill="none" stroke="#FF7A2F" strokeWidth="2" />
                    <circle cx="285" cy="160" r="112" fill="none" stroke="#FF9B58" strokeWidth="2" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-[790px] text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff7426]/20 bg-white/75 px-4 py-2 shadow-sm">
                        <Heart className="h-4 w-4 text-[#ff7426]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e85f18]">
                            Anonymous Reflections
                        </span>
                    </div>
                    <h2 id="testimonials-heading" className="font-serif text-[39px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#252525] sm:text-[50px] lg:text-[60px]">
                        Words of <span className="text-[#ff7426]">appreciation.</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-[#686868] sm:text-lg">
                        A space for anonymous reflections about Transcending Psychiatry and Joe,
                        shared with respect for privacy and confidentiality.
                    </p>
                </motion.div>

                <div className="relative mx-auto mt-12 max-w-[1080px] sm:mt-14 lg:mt-16">
                    <div className="absolute left-1/2 top-0 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-[#ff7426]" />
                    <div className="relative overflow-hidden rounded-[30px] border border-[#eadfd8] bg-white/90 shadow-[0_30px_80px_rgba(62,43,30,0.10)] backdrop-blur-xl sm:rounded-[36px]">
                        <Quote aria-hidden="true" strokeWidth={1} className="pointer-events-none absolute -right-4 -top-7 h-40 w-40 rotate-180 text-[#ff7426]/[0.07] sm:h-52 sm:w-52" />
                        <div className="relative flex min-h-[390px] items-center justify-center px-6 py-12 sm:min-h-[400px] sm:px-12 lg:px-20">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    initial={{ opacity: 0, x: direction > 0 ? 35 : -35, y: 5 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    exit={{ opacity: 0, x: direction > 0 ? -35 : 35 }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className="mx-auto w-full max-w-[820px] text-center"
                                >
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#252525] text-[#ff8a47] shadow-lg">
                                        <Quote className="h-6 w-6" />
                                    </div>
                                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#d76524]">
                                        {current.subject}
                                    </p>
                                    <blockquote className="mx-auto mt-6 max-w-[780px] font-serif text-[22px] font-medium leading-[1.5] tracking-[-0.02em] text-[#252525] sm:text-[28px] lg:text-[31px]">
                                        “{current.quote}”
                                    </blockquote>
                                    <div className="mx-auto mt-7 h-px w-12 bg-[#ff7426]" />
                                    <p className="mt-5 text-sm font-medium text-[#79716c]">Anonymous reflection</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <button type="button" onClick={() => navigate(-1)} aria-label="Previous quote" className="absolute -left-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#252525] shadow-lg transition hover:border-[#ff7426] hover:bg-[#ff7426] hover:text-white lg:flex">
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button type="button" onClick={() => navigate(1)} aria-label="Next quote" className="absolute -right-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#252525] shadow-lg transition hover:border-[#ff7426] hover:bg-[#ff7426] hover:text-white lg:flex">
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
                        <button type="button" onClick={() => navigate(-1)} aria-label="Previous quote" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#252525] shadow-sm"><ChevronLeft className="h-5 w-5" /></button>
                        <button type="button" onClick={() => navigate(1)} aria-label="Next quote" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#252525] shadow-sm"><ChevronRight className="h-5 w-5" /></button>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-2" aria-label="Select a quote">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goTo(index)}
                                aria-label={`View quote ${index + 1}`}
                                aria-current={currentIndex === index ? "true" : undefined}
                                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? "w-8 bg-[#ff7426]" : "w-2.5 bg-[#252525]/15 hover:bg-[#ff7426]/50"}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mx-auto mt-12 flex max-w-[850px] flex-col items-center gap-4 rounded-[24px] border border-[#eadfd8] bg-white/75 px-6 py-6 text-center shadow-sm sm:flex-row sm:text-left">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#252525] text-[#ff8a47]">
                        <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-[#252525]">Privacy comes first.</p>
                        <p className="mt-1 text-xs leading-6 text-[#74706d]">
                            Reflections are displayed without names, photographs, or identifying details.
                        </p>
                    </div>
                </div>

                <p className="mx-auto mt-5 max-w-[720px] text-center text-xs leading-5 text-[#9a918b]">
                    Development placeholders — replace all bracketed text with authentic, approved quotes before publishing.
                </p>
            </div>
        </section>
    );
}
