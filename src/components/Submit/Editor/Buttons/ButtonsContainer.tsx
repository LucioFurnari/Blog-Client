import { Editor } from "@tiptap/react"
import { EditorButton, EditorHeaderButton } from "./EditorButtons"

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

  function handleBlockqoute() {
    editor?.chain().focus().toggleBlockquote().run();
  }

  function handleCodeBlock() {
    editor?.chain().focus().toggleCodeBlock().run();
  }

  function handleHeaderH1() {
    editor?.chain().focus().toggleHeading({ level: 1}).run();
  }

  function handleHeaderH2() {
    editor?.chain().focus().toggleHeading({ level: 2}).run();
  }

  function handleHeaderH3() {
    editor?.chain().focus().toggleHeading({ level: 3}).run();
  }

  return (
    <div>
      <EditorButton name={'Italic'} activeClass={'italic'} editor={editor} handleFunction={handleItalic} />
      <EditorButton name={'Bold'} activeClass={'bold'} editor={editor} handleFunction={handleBold} /> 
      <EditorButton name={'Bullet List'} activeClass={'bulletList'} editor={editor} handleFunction={handleBulletList} />
      <EditorButton name={'Code'} activeClass={'code'} editor={editor} handleFunction={handleCode}/>
      <EditorButton name={'Blockqoute'} activeClass={'blockquote'} editor={editor} handleFunction={handleBlockqoute} />
      <EditorButton name={'Codeblock'} activeClass={'codeBlock'} editor={editor} handleFunction={handleCodeBlock}/>
      <EditorHeaderButton name={'H1'} activeClass={'heading'} editor={editor} handleFunction={handleHeaderH1} headerLevel={1}/>
      <EditorHeaderButton name={'H2'} activeClass={'heading'} editor={editor} handleFunction={handleHeaderH2} headerLevel={2}/>
      <EditorHeaderButton name={'H3'} activeClass={'heading'} editor={editor} handleFunction={handleHeaderH3} headerLevel={3}/>
    </div>
  )
}