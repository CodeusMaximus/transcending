"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, BriefcaseBusiness, HeartHandshake, LockKeyhole, Send } from "lucide-react";

const INITIAL_FORM = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
};

export default function FooterContactForm() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [submitting, setSubmitting] = useState(false);
    const [businessOnly, setBusinessOnly] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    function update(key: keyof typeof INITIAL_FORM, value: string) {
        setForm((prev) => ({ ...prev, [key]: value }));
        if (status !== "idle") setStatus("idle");
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        setStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    newsletter: false,
                    services: [],
                    referral: "",
                    inquiryType: "general_business",
                    businessOnly,
                }),
            });
            if (!response.ok) throw new Error("Unable to submit");
            setForm(INITIAL_FORM);
            setBusinessOnly(false);
            setStatus("success");
        } catch {
            setStatus("error");
        } finally {
            setSubmitting(false);
        }
    }

    const inputClass =
        "w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#ff7426] focus:ring-2 focus:ring-[#ff7426]/20";

    return (
        <section id="contact" className="mb-16 scroll-mt-28" aria-labelledby="contact-heading">
            <div className="mb-8">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ff9b58]">
                    Contact Transcending Psychiatry
                </p>
                <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    How can we help you?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
                    Choose the appropriate contact option below. Business questions and
                    patient inquiries are handled separately to protect your privacy.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
                {/* LEFT: GENERAL BUSINESS INQUIRIES */}
                <div className="rounded-[28px] border border-white/15 bg-white/[0.055] p-6 sm:p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff7426]/15 text-[#ff9b58]">
                        <BriefcaseBusiness className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff9b58]">
                        General & Administrative
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Business Inquiry</h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">
                        For partnerships, media requests, office administration, and
                        other non-patient business questions only.
                    </p>

                    <div className="mt-5 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] p-4 text-xs leading-6 text-white/75">
                        <strong className="text-white">Do not submit patient information.</strong>{" "}
                        No diagnoses, symptoms, medications, treatment requests, appointment
                        questions, or medical history. Use the secure patient form instead.
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <label className="block text-xs font-medium text-white/80">
                                First name *
                                <input
                                    className={`${inputClass} mt-2`}
                                    autoComplete="given-name"
                                    value={form.firstName}
                                    onChange={(e) => update("firstName", e.target.value)}
                                    required
                                    maxLength={100}
                                    placeholder="First name"
                                />
                            </label>
                            <label className="block text-xs font-medium text-white/80">
                                Last name *
                                <input
                                    className={`${inputClass} mt-2`}
                                    autoComplete="family-name"
                                    value={form.lastName}
                                    onChange={(e) => update("lastName", e.target.value)}
                                    required
                                    maxLength={100}
                                    placeholder="Last name"
                                />
                            </label>
                        </div>
                        <label className="block text-xs font-medium text-white/80">
                            Email address *
                            <input
                                type="email"
                                className={`${inputClass} mt-2`}
                                autoComplete="email"
                                value={form.email}
                                onChange={(e) => update("email", e.target.value)}
                                required
                                maxLength={254}
                                placeholder="you@example.com"
                            />
                        </label>
                        <label className="block text-xs font-medium text-white/80">
                            Phone number (optional)
                            <input
                                type="tel"
                                className={`${inputClass} mt-2`}
                                autoComplete="tel"
                                value={form.phone}
                                onChange={(e) => update("phone", e.target.value)}
                                maxLength={30}
                                placeholder="(555) 555-5555"
                            />
                        </label>
                        <label className="block text-xs font-medium text-white/80">
                            Business message *
                            <textarea
                                className={`${inputClass} mt-2 min-h-[130px] resize-y`}
                                value={form.message}
                                onChange={(e) => update("message", e.target.value)}
                                required
                                maxLength={1500}
                                placeholder="Tell us about your business or administrative inquiry only..."
                            />
                        </label>
                        <label className="flex items-start gap-3 text-xs leading-6 text-white/70">
                            <input
                                type="checkbox"
                                required
                                checked={businessOnly}
                                onChange={(e) => setBusinessOnly(e.target.checked)}
                                className="mt-1 h-4 w-4 accent-[#ff7426]"
                            />
                            <span>I confirm this is a business or administrative inquiry only and contains no patient, medical, or treatment information.</span>
                        </label>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ff7426] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff8b49] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <Send className="h-4 w-4" />
                            {submitting ? "Sending..." : "Send Business Inquiry"}
                        </button>
                        {status === "success" && (
                            <p role="status" className="text-sm text-green-300">
                                Thank you. Your business inquiry has been submitted.
                            </p>
                        )}
                        {status === "error" && (
                            <p role="alert" className="text-sm text-red-300">
                                We couldn't submit your message. Please try again.
                            </p>
                        )}
                    </form>
                </div>

                {/* RIGHT: SECURE PATIENT INQUIRIES */}
                <div className="relative flex flex-col overflow-hidden rounded-[28px] border border-[#ff7426]/30 bg-gradient-to-br from-[#392b23] via-[#302925] to-[#252525] p-6 sm:p-8">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff7426]/20 blur-[85px]"
                    />
                    <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff7426]/20 text-[#ff9b58]">
                            <HeartHandshake className="h-6 w-6" />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff9b58]">
                            New & Prospective Patients
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Secure Patient Inquiry</h3>
                        <p className="mt-3 text-sm leading-7 text-white/65">
                            Looking for psychiatric care? Please use our dedicated IntakeQ
                            form for all patient-related questions, including care,
                            appointments, and treatment inquiries.
                        </p>

                        <div className="mt-7 space-y-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                            <div className="flex items-start gap-3">
                                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-[#ff9b58]" />
                                <div>
                                    <p className="text-sm font-semibold text-white">Separate patient workflow</p>
                                    <p className="mt-1 text-xs leading-6 text-white/60">
                                        Your information is submitted directly through the
                                        practice's hosted IntakeQ form, not the business contact form.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-4 text-sm leading-7 text-white/75">
                                <p>Use this form for:</p>
                                <ul className="mt-2 list-inside list-disc space-y-1 text-white/65">
                                    <li>New patient inquiries</li>
                                    <li>Psychiatric service questions</li>
                                    <li>Appointment and care-related requests</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-auto pt-8">
                            <a
                                href="https://intakeq.com/c/OG7bQF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#ff7426] px-6 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#ff7426]/20 transition hover:bg-[#ff8b49]"
                            >
                                Open Secure Patient Inquiry
                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                            <p className="mt-4 text-center text-xs leading-6 text-white/45">
                                Opens IntakeQ in a new tab. This form is not for emergencies.
                                Call 911 for an emergency, or call/text 988 for crisis support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
