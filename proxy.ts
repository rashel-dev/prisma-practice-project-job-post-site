import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export const proxy = auth((req) => {
    const isAuthenticated = !!req.auth;
    const { pathname } = req.nextUrl;

    const publicRoutes = ["/", "/jobs", "/auth/signin"];
    const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith(route));

    const isAuthApiRoute = pathname.startsWith("/api/auth");

    if (isPublicRoute || isAuthApiRoute) {
        return NextResponse.next();
    }

    if (!isAuthenticated) {
        const signInUrl = new URL("/auth/signin", req.url);
        signInUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)"],
};
