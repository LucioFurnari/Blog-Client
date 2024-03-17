import Comment from "./Comment"

interface CommentProp {
  _id: string,
  author: string,
  text: string,
  timestamp: string,
  response_to: string,
}


export function CommentList (props: { comments: CommentProp[], group: any, getReplies: any }) {
  return props.comments.map((comment: {
    _id: string,
    author: string,
    text: string,
    timestamp: string,
    response_to: string
  }) => {
    return (
      <div key={comment._id}>
        <Comment {...comment} group={props.group} getReplies={props.getReplies} />
      </div>
    )
  })
}