"use client";



import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import BookAppointmentButton from "./BookAppointmentButton";

import {

    CalendarDays,

    ChevronDown,

    ChevronRight,

    LogIn,

    Mail,

    Menu,

    Phone,

    X,

} from "lucide-react";



const services = [

    {

        name: "Psychiatric Medication Management",

        href: "/#",

    },

    {

        name: "Psychiatric Evaluations",

        href: " ",

    },

    {

        name: "Conditions Treated",

        href: " ",

    },]





const newJerseyTreatments = [
    { name: "ADHD Treatment", href: "/adhd-treatment-new-jersey" },
    { name: "Child & Teen Therapy Sessions", href: "/child-adolescent-therapy-new-jersey" },
    { name: "Cognitive Behavioral Therapy", href: "/cognitive-behavioral-therapy-nj" },
    { name: "Depression Treatment", href: "/depression-treatment-new-jersey" },
    { name: "Individual Therapy", href: "/individual-therapy-in-new-jersey" },
    { name: "Personalized Anxiety Therapy", href: "/anxiety-treatment-in-new-jersey" },
];

const newYorkTreatments = [
    { name: "NYC Child & Adolescent Therapy", href: "/child-adolescent-therapy-nyc" },
    { name: "Individual Therapy", href: "/individual-therapy-nyc" },
    { name: "Depression Treatment", href: "/depression-treatment-nyc" },
    { name: "Best CBT Therapy", href: "/cbt-therapy-nyc-best-therapists-new-york" },
];

const PHONE = "+16465801030";

const EMAIL = "info@transcendingpsychiatry.sprucecare.com";



/*

 \* Replace /portal with Joseph's actual patient portal URL

 \* when you have it.

 */

const PORTAL_URL = "https://transcendingpsych.intakeq.com/portal";



