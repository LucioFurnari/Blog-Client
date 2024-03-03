

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

export async function postLoginUser(userLoginInfo: object) {
  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(userLoginInfo),
  });

  return res;
}

export async function getSession(token: string) {
  const res = await fetch('http://localhost:3000/api/session', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }),
  });

  return res;
}

export async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts', {
    next: {revalidate: 10},
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });

  const data = await res.json();
  return data;
}