import { getComments } from "@/api/fetchService";
import { CommentList } from "./CommentList";

export default async function CommentsContainer (props: {postId: string}) {
  const comments = await getComments(props.postId);

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
      rootComments.length > 0 &&
      <CommentList comments={rootComments} group={group} getReplies={getReplies}/>
    }
    </>
  )
}