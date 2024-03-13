'use client'

import Link from "next/link";
import { useContext } from "react";
import { deleteToken } from "./actions";
import { UserContext } from "@/app/context/UserContext";

export default function Navbar () {
  const { user } = useContext(UserContext)
  return (
    <nav className=" flex justify-around">
      <Link className=" p-6 hover:text-cyan-300" href={"/"}>Home</Link>
      <div className="flex flex-row">
      {
        user !== '' ?
        <>
        <p className="p-6">{user}</p> 
        <button onClick={ async () => await deleteToken()}>Logout</button>
        </>
        :
        <>
        <Link className="p-6 hover:text-cyan-300"href={"/login"}>Login</Link>
        <Link className="p-6 hover:text-cyan-300" href={"/signup"}>Signup</Link>
        </>
      }
      </div>
    </nav>
  )
};