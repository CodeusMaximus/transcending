
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ArrowRight,
    Phone,
    MapPin,
    Clock3,
    HeartHandshake,
    Brain,
    ShieldCheck,
    CheckCircle2,
    Stethoscope,
    Sparkles,
    CreditCard,
    Video,
    Building2,
    CalendarDays,
    Quote,
} from "lucide-react";

const phone = "7328083932";
const photo =
    "https://photos.psychologytoday.com/d30b80fe-5ee0-4bea-9fc7-5178ab0254d6/2/320x400.png";

const insurance = [
    "1199SEIU",
    "Aetna",
    "Aetna Medicare",
    "Anthem",
    "BlueCross and BlueShield",
    "Carelon Behavioral Health",
    "Cigna and Evernorth",
    "Horizon Blue Cross and Blue Shield",
    "MagnaCare",
    "Medicaid",
    "Optum",
    "United Medical Resources (UMR)",
    "UnitedHealthcare / Optum Medicaid",
    "UnitedHealthcare / Optum Medicare",
];

const approaches = [
    {
        number: "01",
        icon: HeartHandshake,
        title: "A Relationship Built on Trust",
        description:
            "A supportive, judgment-free environment where your experiences are heard, your concerns are respected, and your goals help shape your care.",
    },
    {
        number: "02",
        icon: Brain,
        title: "Personalized, Evidence-Based Care",
        description:
            "Thoughtful evaluations and individualized treatment strategies that may incorporate psychotherapy, medication management, and lifestyle changes.",
    },
    {
        number: "03",
        icon: Sparkles,
        title: "Wellness Beyond Symptoms",
        description:
            "Care that looks beyond immediate challenges to strengthen resilience, encourage self-discovery, and support meaningful, lasting change.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 },
    },
};

