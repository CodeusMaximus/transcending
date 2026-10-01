"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Quote,
    ShieldCheck,
    Sparkles,
    Star,
} from "lucide-react";

/*
 * DEVELOPMENT PLACEHOLDERS ONLY.
 * Replace these with authentic, client-approved testimonials before launch.
 */
const testimonials = [
    {
        quote:
            "Placeholder testimonial — replace this with an authentic, client-approved patient review before publishing the website.",
        name: "Patient Review",
        detail: "Placeholder",
    },
    {
        quote:
            "Placeholder testimonial — this space can highlight a patient's experience with compassionate, personalized psychiatric care once approved.",
        name: "Patient Review",
        detail: "Placeholder",
    },
    {
        quote:
            "Placeholder testimonial — add an approved review here that reflects the actual experience of a Transcending Psychiatry patient.",
        name: "Patient Review",
        detail: "Placeholder",
    },
    {
        quote:
            "Placeholder testimonial — replace with genuine feedback before launch. Do not present sample copy as a real patient statement.",
        name: "Patient Review",
        detail: "Placeholder",
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const current = testimonials[currentIndex];

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((previous) =>
            previous === testimonials.length - 1 ? 0 : previous + 1
        );
    };

    const previousTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((previous) =>
            previous === 0 ? testimonials.length - 1 : previous - 1
        );
    };

    const goToTestimonial = (index: number) => {
        if (index === currentIndex) return;
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    useEffect(() => {
        const timer = window.setInterval(() => {
            setDirection(1);
            setCurrentIndex((previous) =>
                previous === testimonials.length - 1 ? 0 : previous + 1
            );
        }, 7000);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-[#fffaf6] py-20 sm:py-24 lg:py-28"
        >
            {/* Soft background atmosphere */}
            <div className="pointer-events-none absolute -left-[180px] top-[8%] h-[440px] w-[440px] rounded-full bg-[#ff7426]/[0.055] blur-[100px]" />
            <div className="pointer-events-none absolute -right-[170px] bottom-[-90px] h-[420px] w-[420px] rounded-full bg-[#ff9b58]/[0.09] blur-[100px]" />

            {/* Transcending ring motif */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 top-8 hidden h-[320px] w-[420px] opacity-[0.08] md:block"
            >
                <svg viewBox="0 0 420 320" className="h-full w-full">
                    <circle cx="145" cy="160" r="112" fill="none" stroke="#FF5A1F" strokeWidth="2" />
                    <circle cx="215" cy="160" r="112" fill="none" stroke="#FF7A2F" strokeWidth="2" />
                    <circle cx="285" cy="160" r="112" fill="none" stroke="#FF9B58" strokeWidth="2" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65 }}
                    className="mx-auto max-w-[790px] text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff7426]/20 bg-white/75 px-4 py-2 shadow-sm backdrop-blur">
                        <Heart className="h-4 w-4 text-[#ff7426]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e85f18]">
                            Patient Experiences
                        </span>
                    </div>

                    <h2 className="font-serif text-[39px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#252525] sm:text-[50px] lg:text-[60px]">
                        Care built around{" "}
                        <span className="text-[#ff7426]">the person.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-[660px] text-[16px] leading-7 text-[#686868] sm:text-[18px]">
                        Every person brings a different story, set of goals, and experience
                        to treatment. Transcending Psychiatry is committed to thoughtful,
                        collaborative care that helps people feel heard and supported.
                    </p>
                </motion.div>

                {/* Testimonial experience */}
                <div className="relative mx-auto mt-12 max-w-[1080px] sm:mt-14 lg:mt-16">
                    <div className="absolute left-1/2 top-0 z-20 h-[4px] w-[92px] -translate-x-1/2 rounded-full bg-[#ff7426]" />

                    <div className="relative overflow-hidden rounded-[30px] border border-[#eadfd8] bg-white/85 shadow-[0_30px_80px_rgba(62,43,30,0.10)] backdrop-blur-xl sm:rounded-[36px]">
                        {/* subtle ring watermark */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-28 -left-28 h-[350px] w-[440px] opacity-[0.055]"
                        >
                            <svg viewBox="0 0 440 350" className="h-full w-full">
                                <circle cx="145" cy="175" r="125" fill="none" stroke="#FF5A1F" strokeWidth="3" />
                                <circle cx="220" cy="175" r="125" fill="none" stroke="#FF7A2F" strokeWidth="3" />
                                <circle cx="295" cy="175" r="125" fill="none" stroke="#FF9B58" strokeWidth="3" />
                            </svg>
                        </div>

                        <Quote
                            strokeWidth={1}
                            className="pointer-events-none absolute -right-4 -top-7 h-[150px] w-[150px] rotate-180 text-[#ff7426]/[0.07] sm:h-[210px] sm:w-[210px] lg:right-8"
                        />

                        <div className="relative min-h-[460px] px-6 py-12 sm:min-h-[430px] sm:px-12 sm:py-14 lg:flex lg:min-h-[440px] lg:items-center lg:px-20">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    initial={{
                                        opacity: 0,
                                        x: direction > 0 ? 35 : -35,
                                        y: 5,
                                    }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    exit={{
                                        opacity: 0,
                                        x: direction > 0 ? -35 : 35,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="mx-auto w-full max-w-[820px] text-center"
                                >
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#252525] text-[#ff8a47] shadow-[0_12px_28px_rgba(37,37,37,0.18)]">
                                        <Quote className="h-6 w-6" fill="currentColor" />
                                    </div>

                                    <div
                                        className="mt-6 flex justify-center gap-1"
                                        aria-label="Five star testimonial placeholder"
                                    >
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Star
                                                key={index}
                                                className="h-4 w-4 text-[#ff7426]"
                                                fill="currentColor"
                                            />
                                        ))}
                                    </div>

                                    <blockquote className="mx-auto mt-6 max-w-[780px] font-serif text-[23px] font-medium leading-[1.5] tracking-[-0.02em] text-[#252525] sm:text-[29px] lg:text-[32px] lg:leading-[1.42]">
                                        “{current.quote}”
                                    </blockquote>

                                    <div className="mx-auto mt-7 h-px w-12 bg-[#ff7426]" />

                                    <div className="mt-5">
                                        <p className="text-[15px] font-bold text-[#252525]">
                                            {current.name}
                                        </p>
                                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a817b]">
                                            {current.detail}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Desktop arrows */}
                    <button
                        type="button"
                        onClick={previousTestimonial}
                        aria-label="Previous testimonial"
                        className="absolute left-[-22px] top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#252525] shadow-[0_10px_30px_rgba(62,43,30,0.12)] transition-all hover:-translate-x-1 hover:border-[#ff7426] hover:bg-[#ff7426] hover:text-white lg:flex"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                        type="button"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                        className="absolute right-[-22px] top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#252525] shadow-[0_10px_30px_rgba(62,43,30,0.12)] transition-all hover:translate-x-1 hover:border-[#ff7426] hover:bg-[#ff7426] hover:text-white lg:flex"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Mobile controls */}
                    <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
                        <button
                            type="button"
                            onClick={previousTestimonial}
                            aria-label="Previous testimonial"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#252525] shadow-sm transition hover:border-[#ff7426] hover:bg-[#ff7426] hover:text-white"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#252525] shadow-sm transition hover:border-[#ff7426] hover:bg-[#ff7426] hover:text-white"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="mt-6 flex items-center justify-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goToTestimonial(index)}
                                aria-label={`View testimonial ${index + 1}`}
                                aria-current={currentIndex === index ? "true" : undefined}
                                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                                        ? "w-8 bg-[#ff7426]"
                                        : "w-2.5 bg-[#252525]/15 hover:bg-[#ff7426]/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust / privacy message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto mt-12 flex max-w-[850px] flex-col items-center justify-center gap-5 rounded-[24px] border border-[#eadfd8] bg-white/75 px-6 py-6 text-center shadow-[0_14px_40px_rgba(62,43,30,0.05)] backdrop-blur sm:flex-row sm:text-left"
                >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#252525] text-[#ff8a47]">
                        <ShieldCheck className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center justify-center gap-2 sm:justify-start">
                            <Sparkles className="h-4 w-4 text-[#ff7426]" />
                            <p className="text-[14px] font-bold text-[#252525]">
                                Your experience matters.
                            </p>
                        </div>

                        <p className="mt-1 text-[12px] leading-5 text-[#74706d]">
                            We are committed to compassionate, respectful care and protecting
                            the privacy of every individual we serve.
                        </p>
                    </div>
                </motion.div>

                {/* Development-only warning */}
                <p className="mx-auto mt-5 max-w-[720px] text-center text-[10px] leading-5 text-[#9a918b]">
                    Development note: testimonial content shown here is placeholder copy.
                    Replace it with authentic, approved patient feedback before publishing.
                </p>
            </div>
        </section>
    );
}
