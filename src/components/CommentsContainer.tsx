'use client'

import { getComments } from "@/api/fetchService";
import { CommentList } from "./CommentList";
import { useEffect, useMemo, useState } from "react";

// async function useGetComments(postId: string) {
//   return await getComments(postId)
// }

export default function CommentsContainer (props: {postId: string}) {
  const [comments, setComments] = useState([]);

  //todo: change this
  async function getNewComments(postId: string) {
    const newComments = await getComments(postId)
    setComments(newComments);
  }

  useEffect(() => {
    getNewComments(props.postId)
  },[props.postId]);

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