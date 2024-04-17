import PostCardContainer from "./PostCard/PostCardContainer";
import { getPosts } from "@/api/fetchService";

export default async function Main () {
  const posts = await getPosts();

  return (
    <main className="flex  flex-col items-center p-24">
      <PostCardContainer posts={posts} />
    </main>
  )
};