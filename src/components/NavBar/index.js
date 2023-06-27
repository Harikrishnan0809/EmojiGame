// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, classes} = props
  return (
    <nav className="bg-nav">
      <div className="logo-name-container">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="emoji-game-para">Emoji Game</h1>
      </div>
      <div className="score-top-score-nav-container">
        <p className={`emoji-game-para ${classes}`}>Score: {score}</p>
        <p className={`emoji-game-para ${classes}`}>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
