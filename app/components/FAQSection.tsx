"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Mail,
    Minus,
    Phone,
    Plus,
    Sparkles,
} from "lucide-react";

const faqs = [
    {
        question: "What services does Transcending Psychiatry provide?",
        answer:
            "Transcending Psychiatry provides comprehensive psychiatric evaluations, psychiatric medication management, psychotherapy, and ongoing mental health care. Treatment is personalized around each client's symptoms, experiences, goals, and overall well-being.",
    },
    {
        question: "What conditions do you treat?",
        answer:
            "We provide care for a range of mental health conditions, including anxiety disorders, depression, bipolar disorder, schizophrenia, schizoaffective disorder, obsessive-compulsive disorder (OCD), post-traumatic stress disorder (PTSD), and personality disorders.",
    },
    {
        question: "What ages do you treat?",
        answer:
            "Transcending Psychiatry provides psychiatric care for adolescents and adults ages 12 and older. Treatment recommendations are individualized based on each person's needs, history, and goals.",
    },
    {
        question: "Do you offer in-person appointments?",
        answer:
            "Yes. In-person psychiatric services are available at our New Jersey location at 3600 Route 66, Suite 150, Neptune, NJ 07753.",
    },
    {
        question: "Do you offer telehealth appointments?",
        answer:
            "Yes. Telehealth appointments are available for eligible clients in both New York and New Jersey, allowing you to receive psychiatric care from a private and convenient location.",
    },
    {
        question: "Where is Transcending Psychiatry located?",
        answer:
            "Our New Jersey office is located at 3600 Route 66, Suite 150, Neptune, NJ 07753. Our New York location is at 225 West 34th St, 9th Floor, New York, NY 10122.",
    },
    {
        question: "Do you accept insurance?",
        answer:
            "Transcending Psychiatry works with major insurance providers. Insurance participation, benefits, copays, deductibles, and coverage can vary by plan, so we recommend confirming your current benefits and network status before receiving services.",
    },
    {
        question: "What happens during my first psychiatric evaluation?",
        answer:
            "Your initial evaluation is an opportunity to develop a comprehensive understanding of what you are experiencing. Your provider may discuss your current symptoms, mental health history, medical history, medications, lifestyle, concerns, and treatment goals. This information helps guide an individualized treatment plan.",
    },
    {
        question: "Will I automatically be prescribed medication?",
        answer:
            "No. Medication is not automatically prescribed. Treatment recommendations are based on your psychiatric evaluation, individual needs, medical considerations, and collaborative discussion with your provider. When medication is appropriate, the benefits, risks, alternatives, and ongoing monitoring can be discussed with you.",
    },
    {
        question: "Does treatment include psychotherapy?",
        answer:
            "Psychotherapy may be incorporated into treatment when appropriate. Transcending Psychiatry takes an integrated approach that may include evidence-based therapeutic strategies such as Cognitive Behavioral Therapy (CBT), medication management, and other individualized recommendations.",
    },
    {
        question: "How do I schedule an appointment?",
        answer:
            "You can begin by selecting the Book an Appointment button on our website. If you have questions before scheduling, you can also contact Transcending Psychiatry by phone or email.",
    },
    {
        question: "What if I am experiencing a mental health emergency?",
        answer:
            "Transcending Psychiatry is not an emergency service. If you are experiencing a psychiatric or medical emergency, feel you may harm yourself or someone else, or need immediate assistance, call 911 or go to the nearest emergency department. In the United States, you can also call or text 988 for the Suicide & Crisis Lifeline.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="
        relative
        scroll-mt-28
        overflow-hidden
        bg-[#fffaf6]
        py-20
        sm:py-24
        lg:py-32
      "
        >
            {/* =====================================================
          BACKGROUND BRAND ELEMENTS
      ====================================================== */}

            <div
                className="
          pointer-events-none
          absolute
          -left-44
          top-32
          hidden
          h-[420px]
          w-[560px]
          opacity-40
          lg:block
        "
                aria-hidden="true"
            >
                <div
                    className="
            absolute
            left-0
            top-0
            h-[330px]
            w-[330px]
            rounded-full
            border
            border-[#ff5a1f]/15
          "
                />

                <div
                    className="
            absolute
            left-24
            top-0
            h-[330px]
            w-[330px]
            rounded-full
            border
            border-[#ff7a2f]/15
          "
                />

                <div
                    className="
            absolute
            left-48
            top-0
            h-[330px]
            w-[330px]
            rounded-full
            border
            border-[#ff9b58]/15
          "
                />
            </div>

            <div
                className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#fff0e5]
          blur-[100px]
        "
            />

            <div
                className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1380px]
          gap-14
          px-6
          sm:px-8
          lg:grid-cols-[0.72fr_1.28fr]
          lg:gap-20
          lg:px-12
          xl:px-16
        "
            >
                {/* =====================================================
            LEFT
        ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.65,
                    }}
                    className="lg:sticky lg:top-32 lg:self-start"
                >
                    {/* EYEBROW */}

                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#ff7426]" />

                        <p
                            className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#e6601c]
                sm:text-[12px]
              "
                        >
                            Frequently Asked Questions
                        </p>
                    </div>

                    {/* TITLE */}

                    <h2
                        className="
              mt-6
              max-w-[500px]
              text-[43px]
              font-semibold
              leading-[1.04]
              tracking-[-0.045em]
              text-[#292725]
              sm:text-[54px]
              lg:text-[60px]
            "
                    >
                        Questions?
                        <br />

                        <span className="text-[#ff7426]">
                            We&apos;re here to help.
                        </span>
                    </h2>

                    <p
                        className="
              mt-6
              max-w-[430px]
              text-[16px]
              leading-8
              text-[#69635f]
            "
                    >
                        Find answers to common questions about psychiatric
                        care, appointments, telehealth, medication,
                        insurance, and getting started with Transcending
                        Psychiatry.
                    </p>

                    {/* CONTACT CARD */}

                    <motion.div
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
                            duration: 0.55,
                            delay: 0.15,
                        }}
                        className="
              mt-9
              max-w-[430px]
              overflow-hidden
              rounded-[28px]
              border
              border-[#3a2d25]/[0.07]
              bg-white
              p-6
              shadow-[0_20px_55px_rgba(76,49,30,0.06)]
              sm:p-7
            "
                    >
                        <div
                            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#fff0e5]
                text-[#ff7426]
              "
                        >
                            <Sparkles className="h-5 w-5" />
                        </div>

                        <p
                            className="
                mt-5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#e6601c]
              "
                        >
                            Still Have Questions?
                        </p>

                        <p
                            className="
                mt-3
                text-[14px]
                leading-6
                text-[#69635f]
              "
                        >
                            Our team can help with questions about
                            scheduling, services, insurance, or getting
                            started with care.
                        </p>

                        {/* PHONE */}

                        <a
                            href="tel:+16465801030"
                            className="
                group
                mt-6
                flex
                items-center
                gap-3
                text-[14px]
                font-semibold
                text-[#302d2a]
                transition
                hover:text-[#ff7426]
              "
                        >
                            <span
                                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fff0e5]
                  text-[#ff7426]
                "
                            >
                                <Phone className="h-4 w-4" />
                            </span>

                            (646) 580-1030
                        </a>

                        {/* EMAIL */}

                        <a
                            href="mailto:info@transcendingpsychiatry.sprucecare.com"
                            className="
                group
                mt-3
                flex
                items-start
                gap-3
                text-[13px]
                font-medium
                text-[#69635f]
                transition
                hover:text-[#ff7426]
              "
                        >
                            <span
                                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fff0e5]
                  text-[#ff7426]
                "
                            >
                                <Mail className="h-4 w-4" />
                            </span>

                            <span className="break-all pt-2">
                                info@transcendingpsychiatry.sprucecare.com
                            </span>
                        </a>

                        {/* BOOK */}

                        <Link
                            href="/book"
                            className="
                group
                mt-6
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#252525]
                px-6
                py-3.5
                text-[13px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#ff7426]
              "
                        >
                            Book an Appointment

                            <ArrowRight
                                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                "
                            />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* =====================================================
            RIGHT — FAQ ACCORDION
        ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    transition={{
                        duration: 0.65,
                        delay: 0.08,
                    }}
                    className="
            overflow-hidden
            rounded-[30px]
            border
            border-[#3a2d25]/[0.07]
            bg-white
            px-6
            shadow-[0_24px_65px_rgba(76,49,30,0.055)]
            sm:px-8
            lg:px-10
          "
                >
                    {faqs.map((faq, index) => {
                        const open = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className="
                  border-b
                  border-[#3a2d25]/[0.08]
                  last:border-b-0
                "
                            >
                                {/* QUESTION */}

                                <button
                                    type="button"
                                    aria-expanded={open}
                                    onClick={() =>
                                        setOpenIndex(
                                            open ? null : index
                                        )
                                    }
                                    className="
                    group
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
                                    <div className="flex items-start gap-4 sm:gap-5">
                                        {/* NUMBER */}

                                        <span
                                            className={`
                        mt-1
                        hidden
                        text-[11px]
                        font-bold
                        tracking-[0.12em]
                        transition-colors
                        sm:block
                        ${open
                                                    ? "text-[#ff7426]"
                                                    : "text-[#b5ada7]"
                                                }
                      `}
                                        >
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <span
                                            className={`
                        text-[18px]
                        font-semibold
                        leading-7
                        tracking-[-0.02em]
                        transition-colors
                        sm:text-[21px]
                        ${open
                                                    ? "text-[#ff7426]"
                                                    : "text-[#302d2a] group-hover:text-[#ff7426]"
                                                }
                      `}
                                        >
                                            {faq.question}
                                        </span>
                                    </div>

                                    {/* PLUS / MINUS */}

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
                                                ? "rotate-0 bg-[#ff7426] text-white shadow-[0_8px_22px_rgba(255,116,38,0.22)]"
                                                : "bg-[#fff0e5] text-[#ff7426] group-hover:bg-[#ff7426] group-hover:text-white"
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

                                {/* ANSWER */}

                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1,
                                                ],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div
                                                className="
                          pb-7
                          pr-4
                          sm:pl-9
                          sm:pr-14
                        "
                                            >
                                                <p
                                                    className="
                            max-w-[760px]
                            text-[15px]
                            leading-7
                            text-[#69635f]
                            sm:text-[16px]
                            sm:leading-8
                          "
                                                >
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}