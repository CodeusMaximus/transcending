"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
    {
        "question": "What services does Transcending Psychiatry provide?",
        "answer": "Transcending Psychiatry provides comprehensive psychiatric evaluations, psychiatric medication management, psychotherapy, and ongoing mental health care. Treatment is personalized around each client's symptoms, experiences, goals, and overall well-being."
    },
    {
        "question": "What conditions do you treat?",
        "answer": "We provide care for a range of mental health conditions, including anxiety disorders, depression, bipolar disorder, schizophrenia, schizoaffective disorder, obsessive-compulsive disorder (OCD), post-traumatic stress disorder (PTSD), and personality disorders."
    },
    {
        "question": "What ages do you treat?",
        "answer": "Transcending Psychiatry provides psychiatric care for adolescents and adults ages 12 and older. Treatment recommendations are individualized based on each person's needs, history, and goals."
    },
    {
        "question": "Do you offer in-person appointments?",
        "answer": "Yes. In-person psychiatric services are available at our New Jersey location at 3600 Route 66, Suite 150, Neptune, NJ 07753."
    },
    {
        "question": "Do you offer telehealth appointments?",
        "answer": "Yes. Telehealth appointments are available for eligible clients in both New York and New Jersey, allowing you to receive psychiatric care from a private and convenient location."
    },
    {
        "question": "Where is Transcending Psychiatry located?",
        "answer": "Our New Jersey office is located at 3600 Route 66, Suite 150, Neptune, NJ 07753. Our New York location is at 225 West 34th St, 9th Floor, New York, NY 10122."
    },
    {
        "question": "Do you accept insurance?",
        "answer": "Transcending Psychiatry works with major insurance providers. Insurance participation, benefits, copays, deductibles, and coverage can vary by plan, so we recommend confirming your current benefits and network status before receiving services."
    },
    {
        "question": "What happens during my first psychiatric evaluation?",
        "answer": "Your initial evaluation is an opportunity to develop a comprehensive understanding of what you are experiencing. Your provider may discuss your current symptoms, mental health history, medical history, medications, lifestyle, concerns, and treatment goals. This information helps guide an individualized treatment plan."
    },
    {
        "question": "Will I automatically be prescribed medication?",
        "answer": "No. Medication is not automatically prescribed. Treatment recommendations are based on your psychiatric evaluation, individual needs, medical considerations, and collaborative discussion with your provider. When medication is appropriate, the benefits, risks, alternatives, and ongoing monitoring can be discussed with you."
    },
    {
        "question": "Does treatment include psychotherapy?",
        "answer": "Psychotherapy may be incorporated into treatment when appropriate. Transcending Psychiatry takes an integrated approach that may include evidence-based therapeutic strategies such as Cognitive Behavioral Therapy (CBT), medication management, and other individualized recommendations."
    },
    {
        "question": "How do I schedule an appointment?",
        "answer": "You can begin by selecting the Book an Appointment button on our website. If you have questions before scheduling, you can also contact Transcending Psychiatry by phone or email."
    },
    {
        "question": "What if I am experiencing a mental health emergency?",
        "answer": "Transcending Psychiatry is not an emergency service. If you are experiencing a psychiatric or medical emergency, feel you may harm yourself or someone else, or need immediate assistance, call 911 or go to the nearest emergency department. In the United States, you can also call or text 988 for the Suicide & Crisis Lifeline."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="relative scroll-mt-28 overflow-hidden bg-[#fffaf6] py-20 sm:py-24 lg:py-32"
        >
            {/* Decorative background elements */}
            <div
                className="pointer-events-none absolute -left-44 top-32 hidden h-[420px] w-[560px] opacity-40 lg:block"
                aria-hidden="true"
            >
                <div className="absolute left-0 top-0 h-[330px] w-[330px] rounded-full border border-[#ff5a1f]/15" />
                <div className="absolute left-24 top-0 h-[330px] w-[330px] rounded-full border border-[#ff7a2f]/15" />
                <div className="absolute left-48 top-0 h-[330px] w-[330px] rounded-full border border-[#ff9b58]/15" />
            </div>

            <div
                className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#fff0e5] blur-[100px]"
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-12">
                {/* Page title */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                    className="mb-10 text-center sm:mb-12"
                >
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-[#ff7426]" />
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e6601c] sm:text-xs">
                            Transcending Psychiatry
                        </p>
                        <span className="h-px w-10 bg-[#ff7426]" />
                    </div>

                    <h1 className="text-4xl font-semibold tracking-[-0.045em] text-[#292725] sm:text-5xl lg:text-6xl">
                        FAQs
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#69635f] sm:text-base sm:leading-8">
                        Find answers to common questions about our services, appointments,
                        telehealth, medication, insurance, and getting started with care.
                    </p>
                </motion.div>

                {/* Full-width FAQ accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.65, delay: 0.05 }}
                    className="overflow-hidden rounded-[26px] border border-[#3a2d25]/[0.07] bg-white px-5 shadow-[0_24px_65px_rgba(76,49,30,0.055)] sm:rounded-[30px] sm:px-8 lg:px-10"
                >
                    {faqs.map((faq, index) => {
                        const open = openIndex === index;
                        const answerId = `faq-answer-${index}`;

                        return (
                            <div
                                key={faq.question}
                                className="border-b border-[#3a2d25]/[0.08] last:border-b-0"
                            >
                                <button
                                    type="button"
                                    aria-expanded={open}
                                    aria-controls={answerId}
                                    onClick={() => setOpenIndex(open ? null : index)}
                                    className="group flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-6 sm:py-7"
                                >
                                    <div className="flex min-w-0 items-start gap-3 sm:gap-5">
                                        <span
                                            className={`mt-1 hidden text-[11px] font-bold tracking-[0.12em] transition-colors sm:block ${open ? "text-[#ff7426]" : "text-[#b5ada7]"
                                                }`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span
                                            className={`text-base font-semibold leading-7 tracking-[-0.02em] transition-colors sm:text-xl ${open
                                                    ? "text-[#ff7426]"
                                                    : "text-[#302d2a] group-hover:text-[#ff7426]"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>
                                    </div>

                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${open
                                                ? "bg-[#ff7426] text-white shadow-[0_8px_22px_rgba(255,116,38,0.22)]"
                                                : "bg-[#fff0e5] text-[#ff7426] group-hover:bg-[#ff7426] group-hover:text-white"
                                            }`}
                                    >
                                        {open ? (
                                            <Minus className="h-4 w-4" />
                                        ) : (
                                            <Plus className="h-4 w-4" />
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            id={answerId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 pl-0 pr-2 sm:pb-7 sm:pl-9 sm:pr-14">
                                                <p className="max-w-[760px] text-sm leading-7 text-[#69635f] sm:text-base sm:leading-8">
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
