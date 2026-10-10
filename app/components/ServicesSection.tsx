"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Brain,
    Check,
    ClipboardCheck,
    HeartPulse,
    MapPin,
    Pill,
    ShieldCheck,
    Sparkles,
    Video,
} from "lucide-react";
import BookAppointmentButton from "./BookAppointmentButton";

const conditions = [
    "Anxiety Disorders",
    "Depression",
    "Bipolar Disorder",
    "Schizophrenia",
    "Schizoaffective Disorder",
    "Obsessive-Compulsive Disorder (OCD)",
    "Post-Traumatic Stress Disorder (PTSD)",
    "Personality Disorders",
];

const services = [
    {
        number: "01",
        title: "Psychiatric Medication Management",
        description:
            "Thoughtful medication care built around you. We assess your needs, discuss options clearly, and monitor treatment over time to support your mental health goals.",
        href: "/medication-management",
        icon: Pill,
        label: "Ongoing psychiatric care",
    },
    {
        number: "02",
        title: "Comprehensive Psychiatric Evaluations",
        description:
            "A thorough evaluation of your mental, emotional, and physical health—looking beyond symptoms to understand the whole person and guide an individualized treatment plan.",
        href: "/psychiatric-evaluation",
        icon: ClipboardCheck,
        label: "Personalized assessment",
    },
    {
        number: "03",
        title: "Conditions Treated",
        description:
            "Personalized psychiatric care for anxiety disorders, depression, bipolar disorder, schizophrenia, schizoaffective disorder, OCD, PTSD, and personality disorders. Serving adolescents and adults ages 12 and older.",
        href: "/conditions-treated",
        icon: Brain,
        label: "Mental health conditions",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#fffaf6] py-20 sm:py-24 lg:py-32"
        >
            {/* TRANSCENDING-STYLE BACKGROUND RINGS */}
            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div className="absolute -right-[220px] top-[40px] h-[560px] w-[560px] rounded-full border-[2px] border-[#ff5a1f]/[0.08]" />
                <div className="absolute -right-[95px] top-[40px] h-[560px] w-[560px] rounded-full border-[2px] border-[#ff7a2f]/[0.07]" />
                <div className="absolute right-[30px] top-[40px] h-[560px] w-[560px] rounded-full border-[2px] border-[#ff9b58]/[0.07]" />

                <div className="absolute -left-40 bottom-[-180px] h-[430px] w-[430px] rounded-full bg-[#ff7426]/[0.045] blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
                {/* INTRO */}
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.75fr] lg:items-end lg:gap-20">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#ff7426]" />
                            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#e6601c] sm:text-[12px]">
                                Our Services
                            </p>
                        </div>

                        <h2 className="max-w-[760px] text-[42px] font-semibold leading-[1.03] tracking-[-0.04em] text-[#252525] sm:text-[54px] lg:text-[66px]">
                            Care designed around{" "}
                            <span className="text-[#ff7426]">the whole you.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <p className="max-w-[560px] text-[16px] leading-[1.85] text-[#66615e] sm:text-[17px]">
                            Personalized, client-centered psychiatric care that considers
                            your symptoms, experiences, lifestyle, and overall well-being—not
                            just a diagnosis.
                        </p>
                    </motion.div>
                </div>

                {/* PRIMARY SERVICES */}
                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.18 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="h-full"
                            >
                                <Link
                                    href={service.href}
                                    className="group relative flex h-full min-h-[430px] flex-col flex-col overflow-hidden rounded-[34px] border border-[#3a2d25]/[0.08] bg-white/75 p-7 shadow-[0_18px_55px_rgba(87,56,34,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#ff7426]/25 hover:shadow-[0_30px_75px_rgba(87,56,34,0.12)] sm:p-9 lg:p-10"
                                >
                                    {/* card glow */}
                                    <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-[#ff7426]/0 blur-3xl transition-all duration-500 group-hover:bg-[#ff7426]/[0.07]" />

                                    {/* subtle ring artwork */}
                                    <svg
                                        viewBox="0 0 260 180"
                                        className="pointer-events-none absolute -right-8 -top-2 h-[190px] w-[275px] opacity-[0.11] transition-all duration-700 group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:opacity-[0.2]"
                                        aria-hidden="true"
                                    >
                                        <circle cx="118" cy="70" r="60" fill="none" stroke="#FF5A1F" strokeWidth="2" />
                                        <circle cx="154" cy="70" r="60" fill="none" stroke="#FF7A2F" strokeWidth="2" />
                                        <circle cx="190" cy="70" r="60" fill="none" stroke="#FF9B58" strokeWidth="2" />
                                    </svg>

                                    <div className="relative z-10 flex items-start justify-between">
                                        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[20px] border border-[#ff7426]/15 bg-[#fff2e9] text-[#f36f2a] shadow-[0_10px_25px_rgba(255,116,38,0.10)] transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-[#ff7426] group-hover:text-white">
                                            <Icon className="h-7 w-7" strokeWidth={1.7} />
                                        </div>

                                        <span className="text-[12px] font-bold tracking-[0.18em] text-[#ff7426]/70">
                                            {service.number}
                                        </span>
                                    </div>

                                    <div className="relative z-10 mt-12 max-w-[560px]">
                                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#e6601c]">
                                            {service.label}
                                        </p>

                                        <h3 className="max-w-[500px] text-[29px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#292725] sm:text-[34px]">
                                            {service.title}
                                        </h3>

                                        <p className="mt-5 max-w-[540px] text-[15px] leading-[1.8] text-[#6b6662] sm:text-[16px]">
                                            {service.description}
                                        </p>
                                    </div>


                                    <div className="relative z-10 mt-auto pt-9">
                                        <span
                                            className="
      relative inline-flex items-center justify-center
      gap-3 overflow-hidden rounded-full
      bg-[#ff7426] px-7 py-3.5
      text-[14px] font-semibold text-white
      shadow-[0_8px_25px_rgba(255,116,38,0.25)]
      transition-all duration-300 ease-out
      group-hover:-translate-y-1
      group-hover:scale-[1.04]
      group-hover:bg-[#e9631d]
      group-hover:shadow-[0_14px_35px_rgba(255,116,38,0.4)]
    "
                                        >
                                            {/* Animated shine */}
                                            <span
                                                className="
        pointer-events-none absolute inset-y-0 -left-full
        w-1/2 skew-x-[-25deg]
        bg-gradient-to-r from-transparent via-white/30 to-transparent
        transition-all duration-700
        group-hover:left-[150%]
      "
                                            />

                                            <span className="relative z-10">Learn More</span>

                                            <ArrowRight
                                                size={17}
                                                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                                            />
                                        </span>
                                    </div>

                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CONDITIONS TREATED */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mt-6 overflow-hidden rounded-[36px] border border-[#3a2d25]/[0.08] bg-[#2c2927] shadow-[0_24px_70px_rgba(45,35,29,0.13)]"
                >
                    {/* warm decorative glow */}
                    <div
                        className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full border border-[#ff7426]/20"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute -right-10 -top-40 h-[480px] w-[480px] rounded-full border border-[#ff8b48]/15"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute right-24 -top-40 h-[480px] w-[480px] rounded-full border border-[#ffad78]/10"
                        aria-hidden="true"
                    />

                    <div className="relative z-10 grid lg:grid-cols-[0.82fr_1.18fr]">
                        <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-11 xl:p-12">
                            <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.07] text-[#ff8a42] backdrop-blur-xl">
                                <Brain className="h-7 w-7" strokeWidth={1.7} />
                            </div>

                            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ff8a42]">
                                Conditions Treated
                            </p>

                            <h3 className="mt-4 max-w-[470px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px]">
                                Support for a wide range of mental health needs.
                            </h3>

                            <p className="mt-5 max-w-[500px] text-[15px] leading-[1.8] text-white/60">
                                Treatment begins with understanding the individual behind the
                                symptoms and developing care around their unique needs.
                            </p>
                        </div>

                        <div className="p-7 sm:p-9 lg:p-11 xl:p-12">
                            <div className="grid gap-3 sm:grid-cols-2">
                                {conditions.map((condition, index) => (
                                    <motion.div
                                        key={condition}
                                        initial={{ opacity: 0, x: 14 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.035 }}
                                        className="group flex min-h-[62px] items-center gap-3 rounded-[18px] border border-white/[0.08] bg-white/[0.045] px-4 py-3.5 transition-all duration-300 hover:border-[#ff7426]/30 hover:bg-white/[0.08]"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff7426]/15 text-[#ff8a42]">
                                            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                                        </span>
                                        <span className="text-[14px] font-medium leading-5 text-white/80 sm:text-[15px]">
                                            {condition}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center gap-3 rounded-[18px] border border-[#ff7426]/20 bg-[#ff7426]/10 px-5 py-4">
                                <Sparkles className="h-5 w-5 shrink-0 text-[#ff8a42]" />
                                <p className="text-[13px] leading-6 text-white/70 sm:text-[14px]">
                                    Care is available for adolescents and adults ages 12 and up.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ACCESS / LOCATION STRIP */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mt-6 grid overflow-hidden rounded-[30px] border border-[#3a2d25]/[0.08] bg-white/75 shadow-[0_15px_45px_rgba(87,56,34,0.06)] backdrop-blur-xl md:grid-cols-3"
                >
                    <AccessItem
                        icon={MapPin}
                        eyebrow="New Jersey"
                        title="In-Person Care"
                        text="Meet face-to-face in a welcoming clinical setting."
                    />
                    <AccessItem
                        icon={Video}
                        eyebrow="New York + New Jersey"
                        title="Telehealth"
                        text="Convenient virtual psychiatric care from wherever you feel comfortable."
                        border
                    />
                    <AccessItem
                        icon={ShieldCheck}
                        eyebrow="Ages 12+"
                        title="Adolescents & Adults"
                        text="Individualized support across different stages of life."
                        border
                    />
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[30px] bg-[#fff0e5] px-7 py-7 sm:px-9 sm:py-8 lg:mt-16 lg:flex-row lg:items-center lg:px-11"
                >
                    <div>
                        <p className="text-[23px] font-semibold tracking-[-0.025em] text-[#2c2927] sm:text-[27px]">
                            Ready to take the next step?
                        </p>
                        <p className="mt-2 max-w-[680px] text-[14px] leading-6 text-[#6b625c] sm:text-[15px]">
                            Start with a conversation and find the care that fits your needs.
                        </p>
                    </div>

                    <BookAppointmentButton label="Book Appointment" />
                </motion.div>
            </div>
        </section>
    );
}

function AccessItem({
    icon: Icon,
    eyebrow,
    title,
    text,
    border = false,
}: {
    icon: typeof HeartPulse;
    eyebrow: string;
    title: string;
    text: string;
    border?: boolean;
}) {
    return (
        <div
            className={`flex gap-4 p-6 sm:p-7 lg:p-8 ${border ? "border-t border-[#3a2d25]/[0.07] md:border-l md:border-t-0" : ""
                }`}
        >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#fff0e5] text-[#ff7426]">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
            </div>

            <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6601c]">
                    {eyebrow}
                </p>
                <h4 className="mt-1.5 text-[18px] font-semibold tracking-[-0.015em] text-[#2c2927]">
                    {title}
                </h4>
                <p className="mt-2 text-[13px] leading-6 text-[#726b66]">{text}</p>
            </div>
        </div>
    );
}
