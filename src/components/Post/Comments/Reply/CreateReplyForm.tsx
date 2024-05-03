import { getToken } from "@/components/actions";
import { useState } from "react";

export function CreateReplyForm(props: { postId: string, replyUser: string }) {
  const { postId, replyUser } = props;

  const [replyContent, setReplyContent] = useState('');

  function handleReplyContent(event: any){
    setReplyContent(event.currentTarget.value)
  }

  //todo: Move this function
  async function createReply(event: any) {
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
          text: replyContent,
          response_to: replyUser,
          //todo: Change this or change in the API
          timestamp: '24 de Diciembre',
        })
      })
    } catch (error) {
      console.log(error)
    }
  }



  return(
    <form onSubmit={createReply}>
      <textarea className="bg-transparent rounded-md border-[1px] border-white w-80 h-20" onChange={handleReplyContent} />
      <button className=" p-2 px-4 rounded-md bg-sky-600 hover:bg-sky-500 block" type="submit">
        Reply
      </button>
    </form>
  )
}