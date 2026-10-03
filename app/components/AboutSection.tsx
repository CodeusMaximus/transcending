"use client";







import Link from "next/link";

import Image from "next/image";

import BookAppointmentButton from "./BookAppointmentButton";



import { motion } from "framer-motion";



import {



    ArrowRight,



    Brain,



    HeartHandshake,



    MapPin,



    Play,



    ShieldCheck,



    Sparkles,



    Stethoscope,



    Video,



} from "lucide-react";







const carePoints = [



    {



        icon: Stethoscope,



        title: "Medication Management",



        text: "Thoughtful psychiatric medication care with ongoing assessment and adjustments.",



    },



    {



        icon: Brain,



        title: "Psychotherapy + CBT",



        text: "Evidence-based therapeutic support designed to build insight, skills, and resilience.",



    },



    {



        icon: HeartHandshake,



        title: "Personalized Treatment",



        text: "Care plans shaped around your symptoms, experiences, goals, and overall well-being.",



    },



    {



        icon: ShieldCheck,



        title: "Safe, Supportive Care",



        text: "A collaborative environment where clients can feel heard, respected, and empowered.",



    },



];







export default function AboutSection() {



    return (



        <section



            id="about"



            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"



        >



            {/* Decorative Transcending rings */}



            <div



                className="pointer-events-none absolute inset-0 overflow-hidden"



                aria-hidden="true"



            >



                <div className="absolute -left-32 top-28 h-[360px] w-[360px] rounded-full border border-[#ff5a1f]/10" />



                <div className="absolute -left-20 top-28 h-[360px] w-[360px] rounded-full border border-[#ff7a2f]/10" />



                <div className="absolute -left-8 top-28 h-[360px] w-[360px] rounded-full border border-[#ff9b58]/10" />



                <div className="absolute right-[-10%] top-[35%] h-[520px] w-[520px] rounded-full bg-[#fff2e9] blur-3xl" />



            </div>







            <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">



                {/* =====================================================



            ABOUT TRANSCENDING + LONG VIDEO



        ====================================================== */}



                <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:gap-16 xl:gap-20">



                    {/* LEFT — ABOUT CONTENT */}



                    <motion.div



                        initial={{ opacity: 0, x: -35 }}



                        whileInView={{ opacity: 1, x: 0 }}



                        viewport={{ once: true, amount: 0.12 }}



                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}



                    >



                        <div className="mb-5 flex items-center gap-3">



                            <span className="h-px w-10 bg-[#ff7426]" />



                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e6601c] sm:text-[12px]">



                                About Transcending Psychiatry



                            </p>



                        </div>







                        <h2 className="max-w-[670px] text-[43px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#292725] sm:text-[54px] lg:text-[60px] xl:text-[64px]">



                            Mental health care that sees the{" "}



                            <span className="text-[#ff7426]">whole person.</span>



                        </h2>







                        <p className="mt-7 max-w-[690px] text-[16px] leading-8 text-[#69635f] sm:text-[17px]">



                            At Transcending Psychiatry, we are redefining mental health care



                            by combining psychiatric expertise with compassionate support. We



                            provide a holistic approach that integrates Psychiatric Medication



                            Management and psychotherapy to address the full spectrum of our



                            clients&apos; needs.



                        </p>







                        <p className="mt-5 max-w-[690px] text-[16px] leading-8 text-[#69635f] sm:text-[17px]">



                            We understand that each individual&apos;s experience is unique,



                            which is why we take the time to develop personalized treatment



                            plans that consider not only symptoms, but also the underlying



                            factors impacting mental wellness. Through comprehensive



                            evaluations and ongoing assessments, we collaborate with clients



                            to identify effective treatment strategies and make thoughtful



                            adjustments along the way.



                        </p>







                        <p className="mt-5 max-w-[690px] text-[16px] leading-8 text-[#69635f] sm:text-[17px]">



                            Our integrated approach includes traditional psychiatric services



                            alongside evidence-based therapeutic modalities such as Cognitive



                            Behavioral Therapy (CBT). By combining medication management with



                            psychotherapy, we aim to support long-term stability, emotional



                            resilience, and an improved quality of life.



                        </p>







                        {/* Mission */}



                        <motion.div



                            initial={{ opacity: 0, y: 18 }}



                            whileInView={{ opacity: 1, y: 0 }}



                            viewport={{ once: true }}



                            transition={{ duration: 0.55, delay: 0.12 }}



                            className="mt-8 max-w-[700px] rounded-[30px] border border-[#ff7426]/10 bg-[#fff8f3] p-7 sm:p-8"



                        >



                            <div className="flex items-start gap-4">



                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#ff7426] shadow-sm">



                                    <Sparkles className="h-5 w-5" />



                                </div>







                                <div>



                                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e6601c]">



                                        Our Mission



                                    </p>



                                    <p className="mt-3 text-[17px] font-medium leading-8 text-[#34302d] sm:text-[18px]">



                                        To create a transformative therapeutic experience that



                                        transcends conventional psychiatry by fostering a deep



                                        connection with each client and guiding them toward lasting



                                        change.



                                    </p>



                                </div>



                            </div>



                        </motion.div>







                        {/* Care cards */}



                        <div className="mt-8 grid max-w-[700px] gap-4 sm:grid-cols-2">



                            {carePoints.map((point, index) => {



                                const Icon = point.icon;







                                return (



                                    <motion.div



                                        key={point.title}



                                        initial={{ opacity: 0, y: 22 }}



                                        whileInView={{ opacity: 1, y: 0 }}



                                        viewport={{ once: true }}



                                        transition={{ duration: 0.5, delay: index * 0.07 }}



                                        whileHover={{ y: -5 }}



                                        className="group rounded-[25px] border border-[#3a2d25]/[0.07] bg-[#fffaf6] p-5 transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(76,49,30,0.08)] sm:p-6"



                                    >



                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0e5] text-[#ff7426] transition-transform duration-300 group-hover:scale-110">



                                            <Icon className="h-5 w-5" strokeWidth={1.8} />



                                        </div>







                                        <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em] text-[#302d2a]">



                                            {point.title}



                                        </h3>







                                        <p className="mt-2 text-[13px] leading-6 text-[#77706b] sm:text-[14px]">



                                            {point.text}



                                        </p>



                                    </motion.div>



                                );



                            })}



                        </div>







                        {/* locations */}



                        <div className="mt-8 flex max-w-[700px] flex-wrap gap-x-7 gap-y-4 border-t border-[#3a2d25]/[0.08] pt-7">



                            <div className="flex items-center gap-3 text-[#4e4945]">



                                <MapPin className="h-5 w-5 text-[#ff7426]" />



                                <span className="text-[14px] font-semibold">



                                    In-person care in New Jersey



                                </span>



                            </div>







                            <div className="flex items-center gap-3 text-[#4e4945]">



                                <Video className="h-5 w-5 text-[#ff7426]" />



                                <span className="text-[14px] font-semibold">



                                    Telehealth in New York & New Jersey



                                </span>



                            </div>



                        </div>



                    </motion.div>







                    {/* RIGHT — LONG/STICKY VIDEO */}



                    <motion.div



                        initial={{ opacity: 0, x: 35, scale: 0.97 }}



                        whileInView={{ opacity: 1, x: 0, scale: 1 }}



                        viewport={{ once: true, amount: 0.12 }}



                        transition={{



                            duration: 0.75,



                            delay: 0.08,



                            ease: [0.22, 1, 0.36, 1],



                        }}



                        className="lg:sticky lg:top-28"



                    >



                        <div className="relative mx-auto max-w-[590px]">



                            {/* orange offset shape */}



                            <div



                                className="absolute -right-4 -top-4 h-full w-full rounded-[38px] border border-[#ff7426]/20 bg-[#fff0e5] sm:-right-6 sm:-top-6"



                                aria-hidden="true"



                            />







                            <div className="relative overflow-hidden rounded-[34px] border border-[#3a2d25]/[0.08] bg-[#292725] shadow-[0_28px_80px_rgba(76,49,30,0.16)]">



                                {/* Tall frame is intentional for a long provider video */}



                                <div className="relative aspect-[4/5] w-full lg:aspect-[5/6]">



                                    <video



                                        autoPlay



                                        muted



                                        loop



                                        playsInline



                                        preload="auto"



                                        className="absolute inset-0 h-full w-full object-cover"



                                    >



                                        <source



                                            src="/videos/about-provider.mp4"



                                            type="video/mp4"



                                        />



                                        Your browser does not support the video tag.



                                    </video>







                                    {/* subtle top branding, pointer-events-none so controls still work */}



                                    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/35 via-black/5 to-transparent px-6 pb-16 pt-6 sm:px-8">



                                        <div className="flex items-center gap-3">



                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff7426] text-white shadow-lg">



                                                <Play className="ml-0.5 h-4 w-4 fill-current" />



                                            </div>



                                            <div>



                                                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">



                                                    Call us today:646-580-1030



                                                </p>



                                                <p className="mt-0.5 text-[15px] font-semibold text-white">



                                                    Hope is always Available



                                                </p>



                                            </div>



                                        </div>



                                    </div>



                                </div>







                                {/* Video caption */}



                                <div className="border-t border-white/10 bg-[#292725] px-6 py-5 text-white sm:px-8 sm:py-6">



                                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff9b58]">



                                        Transcending Psychiatry



                                    </p>



                                    <p className="mt-2 text-[17px] font-medium leading-7 text-white/90">



                                        Learn more about our approach to compassionate,



                                        individualized psychiatric care.



                                    </p>



                                </div>



                            </div>







                            {/* small decorative rings */}



                            <div



                                className="pointer-events-none absolute -bottom-10 -left-10 hidden h-36 w-48 sm:block"



                                aria-hidden="true"



                            >



                                <div className="absolute left-0 top-2 h-28 w-28 rounded-full border border-[#ff5a1f]/35" />



                                <div className="absolute left-8 top-2 h-28 w-28 rounded-full border border-[#ff7a2f]/35" />



                                <div className="absolute left-16 top-2 h-28 w-28 rounded-full border border-[#ff9b58]/35" />



                            </div>



                        </div>



                    </motion.div>



                </div>







                {/* =====================================================
            JOSEPH SPITALIERI
        ====================================================== */}
                <div className="mt-24 sm:mt-28 lg:mt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.12 }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-[38px] border border-[#3a2d25]/[0.07] bg-white px-6 py-10 text-[#252525] shadow-[0_28px_80px_rgba(76,49,30,0.08)] sm:px-9 sm:py-12 lg:px-12 lg:py-14 xl:px-14 xl:py-16"
                    >
                        <div className="pointer-events-none absolute -right-28 -top-28 opacity-40" aria-hidden="true">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                                className="relative h-[430px] w-[500px]"
                            >
                                <div className="absolute left-0 top-10 h-[300px] w-[300px] rounded-full border border-[#ff5a1f]/25" />
                                <div className="absolute left-20 top-10 h-[300px] w-[300px] rounded-full border border-[#ff7a2f]/25" />
                                <div className="absolute left-40 top-10 h-[300px] w-[300px] rounded-full border border-[#ff9b58]/25" />
                            </motion.div>
                        </div>

                        <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 md:gap-12 lg:grid-cols-[0.82fr_0.78fr_1.4fr] lg:items-center lg:gap-10 xl:grid-cols-[0.9fr_0.8fr_1.3fr] xl:gap-14">
                            {/* Joseph portrait — independent grid column */}
                            <motion.div
                                initial={{ opacity: 0, x: -28, scale: 0.97 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.65 }}
                                className="relative mx-auto w-full max-w-[390px] lg:max-w-none"
                            >
                                <div className="absolute inset-x-[7%] bottom-[2%] h-[45%] rounded-full bg-[#fff0e5] blur-3xl" />
                                <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-[#ff7426]/10 bg-gradient-to-b from-[#fffaf6] via-[#fff7f1] to-[#ffede1]">
                                    <Image
                                        src="/images/joseph-spitalieri-transparent.png"
                                        alt="Joseph Spitalieri, Psychiatric Nurse Practitioner"
                                        fill
                                        sizes="(max-width: 1024px) 390px, 30vw"
                                        className="object-contain object-bottom"
                                    />
                                </div>

                                <div aria-hidden="true" className="pointer-events-none absolute -bottom-5 left-1/2 h-24 w-40 -translate-x-1/2">
                                    <div className="absolute left-0 top-2 h-20 w-20 rounded-full border border-[#ff5a1f]/35" />
                                    <div className="absolute left-7 top-2 h-20 w-20 rounded-full border border-[#ff7a2f]/35" />
                                    <div className="absolute left-14 top-2 h-20 w-20 rounded-full border border-[#ff9b58]/35" />
                                </div>
                            </motion.div>

                            {/* Provider introduction — independent grid column */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.65, delay: 0.08 }}
                                className="mx-auto w-full max-w-[420px] text-center lg:mx-0 lg:max-w-none lg:text-left"
                            >
                                <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
                                    <span className="h-px w-9 bg-[#ff7426]" />
                                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#e6601c] sm:text-[12px]">
                                        Meet Your Provider
                                    </p>
                                </div>

                                <h3 className="text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#292725] sm:text-[50px] lg:text-[48px] xl:text-[56px]">
                                    Joseph
                                    <br />
                                    Spitalieri
                                </h3>

                                <p className="mt-5 text-[12px] font-semibold uppercase leading-6 tracking-[0.14em] text-[#817873] xl:text-[13px]">
                                    Psychiatric Nurse Practitioner
                                </p>

                                <div className="mx-auto mt-7 h-px w-20 bg-[#ff7426] lg:mx-0" />

                                <p className="mx-auto mt-6 max-w-[390px] text-[18px] leading-8 text-[#4f4945] lg:mx-0 lg:text-[19px] xl:text-[21px]">
                                    Compassionate, collaborative care centered around the person
                                    behind the symptoms.
                                </p>
                            </motion.div>

                            {/* Dark biography box */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.65, delay: 0.16 }}
                                className="mx-auto w-full max-w-[650px] rounded-[30px] border border-white/10 bg-[#252525] p-6 text-white shadow-[0_24px_60px_rgba(37,37,37,0.16)] sm:p-8 lg:max-w-none lg:p-8 xl:p-10"
                            >
                                <p className="text-[15px] leading-7 text-white/75 sm:text-[16px] sm:leading-8">
                                    As a dedicated psychiatric nurse practitioner, my approach to
                                    mental health care is grounded in compassion, collaboration,
                                    and a commitment to holistic well-being. I believe each person
                                    is unique and deserving of personalized care that honors their
                                    specific needs, experiences, and aspirations.
                                </p>

                                <p className="mt-5 text-[15px] leading-7 text-white/75 sm:text-[16px] sm:leading-8">
                                    My philosophy emphasizes that mental health is an essential
                                    component of overall wellness. I strive to create a safe and
                                    supportive environment where clients feel heard, respected,
                                    and empowered. By building strong, trusting relationships, I
                                    encourage individuals to explore their thoughts and emotions,
                                    promoting self-discovery and resilience.
                                </p>

                                <p className="mt-5 text-[15px] leading-7 text-white/75 sm:text-[16px] sm:leading-8">
                                    Together, we develop a customized treatment plan that may
                                    include psychotherapy, medication management, and lifestyle
                                    adjustments. My goal is to help clients not only manage their
                                    symptoms, but also gain the skills and strategies necessary
                                    for long-term growth and positive change.
                                </p>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                    <Link
                                        href="/AboutSection"
                                        className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full border border-white/15 bg-white px-6 py-3.5 text-[14px] font-semibold text-[#252525] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fff8f3]"
                                    >
                                        More About Joseph
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>

                                    <BookAppointmentButton
                                        label="Book an Appointment"
                                        showIcon
                                        showArrow
                                        className="min-h-[50px] px-6 py-3.5 text-[14px]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
