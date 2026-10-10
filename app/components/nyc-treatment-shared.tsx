
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

import { useBooking } from "./BookingProvider";

export type Section = {
  heading: string;
  body?: string;
  points?: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type PageContent = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: Section[];
  faqs: FAQ[];
  slug: string;
};

const otherPages = [
  {
    title: "Child & Adolescent Therapy",
    href: "/child-adolescent-therapy-nyc",
  },
  {
    title: "Individual Therapy",
    href: "/individual-therapy-nyc",
  },
  {
    title: "Depression Treatment",
    href: "/depression-treatment-nyc",
  },
  {
    title: "CBT Therapy",
    href: "/cbt-therapy-nyc-best-therapists-new-york",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;
const PHONE = "+16465801030";

function GetInTouchButton({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <a
      href={`tel:${PHONE}`}
      className={`
        group inline-flex min-h-12 items-center justify-center
        gap-3 rounded-full bg-[#ff7426] px-7 py-4
        font-semibold text-white
        transition-all duration-300
        hover:-translate-y-1 hover:bg-[#e9651c]
        ${dark
          ? ""
          : "shadow-[0_12px_30px_rgba(255,116,38,.26)]"
        }
      `}
    >
      Get In Touch
      <ArrowUpRight
        className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  );
}

function BookNowButton({
  dark = false,
}: {
  dark?: boolean;
}) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={openBooking}
      className={`
        group inline-flex min-h-12 items-center justify-center
        gap-3 rounded-full border-2
        bg-transparent px-8 py-4
        font-bold transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        ${dark
          ? "border-[#c89b78] text-white hover:bg-[#8B6248]"
          : "border-[#8B6248] text-[#171717] hover:bg-[#8B6248] hover:text-white"
        }
      `}
    >
      Book Now
      <ArrowUpRight
        className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </button>
  );
}

export default function NYCTreatmentPage({
  content,
}: {
  content: PageContent;
}) {
  const reduced = useReducedMotion();

  const reveal = {
    initial: reduced
      ? false
      : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: {
      once: true,
      amount: 0.12,
    },
    transition: {
      duration: 0.65,
      ease,
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf6] text-[#292725]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff7f0] via-white to-[#fff0e4] px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:pb-28">

        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 top-4 h-[540px] w-[540px] rounded-full border border-[#ff7426]/20"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-4 h-[540px] w-[540px] rounded-full border border-[#ff7426]/15"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-4 h-[540px] w-[540px] rounded-full border border-[#ff7426]/10"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-[#ff7426]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={
              reduced
                ? false
                : { opacity: 0, y: 24 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >

            <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#df611f]">
              <span className="h-px w-9 bg-[#ff7426]" />
              Transcending Psychiatry
              <span className="text-[#a18b7e]">
                / New York
              </span>
            </div>

            <h1 className="max-w-5xl text-[clamp(2.7rem,6vw,5.8rem)] font-semibold leading-[1.05] tracking-[-0.055em]">
              {content.title}
            </h1>

            <p className="mt-7 max-w-3xl text-xl font-medium leading-relaxed text-[#e66b27] sm:text-2xl">
              {content.eyebrow}
            </p>

            <p className="mt-5 max-w-3xl text-base leading-[1.9] text-[#675e58] sm:text-lg">
              {content.intro}
            </p>

            {/* HERO BUTTONS — NO EXPLORE BUTTON */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <GetInTouchButton />
              <BookNowButton />
            </div>

            <p className="mt-4 text-xs text-[#8a7d75]">
              Contact our practice to inquire about appointments
              and current availability.
            </p>

          </motion.div>
        </div>
      </section>

      {/* TREATMENT INFORMATION */}
      <section
        id="what-to-expect"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
      >

        <motion.div {...reveal} className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e6601c]">
            <Sparkles className="h-4 w-4" />
            Care that starts with understanding
          </div>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Support for the way you actually live.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {content.sections.map((section, i) => (
            <motion.article
              key={`${i}-${section.heading}`}
              {...reveal}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.08,
                ease,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-[#eaded5] bg-white p-7 shadow-[0_16px_48px_rgba(74,47,29,.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7426]/40 hover:shadow-[0_22px_60px_rgba(74,47,29,.11)] sm:p-9"
            >

              <div className="mb-7 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e5] font-semibold text-[#ee712e]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="h-10 w-10 rounded-full border border-[#ff7426]/10 bg-[#fff7f1] transition group-hover:scale-110" />
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-[28px]">
                {section.heading}
              </h3>

              {section.body && (
                <p className="mt-4 text-[15px] leading-[1.85] text-[#6e6762]">
                  {section.body}
                </p>
              )}

              {section.points && (
                <ul className="mt-5 space-y-3">
                  {section.points.map((point, index) => (
                    <li
                      key={`${index}-${point}`}
                      className="flex items-start gap-3 text-[15px] leading-7 text-[#635c57]"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ff7426]" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

            </motion.article>
          ))}
        </div>
      </section>

      {/* MIDDLE CALL TO ACTION */}
      <section className="relative overflow-hidden bg-[#2c2927] px-5 py-20 text-white sm:px-8 lg:py-24">

        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-[#ff7426]/30"
        />

        <motion.div
          {...reveal}
          className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
        >

          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[#ff9a60]">
              <HeartHandshake className="h-4 w-4" />
              Take the next step
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Care should feel personal, never rushed.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/65">
              Connect with Transcending Psychiatry to discuss
              available New York appointments and find out
              what kind of support may fit your needs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="group inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full bg-[#ff7426] px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#e9651c]"
            >
              <Phone className="h-4 w-4" />
              (646) 580-1030
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <BookNowButton dark />
          </div>

        </motion.div>
      </section>

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">

          <motion.div {...reveal}>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e6601c]">
              Common questions
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="mt-10 space-y-3">
            {content.faqs.map((faq, i) => (
              <motion.details
                {...reveal}
                key={`${i}-${faq.question}`}
                className="group rounded-2xl border border-[#eddfd3] bg-white px-6 py-5 open:border-[#ff7426]/40"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:hidden">
                  {faq.question}
                  <span className="float-right text-[#ff7426] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-8 text-[#6b625c]">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>

        </section>
      )}

      {/* FINAL CALL TO ACTION */}
      <section className="bg-[#fff0e5] px-5 py-20 text-center sm:px-8">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to take the next step?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#70645d]">
            Contact Transcending Psychiatry to discuss
            appointments, eligibility, and available
            treatment options.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <GetInTouchButton />
            <BookNowButton />
          </div>

          <p className="mt-6 text-xs text-[#8a7a70]">
            If you are experiencing an immediate mental health
            emergency, call 911 or go to the nearest
            emergency department.
          </p>

        </div>
      </section>

      {/* OTHER NEW YORK SERVICES */}
      <section className="border-t border-[#f0e1d6] bg-white px-5 py-16 sm:px-8">

        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e6601c]">
            More New York services
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherPages
              .filter(
                (p) => p.href !== `/${content.slug}`
              )
              .map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#eddfd3] p-5 font-semibold transition-all hover:-translate-y-1 hover:border-[#ff7426]/50 hover:bg-[#fff7f0]"
                >
                  {p.title}

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#ff7426] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-[#81746c]">
            <MapPin className="h-4 w-4 text-[#ff7426]" />
            New York City • In-person and telehealth
            options subject to availability
          </p>
        </div>

      </section>
    </main>
  );
}
