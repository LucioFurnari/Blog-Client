import { getComments } from "@/api/fetchService";
import Comment from "./Comment";
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
  [key: string]: Comment[], // Specifies that each key maps to an array of Comment objects or null
}

  const group: GroupObject = {};

  comments.forEach((comment: Comment) => {
    group[String(comment.response_to)] ||= []; // Initialize to an empty array if undefined or null
    group[String(comment.response_to)].push(comment);
  });
  function getParentId(id:string) {
    return group[id];
  }
  // Object.keys(group).forEach((key) => {
  //   let res;
  //   if (key !== null) {
  //     res = getParentId(key)
  //   }
  //   console.log(res)
  // });
  const rootComments = group['null']

  return (
    <div className=" border-lime-100 border-2">
    {
      <CommentList comments={rootComments} />
    }
    </div>
  )
}