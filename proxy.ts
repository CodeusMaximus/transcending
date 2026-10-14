
import {
    clerkMiddleware,
    createRouteMatcher,
    clerkClient,
} from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

const ADMIN_EMAILS = new Set([
    "transcendingpsychiatry@gmail.com",
    "dfsturge@gmail.com",
]);

const isDashboardRoute = createRouteMatcher([
    "/Dashboard(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    // Leave all public website routes accessible.
    if (!isDashboardRoute(req)) {
        return;
    }

    // Require the user to be signed in.
    const { userId } = await auth();

    if (!userId) {
        await auth.protect();
        return;
    }

    // Retrieve the signed-in Clerk user.
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    // Check the user's primary email address.
    const primaryEmail = user.emailAddresses.find(
        (email) => email.id === user.primaryEmailAddressId
    );

    const emailAddress =
        primaryEmail?.emailAddress.toLowerCase();

    const isVerified =
        primaryEmail?.verification?.status === "verified";

    // Allow only verified, authorized admin accounts.
    if (
        !emailAddress ||
        !isVerified ||
        !ADMIN_EMAILS.has(emailAddress)
    ) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    // Authorized admin: allow the dashboard request.
    return;
});

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};
