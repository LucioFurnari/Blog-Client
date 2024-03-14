'use client'

import { getSession } from "../../api/fetchService"
import { createContext, useState } from "react"
import { getToken } from "@/components/actions"

type  UserContent = {
  user: string | null,
  setUser: (user: null) => void,
  isLogged: boolean,
  setIsLogged:(c: boolean) => void,
  listenStorageChange: () => void,
}
export const UserContext = createContext<UserContent>({} as UserContent);

export function UserProvider ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

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
        setUser(data.username)
      }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <UserContext.Provider value={{user, setUser, setIsLogged, isLogged, listenStorageChange}}>
      <>
        {children}
      </>
    </UserContext.Provider>
  )
};