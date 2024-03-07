import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSession } from "@/api/fetchService";

export async function middleware(request: NextRequest) {
    
    const token = request.cookies.get('token')?.value

    if (token === undefined) {
      return Response.redirect(new URL('/login', request.url));
    }

    const res = await getSession(token);
    const data = await res?.json();

    if (!res?.ok) {
      return Response.redirect(new URL('/', request.url));
    }
}

export const config = {
  matcher: ['/post/:path*']
}