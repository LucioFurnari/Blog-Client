'use client'

import { UserContext } from "@/app/context/UserContext";
import { useMemo, useState, useContext, useEffect } from "react";
import CommentsContainer from "./Comments/CommentsContainer";
import CreateComment from "./Comments/CreateComment";
import { JSONContent, generateHTML } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import parse from 'html-react-parser';

export default function PostPage (props: {
  title: string,
  author: string,
  text: string,
  body?: JSONContent,
  id: string,
},
) {
  const {title, author, text, body, id} = props;
  const { setPostId } = useContext(UserContext);

  useEffect(() => {
    setPostId(id);
  }, [id])

  const output = useMemo(() => {
    if (body) {
      return generateHTML(body, [
        StarterKit
      ])
    }
  }, [body]);

  const [refreshComments, setRefreshComments] = useState(false);

  return (
  <main className="px-96 py-20 min-h-96">
    <h1 className="text-4xl">{title}</h1>
    <p>Author: <span>{author}</span></p>
    <div className="my-10 prose dark:prose-invert prose-sm text-white ">
      {output && parse(output)}
    </div>
    <CreateComment setRefresh={setRefreshComments} postId={id} />
    <CommentsContainer postId={id} refreshComments={refreshComments}/>
  </main>
  )
}