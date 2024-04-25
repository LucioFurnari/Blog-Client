import { useState } from "react"
import ReplyButton from "./ReplyButton"

export default function ReplySection() {
  const [openReply, setOpenReply] = useState(false);

  
  return(
    <div>
      <ReplyButton setValue={setOpenReply}/>
      {
        openReply &&
        <textarea />
      }
    </div>
  )
};