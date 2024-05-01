import { useState } from "react"
import { getToken } from "@/components/actions";

export default function CreateComment(props: { postId: string, setRefresh: (value: any) => void }) {
  const {postId, setRefresh} = props;

  const [activeComment, setActiveComment] = useState(false);
  const [commentContent, setCommentContent] = useState('');

  function handleActiveComment() {
    setActiveComment((value: boolean) => !value)
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
      
    }
  }

  function handleCommentContent(event: any) {
    console.log(event.currentTarget.value)
    setCommentContent(event.currentTarget.value)
  }

  return (
    <section>
      <button className=" bg-gray-600 rounded-md p-2 px-4 hover:bg-gray-500" onClick={handleActiveComment}>Create comment</button>
      {
        activeComment &&
        <div>
          <form onSubmit={createComment}>
            <textarea
              className="p-2 px-4 my-4 block bg-transparent border-[1px] border-white rounded-md min-h-32 w-80"
              onChange={handleCommentContent}
            />
            <button type="submit">Comment</button>
          </form>
        </div>
      }
    </section>
  )
}