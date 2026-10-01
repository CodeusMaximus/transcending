"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Monitor, Users } from "lucide-react";

const insurers = [
    { name: "Aetna", logo: "/images/Aetna.png" },
    { name: "Cigna", logo: "/images/Cigna.png" },
    { name: "UnitedHealthcare", logo: "/images/UH.png" },
    { name: "Horizon Blue Cross Blue Shield of New Jersey", logo: "/images/Horizon.png" },
    { name: "Optum", logo: "/images/Optum.png" },
];

const duplicatedInsurers = [...insurers, ...insurers];

export default function InsuranceSection() {
    return (
        <section className="relative overflow-hidden bg-[#fffaf6] py-20 sm:py-24 lg:py-28">
            {/* subtle Transcending ring motif */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-32 top-10 h-72 w-72 rounded-full border border-[#ff7426]/10" />
                <div className="absolute -right-20 top-10 h-72 w-72 rounded-full border border-[#ff8a3d]/10" />
                <div className="absolute -right-8 top-10 h-72 w-72 rounded-full border border-[#ffb06a]/10" />
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7426]/[0.035] blur-3xl" />
            </div>

            <div className="relative z-10">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto max-w-[940px] text-center"
                    >
                        <div className="mb-5 flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-[#ff7426]" />
                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e6601c] sm:text-[12px]">
                                Insurance & Accessibility
                            </p>
                            <span className="h-px w-10 bg-[#ff7426]" />
                        </div>

                        <h2 className="text-[42px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#292725] sm:text-[54px] lg:text-[64px]">
                            Care That&apos;s More{" "}
                            <span className="text-[#ff7426]">Accessible.</span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-[1.85] text-[#69635f] sm:text-[17px]">
                            We proudly serve our community by accepting major insurance
                            providers and making high-quality mental health care accessible to
                            as many people as possible. With an unwavering commitment to
                            excellence and a client-centered approach, Transcending Psychiatry
                            is your partner in mental wellness, offering guidance and support
                            every step of the way.
                        </p>
                    </motion.div>
                </div>

                {/* HORIZONTAL INSURANCE MARQUEE */}
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.12 }}
                    className="relative mt-14 sm:mt-16"
                >
                    {/* soft edge fades */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#fffaf6] to-transparent sm:w-24 lg:w-40" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#fffaf6] to-transparent sm:w-24 lg:w-40" />

                    <div className="overflow-hidden py-5">
                        <motion.div
                            className="flex w-max items-center gap-5 sm:gap-7 lg:gap-8"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                x: {
                                    duration: 24,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedInsurers.map((insurer, index) => (
                                <motion.div
                                    key={`${insurer.name}-${index}`}
                                    animate={{
                                        y: [0, -8, 0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 4.4 + (index % insurers.length) * 0.35,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: (index % insurers.length) * 0.18,
                                    }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.045,
                                        transition: { duration: 0.22 },
                                    }}
                                    className="group flex h-[125px] w-[250px] shrink-0 items-center justify-center rounded-[26px] border border-[#3a2d25]/[0.07] bg-white/90 px-7 shadow-[0_14px_40px_rgba(76,49,30,0.08)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_22px_55px_rgba(255,116,38,0.14)] sm:h-[138px] sm:w-[290px] lg:h-[145px] lg:w-[320px]"
                                >
                                    <div className="relative h-[78px] w-full">
                                        <Image
                                            src={insurer.logo}
                                            alt={`${insurer.name} insurance`}
                                            fill
                                            sizes="320px"
                                            className="object-contain"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* ACCESSIBILITY STRIP */}
                <div className="mx-auto mt-12 max-w-[1312px] px-5 sm:px-8 lg:mt-14 lg:px-12 xl:px-0">


                    <p className="mx-auto mt-6 max-w-[900px] text-center text-[11px] leading-5 text-[#8a817b] sm:text-[12px]">
                        Insurance participation and benefits may vary by plan. Please contact
                        Transcending Psychiatry or your insurance provider to confirm current
                        network status, eligibility, and coverage before receiving services.
                    </p>
                </div>
            </div>
        </section>
    );
}

function AccessItem({
    icon: Icon,
    title,
    subtitle,
    border = false,
}: {
    icon: typeof MapPin;
    title: string;
    subtitle: string;
    border?: boolean;
}) {
    return (
        <div
            className={`flex items-center gap-4 px-6 py-6 sm:px-8 ${border
                ? "border-t border-[#3a2d25]/[0.07] md:border-l md:border-t-0"
                : ""
                }`}
        >
            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#fff0e5] text-[#ff7426]">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <div>
                <p className="text-[17px] font-semibold tracking-[-0.02em] text-[#302d2a] sm:text-[19px]">
                    {title}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff7426] sm:text-[11px]">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
