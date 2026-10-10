
"use client";

import {
    ArrowUpRight,
    HeartHandshake,
    LockKeyhole,
} from "lucide-react";

export default function FooterContactForm() {
    return (
        <section
            id="contact"
            className="relative mb-16 scroll-mt-28"
            aria-labelledby="contact-heading"
        >
            <div className="mx-auto max-w-[850px]">
                <div className="mb-9 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#ff9b58]">
                        Contact Transcending Psychiatry
                    </p>

                    <h2
                        id="contact-heading"
                        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                    >
                        Take the First Step Toward Better Care
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">
                        Whether you are exploring psychiatric services or
                        ready to begin your care journey, we welcome
                        the opportunity to connect with you.
                    </p>
                </div>

                <div className="relative overflow-hidden rounded-[30px] border border-[#ff7426]/30 bg-gradient-to-br from-[#392b23] via-[#302925] to-[#252525] p-7 shadow-xl sm:p-10">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff7426]/20 blur-[85px]"
                    />

                    <div className="relative z-10 text-center">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff7426]/20 text-[#ff9b58]">
                            <HeartHandshake className="h-8 w-8" />
                        </div>

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff9b58]">
                            New & Prospective Patients
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                            Connect With Our Care Team
                        </h3>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
                            Have questions about our psychiatric services,
                            medication management, or scheduling an
                            appointment? Our patient inquiry form provides
                            a dedicated way to reach out.
                        </p>

                        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                            <div className="flex items-start gap-4 text-left">
                                <LockKeyhole className="mt-1 h-6 w-6 shrink-0 text-[#ff9b58]" />

                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Dedicated Patient Inquiry
                                    </p>

                                    <p className="mt-2 text-xs leading-6 text-white/60">
                                        Your inquiry is submitted directly through
                                        our hosted IntakeQ form, separate from
                                        this website.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://intakeq.com/c/OG7bQF"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mx-auto mt-8 inline-flex min-h-14 w-full max-w-md items-center justify-center gap-3 rounded-full bg-[#ff7426] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#ff7426]/20 transition hover:bg-[#ff8b49]"
                        >
                            Open Patient Inquiry Form
                            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>

                        <p className="mx-auto mt-5 max-w-lg text-xs leading-6 text-white/45">
                            Opens IntakeQ in a new tab. This form is not
                            intended for emergencies. For immediate
                            emergencies, call 911. For mental health
                            crisis support, call or text 988.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
