import { postLoginUser } from "@/api/fetchService";
import { setToken } from "@/app/login/actions";
import { redirect } from "next/navigation";

export default function LoginForm () {
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
    <form action={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input className="text-black" name="username" id="username" type="text" placeholder="Username"></input>
      <input className="text-black" name="password" type="password" placeholder="Password"></input>
      <button type="submit">Login</button>
    </form>
  )
}