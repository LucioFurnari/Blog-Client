import { useState } from "react"
import { getToken } from "@/components/actions"

export default function CreateCommentForm(props: { postId: string, setRefresh: (value: any) => void}) {
  const {postId, setRefresh} = props;

  const [commentContent, setCommentContent] = useState('');

  function handleCommentContent(event: any) {
    setCommentContent(event.currentTarget.value)
  }

  //todo: Move this function
  async function createComment(event: any) {
    event.preventDefault();
    try {
      const token = await getToken()
      await fetch(`http://localhost:3000/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + token,
        }),
        body: JSON.stringify({
          text: commentContent,
          //todo: Change this or change in the API
          timestamp: '24 de Diciembre',
        })
      })
      setRefresh((value: boolean) => !value)
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div>
      <form onSubmit={createComment}>
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