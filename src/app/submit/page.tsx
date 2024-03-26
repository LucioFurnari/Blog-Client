'use client'

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect, useState } from "react";

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
    onUpdate({ editor }) {
      setEditorContent(editor.getText());
      console.log(editor.getJSON());
    }
  });
  useEffect(() => {
    editor?.commands.setContent([
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "It’s 19871. You can’t turn on a radio, or go to a mall without hearing Olivia Newton-John’s hit song, Physical."
          }
        ]
      }
    ])
  }, [editor])

  function handleItalic() {
    editor?.chain().focus().toggleItalic().run();
  }

  function handleBold() {
    editor?.chain().focus().toggleBold().run();
  }
  return (
    <>
    <button className={`rounded-md border-[1px] p-2 ${editor?.isActive('italic') ? 'bg-white text-black' : 'border-white'}`} onClick={handleItalic}>Italic</button>
    <button className={`rounded-md border-[1px] p-2 ${editor?.isActive('bold') ? 'bg-white text-black' : 'border-white'}`} onClick={handleBold}>Bold</button>
    <EditorContent editor={editor} />
    <p>{editorContent}</p>
    </>
  )
}