export default function PostTitleInput(props: {setTitle: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  const { setTitle } = props;

  return (
    <input onChange={setTitle} className="text-2xl bg-transparent border-b-2 border-white mt-2" placeholder="Title">
    </input>
  )
}