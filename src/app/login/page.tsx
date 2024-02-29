'use client'

import { useContext, useState } from "react"
import {  navigate } from "../actions";
import { UserContext } from "../context/UserContext";

export async function setLocalStorage (token: string) {
  if (localStorage.getItem('token') === 'null') {
    localStorage.setItem('token', token);
  } else {
    localStorage.setItem('token', token)
  }
};


export default function LoginPage () {
  const { setIsLogged } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  function handleUsername (e: { target: { value: string; }; }) {
    setUserInfo({
      ...userInfo,
      username: e.target.value,
    });
  };

  function handlePassword (e: { target: { value: string; }; }) {
    setUserInfo({
      ...userInfo,
      password: e.target.value,
    })
  }

  async function handleSubmit (e: any) {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(userInfo),
    });
    if (!res.ok) throw res;
  
    const data = await res.json();
    setLocalStorage(data.token);
    setIsLogged(true);
    navigate()
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className="text-black" onChange={handleUsername} id="username" type="text" placeholder="Username"></input>
        <input className="text-black" onChange={handlePassword} type="password" placeholder="Password"></input>
        <button type="submit">Login</button>
      </form>
    </main>
  )
};