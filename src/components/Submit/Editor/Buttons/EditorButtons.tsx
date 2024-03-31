import { Editor } from "@tiptap/react";

export default function EditorButton(props: { name: string, editor: Editor | null, handleFunction: () => void }) {
  const { name, editor, handleFunction } = props;
  return (
    <button className={`rounded-md border-[1px] p-2 ${editor?.isActive('italic') ? 'bg-white text-black' : 'border-white'}`} onClick={handleFunction}>
      {name}
    </button>
  )
}