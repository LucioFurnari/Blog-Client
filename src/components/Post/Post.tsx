'use client'

import { useMemo } from "react";
import CommentsContainer from "./Comments/CommentsContainer";
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
  const output = useMemo(() => {
    if (props.body) {
      return generateHTML(props.body, [
        StarterKit
      ])
    }
  }, [props.body]);

  return (
  <main className="  px-96">
    <h1 className=" text-4xl">{props.title}</h1>
    <p>Author: <span>{props.author}</span></p>
    <div className="my-10 prose prose-sm text-white">
      {output && parse(output)}
    </div>
    <CommentsContainer postId={props.id}/>
  </main>
  )
}