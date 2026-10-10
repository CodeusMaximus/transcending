"use client";

import { useCallback, useEffect, useState } from "react";

import BookAppointmentButton from "./BookAppointmentButton";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import {

    ArrowRight,

    ChevronLeft,

    ChevronRight,

    Laptop,

    MapPin,

    UserRound,

} from "lucide-react";

type Slide = {

    src: string;

    position: string;

    type: "standard" | "provider";

    eyebrow: string;

    title: string;

    accent: string;

    description: string;

    primaryText: string;

    primaryHref: string;

    secondaryText: string;

    secondaryHref: string;

    quote?: string;

    provider?: string;

    credentials?: string;

};

const slides: Slide[] = [

    {

        src: "/images/Transcending-theraphy-hero.png",

        position: "center",

        type: "standard",

        eyebrow: "COMPASSIONATE PSYCHIATRIC CARE",

        title: "Transcend What’s",

        accent: "Holding You Back.",

        description:

            "Evidence-based psychiatric care designed to help you move forward with clarity, confidence, and a healthier, more fulfilling life.",

        primaryText: "Book an Appointment",

        primaryHref: "/book",

        secondaryText: "Explore Services",

        secondaryHref: "/#services",

    },

    {

        src: "/images/transcending-serenity.png",

        position: "center",

        type: "standard",

        eyebrow: "CARE DESIGNED AROUND YOU",

        title: "Find Clarity.",

        accent: "Create Lasting Change.",

        description:

            "Personalized mental health treatment that considers your experiences, your goals, and the life you want to build.",

        primaryText: "Start Your Journey",

        primaryHref: "/book",

        secondaryText: "Our Approach",

        secondaryHref: "/Provider",

    },

    {

        src: "/images/joe-spitalieri.jpg",

        position: "center",

        type: "provider",

        eyebrow: "MEET YOUR PROVIDER",

        title: "Care That Begins",

        accent: "With Understanding.",

        description:

            "Personalized psychiatric care built around collaboration, trust, and the individual behind the symptoms.",

        quote:

            "My goal is to create a space where you feel heard, understood, and supported as we work together toward meaningful, lasting change.",

        provider: "Joseph Spitalieri",

        credentials: "Psychiatric Nurse Practitioner",

        primaryText: "Meet Joseph",

        primaryHref: "/Provider",

        secondaryText: "Book Appointment",

        secondaryHref: "/book",

    },

];

const features = [

    { label: "Ages 12+", icon: UserRound },

    { label: "In-Person NJ", icon: MapPin },

    { label: "Telehealth NY & NJ", icon: Laptop },

];

function ProviderDecor() {

    return (

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <svg

                aria-hidden="true"

                className="absolute -right-[9%] top-[8%] h-[72%] w-[62%] opacity-70"

                viewBox="0 0 900 760"

                fill="none"

            >

                <circle cx="585" cy="365" r="245" fill="#FFB178" fillOpacity=".16" />

                <circle cx="650" cy="400" r="150" fill="#FF8A3D" fillOpacity=".14" />

                <circle cx="585" cy="365" r="292" stroke="#FFB178" strokeOpacity=".28" strokeWidth="2" />

                <circle cx="585" cy="365" r="318" stroke="#FFB178" strokeOpacity=".18" strokeWidth="2" />

                <path

                    d="M220 610C360 490 398 268 552 146C658 61 780 60 875 99"

                    stroke="#FF9A55"

                    strokeOpacity=".20"

                    strokeWidth="3"

                />

                <path

                    d="M178 648C332 522 366 286 532 152C654 54 785 48 895 93"

                    stroke="#FF9A55"

                    strokeOpacity=".12"

                    strokeWidth="2"

                />

            </svg>

            <div className="absolute -left-24 bottom-[-170px] h-[420px] w-[620px] rounded-[50%] bg-white/40 blur-3xl" />

            <div className="absolute right-[7%] top-[19%] h-72 w-72 rounded-full bg-[#ff9a55]/10 blur-3xl" />

        </div>

    );

}

