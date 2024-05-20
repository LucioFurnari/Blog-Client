import { useState, useContext } from "react"
import { createComment } from "@/components/actions"
import { UserContext } from "@/app/context/UserContext";

export default function CreateCommentForm(props: { postId: string, setRefresh: (value: any) => void}) {
  const { setRefresh } = props;
  const { postId } = useContext(UserContext);

  const [commentContent, setCommentContent] = useState('');

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
        <button className=" p-2 bg-gray-600 rounded-md hover:bg-gray-500" type="button">Cancel</button>
        <button className=" ml-4 p-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md" type="submit">Comment</button>
      </form>
    </div>
  )
}