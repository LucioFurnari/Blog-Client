'use client'

import { useState } from "react";
import { CommentList } from "./CommentList";
import ReplySection from "./Reply/ReplySection";
import { OpenCommentButton, CloseCommentButton } from "./Buttons/CommentButtons";

export default function Comment (commentProps: {
  _id: string,
  author: string,
  text: string,
  timestamp: string,
  response_to: string,
  group: any,
  getReplies: any,
  postId: string,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenResponse () {
    setIsOpen((value) => !value)
  }

  const childComments = commentProps.getReplies(commentProps._id);

  return (
  <>
    <div className="border-l-[1px] border-white my-6 p-4">
      <div>
        <span className="mr-10">{commentProps.author}</span>
        <span>{commentProps.timestamp}</span>
      </div>
      <p className="py-4 mt-4">{commentProps.text}</p>
    </div>
    <ReplySection postId={commentProps.postId} replyUser={commentProps._id} />
    {
      childComments?.length > 0 &&
      <>
        {!isOpen ? <OpenCommentButton /> : <CloseCommentButton />}
      </>
      // <button className="ml-6" onClick={handleOpenResponse}>
      //   {!isOpen ? 'Open' : 'Close'}
      // </button>
    }
    {
      isOpen &&
      childComments?.length > 0 && (
        <>
          <div className="ml-14">
            <CommentList postId={commentProps.postId} comments={childComments} group={commentProps.group} getReplies={commentProps.getReplies} />
          </div>
        </>
      )
    }
  </>
  )
}