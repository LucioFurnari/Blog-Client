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
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action={handleSubmit}>
      <label htmlFor="username" className="block text-sm font-medium leading-6">
        Username
      </label>
      <input 
        className="mt-2 block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        name="username"
        id="username"
        type="text"
      />
      <label htmlFor="password" className="block text-sm font-medium leading-6">
        Password
      </label>
      <input
        className="mt-2 block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        name="password"
        id="password"
        type="text"
      />
      <label htmlFor="email" className="block text-sm font-medium leading-6">
        Email
      </label>
      <input
        className="mt-2 block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        name="email"
        id="email"
        type="email"
      />
      <button
        className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="submit">
          Register
        </button>
    </form>
    </div>
  )
}