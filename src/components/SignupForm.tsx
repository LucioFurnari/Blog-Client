import { postRegisterUser } from "@/api/fetchService"
import { redirect } from "next/navigation";

export default function SignupForm () {
  async function handleSubmit(formData: FormData) {
    'use server'

    const rawFormData = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    const res = await postRegisterUser(rawFormData);

    if (!res.ok) throw res;

    const data = await res.json();
    redirect('/');
  }

  return (
    <form action={handleSubmit}>
      <input className="text-black" type="text" name="username" placeholder="username"></input>
      <input className="text-black" type="text" name="password" placeholder="password"></input>
      <input className="text-black" type="email" name="email" placeholder="email"></input>
      <button type="submit">SignUp</button>
    </form>
  )
}