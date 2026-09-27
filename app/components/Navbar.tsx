"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import {
    Show,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import {
    ArrowRight,
    ChevronDown,
    ChevronRight,
    LayoutDashboard,
    LogIn,
    Mail,
    Menu,
    Phone,
    X,
    Globe2,
} from "lucide-react";

import ServicesDropdown from "./ServicesDropdown";
import FreeConsultationModal from "./FreeConsultationModal";


import { getTranslations } from "../components/translations";



export default function Navbar() {
    const { language, setLanguage } = useLanguage();
    const t = getTranslations(language);
    const mobileServices = [
        {
            name: t.services.psychiatricEvaluation,
            href: "/services/psychiatric-evaluation",
        },
        {
            name: t.services.medicationManagement,
            href: "/services/medication-management",
        },
        {
            name: t.services.psychopharmacology,
            href: "/services/psychopharmacology",
        },
        {
            name: t.services.telehealth,
            href: "/services/telehealth",
        },
    ];
    const [languageOpen, setLanguageOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [consultationOpen, setConsultationOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] =
        useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show navbar near top of page
            if (currentScrollY < 80) {
                setNavVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            // Don't hide navbar while mobile menu or modal is open
            if (mobileOpen || consultationOpen) {
                setNavVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            // Ignore tiny movements
            const difference =
                currentScrollY - lastScrollY.current;

            if (Math.abs(difference) < 8) {
                return;
            }

            // Scrolling down = hide
            if (difference > 0) {
                setNavVisible(false);
                setServicesOpen(false);
            }

            // Scrolling up = show
            if (difference < 0) {
                setNavVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [mobileOpen, consultationOpen]);


    return (
        <>
            <motion.header
                initial={false}
                animate={{
                    y: navVisible ? 0 : -150,
                    opacity: navVisible ? 1 : 0,
                }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
        fixed
        left-0
        top-0
        z-50
        w-full
        px-4
        pt-7
        sm:px-6
        lg:px-8
        lg:pt-7
    "
            >
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="
    mx-auto
    flex
    h-[104px]
    max-w-[1500px]
    items-center
    justify-between
    gap-4
    rounded-[24px]
    border
    border-white/40
    bg-white/80
    px-6
    shadow-[0_15px_50px_rgba(8,41,87,0.10)]
    backdrop-blur-xl
    lg:px-8
    xl:px-10
"
                >
                    {/* LOGO */}
                    <Link
                        href="/"
                        className="relative z-10 flex shrink-0 items-center"
                    >
                        <Image
                            src="/images/solid-rock-logo.png"
                            alt="Solid Rock Behavioral Health"
                            width={265}
                            height={105}
                            priority
                            className="
        h-auto
        w-[185px]
        object-contain
        lg:w-[205px]
        xl:w-[220px]
    "
                        />

                    </Link>

                    {/* DESKTOP NAV */}
                    <div
                        className="
                            hidden
                            items-center
                            gap-9
                            xl:flex
                        "
                    ><NavLink href="/">
                            {t.navigation.home}
                        </NavLink>

                        <NavLink href="/Provider">
                            {t.navigation.about}
                        </NavLink>

                        <div
                            className="relative"
                            onMouseEnter={() =>
                                setServicesOpen(true)
                            }
                            onMouseLeave={() =>
                                setServicesOpen(false)
                            }
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setServicesOpen(
                                        (previous) => !previous
                                    )
                                }
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-2
                                    py-9
                                    text-[16px]
                                    font-medium
                                    text-[#082957]
                                "
                            >
                                <span className="relative">
                                    {t.navigation.services}

                                    <span
                                        className={`
                                            absolute
                                            -bottom-3
                                            left-0
                                            h-[2px]
                                            bg-[#d79a27]
                                            transition-all
                                            duration-300
                                            ${servicesOpen
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                            }
                                        `}
                                    />
                                </span>

                                <ChevronDown
                                    className={`
                                        h-4
                                        w-4
                                        transition-transform
                                        duration-200
                                        ${servicesOpen
                                            ? "rotate-180"
                                            : ""
                                        }
                                    `}
                                />
                            </button>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <ServicesDropdown />
                                )}
                            </AnimatePresence>
                        </div>

                        <NavLink href="/blog">
                            {t.navigation.blog}
                        </NavLink>

                        <NavLink href="/#faq">
                            {t.navigation.faq}
                        </NavLink>
                    </div>
                    {/* CONTACT ICONS */}
                    <div
                        className="
        hidden
        items-center
        gap-2
        xl:flex
    "
                    >
                        <a
                            href="tel:+19294472430"
                            aria-label="Call Solid Rock Behavioral Health at (929) 447-2430"
                            title="Call (929) 447-2430"
                            className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#082957]/10
            bg-[#eef4f7]/90
            text-[#075187]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#075187]
            hover:bg-[#075187]
            hover:text-white
        "
                        >
                            <Phone className="h-[18px] w-[18px]" />
                        </a>

                        <a
                            href="mailto:healthcontact@srnpp.com"
                            aria-label="Email Solid Rock Behavioral Health"
                            title="Email us"
                            className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#082957]/10
            bg-[#eef4f7]/90
            text-[#075187]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#075187]
            hover:bg-[#075187]
            hover:text-white
        "
                        >
                            <Mail className="h-[18px] w-[18px]" />
                        </a>
                    </div>

                    {/* APPOINTMENT */}



                    {/* ADMIN LOGIN */}

                    {/* ADMIN LOGIN */}

                    <Show when="signed-out">
                        <SignInButton
                            mode="modal"
                            fallbackRedirectUrl="/Dashboard"
                        >
                            <button
                                type="button"
                                className="
                group
                hidden
                h-11
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#082957]/10
                bg-[#eef4f7]/90
                px-4
                text-[14px]
                font-semibold
                text-[#082957]
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-[#075187]
                hover:bg-[#075187]
                hover:text-white

                xl:flex
            "
                            >
                                <LogIn className="h-[17px] w-[17px]" />

                                <span>{t.navigation.login}</span>
                            </button>
                        </SignInButton>
                    </Show>

                    <Show when="signed-in">
                        <div className="hidden items-center gap-3 xl:flex">

                            <Link
                                href="/Dashboard"
                                className="
                flex
                h-11
                items-center
                gap-2
                rounded-full
                border
                border-[#d79a27]/30
                bg-[#fff8e9]
                px-4
                text-[14px]
                font-semibold
                text-[#082957]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#d79a27]
                hover:bg-[#e2b45d]
            "
                            >
                                <LayoutDashboard className="h-[17px] w-[17px]" />

                                {t.navigation.dashboard}
                            </Link>

                            <UserButton />
                        </div>
                    </Show>
                    {/* LANGUAGE SELECTOR */}
                    <div className="relative hidden xl:block">
                        <button
                            type="button"
                            onClick={() =>
                                setLanguageOpen((previous) => !previous)
                            }
                            aria-label="Choose language"
                            className="
            flex
            h-11
            items-center
            gap-2
            rounded-full
            border
            border-[#082957]/10
            bg-[#eef4f7]/90
            px-3
            text-[13px]
            font-bold
            text-[#082957]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#075187]
            hover:bg-[#075187]
            hover:text-white
        "
                        >
                            <Globe2 className="h-[17px] w-[17px]" />

                            <span>
                                {language === "en"
                                    ? "EN"
                                    : language === "es"
                                        ? "ES"
                                        : "KRE"}
                            </span>

                            <ChevronDown
                                className={`
                h-4
                w-4
                transition-transform
                duration-200
                ${languageOpen ? "rotate-180" : ""}
            `}
                            />
                        </button>

                        <AnimatePresence>
                            {languageOpen && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 8,
                                        scale: 0.98,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 8,
                                        scale: 0.98,
                                    }}
                                    transition={{
                                        duration: 0.18,
                                    }}
                                    className="
                    absolute
                    right-0
                    top-[54px]
                    z-[100]
                    w-[190px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-xl
                "
                                >
                                    <LanguageOption
                                        label="English"
                                        shortLabel="EN"
                                        selected={language === "en"}
                                        onClick={() => {
                                            setLanguage("en");
                                            setLanguageOpen(false);
                                        }}
                                    />

                                    {/* TEMPORARILY DISABLED - SPANISH
<LanguageOption
    label="Español"
    shortLabel="ES"
    selected={language === "es"}
    onClick={() => {
        setLanguage("es");
        setLanguageOpen(false);
    }}
/>
*/}

                                    <LanguageOption
                                        label="Kreyòl"
                                        shortLabel="KRE"
                                        selected={language === "ht"}
                                        onClick={() => {
                                            setLanguage("ht");
                                            setLanguageOpen(false);
                                        }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    {/* INSTANT QUOTE */}
                    <Link
                        href="/#cost-estimator"
                        className="
        group
        hidden
        items-center
        gap-2
        rounded-full
        border
        border-[#d79a27]/35
        bg-[#fffaf0]
        px-5
        py-4
        text-[14px]
        font-semibold
        text-[#082957]
        shadow-[0_8px_24px_rgba(8,41,87,0.06)]
        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-[#d79a27]
        hover:bg-[#e2b45d]
        hover:text-[#061f43]
        hover:shadow-[0_12px_28px_rgba(215,164,71,0.20)]

        xl:flex
    "
                    >
                        <span>{t.navigation.instantQuote}</span>

                        <ArrowRight
                            className="
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
        "
                        />
                    </Link>
                    {/* FREE CONSULTATION */}
                    <button
                        type="button"
                        onClick={() => setConsultationOpen(true)}
                        className="
        group
        hidden
        items-center
        gap-3
        rounded-full
        bg-[#075187]
        px-6
        py-4
        text-[15px]
        font-semibold
        text-white
        shadow-[0_12px_30px_rgba(7,81,135,0.28)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[#063f6b]
        xl:flex
    "
                    >
                        <Phone className="h-[18px] w-[18px]" />

                        <span>{t.navigation.freeConsultation}</span>
                        <ChevronRight
                            className="
            h-4
            w-4
            transition-transform
            group-hover:translate-x-1
        "
                        />
                    </button>

                    {/* MOBILE BUTTON */}
                    <button
                        type="button"
                        aria-label="Open navigation menu"
                        onClick={() =>
                            setMobileOpen(true)
                        }
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            bg-[#082957]
                            text-white
                            xl:hidden
                        "
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </motion.nav>
            </motion.header>

            {/* MOBILE NAVIGATION */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() =>
                                setMobileOpen(false)
                            }
                            className="
                                fixed
                                inset-0
                                z-[80]
                                bg-[#041a38]/55
                                backdrop-blur-sm
                            "
                        />

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 28,
                                stiffness: 260,
                            }}
                            className="
                                fixed
                                right-0
                                top-0
                                z-[90]
                                h-full
                                w-[90%]
                                max-w-[420px]
                                overflow-y-auto
                                bg-white
                                p-7
                                shadow-2xl
                            "
                        >
                            <div
                                className="
                                    mb-10
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                <Image
                                    src="/images/solid-rock-logo.png"
                                    alt="Solid Rock Behavioral Health"
                                    width={210}
                                    height={90}
                                    className="h-auto w-[190px]"
                                />

                                <button
                                    type="button"
                                    aria-label="Close navigation menu"
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#eef3f7]
                                        text-[#082957]
                                    "
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="space-y-1">
                                <MobileLink
                                    href="/"
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                >
                                    {t.navigation.home}
                                </MobileLink>

                                <MobileLink
                                    href="/Provider"
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                >
                                    {t.navigation.about}
                                </MobileLink>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setMobileServicesOpen(
                                            (previous) => !previous
                                        )
                                    }
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-between
                                        border-b
                                        border-slate-100
                                        py-4
                                        text-left
                                        text-[17px]
                                        font-semibold
                                        text-[#082957]
                                    "
                                >
                                    {t.navigation.services}

                                    <ChevronDown
                                        className={`
                                            h-5
                                            w-5
                                            transition-transform
                                            ${mobileServicesOpen
                                                ? "rotate-180"
                                                : ""
                                            }
                                        `}
                                    />
                                </button>

                                <AnimatePresence>
                                    {mobileServicesOpen && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                height: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto",
                                            }}
                                            exit={{
                                                opacity: 0,
                                                height: 0,
                                            }}
                                            className="
                                                overflow-hidden
                                                rounded-xl
                                                bg-[#f5f8fb]
                                            "
                                        >
                                            {mobileServices.map(
                                                (service) => (
                                                    <Link
                                                        key={
                                                            service.name
                                                        }
                                                        href={
                                                            service.href
                                                        }
                                                        onClick={() =>
                                                            setMobileOpen(
                                                                false
                                                            )
                                                        }
                                                        className="
                                                            flex
                                                            items-center
                                                            justify-between
                                                            px-4
                                                            py-3
                                                            text-sm
                                                            font-medium
                                                            text-[#082957]
                                                        "
                                                    >
                                                        {service.name}

                                                        <ChevronRight className="h-4 w-4" />
                                                    </Link>
                                                )
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <MobileLink
                                    href="/blog"
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                >
                                    {t.navigation.blog}                                </MobileLink>

                                <MobileLink
                                    href="/#faq"
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                >
                                    {t.navigation.faq}
                                </MobileLink>
                            </div>
                            {/* MOBILE LANGUAGE SELECTOR */}
                            <div className="mb-6">
                                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#082957]">
                                    <Globe2 className="h-5 w-5 text-[#075187]" />

                                    <span>
                                        {language === "en"
                                            ? "Language"
                                            : language === "es"
                                                ? "Idioma"
                                                : "Lang"}
                                    </span>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setLanguage("en")}
                                        className={`
                rounded-xl
                border
                px-3
                py-3
                text-sm
                font-bold
                transition-all
                ${language === "en"
                                                ? "border-[#075187] bg-[#075187] text-white"
                                                : "border-slate-200 bg-[#f5f8fb] text-[#082957]"
                                            }
            `}
                                    >
                                        EN
                                    </button>



                                    <button
                                        type="button"
                                        onClick={() => setLanguage("ht")}
                                        className={`
                rounded-xl
                border
                px-3
                py-3
                text-sm
                font-bold
                transition-all
                ${language === "ht"
                                                ? "border-[#075187] bg-[#075187] text-white"
                                                : "border-slate-200 bg-[#f5f8fb] text-[#082957]"
                                            }
            `}
                                    >
                                        KRE
                                    </button>
                                </div>
                            </div>
                            <Link
                                href="/#cost-estimator"
                                onClick={() => setMobileOpen(false)}
                                className="
        group
        mt-6
        flex
        min-h-[54px]
        w-full
        items-center
        justify-center
        gap-2
        rounded-full
        border
        border-[#d79a27]/35
        bg-[#fff8e9]
        px-6
        py-4
        text-[15px]
        font-bold
        text-[#082957]
        transition-all
        duration-300

        hover:bg-[#e2b45d]
    "
                            >
                                {t.navigation.instantQuote}

                                <ArrowRight
                                    className="
            h-4
            w-4
            transition-transform
            group-hover:translate-x-1
        "
                                />
                            </Link>

                            {/* MOBILE FREE CONSULTATION */}
                            <button
                                type="button"
                                onClick={() => {
                                    setMobileOpen(false);

                                    // Allow drawer to begin closing before modal appears
                                    setTimeout(() => {
                                        setConsultationOpen(true);
                                    }, 200);
                                }}
                                className="
        group
        mt-3
        flex
        min-h-[54px]
        w-full
        items-center
        justify-center
        gap-3
        rounded-full
        bg-[#075187]
        px-6
        py-4
        text-[15px]
        font-semibold
        text-white
        shadow-[0_12px_30px_rgba(7,81,135,0.28)]
        transition-all
        duration-300
        active:scale-[0.98]
        hover:bg-[#063f6b]
        xl:hidden
    "
                            >
                                <Phone className="h-[18px] w-[18px]" />

                                <span>{t.navigation.freeConsultation}</span>

                                <ChevronRight
                                    className="
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
        "
                                />
                            </button>
                            <Show when="signed-out">
                                <SignInButton
                                    mode="modal"
                                    fallbackRedirectUrl="/admin"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setMobileOpen(false)}
                                        className="
                flex
                w-full
                items-center
                justify-between
                border-b
                border-slate-100
                py-4
                text-[17px]
                font-semibold
                text-[#082957]
            "
                                    >


                                        <span className="flex items-center gap-3">
                                            <LogIn className="h-5 w-5 text-[#075187]" />
                                            {t.navigation.adminLogin}
                                        </span>

                                        <ChevronRight className="h-4 w-4" />
                                    </button>
                                </SignInButton>
                            </Show>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
            <FreeConsultationModal
                open={consultationOpen}
                onClose={() => setConsultationOpen(false)}
            />
        </>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="
                group
                relative
                py-9
                text-[16px]
                font-medium
                text-[#082957]
            "
        >
            {children}

            <span
                className="
                    absolute
                    bottom-6
                    left-0
                    h-[2px]
                    w-0
                    bg-[#d79a27]
                    transition-all
                    duration-300
                    group-hover:w-full
                "
            />
        </Link>
    );
}


function MobileLink({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="
                flex
                border-b
                border-slate-100
                py-4
                text-[17px]
                font-semibold
                text-[#082957]
            "
        >
            {children}
        </Link>
    );
}
function LanguageOption({
    label,
    shortLabel,
    selected,
    onClick,
}: {
    label: string;
    shortLabel: string;
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-3
                py-3
                text-left
                text-sm
                transition-colors
                ${selected
                    ? "bg-[#eef4f7] font-bold text-[#075187]"
                    : "font-medium text-[#082957] hover:bg-slate-50"
                }
            `}
        >
            <span>{label}</span>

            <span className="text-xs font-bold opacity-60">
                {shortLabel}
            </span>
        </button>
    );
}