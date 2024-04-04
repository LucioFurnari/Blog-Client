import { Editor } from "@tiptap/react";

export function EditorButton(props: { name: string, editor: Editor | null, handleFunction: () => void, activeClass: string }) {
  const { name, editor, handleFunction, activeClass } = props;

  return (
    <button className={`rounded-md border-[1px] p-2 ${editor?.isActive(activeClass) ? 'bg-white text-black' : 'border-white'}`} onClick={handleFunction}>
      {name}
    </button>
  )
}

export function EditorHeaderButton(props: { name: string, editor: Editor | null, handleFunction: () => void, activeClass: string, headerLevel: number}) {
  const { name, editor, handleFunction, activeClass, headerLevel} = props;

  return(
    <button className={`rounded-md border-[1px] p-2 ${editor?.isActive(activeClass, { level: headerLevel}) ? 'bg-white text-black' : 'border-white'}`} onClick={handleFunction}>
      {name}
    </button>
  )
}