export default function ProviderPage() {
    return (
        <main className="overflow-hidden bg-white text-[#302d2b]">
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#f8f6f2]">
                <div className="pointer-events-none absolute -right-32 top-12 h-[650px] w-[650px] rounded-full bg-[#e9b68e]/20 blur-[120px]" />
                <div className="pointer-events-none absolute -left-52 bottom-0 h-[500px] w-[500px] rounded-full border border-[#c97943]/10" />

                <div className="relative mx-auto grid min-h-[790px] max-w-[1400px] items-center gap-16 px-6 pb-24 pt-32 md:px-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-20 lg:pt-36">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.12 }}
                    >
                        <motion.div
                            variants={fadeUp}
                            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#e9d8c9] bg-white/80 px-5 py-2.5"
                        >
                            <span className="h-2 w-2 rounded-full bg-[#d78249]" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b66a3b]">
                                Meet Your Provider
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="font-serif text-[49px] font-medium leading-[1.06] tracking-[-0.045em] sm:text-[67px] xl:text-[79px]"
                        >
                            Care begins
                            <br />
                            with being
                            <br />
                            <span className="italic text-[#cb7842]">
                                understood.
                            </span>
                        </motion.h1>

                        <motion.div variants={fadeUp} className="mt-9">
                            <p className="text-xl font-semibold text-[#38322e]">
                                Joseph Spitalieri
                            </p>
                            <p className="mt-2 text-sm font-medium tracking-wide text-[#b66a3b]">
                                MSN, PMHNP, APN
                            </p>
                            <p className="mt-2 text-sm text-[#8a827d]">
                                Psychiatric Nurse Practitioner
                            </p>
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            className="mt-8 max-w-[560px] text-[16px] leading-[1.9] text-[#706a65]"
                        >
                            Compassionate, collaborative psychiatric care
                            grounded in the belief that every individual
                            deserves to feel heard, valued, and empowered
                            on their journey toward mental wellness.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <a
                                href={`tel:${phone}`}
                                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#c97742] px-8 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(201,119,66,0.2)] transition hover:-translate-y-1 hover:bg-[#b56634]"
                            >
                                <Phone size={17} />
                                Free 15-Minute Consultation
                                <ArrowUpRight size={17} />
                            </a>

                            <a
                                href="#about-joseph"
                                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#d9d0c8] bg-white px-8 text-sm font-semibold transition hover:border-[#c97742]"
                            >
                                Get to Know Joseph
                                <ArrowRight size={17} />
                            </a>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="mt-11 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-[#77716c]"
                        >
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[#c97742]" />
                                In-Person & Online
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[#c97742]" />
                                Insurance Accepted
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* PROVIDER PORTRAIT */}
                    <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95 }}
                        className="relative mx-auto w-full max-w-[510px]"
                    >
                        <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[220px_220px_30px_30px] border border-[#cb7842]/30" />

                        <div className="relative aspect-[4/5] overflow-hidden rounded-[220px_220px_30px_30px] bg-[#e8e0d7] shadow-[0_30px_75px_rgba(67,49,35,0.15)]">
                            <Image
                                src={photo}
                                alt="Joseph Spitalieri, psychiatric nurse practitioner"
                                fill
                                unoptimized
                                priority
                                sizes="(max-width: 1024px) 90vw, 510px"
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#30251e]/75 to-transparent" />

                            <div className="absolute bottom-9 left-8 text-white">
                                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f3c6a2]">
                                    Transcending Psychiatry
                                </p>
                                <h2 className="mt-2 font-serif text-3xl">
                                    Joseph Spitalieri
                                </h2>
                                <p className="mt-2 text-xs text-white/75">
                                    MSN · PMHNP · APN
                                </p>
                            </div>
                        </div>

                        <div className="absolute -bottom-9 -left-4 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-10">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8e8dc] text-[#c97742]">
                                <HeartHandshake size={22} />
                            </div>
                            <div>
                                <p className="text-sm font-bold">Patient-Centered</p>
                                <p className="mt-1 text-xs text-[#8a827d]">
                                    Compassionate care
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section
                id="about-joseph"
                className="px-6 py-24 md:px-12 lg:py-32"
            >
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c97742]">
                            A Personal Approach
                        </p>

                        <h2 className="mt-6 font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl">
                            More than a diagnosis.
                            <span className="block italic text-[#c97742]">
                                A whole person.
                            </span>
                        </h2>

                        <div className="mt-9 h-px w-20 bg-[#c97742]" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <Quote size={38} className="text-[#e6b18d]" />

                        <p className="mt-5 font-serif text-2xl leading-[1.6] text-[#38332f] sm:text-[30px]">
                            I believe that each individual is unique,
                            deserving of personalized care that acknowledges
                            their specific needs, experiences, and goals.
                        </p>

                        <p className="mt-8 text-base leading-[1.95] text-[#736d68]">
                            As a dedicated psychiatric nurse practitioner,
                            my approach to mental health care is rooted in
                            compassion, collaboration, and holistic well-being.
                            Mental health is an integral part of overall
                            wellness, and I strive to create a safe,
                            supportive environment where clients feel
                            heard and valued.
                        </p>

                        <p className="mt-5 text-base leading-[1.95] text-[#736d68]">
                            By building strong, trusting relationships, I
                            empower individuals to explore their thoughts
                            and emotions, fostering self-discovery and
                            resilience. My goal is not simply to help
                            manage symptoms, but to support the skills
                            and strategies needed for lasting change.
                        </p>

                        <p className="mt-7 font-serif text-xl italic text-[#b76b3d]">
                            — Joseph Spitalieri
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* APPROACH CARDS */}
            <section className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c97742]">
                            Philosophy of Care
                        </p>

                        <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl">
                            Thoughtful care.
                            <br />
                            <span className="italic text-[#c97742]">
                                Meaningful progress.
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-[#77716c]">
                            An approach designed around the individual,
                            combining clinical expertise with a genuine
                            therapeutic connection.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {approaches.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.12 }}
                                    className="group rounded-[28px] border border-[#e9e2dc] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-10"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9ece2] text-[#c97742]">
                                            <Icon size={25} />
                                        </div>
                                        <span className="font-serif text-3xl text-[#e7ddd5]">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-10 font-serif text-[27px] leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-8 text-[#77716c]">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TREATMENT PHILOSOPHY */}
            <section className="px-6 py-24 md:px-12 lg:py-32">
                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
                    <div className="relative overflow-hidden rounded-[32px] bg-[#f3e8dd] p-10 sm:p-14">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#c97742]/20" />
                        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-[#c97742]/20" />

                        <div className="relative">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#c97742] shadow-sm">
                                <Stethoscope size={29} />
                            </div>

                            <h3 className="mt-12 font-serif text-4xl leading-tight">
                                Your treatment.
                                <br />
                                Your goals.
                                <br />
                                <span className="italic text-[#c97742]">
                                    Your journey.
                                </span>
                            </h3>

                            <p className="mt-7 max-w-md leading-8 text-[#71665e]">
                                Every treatment plan begins with understanding
                                the individual behind the symptoms.
                            </p>

                            <div className="mt-10 space-y-4">
                                {[
                                    "Comprehensive psychiatric evaluations",
                                    "Medication management",
                                    "Psychotherapy when appropriate",
                                    "Lifestyle and wellness considerations",
                                    "Ongoing assessment and collaboration",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-sm font-medium text-[#51463e]"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="shrink-0 text-[#c97742]"
                                        />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c97742]">
                            Individualized Treatment
                        </p>

                        <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                            Care that evolves
                            <span className="block italic text-[#c97742]">
                                with you.
                            </span>
                        </h2>

                        <p className="mt-8 leading-[1.95] text-[#736d68]">
                            I understand that each individual's experience
                            is unique. Through comprehensive evaluations
                            and ongoing assessments, I collaborate with
                            clients to identify treatment strategies that
                            address both symptoms and the underlying
                            factors affecting mental wellness.
                        </p>

                        <p className="mt-6 leading-[1.95] text-[#736d68]">
                            I am dedicated to helping individuals navigate
                            challenging mental health conditions, including
                            anxiety, mood disorders, and PTSD. My mission
                            is to create a transformative therapeutic
                            experience that transcends conventional
                            psychiatry through connection, collaboration,
                            and individualized support.
                        </p>

                        <a
                            href={`tel:${phone}`}
                            className="mt-9 inline-flex items-center gap-3 font-semibold text-[#c97742] transition hover:gap-5"
                        >
                            Speak With Our Practice
                            <ArrowRight size={19} />
                        </a>
                    </div>
                </div>
            </section>

            {/* PRACTICE DETAILS */}
            <section className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c97742]">
                            The Practice
                        </p>
                        <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
                            Care that fits your life.
                        </h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-[26px] bg-white p-8 shadow-sm">
                            <MapPin size={27} className="text-[#c97742]" />
                            <h3 className="mt-6 font-serif text-2xl">
                                Visit Our Office
                            </h3>
                            <p className="mt-4 leading-8 text-[#77716c]">
                                Transcending Psychiatry
                                <br />
                                3600 New Jersey 66
                                <br />
                                Suite 150
                                <br />
                                Tinton Falls, NJ 07753
                            </p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=3600+New+Jersey+66+Suite+150+Tinton+Falls+NJ+07753"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c97742]"
                            >
                                Get Directions <ArrowUpRight size={16} />
                            </a>
                        </div>

                        <div className="rounded-[26px] bg-white p-8 shadow-sm">
                            <Video size={27} className="text-[#c97742]" />
                            <h3 className="mt-6 font-serif text-2xl">
                                Flexible Appointments
                            </h3>
                            <p className="mt-4 leading-8 text-[#77716c]">
                                Appointments are available both in-person
                                and online, allowing you to access care
                                in the setting that works best for you.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {["In-Person", "Online"].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-[#f9ece2] px-4 py-2 text-xs font-semibold text-[#a96238]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[26px] bg-white p-8 shadow-sm">
                            <CreditCard size={27} className="text-[#c97742]" />
                            <h3 className="mt-6 font-serif text-2xl">
                                Transparent Pricing
                            </h3>

                            <div className="mt-6 space-y-5">
                                <div className="flex justify-between gap-3 border-b border-[#eee7e1] pb-4 text-sm">
                                    <span className="text-[#77716c]">
                                        Initial Session
                                    </span>
                                    <strong>$200</strong>
                                </div>
                                <div className="flex justify-between gap-3 border-b border-[#eee7e1] pb-4 text-sm">
                                    <span className="text-[#77716c]">
                                        Standard Visit
                                    </span>
                                    <strong>$125</strong>
                                </div>
                            </div>

                            <p className="mt-5 text-xs leading-6 text-[#8a827d]">
                                Insurance accepted. Sliding-scale options
                                may be available for eligible clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSURANCE */}
            <section className="px-6 py-24 md:px-12 lg:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9ece2] text-[#c97742]">
                            <ShieldCheck size={27} />
                        </div>

                        <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#c97742]">
                            Insurance & Accessibility
                        </p>

                        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                            Quality care.
                            <span className="block italic text-[#c97742]">
                                Greater access.
                            </span>
                        </h2>

                        <p className="mt-7 leading-8 text-[#77716c]">
                            Transcending Psychiatry accepts a range of
                            major insurance plans to help make quality
                            mental health care more accessible.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-[#8a827d]">
                            Coverage and eligibility can vary by plan.
                            Please contact the practice to confirm
                            benefits before your appointment.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {insurance.map((plan) => (
                            <div
                                key={plan}
                                className="flex min-h-[62px] items-center gap-3 rounded-2xl border border-[#eee8e2] bg-[#fcfaf8] px-5 py-4"
                            >
                                <CheckCircle2
                                    size={18}
                                    className="shrink-0 text-[#c97742]"
                                />
                                <span className="text-[13px] font-medium text-[#554f4a]">
                                    {plan}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden bg-[#302b28] px-6 py-24 text-center text-white lg:py-32">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c97742]/10 blur-[120px]" />

                <div className="relative mx-auto max-w-3xl">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d89a70]/30 bg-white/5 text-[#e6aa80]">
                        <CalendarDays size={27} />
                    </div>

                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#e6aa80]">
                        Take the First Step
                    </p>

                    <h2 className="mt-6 font-serif text-4xl leading-[1.15] sm:text-6xl">
                        Your story matters.
                        <br />
                        <span className="italic text-[#e6aa80]">
                            Let's talk.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl leading-8 text-white/65">
                        Connect with Joseph Spitalieri for a free
                        15-minute consultation and explore how
                        personalized psychiatric care may support
                        your mental health goals.
                    </p>

                    <a
                        href={`tel:${phone}`}
                        className="mt-10 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#c97742] px-9 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#dc8a53]"
                    >
                        <Phone size={18} />
                        Call (732) 808-3932
                        <ArrowUpRight size={18} />
                    </a>

                    <p className="mt-7 text-xs text-white/45">
                        Free 15-minute consultation
                    </p>
                </div>
            </section>
        </main>
    );
}
