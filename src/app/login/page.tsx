
import { redirect } from "next/navigation";
import { postLoginUser } from "@/api/fetchService";
import { setToken } from "./actions";

export async function setLocalStorage (token: string) {
  if (localStorage.getItem('token') === 'null') {
    localStorage.setItem('token', token);
  } else {
    localStorage.setItem('token', token)
  }
};


export default function LoginPage () {

  async function handleSubmit (formData: FormData) {
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

  return (
    <main>
      <form action={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className="text-black" name="username" id="username" type="text" placeholder="Username"></input>
        <input className="text-black" name="password" type="password" placeholder="Password"></input>
        <button type="submit">Login</button>
      </form>
    </main>
  )
};