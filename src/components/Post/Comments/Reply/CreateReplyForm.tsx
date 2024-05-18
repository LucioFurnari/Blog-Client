import { getToken } from "@/components/actions";
import { postComment } from "@/api/fetchService";
import { useState } from "react";

export function CreateReplyForm(props: { postId: string, replyUser: string }) {
  const { postId, replyUser } = props;

  const [replyContent, setReplyContent] = useState('');

  function handleReplyContent(event: any) {
    setReplyContent(event.currentTarget.value)
  }

  function handleCreateReply(event:any) {
    event.preventDefault();
    postComment(postId, replyContent, replyUser);
  }

  return(
    <form onSubmit={handleCreateReply}>
      <textarea className="bg-transparent rounded-md border-[1px] border-white w-80 h-20" onChange={handleReplyContent} />
      <button className=" p-2 px-4 rounded-md bg-sky-600 hover:bg-sky-500 block" type="submit">
        Reply
      </button>
    </form>
  )
}