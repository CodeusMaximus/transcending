import { NextResponse } from "next/server";
import { createElement } from "react";
import { Resend } from "resend";
import BusinessInquiryNotification from "../../emails/BusinessInquiryNotification";
import BusinessInquiryConfirmation from "../../emails/BusinessInquiryConfirmation";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const valid = (value: unknown, max: number) => typeof value === "string" && value.trim().length > 0 && value.length <= max;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone = "", message, inquiryType, businessOnly } = body ?? {};

        if (inquiryType !== "general_business" || businessOnly !== true ||
            !valid(firstName, 100) || !valid(lastName, 100) ||
            !valid(email, 254) || !emailPattern.test(email) ||
            typeof phone !== "string" || phone.length > 30 ||
            !valid(message, 1500)) {
            return NextResponse.json({ error: "Invalid business inquiry" }, { status: 400 });
        }

        const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_ADMIN_EMAIL } = process.env;
        if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_ADMIN_EMAIL) {
            return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
        }

        const resend = new Resend(RESEND_API_KEY);
        const admin = await resend.emails.send({
            from: CONTACT_FROM_EMAIL,
            to: CONTACT_ADMIN_EMAIL,
            subject: "New general business inquiry — Transcending Psychiatry",
            react: createElement(BusinessInquiryNotification, { firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim(), phone: phone.trim(), message: message.trim() }),
            replyTo: email.trim(),
        });
        if (admin.error) {
            console.error("Business inquiry admin email failed", admin.error.name);
            return NextResponse.json({ error: "Unable to deliver inquiry" }, { status: 502 });
        }

        const confirmation = await resend.emails.send({
            from: CONTACT_FROM_EMAIL,
            to: email.trim(),
            subject: "We received your business inquiry — Transcending Psychiatry",
            react: createElement(BusinessInquiryConfirmation, { firstName: firstName.trim() }),
        });
        if (confirmation.error) {
            // Admin notification was delivered; avoid retrying the inquiry and duplicating it.
            console.error("Business inquiry confirmation failed", confirmation.error.name);
            return NextResponse.json({ success: true, confirmationSent: false });
        }

        return NextResponse.json({ success: true, confirmationSent: true });
    } catch {
        return NextResponse.json({ error: "Unable to process inquiry" }, { status: 400 });
    }
}
