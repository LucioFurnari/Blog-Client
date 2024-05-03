import { useState } from "react"
import ReplyButton from "./ReplyButton"
import { CreateReplyForm } from "./CreateReplyForm";

export default function ReplySection(props: { postId: string, replyUser: string }) {
  const { postId, replyUser } = props;

  const [openReply, setOpenReply] = useState(false);
  
  return(
    <div className="ml-4">
      <ReplyButton setValue={setOpenReply}/>
      {
        openReply &&
        <CreateReplyForm postId={postId} replyUser={replyUser} />
      }
    </div>
  )
};