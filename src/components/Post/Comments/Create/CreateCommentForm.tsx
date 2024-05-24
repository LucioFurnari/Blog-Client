import { useState, useContext } from "react"
import { createComment } from "@/components/actions"
import { UserContext } from "@/app/context/UserContext";

export default function CreateCommentForm(props: { postId: string, setRefresh: (value: any) => void, setActiveComment: (value: any) => void }) {
  const { setRefresh, setActiveComment } = props;
  const { postId } = useContext(UserContext);

  const [commentContent, setCommentContent] = useState('');

  function handleActiveComment() {
    setActiveComment(false);
  }

  function handleCommentContent(event: any) {
    setCommentContent(event.currentTarget.value)
  }

  function handleCreateComment(event: any) {
    event.preventDefault();
    createComment(postId, commentContent)
    .then(() => {
      setRefresh((value: boolean) => !value)
    })
  }

  return(
    <div>
      <form onSubmit={handleCreateComment}>
        <textarea
          className="p-2 px-4 my-4 block bg-transparent border-[1px] border-white rounded-md min-h-32 w-80"
          onChange={handleCommentContent}
        />
        <button className="bg-gray-600 rounded-md p-2 px-4 hover:bg-gray-500" type="submit">Comment</button>
        <button onClick={handleActiveComment} className="ml-2 p-2 text-gray-300 hover:text-gray-200" type="button">Cancel</button>
      </form>
    </div>
  )
}