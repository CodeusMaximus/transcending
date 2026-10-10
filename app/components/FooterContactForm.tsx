
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";

const serviceOptions = [
    "Psychiatric Medication Management",
    "Integrative Psychotherapy",
    "Comprehensive Psychiatric Evaluations",
    "Other",
];

const referralOptions = [
    "Friend / Family",
    "Social Media",
    "Other",
];

export default function FooterContactForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        newsletter: false,
        services: [] as string[],
        referral: "",
        message: "",
    });

    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");

    const fieldClass =
        "w-full rounded-xl border border-white/15 bg-white/[0.07] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#ff8b49] focus:ring-2 focus:ring-[#ff7426]/20";

    const labelClass = "mb-2 block text-sm font-semibold text-white/85";

    const update = (name: string, value: string | boolean) => {
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const toggleService = (service: string) => {
        setForm((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            setStatus("success");

            setForm({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                newsletter: false,
                services: [],
                referral: "",
                message: "",
            });
        } catch {
            setStatus("error");
        }
    }

    return (
        <section
            id="contact"
            className="relative mb-16 scroll-mt-28 overflow-hidden rounded-[32px] border border-white/10 bg-[#303030] px-6 py-12 sm:px-10 lg:px-14 lg:py-16"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#ff7426]/15"
            />

            <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                {/* INTRODUCTION */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff9b58]">
                        Contact Transcending Psychiatry
                    </p>

                    <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl">
                        We'd love to{" "}
                        <span className="text-[#ff8b49]">hear from you.</span>
                    </h2>

                    <p className="mt-7 max-w-md text-base leading-8 text-white/60">
                        Have a question about our services? Send us a message
                        and connect with our practice.
                    </p>

                    <div className="mt-10 space-y-5">
                        <div className="flex items-start gap-4">
                            <CheckCircle2
                                className="mt-1 shrink-0 text-[#ff8b49]"
                                size={20}
                            />
                            <p className="text-sm leading-7 text-white/70">
                                Psychiatric medication management
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <CheckCircle2
                                className="mt-1 shrink-0 text-[#ff8b49]"
                                size={20}
                            />
                            <p className="text-sm leading-7 text-white/70">
                                Integrative psychotherapy
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <CheckCircle2
                                className="mt-1 shrink-0 text-[#ff8b49]"
                                size={20}
                            />
                            <p className="text-sm leading-7 text-white/70">
                                Comprehensive psychiatric evaluations
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 rounded-2xl border border-[#ff7426]/20 bg-[#ff7426]/[0.06] p-6">
                        <p className="text-sm font-semibold text-[#ff9b58]">
                            Your privacy matters
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/55">
                            This form is for general inquiries only. Please do
                            not include diagnoses, medications, medical
                            history, or other sensitive health information.
                            For clinical communication, use the secure
                            patient portal.
                        </p>
                    </div>
                </div>

                {/* FORM */}
                <div className="rounded-[26px] border border-white/10 bg-[#252525] p-6 shadow-2xl sm:p-9 lg:p-10">
                    {status === "success" ? (
                        <div
                            role="status"
                            className="flex min-h-[500px] flex-col items-center justify-center text-center"
                        >
                            <CheckCircle2
                                size={56}
                                className="text-[#ff8b49]"
                            />

                            <h3 className="mt-6 text-3xl font-semibold text-white">
                                Thank you for reaching out.
                            </h3>

                            <p className="mt-4 max-w-md leading-8 text-white/60">
                                Your message has been submitted successfully.
                            </p>

                            <button
                                type="button"
                                onClick={() => setStatus("idle")}
                                className="mt-8 rounded-full border border-white/25 px-7 py-3 font-semibold text-white transition hover:border-[#ff7426]"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-7">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff9b58]">
                                    Send a Message
                                </p>

                                <h3 className="mt-3 text-3xl font-semibold text-white">
                                    How can we help?
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/50">
                                    Fields marked with * are required.
                                </p>
                            </div>

                            {/* NAME */}
                            <fieldset>
                                <legend className="mb-4 text-base font-semibold text-white">
                                    Name <span className="text-[#ff8b49]">*</span>
                                </legend>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="contact-first" className={labelClass}>
                                            First Name *
                                        </label>
                                        <input
                                            id="contact-first"
                                            type="text"
                                            required
                                            maxLength={100}
                                            autoComplete="given-name"
                                            value={form.firstName}
                                            onChange={(e) =>
                                                update("firstName", e.target.value)
                                            }
                                            placeholder="First name"
                                            className={fieldClass}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-last" className={labelClass}>
                                            Last Name *
                                        </label>
                                        <input
                                            id="contact-last"
                                            type="text"
                                            required
                                            maxLength={100}
                                            autoComplete="family-name"
                                            value={form.lastName}
                                            onChange={(e) =>
                                                update("lastName", e.target.value)
                                            }
                                            placeholder="Last name"
                                            className={fieldClass}
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            {/* PHONE + EMAIL */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-phone" className={labelClass}>
                                        Phone
                                    </label>
                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        autoComplete="tel"
                                        maxLength={30}
                                        value={form.phone}
                                        onChange={(e) =>
                                            update("phone", e.target.value)
                                        }
                                        placeholder="Phone number"
                                        className={fieldClass}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className={labelClass}>
                                        Email *
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        maxLength={254}
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={(e) =>
                                            update("email", e.target.value)
                                        }
                                        placeholder="Email address"
                                        className={fieldClass}
                                    />
                                </div>
                            </div>

                            {/* NEWSLETTER */}
                            <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-5">
                                <input
                                    type="checkbox"
                                    checked={form.newsletter}
                                    onChange={(e) =>
                                        update("newsletter", e.target.checked)
                                    }
                                    className="mt-1 h-5 w-5 accent-[#ff7426]"
                                />

                                <span className="text-sm leading-7 text-white/75">
                                    Sign up for news and updates
                                </span>
                            </label>

                            {/* SERVICES */}
                            <fieldset>
                                <legend className="mb-4 text-base font-semibold text-white">
                                    What services are you interested in learning more about?
                                </legend>

                                <div className="grid gap-3">
                                    {serviceOptions.map((service) => (
                                        <label
                                            key={service}
                                            className="flex cursor-pointer items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:border-[#ff7426]/50"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={form.services.includes(service)}
                                                onChange={() => toggleService(service)}
                                                className="h-5 w-5 accent-[#ff7426]"
                                            />

                                            <span className="text-sm text-white/80">
                                                {service}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            {/* REFERRAL SOURCE */}
                            <fieldset>
                                <legend className="mb-4 text-base font-semibold text-white">
                                    How did you hear about us?
                                </legend>

                                <div className="flex flex-wrap gap-3">
                                    {referralOptions.map((source) => (
                                        <label
                                            key={source}
                                            className={`flex cursor-pointer items-center gap-3 rounded-full border px-5 py-3 text-sm transition ${form.referral === source
                                                    ? "border-[#ff7426] bg-[#ff7426]/15 text-white"
                                                    : "border-white/15 text-white/65 hover:border-[#ff7426]/50"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="contact-referral"
                                                checked={form.referral === source}
                                                onChange={() => update("referral", source)}
                                                className="accent-[#ff7426]"
                                            />

                                            {source}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            {/* MESSAGE */}
                            <div>
                                <label htmlFor="contact-message" className={labelClass}>
                                    Leave a Message *
                                </label>

                                <textarea
                                    id="contact-message"
                                    required
                                    rows={6}
                                    maxLength={3000}
                                    value={form.message}
                                    onChange={(e) =>
                                        update("message", e.target.value)
                                    }
                                    placeholder="Please enter your general inquiry. Do not include sensitive medical information."
                                    className={`${fieldClass} resize-y`}
                                />
                            </div>

                            {status === "error" && (
                                <p role="alert" className="text-sm text-red-300">
                                    Your message could not be sent. Please try again
                                    or contact the practice by phone.
                                </p>
                            )}

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#ff7426] px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#e9651c] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {status === "sending" ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send
                                        <Send
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs leading-6 text-white/40">
                                For emergencies, call 911. Do not use this form
                                for urgent medical concerns.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
