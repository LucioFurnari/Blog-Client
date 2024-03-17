import Comment from "./Comment"

interface CommentProp {
  _id: string,
  author: string,
  text: string,
  timestamp: string,
  response_to: string,
}


export function CommentList (props: { comments: CommentProp[] }) {
  return props.comments.map((comment: {
    _id: string,
    author: string,
    text: string,
    timestamp: string,
    response_to: string
  }) => {
    return (
      <div key={comment._id}>
        <Comment _id={comment._id} author={comment.author} text={comment.text} timestamp={comment.timestamp} response_to={comment.response_to} />
      </div>
    )
  })
}