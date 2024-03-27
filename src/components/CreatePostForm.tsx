import TextEditor from "./TextEditor"
import { useEffect, useState } from "react"
import { getToken } from "./actions"

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
    <form onSubmit={createPost}>
      <TextEditor setEditorContent={setEditorContent}/>
      <button type="submit">Create post</button>
    </form>
  )
}