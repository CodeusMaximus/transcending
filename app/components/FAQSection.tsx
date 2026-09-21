"use client";

import { useLanguage } from "./LanguageContext";
import { getTranslations } from "./translations";
import { useState } from "react";
import {
    AnimatePresence,
    motion,
} from "framer-motion";
import { Minus, Plus } from "lucide-react";


export default function FAQSection() {
    const { language } = useLanguage();
    const t = getTranslations(language);
    const faqs = t.faq.items;
    const [openIndex, setOpenIndex] =
        useState<number | null>(0);

    return (
        <section
            id="faq"
            className="
                scroll-mt-28
                bg-[#f8fafb]
                py-20
                sm:py-24
                lg:py-32
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    max-w-[1280px]
                    gap-12
                    px-6
                    sm:px-8
                    lg:grid-cols-[0.7fr_1.3fr]
                    lg:gap-20
                    lg:px-12
                "
            >
                {/* LEFT */}
                <div>
                    <p
                        className="
                            text-[12px]
                            font-bold
                            uppercase
                            tracking-[0.32em]
                            text-[#b77b18]
                        "
                    >
                        {t.faq.eyebrow}
                    </p>

                    <h2
                        className="
                            mt-5
                            font-serif
                            text-[42px]
                            font-semibold
                            leading-[1.03]
                            tracking-[-0.035em]
                            text-[#082957]
                            sm:text-[52px]
                        "
                    >
                        {t.faq.titleLine1}
                        <br />
                        We&apos;re here to help.
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-[390px]
                            text-[16px]
                            leading-7
                            text-[#587086]
                        "
                    >
                        Find answers to common
                        questions about psychiatric
                        care, appointments, telehealth,
                        medications, insurance, and
                        getting started with Solid Rock
                        Behavioral Health.
                    </p>

                    <div
                        className="
                            mt-8
                            hidden
                            max-w-[390px]
                            rounded-[22px]
                            border
                            border-[#082957]/10
                            bg-white
                            p-6
                            lg:block
                        "
                    >
                        <p
                            className="
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-[#b77b18]
                            "
                        >
                            {t.faq.still}
                        </p>

                        <p
                            className="
                                mt-3
                                text-[14px]
                                leading-6
                                text-[#587086]
                            "
                        >
                            Speak with Solid Rock
                            Behavioral Health about
                            scheduling, services, or
                            getting started.
                        </p>

                        <a
                            href="tel:+19294472430"
                            className="
                                mt-5
                                inline-flex
                                items-center
                                justify-center
                                rounded-full
                                bg-[#082957]
                                px-6
                                py-3
                                text-[13px]
                                font-bold
                                text-white
                                transition
                                hover:bg-[#075187]
                            "
                        >
                            (929) 447-2430
                        </a>
                    </div>
                </div>

                {/* FAQ ACCORDION */}
                <div className="border-t border-[#082957]/10">
                    {faqs.map((faq, index) => {
                        const open =
                            openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className="
                                    border-b
                                    border-[#082957]/10
                                "
                            >
                                <button
                                    type="button"
                                    aria-expanded={open}
                                    onClick={() =>
                                        setOpenIndex(
                                            open
                                                ? null
                                                : index
                                        )
                                    }
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-between
                                        gap-6
                                        py-6
                                        text-left
                                        sm:py-7
                                    "
                                >
                                    <span
                                        className="
                                            font-serif
                                            text-[20px]
                                            font-semibold
                                            leading-7
                                            text-[#082957]
                                            sm:text-[23px]
                                        "
                                    >
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            transition-all
                                            duration-300
                                            ${open
                                                ? "rotate-0 bg-[#075187] text-white"
                                                : "bg-[#e9eff2] text-[#082957]"
                                            }
                                        `}
                                    >
                                        {open ? (
                                            <Minus className="h-4 w-4" />
                                        ) : (
                                            <Plus className="h-4 w-4" />
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence
                                    initial={false}
                                >
                                    {open && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height:
                                                    "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration:
                                                    0.25,
                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1,
                                                ],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p
                                                className="
                                                    max-w-[760px]
                                                    pb-7
                                                    pr-8
                                                    text-[15px]
                                                    leading-7
                                                    text-[#587086]
                                                    sm:text-[16px]
                                                "
                                            >
                                                {
                                                    faq.answer
                                                }
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}