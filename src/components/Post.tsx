import CommentsContainer from "./CommentsContainer";

export default function PostPage (props: {
  title: string,
  author: string,
  text: string,
  id: string
},
) {
  return (
  <main className="  px-96">
    <h1 className=" text-4xl">{props.title}</h1>
    <p>Author: <span>{props.author}</span></p>
    <p className="my-10">{props.text}</p>
    <CommentsContainer postId={props.id}/>
  </main>
  )
}