import Comment from "./Comment"
import { useContext } from "react"
import { UserContext } from "@/app/context/UserContext"

interface CommentProp {
  _id: string,
  author: string,
  text: string,
  timestamp: string,
  response_to: string,
}


export function CommentList (props: { comments: CommentProp[], group: any, getReplies: any }) {
  const { comments } = props;
  const { postId } = useContext(UserContext);

  return (
    comments.map((comment: {
      _id: string,
      author: string,
      text: string,
      timestamp: string,
      response_to: string
    }) => {
      return (
        <div key={comment._id}>
          <Comment postId={postId} {...comment} group={props.group} getReplies={props.getReplies} />
        </div>
      )
    })
  )
}