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
      <EditorButton name={'Italic'} activeClass={'italic'} editor={editor} handleFunction={handleItalic} />
      <EditorButton name={'Bold'} activeClass={'bold'} editor={editor} handleFunction={handleBold} /> 
      <EditorButton name={'Bullet List'} activeClass={'bulletList'} editor={editor} handleFunction={handleBulletList} />
      <EditorButton name={'Code'} activeClass={'code'} editor={editor} handleFunction={handleCode}/>
    </div>
  )
}