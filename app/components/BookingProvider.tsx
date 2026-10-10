
"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { X } from "lucide-react";
import IntakeQWidget from "../components/IntakeQWidget";

type BookingContextType = {
    openBooking: () => void;
    closeBooking: () => void;
};

const BookingContext =
    createContext<BookingContextType | null>(null);

export default function BookingProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [bookingOpen, setBookingOpen] = useState(false);

    const openBooking = useCallback(() => {
        setBookingOpen(true);
    }, []);

    const closeBooking = useCallback(() => {
        setBookingOpen(false);
    }, []);

    useEffect(() => {
        if (!bookingOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeBooking();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [bookingOpen, closeBooking]);

    return (
        <BookingContext.Provider
            value={{
                openBooking,
                closeBooking,
            }}
        >
            {children}

            {bookingOpen && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeBooking();
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Book an appointment"
                        className="flex max-h-[94dvh] w-full max-w-[800px] flex-col overflow-hidden rounded-[26px] bg-white shadow-2xl"
                    >
                        <div className="flex shrink-0 items-center justify-between border-b border-orange-100 px-5 py-4 sm:px-7">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#ff7426]">
                                    Transcending Psychiatry
                                </p>

                                <h2 className="mt-1 text-xl font-semibold text-[#252525]">
                                    Book Your Appointment
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={closeBooking}
                                aria-label="Close appointment scheduler"
                                className="rounded-full bg-[#fff1e8] p-3 text-[#ff7426] transition hover:bg-orange-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
                            <IntakeQWidget />
                        </div>
                    </div>
                </div>
            )}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);

    if (!context) {
        throw new Error(
            "useBooking must be used inside BookingProvider"
        );
    }

    return context;
}
