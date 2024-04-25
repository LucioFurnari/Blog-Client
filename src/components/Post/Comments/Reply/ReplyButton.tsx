export default function ReplyButton(props: {setValue: (value: any)  => void}) {
  const { setValue } = props;

  function handleOpenReply() {
    setValue((value: boolean) => !value)
  }

  return (
    <button onClick={handleOpenReply}>Reply</button>
  )
};