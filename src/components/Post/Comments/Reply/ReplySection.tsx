import { useState } from "react"
import ReplyButton from "./ReplyButton"
import { getToken } from "@/components/actions";

export default function ReplySection(props: { postId: string, replyUser: string }) {
  const { postId, replyUser } = props;

  const [openReply, setOpenReply] = useState(false);
  const [replyContent, setReplyContent] = useState('');

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
      console.log()
    }
  }

  function handleReplyContent(event: any){
    setReplyContent(event.currentTarget.value)
  }

  
  return(
    <div>
      <ReplyButton setValue={setOpenReply}/>
      {
        openReply &&
        <form>
          <textarea onChange={handleReplyContent} />
          <button type="submit">Reply</button>
        </form>
      }
    </div>
  )
};