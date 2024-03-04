import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSession } from "@/api/fetchService";

export async function middleware(request: NextRequest) {
  // const token = localStorage.getItem('token');
  const token = null;
  console.log('Test')
  if (token === null) {
    return Response.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/post/:path*']
}