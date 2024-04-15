'use client'

import { CommentList } from "./CommentList";
import { useEffect, useState } from "react";
import { getNewComments } from "../../actions";


export default function CommentsContainer (props: {postId: string, refreshComments: boolean}) {
  const {postId, refreshComments} = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function handleComments(postId: string) {
      const newComments = await getNewComments(postId);
      setComments(newComments)
    }
    handleComments(postId);
  }, [postId, refreshComments])

  interface Comment {
    _id: string;
    author: string;
    text: string;
    timestamp: string;
    response_to: string;
}

  interface GroupObject {
    [key: string]: Comment[],
  }

  function getReplies(id:string) {
    return group[id];
  }

  const group: GroupObject = {};

  if (comments.length > 0) {
    comments.forEach((comment: Comment) => {
      group[String(comment.response_to)] ||= []; // Initialize to an empty array if undefined or null
      group[String(comment.response_to)].push(comment);
    });
  }

  const rootComments = group['null']

  return (
    <>
    {
      rootComments &&
      <CommentList comments={rootComments} group={group} getReplies={getReplies}/>
    }
    </>
  )
}