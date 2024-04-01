import PostCardContainer from "./PostCard/PostCardContainer";
import { getPosts } from "@/api/fetchService";

export default async function Main () {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>This is the home</h1>
      <PostCardContainer posts={posts} />
    </main>
  )
};