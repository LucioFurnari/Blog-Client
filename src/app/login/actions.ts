import { cookies } from "next/headers";

export async function setToken(token: string) {
  cookies().set({
    name: 'token',
    value: token,
    httpOnly: true,
  })
}