import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TextEditor(props: { setEditorContent: (value: {}) => void}) {
  const { setEditorContent } = props;

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
    content: '<p>Write your post</p>',
    onUpdate({editor}) {
      setEditorContent(editor.getJSON())
    },
  });

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
      <button className={`rounded-md border-[1px] p-2 ${editor?.isActive('bulletList') ? 'bg-white text-black' : 'border-white'}`} onClick={handleBulletList}>Code</button>
      <EditorContent editor={editor} className="prose prose-sm text-white"/>
    </section>
  )
}