enum Endpoints {
  Login = 'login',
  Register = 'register',
  Session = 'session',
  Posts = 'posts',
  Comments = 'comments'
}

// Function to login user
export async function postLoginUser(userLoginInfo: object) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL_DEV+Endpoints.Login, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(userLoginInfo),
  });

  return res;
}

// Function to register user
export async function postRegisterUser(userRegisterInfo: object) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL_DEV+Endpoints.Register, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(userRegisterInfo),
  })
  
  return res;
}

// Function to get user session data
export async function getSession(token: string) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL_DEV+Endpoints.Session, {
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

// Function to get all posts
export async function getPosts() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL_DEV+Endpoints.Posts, {
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

// Function to get a single post
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

// Function to get all the comments of a post
export async function getComments(postId: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}/comments`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      cache: 'no-store'
    });
    
    const data = await res.json();

    return data;
  } catch (error) {
    
  }
}