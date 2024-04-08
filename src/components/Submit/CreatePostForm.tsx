import TextEditor from "./Editor/TextEditor"
import { useState } from "react"
import { getToken } from "../actions"

export default function CreatePostForm() {
  const [editorContent, setEditorContent] = useState({})

  //todo: Move this function
  async function createPost(event: any) {
    event.preventDefault()
    try {
      const token = await getToken()
      await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + token,
        }),
        body: JSON.stringify({
          title: 'New post',
          text: 'This is optional :P',
          body: editorContent,
          timestamp: '24 de Diciembre',
        }),
      })
    } catch (error) {
      
    }
  }
  
  return(
    <form className="flex flex-col items-end" onSubmit={createPost}>
      <TextEditor setEditorContent={setEditorContent}/>
      <button className="mt-4 p-4 rounded-md border-[1px] border-white hover:bg-white hover:text-black" type="submit">Create post</button>
    </form>
  )
}