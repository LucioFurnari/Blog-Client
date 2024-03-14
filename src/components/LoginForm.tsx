'use client'

import { UserContext } from "@/app/context/UserContext";
import { useContext } from "react";
import { handleLogin } from "./actions";

export default function LoginForm () {
  const { listenStorageChange } = useContext(UserContext)

  function handleSubmit (formData: FormData ) {
    handleLogin(formData)
    listenStorageChange()
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input className="text-black" name="username" id="username" type="text" placeholder="Username"></input>
      <input className="text-black" name="password" type="password" placeholder="Password"></input>
      <button type="submit">Login</button>
    </form>
  )
}