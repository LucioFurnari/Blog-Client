interface PostCardProps {
  _id: string,
  title: string,
  text: string,
  author: string,
  timestamp: string,
}

export default function PostCard (props: PostCardProps) {
  return (
    <div className=" text-white border-2 border-white p-4 overflow-hidden">
      <div className="flex flex-row justify-between">
        <h2 className=" text-xl">{props.title}</h2>
        <span>{props.timestamp}</span>
      </div>
      <h3 className=" mb-4">{props.author}</h3>
      <p className=" line-clamp-[8]">{props.text}</p>
    </div>
  );
};