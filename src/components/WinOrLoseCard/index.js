// Write your code here.
import './index.css'

const WinOrLoss = props => {
  const {score, onPlayAgain} = props
  const onClickButton = () => {
    onPlayAgain()
  }
  const winLoss =
    score === 12
      ? {
          res: 'You Won',
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
          name: 'Best Score',
        }
      : {
          res: 'You Lose',
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
          name: 'Score',
        }
  return (
    <div className="win-loss-bg-card">
      <div className="result-container">
        <h1 className="you-lose-heading">{winLoss.res}</h1>
        <p className="score-heading">{winLoss.name}</p>
        <p className="num-heading">{score}/12</p>
        <button
          onClick={onClickButton}
          className="play-again-button"
          type="button"
        >
          Play Again
        </button>
      </div>
      <img className="result-image" alt="win or lose" src={winLoss.imageUrl} />
    </div>
  )
}

export default WinOrLoss
