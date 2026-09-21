"use client";

import { motion } from "framer-motion";
import {
    HeartHandshake,
    ShieldCheck,
    Sparkles,
    Video,
} from "lucide-react";

import { useLanguage } from "./LanguageContext";
import { getTranslations } from "./translations";

export default function WhyChooseUsSection() {
    const { language } = useLanguage();
    const t = getTranslations(language);

    const reasons = [
        {
            icon: HeartHandshake,
            title:
                t.whyChooseUs.personalized
                    .title,
            text:
                t.whyChooseUs.personalized
                    .text,
        },
        {
            icon: ShieldCheck,
            title:
                t.whyChooseUs.evidenceBased
                    .title,
            text:
                t.whyChooseUs.evidenceBased
                    .text,
        },
        {
            icon: Sparkles,
            title:
                t.whyChooseUs.compassionate
                    .title,
            text:
                t.whyChooseUs.compassionate
                    .text,
        },
        {
            icon: Video,
            title:
                t.whyChooseUs.accessible
                    .title,
            text:
                t.whyChooseUs.accessible
                    .text,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#082957] py-20 text-white sm:py-24 lg:py-32">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />

            <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border border-[#d79a27]/15" />

            <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-[760px]">
                    <p className="text-[12px] font-bold uppercase tracking-[0.32em] text-[#e2b45d]">
                        {t.whyChooseUs.eyebrow}
                    </p>

                    <h2 className="mt-5 font-serif text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[54px] lg:text-[64px]">
                        {
                            t.whyChooseUs
                                .titleLine1
                        }
                        <br />
                        {
                            t.whyChooseUs
                                .titleLine2
                        }
                    </h2>

                    <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-white/65 sm:text-[18px]">
                        {
                            t.whyChooseUs
                                .description
                        }
                    </p>
                </div>

                <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-white/10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                    {reasons.map(
                        (reason, index) => {
                            const Icon =
                                reason.icon;

                            return (
                                <motion.div
                                    key={
                                        reason.title
                                    }
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay:
                                            index *
                                            0.08,
                                    }}
                                    className="bg-[#082957] p-7 sm:p-9"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#e2b45d]">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mt-7 font-serif text-[25px]">
                                        {
                                            reason.title
                                        }
                                    </h3>

                                    <p className="mt-4 text-[14px] leading-7 text-white/60">
                                        {
                                            reason.text
                                        }
                                    </p>
                                </motion.div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
}