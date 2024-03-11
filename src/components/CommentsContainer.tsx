import { getComments } from "@/api/fetchService";
import Comment from "./Comment";

export default async function CommentsContainer (props: {postId: string}) {
  const comments = await getComments(props.postId);

  return (
    <div>
    {
      comments.length > 0 &&
      comments.map((comment: {
        _id: string,
        author: string,
        text: string,
        timestamp: string,
      }) => {
        return (<Comment key={comment._id} {...comment} />)
      })
    }
    </div>
  )
}