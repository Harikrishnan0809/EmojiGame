/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoss from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedListId: [], score: 0, cards: true, topScore: 0}

  clickedButtonId = id => {
    const {clickedListId} = this.state
    const findId = clickedListId.find(eachId => eachId === id)
    if (findId === undefined) {
      this.setState(prevState => ({
        clickedListId: [...prevState.clickedListId, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({cards: false})
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  findTopScore = () => {
    const {topScore, score} = this.state
    if (score > topScore) {
      return score
    }
    return topScore
  }

  onPlayAgain = () => {
    const getTopScore = this.findTopScore()
    this.setState({
      clickedListId: [],
      cards: true,
      score: 0,
      topScore: getTopScore,
    })
  }

  render() {
    const {score, cards, topScore} = this.state
    const sufList = this.shuffledEmojisList()
    const forUnOrdered = cards && score !== 12
    const forResult = !cards || score === 12
    const classes = forUnOrdered ? 'show-nav-element' : 'hide-nav-element'

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} classes={classes} />

        {forUnOrdered && (
          <ul className="un-ordered-list-container">
            {sufList.map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                details={eachItem}
                clickedButtonId={this.clickedButtonId}
              />
            ))}
          </ul>
        )}

        {forResult && (
          <WinOrLoss onPlayAgain={this.onPlayAgain} score={score} />
        )}
      </div>
    )
  }
}

export default EmojiGame
