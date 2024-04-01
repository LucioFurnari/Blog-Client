import { getPost} from "@/api/fetchService"
import PostPage from "@/components/Post/Post";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  return (
    <PostPage title={post.title} author={post.author} text={post.text} id={params.slug} body={post.body} />
  )
}