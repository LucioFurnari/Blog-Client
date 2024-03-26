import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";

export default function TextEditor() {
  const [editorContent, setEditorContent] = useState('')
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        }
      }),
    ],
    editorProps: {
      attributes: {
        class: 'border-[1px] border-white h-40 p-2' 
      }
    },
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

  function handleBulletList() {
    editor?.chain().focus().toggleBulletList().run();
  }

  return (
    <section>
      <button className={`rounded-md border-[1px] p-2 ${editor?.isActive('italic') ? 'bg-white text-black' : 'border-white'}`} onClick={handleItalic}>Italic</button>
      <button className={`rounded-md border-[1px] p-2 ${editor?.isActive('bold') ? 'bg-white text-black' : 'border-white'}`} onClick={handleBold}>Bold</button>
      <button className={`rounded-md border-[1px] p-2 ${editor?.isActive('bulletList') ? 'bg-white text-black' : 'border-white'}`} onClick={handleBulletList}>Bullet List</button>
      <EditorContent editor={editor} className="prose prose-sm text-white"/>
      <p>{editorContent}</p>
    </section>
  )
}