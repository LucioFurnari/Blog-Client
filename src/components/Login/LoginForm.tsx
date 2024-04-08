'use client'

import { UserContext } from "@/app/context/UserContext";
import { useContext } from "react";
import { handleLogin } from "../actions";

export default function LoginForm () {
  const { listenStorageChange } = useContext(UserContext)

  function handleSubmit (formData: FormData ) {
    handleLogin(formData)
    listenStorageChange()
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
          type="password"
        />
      <button
        className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="submit">
          Login
        </button>
    </form>
    </div>
  )
}