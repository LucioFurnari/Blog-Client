

export async function getUserData (token: string) {
  const res = await fetch('http://localhost:3000/api/session', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }),
  })

  return res;
}