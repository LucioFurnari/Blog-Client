'use client'

import { useState } from "react";
import { CommentList } from "./CommentList";

export default function Comment (commentProps: {
  _id: string,
  author: string,
  text: string,
  timestamp: string,
  response_to: string,
  group: any,
  getReplies: any,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenResponse () {
    setIsOpen((value) => !value)
  }

  const childComments = commentProps.getReplies(commentProps._id);

  return (
  <>
    <div className="border-l-[1px] border-white my-2 p-4">
      <div>
        <span className="mr-10">{commentProps.author}</span>
        <span>{commentProps.timestamp}</span>
      </div>
      <p className="py-4 mt-4">{commentProps.text}</p>
    </div>
    {
      childComments?.length > 0 &&
      <button onClick={handleOpenResponse}>
        {!isOpen ? 'Open' : 'Close'}
      </button>
    }
    {
      isOpen &&
      childComments?.length > 0 && (
        <>
          <div className="ml-14">
            <CommentList comments={childComments} group={commentProps.group} getReplies={commentProps.getReplies} />
          </div>
        </>
      )
    }
  </>
  )
}