
export default function Comment (commentProps: {
  _id: string,
  author: string,
  text: string,
  timestamp: string,
  response_to: string,
}) {

  return (
    <div className=" border-2 border-red-400">
      <div>
        <span className="mr-10">{commentProps.author}</span>
        <span>{commentProps.timestamp}</span>
      </div>
      <p>{commentProps.text}</p>
    </div>
  )
}