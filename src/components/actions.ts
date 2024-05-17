'use server'

import { postLoginUser, getComments, postComment } from "@/api/fetchService";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

async function setToken(token: string) {
  cookies().set({
    name: 'token',
    value: token,
    httpOnly: true,
  })
}

export async function getToken() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  return token;
}

export async function deleteToken() {
  cookies().delete('token');
}

export async function handleLogin (formData: FormData) {
  'use server'

  const rawFormData = {
    username: formData.get('username'),
    password: formData.get('password')
  }
  const res = await postLoginUser(rawFormData);

  if (!res.ok) throw res;

  const data = await res.json();
  setToken(data.token)
  redirect('/')
};

export async function getNewComments(postId: string) {
  const newComments = await getComments(postId);
  return newComments;
}

export async function createComment(postId:string, commentContent: string) {
  postComment(postId, commentContent);
}