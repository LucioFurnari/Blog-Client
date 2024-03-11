import CommentsContainer from "./CommentsContainer";

export default function PostPage (props: {
  title: string,
  author: string,
  text: string,
  id: string
},
) {
  return (
    <main>
    <h1>{props.title}</h1>
    <p>{props.author}</p>
    <p>{props.text}</p>
    <CommentsContainer postId={props.id}/>
  </main>
  )
}