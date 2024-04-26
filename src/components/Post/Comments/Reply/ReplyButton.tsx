export default function ReplyButton(props: {setValue: (value: any)  => void}) {
  const { setValue } = props;

  function handleOpenReply() {
    setValue((value: boolean) => !value)
  }

  return (
    <button type="button" onClick={handleOpenReply}>Reply</button>
  )
};