export default function Navbar() {

    const [servicesOpen, setServicesOpen] = useState(false);
    const [newJerseyOpen, setNewJerseyOpen] = useState(false);
    const [newYorkOpen, setNewYorkOpen] = useState(false);

    const [mobileNewJerseyOpen, setMobileNewJerseyOpen] =
        useState(false);

    const [mobileNewYorkOpen, setMobileNewYorkOpen] =
        useState(false);

    const [mobileOpen, setMobileOpen] = useState(false);

    const [mobileServicesOpen, setMobileServicesOpen] =

        useState(false);

    const [navVisible, setNavVisible] = useState(true);



    const lastScrollY = useRef(0);



    useEffect(() => {

        const handleScroll = () => {

            const currentScrollY = window.scrollY;



            if (currentScrollY < 80) {

                setNavVisible(true);

                lastScrollY.current = currentScrollY;

                return;

            }



            if (mobileOpen) {

                setNavVisible(true);

                lastScrollY.current = currentScrollY;

                return;

            }



            const difference =

                currentScrollY - lastScrollY.current;



            if (Math.abs(difference) < 8) return;



            if (difference > 0) {

                setNavVisible(false);

                setServicesOpen(false);

            } else {

                setNavVisible(true);

            }



            lastScrollY.current = currentScrollY;

        };



        window.addEventListener("scroll", handleScroll, {

            passive: true,

        });



        return () =>

            window.removeEventListener(

                "scroll",

                handleScroll

            );

    }, [mobileOpen]);



    return (

        <>

            {/* =====================================================

          DESKTOP / TABLET NAVBAR

      ====================================================== */}



            <motion.header

                initial={false}

                animate={{

                    y: navVisible ? 0 : -140,

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

          pt-4

          sm:px-6

          lg:px-8

          lg:pt-6

        "

            >

                <motion.nav

                    initial={{

                        opacity: 0,

                        y: -18,

                    }}

                    animate={{

                        opacity: 1,

                        y: 0,

                    }}

                    transition={{

                        duration: 0.7,

                    }}

                    className="

            mx-auto

            flex

            h-[82px]

            max-w-[1480px]

            items-center

            justify-between

            rounded-[26px]

            border

            border-white/70

            bg-white/70

            px-5

            shadow-[0_18px_60px_rgba(48,35,25,0.10)]

            backdrop-blur-2xl

            backdrop-saturate-150

            sm:px-7

            lg:h-[92px]

            lg:px-8

          "

                >

                    {/* =================================================

              LOGO

          ================================================= */}



                    <Link

                        href="/"

                        className="

              relative

              z-10

              flex

              shrink-0

              items-center

            "

                    >

                        <AnimatedLogo />

                    </Link>



                    {/* =================================================

              DESKTOP NAVIGATION

          ================================================= */}



                    <div

                        className="

              hidden

              items-center

              gap-6

              xl:flex

              2xl:gap-8

            "

                    >

                        <NavLink href="/">

                            Home

                        </NavLink>



                        <NavLink href="/#about">

                            About Us

                        </NavLink>



                        {/* SERVICES DROPDOWN */}



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

                                        (prev) => !prev

                                    )

                                }

                                className="

                  group

                  flex

                  items-center

                  gap-1.5

                  py-8

                  text-[15px]

                  font-medium

                  text-[#242424]

                  transition-colors

                  hover:text-[#f36f2a]

                "

                            >

                                <span className="relative">

                                    Services



                                    <span

                                        className={`

                      absolute

                      -bottom-2

                      left-0

                      h-[2px]

                      bg-[#ff7426]

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

                    duration-300

                    ${servicesOpen

                                            ? "rotate-180"

                                            : ""

                                        }

                  `}

                                />

                            </button>



                            <AnimatePresence>

                                {servicesOpen && (

                                    <motion.div

                                        initial={{

                                            opacity: 0,

                                            y: 10,

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

                      left-1/2

                      top-[70px]

                      w-[320px]

                      -translate-x-1/2

                      overflow-hidden

                      rounded-[22px]

                      border

                      border-white/80

                      bg-white/90

                      p-3

                      shadow-[0_24px_70px_rgba(43,32,23,0.15)]

                      backdrop-blur-2xl

                    "

                                    >

                                        {services.map(

                                            (service) => (

                                                <Link

                                                    key={

                                                        service.name

                                                    }

                                                    href={

                                                        service.href

                                                    }

                                                    className="

                            group

                            flex

                            items-center

                            justify-between

                            rounded-xl

                            px-4

                            py-3.5

                            text-[14px]

                            font-medium

                            text-[#343434]

                            transition-all

                            hover:bg-[#fff1e8]

                            hover:text-[#e75e17]

                          "

                                                >

                                                    {

                                                        service.name

                                                    }



                                                    <ChevronRight

                                                        className="

                              h-4

                              w-4

                              opacity-0

                              transition-all

                              group-hover:translate-x-1

                              group-hover:opacity-100

                            "

                                                    />

                                                </Link>

                                            )

                                        )}

                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </div>



                        <RegionDropdown label="New Jersey" href="/new-jersey" items={newJerseyTreatments} open={newJerseyOpen} setOpen={setNewJerseyOpen} />
                        <RegionDropdown label="New York" href="/new-york" items={newYorkTreatments} open={newYorkOpen} setOpen={setNewYorkOpen} />



                        <NavLink href="/blog">

                            Blog

                        </NavLink>

                    </div>



                    {/* =================================================

              DESKTOP ACTIONS

          ================================================= */}



                    <div

                        className="

              hidden

              items-center

              gap-2

              xl:flex

            "

                    >

                        {/* PHONE */}



                        <a

                            href={`tel:${PHONE}`}

                            aria-label="Call Transcending Psychiatry"

                            title="Call (646) 580-1030"

                            className="

                group

                flex

                h-11

                w-11

                shrink-0

                items-center

                justify-center

                rounded-full

                border

                border-[#eadfd8]

                bg-white/75

                text-[#252525]

                transition-all

                duration-300

                hover:-translate-y-0.5

                hover:border-[#ff7426]

                hover:bg-[#fff1e8]

                hover:text-[#ff7426]

              "

                        >

                            <Phone className="h-[17px] w-[17px]" />

                        </a>



                        {/* EMAIL */}



                        <a

                            href={`mailto:${EMAIL}`}

                            aria-label="Email Transcending Psychiatry"

                            title="Email Transcending Psychiatry"

                            className="

                group

                flex

                h-11

                w-11

                shrink-0

                items-center

                justify-center

                rounded-full

                border

                border-[#eadfd8]

                bg-white/75

                text-[#252525]

                transition-all

                duration-300

                hover:-translate-y-0.5

                hover:border-[#ff7426]

                hover:bg-[#fff1e8]

                hover:text-[#ff7426]

              "

                        >

                            <Mail className="h-[17px] w-[17px]" />

                        </a>



                        {/* PORTAL LOGIN */}



                        <Link
                            href={PORTAL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
        group
        ml-1
        flex
        h-11
        shrink-0
        items-center
        gap-2
        rounded-full
        border
        border-[#ded6d0]
        bg-white/75
        px-4
        text-[13px]
        font-semibold
        text-[#252525]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#ff7426]
        hover:bg-[#fff1e8]
        hover:text-[#e85f18]
    "
                        >
                            <LogIn className="h-[16px] w-[16px]" />
                            Portal Login
                        </Link>



                        {/* BOOK APPOINTMENT */}



                        <BookAppointmentButton

                            label="Book Appointment"

                            showIcon

                            showArrow={false}

                            className="

    ml-1

    min-h-[44px]

    px-5

    py-3

    text-[13px]

    2xl:px-6

    2xl:text-[14px]

  "

                        />

                    </div>



                    {/* =================================================

              MOBILE MENU BUTTON

          ================================================= */}



                    <button

                        type="button"

                        aria-label="Open navigation menu"

                        onClick={() =>

                            setMobileOpen(true)

                        }

                        className="

              flex

              h-11

              w-11

              items-center

              justify-center

              rounded-full

              bg-[#ff7426]

              text-white

              shadow-[0_10px_25px_rgba(255,116,38,0.25)]

              xl:hidden

            "

                    >

                        <Menu className="h-5 w-5" />

                    </button>

                </motion.nav>

            </motion.header>



            {/* =====================================================

          MOBILE NAVIGATION

      ====================================================== */}



            <AnimatePresence>

                {mobileOpen && (

                    <>

                        {/* OVERLAY */}



                        <motion.div

                            initial={{

                                opacity: 0,

                            }}

                            animate={{

                                opacity: 1,

                            }}

                            exit={{

                                opacity: 0,

                            }}

                            onClick={() =>

                                setMobileOpen(false)

                            }

                            className="

                fixed

                inset-0

                z-[80]

                bg-[#24170f]/30

                backdrop-blur-md

              "

                        />



                        {/* DRAWER */}



                        <motion.aside

                            initial={{

                                x: "100%",

                            }}

                            animate={{

                                x: 0,

                            }}

                            exit={{

                                x: "100%",

                            }}

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

                border-l

                border-white/70

                bg-white/95

                p-7

                shadow-2xl

                backdrop-blur-2xl

              "

                        >

                            {/* MOBILE HEADER */}



                            <div

                                className="

                  mb-9

                  flex

                  items-center

                  justify-between

                "

                            >

                                <AnimatedLogo compact />



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

                    bg-[#fff1e8]

                    text-[#e85f18]

                  "

                                >

                                    <X className="h-5 w-5" />

                                </button>

                            </div>



                            {/* MOBILE LINKS */}



                            <div className="space-y-1">

                                <MobileLink

                                    href="/"

                                    onClick={() =>

                                        setMobileOpen(false)

                                    }

                                >

                                    Home

                                </MobileLink>



                                <MobileLink

                                    href="/#about"

                                    onClick={() =>

                                        setMobileOpen(false)

                                    }

                                >

                                    About Us

                                </MobileLink>



                                {/* MOBILE SERVICES */}



                                <button

                                    type="button"

                                    onClick={() =>

                                        setMobileServicesOpen(

                                            (prev) => !prev

                                        )

                                    }

                                    className="

                    flex

                    w-full

                    items-center

                    justify-between

                    border-b

                    border-[#eee8e3]

                    py-4

                    text-left

                    text-[17px]

                    font-semibold

                    text-[#252525]

                  "

                                >

                                    Services



                                    <ChevronDown

                                        className={`

                      h-5

                      w-5

                      text-[#ff7426]

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

                        rounded-2xl

                        bg-[#fff7f1]

                      "

                                        >

                                            {services.map(

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

                              py-3.5

                              text-[14px]

                              font-medium

                              text-[#555]

                              transition

                              hover:text-[#f36f2a]

                            "

                                                    >

                                                        {

                                                            service.name

                                                        }



                                                        <ChevronRight className="h-4 w-4" />

                                                    </Link>

                                                )

                                            )}

                                        </motion.div>

                                    )}

                                </AnimatePresence>



                                <MobileRegionDropdown label="New Jersey" href="/new-jersey" items={newJerseyTreatments} open={mobileNewJerseyOpen} setOpen={setMobileNewJerseyOpen} closeMenu={() => setMobileOpen(false)} />
                                <MobileRegionDropdown label="New York" href="/new-york" items={newYorkTreatments} open={mobileNewYorkOpen} setOpen={setMobileNewYorkOpen} closeMenu={() => setMobileOpen(false)} />



                                <MobileLink

                                    href="/blog"

                                    onClick={() =>

                                        setMobileOpen(false)

                                    }

                                >

                                    Blog

                                </MobileLink>

                            </div>



                            {/* =================================================

                  MOBILE CONTACT ICONS

              ================================================= */}



                            <div className="mt-7">

                                <p

                                    className="

                    mb-3

                    text-[10px]

                    font-bold

                    uppercase

                    tracking-[0.22em]

                    text-[#e85f18]

                  "

                                >

                                    Get In Touch

                                </p>



                                <div className="flex gap-3">

                                    {/* PHONE */}



                                    <a

                                        href={`tel:${PHONE}`}

                                        aria-label="Call Transcending Psychiatry"

                                        className="

                      flex

                      h-12

                      w-12

                      items-center

                      justify-center

                      rounded-full

                      bg-[#fff1e8]

                      text-[#ff7426]

                      transition-all

                      duration-300

                      hover:-translate-y-0.5

                      hover:bg-[#ff7426]

                      hover:text-white

                    "

                                    >

                                        <Phone className="h-5 w-5" />

                                    </a>



                                    {/* EMAIL */}



                                    <a

                                        href={`mailto:${EMAIL}`}

                                        aria-label="Email Transcending Psychiatry"

                                        className="

                      flex

                      h-12

                      w-12

                      items-center

                      justify-center

                      rounded-full

                      bg-[#fff1e8]

                      text-[#ff7426]

                      transition-all

                      duration-300

                      hover:-translate-y-0.5

                      hover:bg-[#ff7426]

                      hover:text-white

                    "

                                    >

                                        <Mail className="h-5 w-5" />

                                    </a>

                                </div>

                            </div>



                            {/* =================================================

                  MOBILE PORTAL LOGIN

              ================================================= */}



                            {/* =================================================
    MOBILE PORTAL LOGIN
================================================= */}

                            <Link
                                href={PORTAL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className="
        mt-6
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-full
        border
        border-[#ded6d0]
        bg-white
        px-6
        py-4
        font-semibold
        text-[#252525]
        transition-all
        duration-300
        hover:border-[#ff7426]
        hover:bg-[#fff1e8]
        hover:text-[#e85f18]
    "
                            >
                                <LogIn className="h-5 w-5" />
                                Portal Login
                            </Link>



                            {/* =================================================

                  MOBILE BOOK APPOINTMENT

              ================================================= */}

                            <BookAppointmentButton

                                label="Book Appointment"

                                showIcon

                                showArrow={false}

                                onOpen={() => setMobileOpen(false)}

                                className="

    mt-3

    w-full

    min-h-[56px]

    px-6

    py-4

    text-[15px]

  "

                            />



                            {/* MOBILE CONTACT DETAILS */}



                            <div

                                className="

                  mt-7

                  rounded-[20px]

                  bg-[#fff8f3]

                  p-5

                "

                            >

                                <p

                                    className="

                    text-[10px]

                    font-bold

                    uppercase

                    tracking-[0.2em]

                    text-[#e85f18]

                  "

                                >

                                    Transcending Psychiatry

                                </p>



                                <a

                                    href={`tel:${PHONE}`}

                                    className="

                    mt-3

                    block

                    text-[13px]

                    font-medium

                    text-[#555]

                    transition

                    hover:text-[#ff7426]

                  "

                                >

                                    (646) 580-1030

                                </a>



                                <a

                                    href={`mailto:${EMAIL}`}

                                    className="

                    mt-1

                    block

                    break-all

                    text-[12px]

                    text-[#777]

                    transition

                    hover:text-[#ff7426]

                  "

                                >

                                    {EMAIL}

                                </a>

                            </div>

                        </motion.aside>

                    </>

                )}

            </AnimatePresence>

        </>

    );

}



/* =========================================================

   ANIMATED TRANSCENDING LOGO

\========================================================= */



function AnimatedLogo({

    compact = false,

}: {

    compact?: boolean;

}) {

    return (

        <motion.div

            className={`

        flex

        items-center

        ${compact

                    ? "gap-2"

                    : "gap-2 sm:gap-2.5 lg:gap-2"

                }

      `}

            initial="hidden"

            animate="visible"

            aria-label="Transcending Psychiatry LLC"

        >

            <motion.svg

                viewBox="0 0 112 82"

                role="img"

                aria-hidden="true"

                className={

                    compact

                        ? "h-[50px] w-[72px] shrink-0 overflow-visible"

                        : "h-[52px] w-[78px] shrink-0 overflow-visible sm:h-[55px] sm:w-[82px] lg:h-[62px] lg:w-[92px]"

                }

                initial={{

                    scale: 0.92,

                }}

                animate={{

                    scale: [

                        0.92,

                        1.07,

                        1,

                    ],

                }}

                transition={{

                    duration: 0.42,

                    delay: 0.82,

                    ease: [

                        0.22,

                        1,

                        0.36,

                        1,

                    ],

                }}

            >

                {/* LEFT RING */}



                <motion.circle

                    cx="37"

                    cy="41"

                    r="35"

                    fill="none"

                    stroke="#FF5A1F"

                    strokeWidth="2.4"

                    initial={{

                        x: -45,

                        y: -20,

                        rotate: -30,

                        opacity: 0,

                        scale: 0.7,

                    }}

                    animate={{

                        x: 0,

                        y: 0,

                        rotate: 0,

                        opacity: 1,

                        scale: 1,

                    }}

                    transition={{

                        type: "spring",

                        stiffness: 95,

                        damping: 14,

                        delay: 0.05,

                    }}

                />



                {/* CENTER RING */}



                <motion.circle

                    cx="57"

                    cy="41"

                    r="35"

                    fill="none"

                    stroke="#FF7A2F"

                    strokeWidth="2.4"

                    initial={{

                        y: -45,

                        opacity: 0,

                        scale: 0.7,

                    }}

                    animate={{

                        y: 0,

                        opacity: 1,

                        scale: 1,

                    }}

                    transition={{

                        type: "spring",

                        stiffness: 95,

                        damping: 14,

                        delay: 0.17,

                    }}

                />



                {/* RIGHT RING */}



                <motion.circle

                    cx="77"

                    cy="41"

                    r="35"

                    fill="none"

                    stroke="#FF9B58"

                    strokeWidth="2.4"

                    initial={{

                        x: 45,

                        y: 20,

                        rotate: 30,

                        opacity: 0,

                        scale: 0.7,

                    }}

                    animate={{

                        x: 0,

                        y: 0,

                        rotate: 0,

                        opacity: 1,

                        scale: 1,

                    }}

                    transition={{

                        type: "spring",

                        stiffness: 95,

                        damping: 14,

                        delay: 0.29,

                    }}

                />

            </motion.svg>



            {/* LOGO TEXT */}



            <motion.div

                variants={{

                    hidden: {

                        opacity: 0,

                        x: 0,

                    },

                    visible: {

                        opacity: 1,

                        x: 0,

                    },

                }}

                transition={{

                    duration: 0.55,

                    delay: 0.72,

                    ease: [

                        0.22,

                        1,

                        0.36,

                        1,

                    ],

                }}

                className="

          min-w-0

          shrink-0

          leading-none

        "

            >

                <div

                    className={`

            whitespace-nowrap

            font-semibold

            tracking-[0.12em]

            text-[#252525]

            ${compact

                            ? "text-[15px]"

                            : "text-[15px] sm:text-[16px] lg:text-[20px]"

                        }

          `}

                >

                    TRANSCENDING

                </div>



                <div

                    className={`

            whitespace-nowrap

            font-semibold

            tracking-[0.28em]

            text-[#ff7426]

            ${compact

                            ? "mt-1 text-[8px]"

                            : "mt-1.5 text-[8px] sm:text-[9px] lg:text-[10px]"

                        }

          `}

                >

                    PSYCHIATRY LLC

                </div>

            </motion.div>

        </motion.div>

    );

}



type RegionItem = { name: string; href: string };

function RegionDropdown({ label, href, items, open, setOpen }: {
    label: string; href: string; items: RegionItem[]; open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div className="group flex items-center gap-1 py-8">
                <Link href={href} className="relative text-[15px] font-medium text-[#242424] transition-colors hover:text-[#f36f2a]">
                    {label}
                    <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#ff7426] transition-all duration-300 ${open ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
                <button type="button" aria-label={`Open ${label} treatments`} aria-expanded={open}
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-[#242424] transition hover:bg-[#fff1e8] hover:text-[#f36f2a]">
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ opacity: 0, y: 10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: .98 }} transition={{ duration: .18 }}
                        className="absolute left-1/2 top-[70px] w-[350px] -translate-x-1/2 overflow-hidden rounded-[22px] border border-white/80 bg-white/95 p-3 shadow-[0_24px_70px_rgba(43,32,23,0.15)] backdrop-blur-2xl">
                        <Link href={href} className="mb-1 flex items-center justify-between rounded-xl bg-[#fff7f1] px-4 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-[#e75e17]">
                            {label} Overview <ChevronRight className="h-4 w-4" />
                        </Link>
                        {items.map((item) => (
                            <Link key={item.href} href={item.href}
                                className="group flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-[13px] font-medium leading-5 text-[#343434] transition-all hover:bg-[#fff1e8] hover:text-[#e75e17]">
                                <span>{item.name}</span>
                                <ChevronRight className="h-4 w-4 shrink-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function MobileRegionDropdown({ label, href, items, open, setOpen, closeMenu }: {
    label: string; href: string; items: RegionItem[]; open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>; closeMenu: () => void;
}) {
    return (
        <div className="border-b border-[#eee8e3]">
            <div className="flex items-center">
                <Link href={href} onClick={closeMenu}
                    className="flex-1 py-4 text-[17px] font-semibold text-[#252525] transition-colors hover:text-[#f36f2a]">
                    {label}
                </Link>
                <button type="button" aria-label={`Open ${label} treatments`} aria-expanded={open}
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff7f1] text-[#ff7426]">
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>
            </div>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <div className="mb-3 rounded-2xl bg-[#fff7f1] p-2">
                            {items.map((item) => (
                                <Link key={item.href} href={item.href} onClick={closeMenu}
                                    className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-[13px] font-medium leading-5 text-[#555] transition hover:bg-white hover:text-[#f36f2a]">
                                    <span>{item.name}</span><ChevronRight className="h-4 w-4 shrink-0 text-[#ff7426]" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* =========================================================

   DESKTOP NAV LINK

\========================================================= */



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

        py-8

        text-[15px]

        font-medium

        text-[#242424]

        transition-colors

        hover:text-[#f36f2a]

      "

        >

            {children}



            <span

                className="

          absolute

          bottom-[22px]

          left-0

          h-[2px]

          w-0

          bg-[#ff7426]

          transition-all

          duration-300

          group-hover:w-full

        "

            />

        </Link>

    );

}



/* =========================================================

   MOBILE NAV LINK

\========================================================= */



function MobileLink({

    href,

    children,

    onClick,

}: {

    href: string;

    children: React.ReactNode;

    onClick?: () => void;

}) {

    return (

        <Link

            href={href}

            onClick={onClick}

            className="

        flex

        items-center

        justify-between

        border-b

        border-[#eee8e3]

        py-4

        text-[17px]

        font-semibold

        text-[#252525]

        transition-colors

        hover:text-[#f36f2a]

      "

        >

            {children}



            <ChevronRight className="h-4 w-4 text-[#ff7426]" />

        </Link>

    );

}