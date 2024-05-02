import { useState } from "react"
import CreateCommentForm from "./Create/CreateCommentForm";

export default function CreateComment(props: { postId: string, setRefresh: (value: any) => void }) {
  const {postId, setRefresh} = props;

  const [activeComment, setActiveComment] = useState(false);

  function handleActiveComment() {
    setActiveComment((value: boolean) => !value)
  }

  return (
    <section>
      <button className=" bg-gray-600 rounded-md p-2 px-4 hover:bg-gray-500" onClick={handleActiveComment}>Create comment</button>
      {
        activeComment &&
        <CreateCommentForm postId={postId} setRefresh={setRefresh} />
      }
    </section>
  )
}