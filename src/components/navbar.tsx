'use client'

import Link from "next/link";
import { useContext, useState } from "react";
import { deleteToken } from "./actions";
import { UserContext } from "@/app/context/UserContext";

export default function Navbar () {
  const { user, deleteUser, isLogged } = useContext(UserContext)
  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  function handleDeleteUser () {
    deleteToken();
    deleteUser()
  }

  function handleBurgerMenu() {
    setHamburgerMenu((value) => !value);
  }

  return (
    <nav className="container mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
        <Link className=" p-6 hover:text-cyan-300" href={"/"}>Home</Link>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
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
          </ul>
        </div>
        <div className=" md:hidden">
        <button onClick={handleBurgerMenu} className="outline-none mobile-menu-button">
          <svg className={`${hamburgerMenu && 'border-2 border-gray-400 rounded-md'} w-6 h-6 text-white`} x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        </div>
      </div>
      <div className={`${hamburgerMenu ? 'block' : ' hidden' } md:hidden`}>
        <ul className="flex flex-col items-center">
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
        </ul>
      </div>
    </nav>
  )
};