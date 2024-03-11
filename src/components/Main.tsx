import PostCard from "./PostCard";
import { getPosts } from "@/api/fetchService";

export default async function Main () {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>This is the home</h1>
      <section className=" w-full grid grid-cols-4 grid-rows-[300px_300px_300px] gap-4">
      {
        posts.length > 0 ?
        posts.map((post: {
          _id: string,
          title: string,
          text: string,
          author: string,
          timestamp: string
        }, index: number) => {
          return (
              <PostCard key={post._id} {...post} />
          )
        })
        : 
        <div>Post not found</div>
      }
      </section>
  </main>
  )
};