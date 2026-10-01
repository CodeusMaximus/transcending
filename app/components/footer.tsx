"use client";

import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
    Printer,
} from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa6";

/*
 * Replace "#" with Joseph's real social media URLs
 * when you have them.
 */
const socials = [
    {
        name: "Facebook",
        href: "#",
        icon: FaFacebookF,
    },
    {
        name: "Instagram",
        href: "#",
        icon: FaInstagram,
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: FaLinkedinIn,
    },
    {
        name: "YouTube",
        href: "#",
        icon: FaYoutube,
    },
];

const navigation = [
    ["Home", "/"],
    ["About", "/#about"],
    ["Meet Joseph", "/Provider"],
    ["Services", "/#services"],
    ["Blog", "/blog"],
    ["Contact", "/#contact"],
];

const services = [
    [
        "Medication Management",
        " ",
    ],
    [
        "Psychiatric Evaluations",
        " ",
    ],
    ["New Jersey", "/new-jersey"],
    ["New York", "/new-york"],
];

/* =========================================================
   TRANSCENDING LOGO
========================================================= */

function TranscendingLogo() {
    return (
        <div className="flex items-center gap-3 sm:gap-4">
            {/* THREE RINGS */}
            <svg
                viewBox="0 0 112 82"
                className="
          h-[58px]
          w-[80px]
          shrink-0
          sm:h-[64px]
          sm:w-[88px]
        "
                aria-hidden="true"
            >
                <circle
                    cx="37"
                    cy="41"
                    r="31"
                    fill="none"
                    stroke="#FF5A1F"
                    strokeWidth="2.4"
                />

                <circle
                    cx="57"
                    cy="41"
                    r="31"
                    fill="none"
                    stroke="#FF7A2F"
                    strokeWidth="2.4"
                />

                <circle
                    cx="77"
                    cy="41"
                    r="31"
                    fill="none"
                    stroke="#FF9B58"
                    strokeWidth="2.4"
                />
            </svg>

            {/* LOGO TEXT */}
            <div className="leading-none">
                <div
                    className="
            text-[19px]
            font-light
            tracking-[0.15em]
            text-white
            sm:text-[23px]
          "
                >
                    TRANSCENDING
                </div>

                <div
                    className="
            mt-2
            text-[10px]
            font-bold
            tracking-[0.28em]
            text-[#ff7a2f]
            sm:text-[12px]
          "
                >
                    PSYCHIATRY LLC
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
    return (
        <footer
            className="
        relative
        overflow-hidden
        bg-[#252525]
        text-white
      "
        >
            {/* =====================================================
          BACKGROUND RINGS
      ====================================================== */}

            <div
                className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          opacity-30
        "
                aria-hidden="true"
            >
                <div className="relative h-[480px] w-[560px]">
                    <div
                        className="
              absolute
              left-0
              top-10
              h-[340px]
              w-[340px]
              rounded-full
              border
              border-[#ff5a1f]/30
            "
                    />

                    <div
                        className="
              absolute
              left-24
              top-10
              h-[340px]
              w-[340px]
              rounded-full
              border
              border-[#ff7a2f]/30
            "
                    />

                    <div
                        className="
              absolute
              left-48
              top-10
              h-[340px]
              w-[340px]
              rounded-full
              border
              border-[#ff9b58]/30
            "
                    />
                </div>
            </div>

            {/* ORANGE GLOW */}

            <div
                className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#ff7426]/10
          blur-[110px]
        "
            />

            <div
                className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-6
          pb-8
          pt-16
          sm:px-8
          sm:pt-20
          lg:px-12
          xl:px-16
        "
            >
                {/* =====================================================
            TOP CTA
        ====================================================== */}

                <div
                    className="
            mb-14
            flex
            flex-col
            gap-7
            border-b
            border-white/10
            pb-12
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
                >
                    <div>
                        <p
                            className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#ff9b58]
              "
                        >
                            Take The Next Step
                        </p>

                        <h2
                            className="
                mt-4
                max-w-[720px]
                text-[34px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                sm:text-[43px]
              "
                        >
                            Compassionate psychiatric care,{" "}
                            <span className="text-[#ff8b49]">
                                centered around you.
                            </span>
                        </h2>
                    </div>

                    <Link
                        href="/book"
                        className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#ff7426]
              px-7
              py-4
              text-[14px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#eb641b]
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
                </div>

                {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

                <div
                    className="
            grid
            gap-12
            border-b
            border-white/10
            pb-14
            md:grid-cols-2
            lg:grid-cols-[1.35fr_0.65fr_0.8fr_1.35fr]
            lg:gap-10
          "
                >
                    {/* =================================================
              BRAND
          ================================================= */}

                    <div>
                        <Link
                            href="/"
                            aria-label="Transcending Psychiatry home"
                            className="inline-flex"
                        >
                            <TranscendingLogo />
                        </Link>

                        <p
                            className="
                mt-6
                max-w-[390px]
                text-[14px]
                leading-7
                text-white/60
              "
                        >
                            Personalized psychiatric care combining
                            clinical expertise, compassion, and
                            collaboration to help adolescents and adults
                            move toward greater stability, resilience,
                            and well-being.
                        </p>

                        <p
                            className="
                mt-5
                text-[13px]
                font-semibold
                leading-6
                text-white/75
              "
                        >
                            In-person care in New Jersey
                            <br />
                            Telehealth in New York &amp; New Jersey
                        </p>

                        {/* SOCIAL MEDIA */}

                        <div className="mt-7">
                            <p
                                className="
                  mb-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#ff9b58]
                "
                            >
                                Connect With Us
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-white/[0.055]
                        text-white/70
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#ff7426]
                        hover:bg-[#ff7426]
                        hover:text-white
                      "
                                        >
                                            <Icon className="h-[17px] w-[17px]" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* =================================================
              EXPLORE
          ================================================= */}

                    <div>
                        <h3
                            className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#ff9b58]
              "
                        >
                            Explore
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">
                            {navigation.map(([label, href]) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-1.5
                    text-[14px]
                    text-white/60
                    transition
                    hover:text-white
                  "
                                >
                                    {label}

                                    <ArrowUpRight
                                        className="
                      h-3
                      w-3
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* =================================================
              SERVICES
          ================================================= */}

                    <div>
                        <h3
                            className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#ff9b58]
              "
                        >
                            Services
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">
                            {services.map(([label, href]) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="
                    text-[14px]
                    leading-6
                    text-white/60
                    transition
                    hover:text-white
                  "
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* =================================================
              LOCATION + CONTACT
          ================================================= */}

                    <div>
                        <h3
                            className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#ff9b58]
              "
                        >
                            Locations
                        </h3>

                        <div className="mt-6 space-y-5">
                            {/* NEW JERSEY */}

                            <div className="flex items-start gap-3">
                                <span
                                    className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#ff7426]/10
                    text-[#ff8b49]
                  "
                                >
                                    <MapPin className="h-4 w-4" />
                                </span>

                                <div>
                                    <p
                                        className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/40
                    "
                                    >
                                        New Jersey
                                    </p>

                                    <p
                                        className="
                      mt-1
                      text-[14px]
                      leading-6
                      text-white/70
                    "
                                    >
                                        3600 Route 66, Suite 150
                                        <br />
                                        Neptune, NJ 07753
                                    </p>
                                </div>
                            </div>

                            {/* NEW YORK */}

                            <div className="flex items-start gap-3">
                                <span
                                    className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#ff7426]/10
                    text-[#ff8b49]
                  "
                                >
                                    <MapPin className="h-4 w-4" />
                                </span>

                                <div>
                                    <p
                                        className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/40
                    "
                                    >
                                        New York
                                    </p>

                                    <p
                                        className="
                      mt-1
                      text-[14px]
                      leading-6
                      text-white/70
                    "
                                    >
                                        225 West 34th St, 9th Floor
                                        <br />
                                        New York, NY 10122
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT */}

                        <h3
                            className="
                mt-8
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#ff9b58]
              "
                        >
                            Contact
                        </h3>

                        <div className="mt-5 space-y-4">
                            {/* PHONE */}

                            <a
                                href="tel:+16465801030"
                                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-[14px]
                  text-white/65
                  transition
                  hover:text-white
                "
                            >
                                <span
                                    className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/[0.055]
                    text-[#ff8b49]
                    transition
                    group-hover:bg-[#ff7426]/15
                  "
                                >
                                    <Phone className="h-4 w-4" />
                                </span>

                                (646) 580-1030
                            </a>

                            {/* FAX */}

                            <div
                                className="
                  flex
                  items-center
                  gap-3
                  text-[14px]
                  text-white/65
                "
                            >
                                <span
                                    className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/[0.055]
                    text-[#ff8b49]
                  "
                                >
                                    <Printer className="h-4 w-4" />
                                </span>

                                Fax: (732) 605-5890
                            </div>

                            {/* EMAIL */}

                            <a
                                href="mailto:info@transcendingpsychiatry.sprucecare.com"
                                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-[14px]
                  text-white/65
                  transition
                  hover:text-white
                "
                            >
                                <span
                                    className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/[0.055]
                    text-[#ff8b49]
                    transition
                    group-hover:bg-[#ff7426]/15
                  "
                                >
                                    <Mail className="h-4 w-4" />
                                </span>

                                <span className="break-all pt-1">
                                    info@transcendingpsychiatry.sprucecare.com
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* =====================================================
            LOWER FOOTER
        ====================================================== */}

                <div
                    className="
            flex
            flex-col
            gap-5
            pt-8
            text-[12px]
            text-white/40
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
                >
                    <p>
                        © {new Date().getFullYear()} Transcending
                        Psychiatry LLC. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link
                            href="/privacy"
                            className="transition hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition hover:text-white"
                        >
                            Terms
                        </Link>

                        <Link
                            href="/notice-of-privacy-practices"
                            className="transition hover:text-white"
                        >
                            Notice of Privacy Practices
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}