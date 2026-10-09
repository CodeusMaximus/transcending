"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export const PHONE = "7328083932";
export const services = [
  { title: "Medication Management", href: "/medication-management" },
  { title: "Psychiatric Evaluations", href: "/psychiatric-evaluation" },
  { title: "Conditions Treated", href: "/conditions-treated" },
];

export const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>{children}</motion.div>;
}

export function PageHero({ eyebrow, title, highlight, description }: { eyebrow: string; title: string; highlight: string; description: string }) {
  return <section className="relative overflow-hidden bg-[#fff8f2] px-6 pb-20 pt-32 sm:pt-40 lg:pb-28">
    <div aria-hidden="true" className="pointer-events-none absolute -right-44 -top-32 h-[600px] w-[600px] rounded-full border border-[#ff7426]/15" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-[600px] w-[600px] rounded-full border border-[#ff7426]/10" />
    <div className="relative mx-auto max-w-7xl">
      <Reveal><Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#c45c22] hover:underline">← Back to Services</Link></Reveal>
      <Reveal className="mt-10"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d9692c]">{eyebrow}</p><h1 className="mt-5 max-w-5xl text-[42px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#282624] sm:text-[62px] lg:text-[76px]">{title} <span className="text-[#ff7426]">{highlight}</span></h1></Reveal>
      <Reveal className="mt-7"><p className="max-w-3xl text-lg leading-9 text-[#69615b]">{description}</p></Reveal>
      <Reveal className="mt-9"><ContactButton /></Reveal>
    </div>
  </section>;
}

export function ContactButton({ label = "Get in Touch" }: { label?: string }) {
  return <a href={`tel:${PHONE}`} className="group inline-flex min-h-14 items-center gap-3 overflow-hidden rounded-full bg-[#ff7426] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_32px_rgba(255,116,38,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e45f18] hover:shadow-[0_18px_40px_rgba(255,116,38,0.35)]"><Phone size={17}/>{label}<ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a>;
}

export function Section({ eyebrow, title, children, tinted = false }: { eyebrow?: string; title: string; children: ReactNode; tinted?: boolean }) {
  return <section className={`${tinted ? "bg-[#fff8f2]" : "bg-white"} px-6 py-20 sm:py-24`}><div className="mx-auto max-w-7xl"><Reveal>{eyebrow && <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#db6b2d]">{eyebrow}</p>}<h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-[#292624] sm:text-5xl">{title}</h2></Reveal><div className="mt-10">{children}</div></div></section>;
}

export function CardGrid({ items, columns = 3 }: { items: { title: string; text: string }[]; columns?: 2 | 3 }) {
  return <div className={`grid gap-5 md:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>{items.map((item, i) => <Reveal key={item.title}><div className="group h-full rounded-[26px] border border-[#f0e4db] bg-white p-7 shadow-[0_12px_35px_rgba(87,56,34,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7426]/30 hover:shadow-xl"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff0e5] text-[#f16e2b]"><Sparkles size={20}/></span><h3 className="mt-6 text-xl font-semibold text-[#302b28]">{item.title}</h3><p className="mt-3 text-[15px] leading-8 text-[#6d6661]">{item.text}</p></div></Reveal>)}</div>;
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((item, i) => <Reveal key={item.title}><div className="h-full rounded-3xl border border-[#eeded1] bg-white p-7"><span className="text-4xl font-semibold text-[#f3c6a5]">{String(i+1).padStart(2,"0")}</span><h3 className="mt-4 text-xl font-semibold text-[#292624]">{item.title}</h3><p className="mt-3 leading-8 text-[#6d6661]">{item.text}</p></div></Reveal>)}</div>;
}

export function BulletCard({ title, bullets, intro }: { title: string; bullets: string[]; intro?: string }) {
  return <Reveal><div className="h-full rounded-3xl border border-[#eee3db] bg-white p-7 sm:p-9"><h3 className="text-2xl font-semibold text-[#2b2826]">{title}</h3>{intro && <p className="mt-4 leading-8 text-[#706963]">{intro}</p>}<ul className="mt-6 space-y-4">{bullets.map((b) => <li key={b} className="flex items-start gap-3 text-[15px] leading-7 text-[#6d6661]"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f47731]"/><span>{b}</span></li>)}</ul></div></Reveal>;
}

export function PageFooter({ current }: { current: string }) {
  return <><section className="bg-[#302b28] px-6 py-20 text-white"><Reveal className="mx-auto max-w-5xl text-center"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffa46b]">Your next step</p><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Care begins with a conversation.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">Connect with Transcending Psychiatry to discuss your needs, appointment options, and an individualized approach to care.</p><div className="mt-8"><ContactButton label="Call (732) 808-3932" /></div></Reveal></section><section className="bg-[#fff8f2] px-6 py-14"><div className="mx-auto max-w-7xl"><h2 className="text-2xl font-semibold text-[#302b28]">Explore our other services</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{services.filter(s => s.href !== current).map(s => <Link key={s.href} href={s.href} className="group flex items-center justify-between rounded-2xl border border-[#f0e0d5] bg-white p-6 font-semibold text-[#302b28] transition-all hover:-translate-y-1 hover:border-[#ff7426]/40 hover:shadow-lg">{s.title}<ArrowRight className="text-[#ff7426] transition-transform group-hover:translate-x-1"/></Link>)}</div></div></section></>;
}
