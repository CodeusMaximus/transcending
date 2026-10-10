
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  MapPin,
} from "lucide-react";

import { useBooking } from "./BookingProvider";

export type Section = {
  title: string;
  text: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type PageData = {
  title: string;
  subtitle: string;
  eyebrow: string;
  sections: Section[];
  highlights: string[];
  faqs: FAQ[];
  note?: string;
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const links = [
  { title: "ADHD Treatment", href: "/adhd-treatment-new-jersey" },
  { title: "Child & Teen Therapy", href: "/child-adolescent-therapy-new-jersey" },
  { title: "Cognitive Behavioral Therapy", href: "/cognitive-behavioral-therapy-nj" },
  { title: "Depression Treatment", href: "/depression-treatment-new-jersey" },
  { title: "Individual Therapy", href: "/individual-therapy-in-new-jersey" },
  { title: "Anxiety Treatment", href: "/anxiety-treatment-in-new-jersey" },
];

const PHONE = "7328083932";

function CTA({
  label = "Get In Touch",
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      href="#contact"
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 py-3 text-sm font-semibold shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.02] ${light
        ? "bg-white text-[#b65d26] hover:bg-[#fff4e9]"
        : "bg-[#ff7426] text-white hover:bg-[#e9631d]"
        }`}
    >
      {label}
      <ArrowUpRight
        size={17}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  );
}

// Uses the existing IntakeQ booking modal.
function BookNowButton({
  light = false,
}: {
  light?: boolean;
}) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={openBooking}
      className={`
        group inline-flex min-h-12 items-center justify-center
        gap-3 rounded-full border-2
        px-8 py-3 text-sm font-bold
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${light
          ? "border-[#c89b78] bg-transparent text-white hover:bg-[#8B6248] hover:text-white"
          : "border-[#8B6248] bg-transparent text-[#171717] hover:bg-[#8B6248] hover:text-white"
        }
      `}
    >
      Book Now
      <ArrowUpRight
        size={17}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </button>
  );
}

export default function NewJerseyTreatmentPage({
  data,
}: {
  data: PageData;
}) {
  return (
    <main className="overflow-hidden bg-white text-[#302d2b]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#fff8f2] px-6 pb-24 pt-32 md:px-12 lg:pb-32 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-4 h-[560px] w-[560px] rounded-full border-[2px] border-[#ff7426]/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 top-4 h-[560px] w-[560px] rounded-full border-[2px] border-[#ff7426]/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-16 top-4 h-[560px] w-[560px] rounded-full border-[2px] border-[#ff7426]/10"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.14 }}
            className="max-w-4xl"
          >
            <motion.p
              variants={rise}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#efcdb8] bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#cf692b]"
            >
              <MapPin size={14} />
              New Jersey • Transcending Psychiatry
            </motion.p>

            <motion.h1
              variants={rise}
              transition={{ duration: 0.7 }}
              className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
            >
              {data.title}
            </motion.h1>

            <motion.p
              variants={rise}
              transition={{ duration: 0.7 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-[#6e6762]"
            >
              {data.subtitle}
            </motion.p>

            {/* HERO BUTTONS */}
            <motion.div
              variants={rise}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <CTA label="Get In Touch" />

              <BookNowButton />


            </motion.div>

            <motion.p
              variants={rise}
              className="mt-7 text-sm text-[#82766f]"
            >
              In-person care in New Jersey • Telehealth for eligible
              patients in NJ and NY • Ages 12+
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TREATMENT INFORMATION */}
      <section
        id="learn-more"
        className="px-6 py-20 md:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rise}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d06b2c]">
              {data.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Care that starts with{" "}
              <span className="text-[#f4772e]">
                understanding.
              </span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {data.sections.map((s, i) => (
              <motion.article
                key={`${i}-${s.title}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (i % 2) * 0.09,
                }}
                className="group rounded-[28px] border border-[#eee1d7] bg-[#fffcfa] p-7 shadow-[0_12px_35px_rgba(75,42,18,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#efb58c] hover:shadow-lg sm:p-10"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-[#e38a53]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
                  {s.title}
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-[#6f6762]">
                  {s.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZED SUPPORT */}
      <section className="bg-[#2c2927] px-6 py-20 text-white md:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rise}
          >
            <HeartHandshake
              size={36}
              className="text-[#ff8a42]"
            />

            <h2 className="mt-7 text-3xl font-semibold sm:text-5xl">
              Personalized support.
              <br />
              <span className="text-[#ff9b58]">
                Practical next steps.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-white/65">
              Your treatment plan is guided by your needs,
              preferences, and clinical assessment.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTA
                label="Speak With Our Practice"
                light
              />

              <BookNowButton light />
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {data.highlights.map((h, i) => (
              <motion.div
                key={`${i}-${h}`}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.07,
                }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-5"
              >
                <CheckCircle2
                  className="mt-1 shrink-0 text-[#ff9b58]"
                  size={20}
                />

                <span className="text-sm leading-6 text-white/85">
                  {h}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="px-6 py-20 md:px-12 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d06b2c]">
              Helpful Answers
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              Frequently asked questions
            </h2>

            <div className="mt-10 space-y-3">
              {data.faqs.map((f, i) => (
                <motion.details
                  key={`faq-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                  }}
                  className="group rounded-2xl border border-[#eee1d7] bg-[#fffcfa] p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {f.question}

                    <ChevronDown
                      className="shrink-0 text-[#e66b24] transition-transform group-open:rotate-180"
                      size={19}
                    />
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-[#716964]">
                    {f.answer}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CALL TO ACTION */}
      <section className="bg-[#fff0e5] px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to take the next step?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#70645d]">
            Contact Transcending Psychiatry to discuss
            appointments, eligibility, and available
            treatment options.
          </p>

          {/* GET IN TOUCH + BOOK NOW */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CTA label="Get In Touch" />

            <BookNowButton />
          </div>

          <p className="mt-6 text-xs text-[#8a7a70]">
            If you are experiencing an immediate mental
            health emergency, call 911 or go to the
            nearest emergency department.
          </p>
        </div>
      </section>

      {/* OTHER NJ SERVICES */}
      <section className="px-6 py-14 md:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-xl font-semibold">
            Explore other New Jersey services
          </h2>

          <div className="flex flex-wrap gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#edd9ca] px-4 py-2 text-sm transition hover:border-[#ff7426] hover:bg-[#fff3eb]"
              >
                {l.title}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
