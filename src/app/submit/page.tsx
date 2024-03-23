'use client'

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useState } from "react";

export default function Tiptap () {
  const [editorContent, setEditorContent] = useState('')
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        }
      }),
    ],
    content: '',
    onUpdate({ editor }) {
      setEditorContent(editor.getText());
      console.log(editor.getJSON());
    }
  });

  return (
    <>
    <EditorContent editor={editor} />
    <p>{editorContent}</p>
    </>
  )
}