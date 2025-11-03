import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const pathname = request.nextUrl.pathname;

    if (session && pathname === "/sign-in") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (!session && !pathname.startsWith("/sign-in") && !pathname.startsWith("/api")) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};