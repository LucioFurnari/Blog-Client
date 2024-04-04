'use client'

import Link from "next/link";
import { useContext } from "react";
import { deleteToken } from "./actions";
import { UserContext } from "@/app/context/UserContext";

export default function Navbar () {
  const { user, deleteUser, isLogged } = useContext(UserContext)

  function handleDeleteUser () {
    deleteToken();
    deleteUser()
  }

  return (
    <nav className="py-6 flex justify-around items-center">
      <Link className=" p-6 hover:text-cyan-300" href={"/"}>Home</Link>
      <div className="flex flex-row">
      
      {isLogged && (
        <>
        {user &&
        <>
          <p className="p-4">{user}</p>
          <Link className="p-4" href={"/submit"}>Create post</Link>
          <button className="p-4" onClick={ handleDeleteUser }>Logout</button>
        </>
        }
        {
        !user &&
        <>
        <Link className="p-4 hover:text-cyan-300"href={"/login"}>Login</Link>
        <Link className="p-4 hover:text-cyan-300" href={"/signup"}>Signup</Link>
        </>
        }
        </>
      )
      }
      </div>
    </nav>
  )
};