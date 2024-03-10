export default function Comment (commentProps: {
  author: string,
  text: string,
  timestamp: string,
}) {
  return (
    <div>
      <span>{commentProps.author}</span>
      <p>{commentProps.text}</p>
      <p>{commentProps.timestamp}</p>
    </div>
  )
}