import { useState } from "react"
import CreateCommentForm from "./Create/CreateCommentForm";

export default function CreateComment(props: { postId: string, setRefresh: (value: any) => void }) {
  const {postId, setRefresh} = props;

  const [activeComment, setActiveComment] = useState(false);

  function handleActiveComment() {
    setActiveComment(true)
  }

  return (
    <section>
      <button className="p-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md" onClick={handleActiveComment}>Create comment</button>
      {
        activeComment &&
        <CreateCommentForm postId={postId} setRefresh={setRefresh} setActiveComment={setActiveComment}/>
      }
    </section>
  )
}