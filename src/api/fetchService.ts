
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
  try {
    const res = await fetch('http://localhost:3000/api/session', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    });

    return res;
  } catch (error) {
    console.error(error)
  }
}

export async function getPosts() {
  try {
    const res = await fetch('http://localhost:3000/api/posts', {
    // next: {revalidate: 10},
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    cache: 'no-store'
    });
    
    //todo: Change this.
    if (!res.ok) {
      throw new Error('Server not working')
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}

export async function getPost(postId: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    
  }
}