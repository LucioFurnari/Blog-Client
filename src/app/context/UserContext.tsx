'use client'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getUserData } from "../../api/fetchService"

import { createContext, useEffect, useState } from "react"
type  UserContent = {
  user: string,
  setUser: (user: string) => void,
  isLogged: boolean,
  setIsLogged:(c: boolean) => void
}
export const UserContext = createContext<UserContent>({} as UserContent);

export function UserProvider ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    const listenStorageChange = async () => {
      const token = localStorage.getItem('token');
      if (token !== null) {
      const res = await getUserData(token);

      if (res.status === 403) {
        setIsLogged(false)
        return
      }
      const data = await res.json()
      setUser(data.user_name);
      } else {
        setIsLogged(false)
      }
    }
      listenStorageChange()
  }, [])

  return (
    <UserContext.Provider value={{user, setUser, setIsLogged, isLogged}}>
      <>
        <Navbar/>
        {children}
        <Footer />
      </>
    </UserContext.Provider>
  )
};