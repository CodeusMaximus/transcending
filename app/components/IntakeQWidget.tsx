
"use client";

import { useEffect, useRef, useState } from "react";

const INTAKEQ_ID = "66d2b03d3779531e870cdf40";
const INTAKEQ_SCRIPT =
    "https://intakeq.com/js/widget.min.js?1";

declare global {
    interface Window {
        intakeq?: string;
    }
}

export default function IntakeQWidget() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        window.intakeq = INTAKEQ_ID;

        const script = document.createElement("script");
        script.src = INTAKEQ_SCRIPT;
        script.async = true;

        script.onerror = () => {
            setLoadError(true);
        };

        document.head.appendChild(script);

        return () => {
            script.remove();
            container.replaceChildren();
        };
    }, []);

    return (
        <div className="w-full">
            {loadError && (
                <p
                    role="alert"
                    className="mb-4 text-center text-sm text-red-600"
                >
                    Unable to load the appointment scheduler.
                    Please try again later.
                </p>
            )}

            <div
                id="intakeq"
                ref={containerRef}
                style={{
                    maxWidth: 720,
                    width: "100%",
                    minHeight: 500,
                    margin: "0 auto",
                }}
            />
        </div>
    );
}