export default function HeroSection() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const [direction, setDirection] = useState(1);

    const current = slides[currentSlide];

    const isProviderSlide = current.type === "provider";

    const nextSlide = useCallback(() => {

        setDirection(1);

        setCurrentSlide((previous) =>

            previous === slides.length - 1 ? 0 : previous + 1

        );

    }, []);

    const previousSlide = useCallback(() => {

        setDirection(-1);

        setCurrentSlide((previous) =>

            previous === 0 ? slides.length - 1 : previous - 1

        );

    }, []);

    const goToSlide = (index: number) => {

        if (index === currentSlide) return;

        setDirection(index > currentSlide ? 1 : -1);

        setCurrentSlide(index);

    };

    useEffect(() => {

        const timer = window.setTimeout(nextSlide, 7500);

        return () => window.clearTimeout(timer);

    }, [currentSlide, nextSlide]);

    return (

        <section className="relative min-h-[860px] overflow-hidden bg-[#f8f3ee] lg:min-h-screen">

            {/* Standard photographic slides */}

            <div className="absolute inset-0">

                <AnimatePresence initial={false} custom={direction} mode="sync">

                    <motion.div

                        key={current.src}

                        initial={{ opacity: 0, scale: 1.035 }}

                        animate={{ opacity: 1, scale: 1 }}

                        exit={{ opacity: 0, scale: 1.015 }}

                        transition={{

                            opacity: { duration: 1, ease: "easeInOut" },

                            scale: { duration: 8, ease: "linear" },

                        }}

                        className="absolute inset-0"

                    >

                        {!isProviderSlide ? (

                            <>

                                <div

                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"

                                    style={{

                                        backgroundImage: `url("${current.src}")`,

                                        backgroundPosition: current.position,

                                    }}

                                />

                                <div

                                    className="absolute inset-0"

                                    style={{

                                        background:

                                            "linear-gradient(90deg, rgba(255,250,246,.97) 0%, rgba(255,250,246,.92) 27%, rgba(255,250,246,.70) 47%, rgba(255,250,246,.20) 72%, rgba(255,250,246,.04) 100%)",

                                    }}

                                />

                            </>

                        ) : (

                            <>

                                <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf6] via-[#fff4eb] to-[#fde6d5]" />

                                <ProviderDecor />

                            </>

                        )}

                    </motion.div>

                </AnimatePresence>

            </div>

            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-white/10 via-transparent to-white/20" />

            {/* Main layout */}

            <div className="relative z-10 mx-auto flex min-h-[860px] w-full max-w-[1480px] items-center px-5 pb-28 pt-[150px] sm:px-8 lg:min-h-screen lg:px-16 lg:pb-24 lg:pt-[145px]">

                <AnimatePresence mode="wait" initial={false}>

                    <motion.div

                        key={`content-${currentSlide}`}

                        initial={{ opacity: 0, x: direction > 0 ? 35 : -35 }}

                        animate={{ opacity: 1, x: 0 }}

                        exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}

                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}

                        className={`

              relative z-20 w-full

              ${isProviderSlide ? "lg:max-w-[650px] xl:max-w-[690px]" : "max-w-[760px]"}

            `}

                    >

                        {/* Glass panel: strongest on provider slide, subtle on photo slides */}

                        <div

                            className={`

                relative overflow-hidden rounded-[34px] border px-5 py-7

                backdrop-blur-[18px] sm:px-8 sm:py-9 lg:px-10 lg:py-10

                ${isProviderSlide

                                    ? "border-white/70 bg-white/40 shadow-[0_28px_80px_rgba(87,56,34,0.10)]"

                                    : "border-white/55 bg-white/25 shadow-[0_24px_70px_rgba(46,35,27,0.08)]"

                                }

              `}

                        >

                            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                            <motion.div

                                initial={{ opacity: 0, y: 15 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ duration: 0.6, delay: 0.08 }}

                                className="mb-5 flex items-center gap-4"

                            >

                                <span className="h-px w-10 bg-[#ff7426] sm:w-14" />

                                <p className="text-[11px] font-bold uppercase tracking-[0.30em] text-[#ef681f] sm:text-[13px]">

                                    {current.eyebrow}

                                </p>

                            </motion.div>

                            <motion.h1

                                initial={{ opacity: 0, y: 25 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ duration: 0.7, delay: 0.14 }}

                                className="

                  max-w-[760px] text-[43px] font-semibold leading-[0.98]

                  tracking-[-0.05em] text-[#20282d]

                  sm:text-[60px] lg:text-[68px] xl:text-[74px]

                "

                            >

                                {current.title}

                                <br />

                                <span className="text-[#ff7426]">{current.accent}</span>

                            </motion.h1>

                            <motion.p

                                initial={{ opacity: 0, y: 18 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ duration: 0.65, delay: 0.25 }}

                                className="mt-6 max-w-[590px] text-[16px] leading-[1.65] text-[#5f6264] sm:text-[18px] lg:text-[19px]"

                            >

                                {current.description}

                            </motion.p>

                            <motion.div

                                initial={{ opacity: 0, y: 18 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ duration: 0.65, delay: 0.34 }}

                                className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"

                            >

                                {current.primaryHref === "/book" ? (
                                    <BookAppointmentButton
                                        label={current.primaryText}
                                        showIcon={false}
                                        showArrow={true}
                                        className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#ff7426] px-7 py-4 text-[14px] font-semibold text-white shadow-[0_16px_36px_rgba(255,116,38,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eb641b]"
                                    />
                                ) : (
                                    <Link
                                        href={current.primaryHref}
                                        className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#ff7426] px-7 py-4 text-[14px] font-semibold text-white shadow-[0_16px_36px_rgba(255,116,38,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eb641b]"
                                    >
                                        {current.primaryText}
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                )}

                                {current.secondaryHref === "/book" ? (
                                    <BookAppointmentButton
                                        label={current.secondaryText}
                                        showIcon={false}
                                        showArrow={true}
                                        className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border-2 border-[#70452F] bg-[#70452F] px-7 py-4 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(70,35,20,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#57321F] hover:bg-[#57321F]" />
                                ) : (
                                    <Link
                                        href={current.secondaryHref}
                                        className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-white/90 bg-white/55 px-7 py-4 text-[14px] font-semibold text-[#24292c] shadow-[0_10px_30px_rgba(45,34,25,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7426]/40 hover:bg-white/85"
                                    >
                                        {current.secondaryText}
                                        <ArrowRight className="h-4 w-4 text-[#ff7426] transition-transform group-hover:translate-x-1" />
                                    </Link>
                                )}

                            </motion.div>

                            <motion.div

                                initial={{ opacity: 0, y: 15 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ duration: 0.65, delay: 0.44 }}

                                className="mt-7 flex max-w-[650px] flex-wrap gap-2.5"

                            >

                                {features.map((feature) => {

                                    const Icon = feature.icon;

                                    return (

                                        <div

                                            key={feature.label}

                                            className="flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3.5 py-2.5 text-[12px] font-medium text-[#3d4245] shadow-[0_8px_24px_rgba(48,35,25,0.05)] backdrop-blur-xl sm:text-[13px]"

                                        >

                                            <Icon className="h-[17px] w-[17px] text-[#ff7426]" strokeWidth={1.8} />

                                            {feature.label}

                                        </div>

                                    );

                                })}

                            </motion.div>

                        </div>

                        {/* Mobile image for every slide */}

                        <div className="mt-7 lg:hidden">

                            {isProviderSlide ? (

                                <div className="relative mx-auto max-w-[420px]">

                                    <ProviderDecor />

                                    <motion.img

                                        key={`mobile-provider-${current.src}`}

                                        initial={{ opacity: 0, y: 24 }}

                                        animate={{ opacity: 1, y: 0 }}

                                        transition={{ duration: 0.8 }}

                                        src={current.src}

                                        alt="Joseph Spitalieri"

                                        className="relative z-10 mx-auto h-[340px] w-full object-contain object-bottom drop-shadow-[0_25px_28px_rgba(68,45,28,0.14)] sm:h-[410px]"

                                    />

                                    <div className="relative z-20 -mt-3 rounded-[26px] border border-white/70 bg-white/45 px-5 py-5 text-center shadow-[0_20px_55px_rgba(82,52,31,0.09)] backdrop-blur-xl">

                                        <div className="mb-2 text-[34px] leading-none text-[#ff7426]">“</div>

                                        <blockquote className="text-[14px] font-medium italic leading-[1.65] text-[#4d4a48]">

                                            {current.quote}

                                        </blockquote>

                                        <p className="mt-3 text-[14px] font-bold text-[#252525]">{current.provider}</p>

                                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#e76520]">

                                            {current.credentials}

                                        </p>

                                    </div>

                                </div>

                            ) : (

                                <div className="relative h-[280px] overflow-hidden rounded-[28px] border border-white/70 bg-white/35 shadow-[0_20px_55px_rgba(48,35,25,0.10)] backdrop-blur-xl sm:h-[340px]">

                                    <img

                                        src={current.src}

                                        alt=""

                                        className="h-full w-full object-cover"

                                        style={{ objectPosition: current.position }}

                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#fff7f1]/20 to-transparent" />

                                </div>

                            )}

                        </div>

                    </motion.div>

                </AnimatePresence>

                {/* Desktop Joe composition */}

                <AnimatePresence>

                    {isProviderSlide && (

                        <motion.div

                            key="desktop-provider"

                            initial={{ opacity: 0, x: 70 }}

                            animate={{ opacity: 1, x: 0 }}

                            exit={{ opacity: 0, x: 45 }}

                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}

                            className="pointer-events-none absolute bottom-[66px] right-[1.5%] z-10 hidden w-[44%] max-w-[640px] flex-col items-center lg:flex xl:right-[3%]"

                        >

                            <div className="relative flex h-[480px] w-full items-end justify-center xl:h-[540px] 2xl:h-[580px]">

                                <img

                                    src={current.src}

                                    alt="Joseph Spitalieri"

                                    className="

    relative

    z-10

    h-full

    w-full

    object-contain

    object-bottom

    drop-shadow-[0_30px_38px_rgba(68,45,28,0.14)]

  "

                                    style={{

                                        WebkitMaskImage:

                                            "linear-gradient(to bottom, black 0%, black 40%, rgba(0,0,0,0.95) 52%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.5) 77%, rgba(0,0,0,0.25) 89%, transparent 100%)",

                                        maskImage:

                                            "linear-gradient(to bottom, black 0%, black 40%, rgba(0,0,0,0.95) 52%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.5) 77%, rgba(0,0,0,0.25) 89%, transparent 100%)",

                                    }}

                                />

                                <div className="pointer-events-none absolute bottom-0 left-[8%] z-20 h-[10%] w-[84%] bg-gradient-to-t from-[#fff0e4] via-[#fff0e4]/65 to-transparent" />                            </div>

                            <div className="relative z-20 -mt-2 w-full max-w-[550px] px-5 text-center">

                                <div className="mx-auto mb-3 flex items-center justify-center gap-3">

                                    <span className="h-px w-12 bg-[#ff7426]/55" />

                                    <span className="font-serif text-[42px] leading-none text-[#ff7426]">“</span>

                                    <span className="h-px w-12 bg-[#ff7426]/55" />

                                </div>

                                <blockquote className="text-[15px] font-medium italic leading-[1.65] text-[#4d4a48] xl:text-[16px]">

                                    {current.quote}

                                </blockquote>

                                <p className="mt-3 text-[15px] font-bold text-[#252525]">{current.provider}</p>

                                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.20em] text-[#e76520]">

                                    {current.credentials}

                                </p>

                            </div>

                        </motion.div>

                    )}

                </AnimatePresence>

            </div>

            <button

                type="button"

                onClick={previousSlide}

                aria-label="Previous slide"

                className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/75 text-[#282828] shadow-[0_12px_35px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#ff7426] hover:text-white lg:flex"

            >

                <ChevronLeft className="h-6 w-6" />

            </button>

            <button

                type="button"

                onClick={nextSlide}

                aria-label="Next slide"

                className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/75 text-[#282828] shadow-[0_12px_35px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#ff7426] hover:text-white lg:flex"

            >

                <ChevronRight className="h-6 w-6" />

            </button>

            <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">

                {slides.map((slide, index) => (

                    <button

                        key={slide.src}

                        type="button"

                        onClick={() => goToSlide(index)}

                        aria-label={`Go to slide ${index + 1}`}

                        className={`rounded-full transition-all duration-300 ${currentSlide === index

                            ? "h-2.5 w-8 bg-[#ff7426]"

                            : "h-2.5 w-2.5 bg-[#555]/25 hover:bg-[#ff7426]/60"

                            }`}

                    />

                ))}

            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 z-[5] h-16 w-full bg-gradient-to-t from-white/35 to-transparent" />

        </section>

    );

}
