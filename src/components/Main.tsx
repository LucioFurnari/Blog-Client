import PostCard from "./PostCard";

async function getPosts() {
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

export default async function Main () {
  const data = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>This is the home</h1>
      <section className=" w-full grid grid-cols-4 grid-rows-[300px_300px_300px] gap-4">
      {
        data.map((item: {
          _id: string,
          title: string,
          text: string,
          author: string,
          timestamp: string
        }, index: number) => {
          return (
            <PostCard key={index} {...item} />
          )
        })
      }
      </section>
  </main>
  )
};