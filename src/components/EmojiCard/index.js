// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, clickedButtonId} = props
  const {id, emojiName, emojiUrl} = details
  const onClickButton = () => {
    clickedButtonId(id)
  }
  return (
    <li>
      <button onClick={onClickButton} className="emoji-button" type="button">
        <img className="emoji-image" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
