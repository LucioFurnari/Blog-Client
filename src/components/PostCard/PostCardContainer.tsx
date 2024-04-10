import PostCard from "./PostCard"

export default function PostCardContainer (props: { posts: []}) {
  const { posts } = props;
  return (
    <section className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    {
      posts.length > 0 ?
      posts.map((post: {
        _id: string,
        title: string,
        text: string,
        author: string,
        timestamp: string
      }) => {
        return (
          <PostCard key={post._id} {...post} />
        )
      })
      : 
      <div>Post not found</div>
    }
    </section>
  )
}