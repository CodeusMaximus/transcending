
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    HeartHandshake,
    Brain,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const highlights = [
    {
        icon: HeartHandshake,
        title: "Compassionate Care",
        description:
            "A welcoming environment where your concerns are heard and respected.",
    },
    {
        icon: Brain,
        title: "Personalized Treatment",
        description:
            "An individualized approach to mental wellness and long-term progress.",
    },
    {
        icon: ShieldCheck,
        title: "Confidential Support",
        description:
            "Professional, respectful care centered around your well-being.",
    },
];

export default function ProviderPage() {
    return (
        <main className="overflow-hidden bg-white text-[#292929]">
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#faf8f5]">
                <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/60 blur-[110px]" />

                <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c56b32]">
                            <Sparkles size={15} />
                            Meet Your Provider
                        </div>

                        <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-[#292929] sm:text-6xl lg:text-7xl">
                            Meet Joe.
                            <br />
                            <span className="text-[#d77c43]">
                                Care That
                                <br />
                                Connects.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-[#686868]">
                            At Transcending Psychiatry, we believe meaningful
                            mental health care begins with understanding,
                            compassion, and genuine human connection.
                        </p>

                        <p className="mt-5 max-w-xl text-base leading-8 text-[#777]">
                            Our approach focuses on seeing the whole person,
                            understanding individual challenges, and working
                            together toward greater emotional balance and
                            lasting well-being.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-full bg-[#d77c43] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition hover:-translate-y-1 hover:bg-[#bd6630]"
                            >
                                Book an Appointment
                                <ArrowRight size={17} />
                            </Link>

                            <a
                                href="#philosophy"
                                className="inline-flex items-center gap-3 rounded-full border border-[#ded9d3] bg-white px-8 py-4 text-sm font-semibold text-[#444] transition hover:border-[#d77c43]"
                            >
                                Our Philosophy
                            </a>
                        </div>
                    </motion.div>

                    {/* JOE'S PHOTO */}
                    <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[510px]"
                    >
                        <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[36px] border border-[#d77c43]/30" />

                        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[#e8e2da] shadow-[0_30px_70px_rgba(50,35,20,0.12)]">
                            <Image
                                src="/images/joseph-spitalieri-transparent.png"
                                alt="Joe - Transcending Psychiatry"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 510px"
                                className="object-cover object-top"
                            />

                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#27211d]/75 to-transparent" />

                            <div className="absolute bottom-9 left-8 right-8 text-white">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                                    Transcending Psychiatry
                                </p>
                                <h2 className="mt-3 font-serif text-4xl">
                                    Joe
                                </h2>
                                <p className="mt-2 text-sm text-white/80">
                                    Personalized Mental Health Care
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section
                id="philosophy"
                className="bg-white px-6 py-24 md:px-10 lg:py-32"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d77c43]">
                        Our Philosophy
                    </p>

                    <h2 className="mt-6 font-serif text-4xl leading-tight text-[#292929] sm:text-5xl">
                        Mental health care should feel
                        <span className="text-[#d77c43]">
                            {" "}personal, supportive, and human.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-[#777]">
                        We believe every individual deserves the opportunity
                        to feel understood, supported, and empowered in their
                        mental health journey.
                    </p>
                </motion.div>

                <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 }}
                                className="rounded-[28px] border border-[#eee8e1] bg-[#fcfaf8] p-9 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8e7dc] text-[#d77c43]">
                                    <Icon size={26} />
                                </div>

                                <h3 className="mt-7 font-serif text-2xl text-[#333]">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#777]">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden bg-[#302b28] px-6 py-24 text-center text-white">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[100px]" />

                <div className="relative mx-auto max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                        Your Journey Starts Here
                    </p>

                    <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                        A healthier tomorrow
                        <br />
                        begins with a conversation.
                    </h2>

                    <p className="mx-auto mt-7 max-w-xl leading-8 text-white/65">
                        Discover a thoughtful, personalized approach to
                        mental health care with Transcending Psychiatry.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d77c43] px-9 py-4 text-sm font-bold text-white transition hover:bg-[#e28d55]"
                    >
                        Get Started
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
