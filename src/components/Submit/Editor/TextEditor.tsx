import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ButtonsContainer from "./Buttons/ButtonsContainer";

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
        class: 'border-[1px] border-white rounded-md h-60 overflow-auto p-2 xl:w-[800px] md:w-[600px] sm:w-[400px] text-white mt-4' 
      }
    },
    content: '<p>Write your post</p>',
    onUpdate({editor}) {
      setEditorContent(editor.getJSON())
    },
  });

  return (
    <section className="xl:w-[800px] md:w-[600px] sm:w-[400px]">
      <ButtonsContainer editor={editor} />
      <EditorContent editor={editor} className="prose dark:prose-invert prose-sm text-white"/>
    </section>
  )
}