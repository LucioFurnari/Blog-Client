'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSession } from "@/api/fetchService";
import { getToken } from "./actions";

export default function Navbar () {
  const [user, setUser] = useState('');

  useEffect(() => {
    const listenStorageChange = async () => {
      try {
        const token = await getToken();
        if (token !== undefined) {
        const res = await getSession(token);

        //todo: Change this
        if (typeof res === 'undefined') {
          throw new Error('Server not working')
        }
        if (res.ok) {
          const data = await res.json()
          console.log(data)
          setUser(data.username)
        }
        }
      } catch (error) {
        console.error(error)
      }
    }
      listenStorageChange()
  }, [])

  return (
    <nav className=" flex justify-around">
      <Link className=" p-6 hover:text-cyan-300" href={"/"}>Home</Link>
      <div className="flex flex-row">
      {
        user !== '' ?
        <p className="p-6">{user}</p> 
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