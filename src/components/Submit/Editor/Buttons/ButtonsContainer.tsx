import { Editor } from "@tiptap/react"
import EditorButton from "./EditorButtons"

export default function ButtonsContainer(props: { editor: Editor | null}) {
  const { editor } = props;

  function handleItalic() {
    editor?.chain().focus().toggleItalic().run();
  }

  function handleBold() {
    editor?.chain().focus().toggleBold().run();
  }

  function handleBulletList() {
    editor?.chain().focus().toggleBulletList().run();
  }

  function handleCode() {
    editor?.chain().focus().toggleCode().run();
  }

  return (
    <div>
      <EditorButton name={'Italic'} editor={editor} handleFunction={handleItalic} />
      <EditorButton name={'Bold'} editor={editor} handleFunction={handleBold} /> 
      <EditorButton name={'Bullet List'} editor={editor} handleFunction={handleBulletList} />
      <EditorButton name={'Code'} editor={editor} handleFunction={handleCode}/>
    </div>
  )
}