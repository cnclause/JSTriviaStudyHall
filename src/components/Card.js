import React from 'react'

class Card extends React.Component {
  
    state = {
        showAnswer: false
    }

    setShowAnswer = () => {
        this.setState({ showAnswer: !this.state.showAnswer })
    }

  render(){
      const { card } = this.props
      const {setShowAnswer} = this 
      const {showAnswer} = this.state
    return(
        <div>
            <h1>Question: {card.id}</h1>
            <p>{card.prompt}</p>
            <button onClick={setShowAnswer}>Show Answer</button> {
                showAnswer ?
                <div>
                    <h1>Answer: {card.answer}</h1>
                    <p>{card.response}</p>
                </div>
                : null
            }

        </div>
        
    )

  }
    
}

export default Card