import React from 'react'
import Card from './Card'

class CardContainer extends React.Component{
    state = {
        cards: [],
        searchTerm: ""
      }
    
      componentDidMount = () => {
        fetch('https://mighty-wildwood-67431.herokuapp.com/cards')
          .then(response => response.json())
          .then(cards => this.setState({ cards }))
      }

      onInputChange = (event) => {
        console.log("on change function", event)
        this.setState({searchTerm: event.target.value})
      }
    
      filterCards = (searchTerm) => {
        return this.state.cards.filter(card => {
          return card.prompt.toLowerCase().includes(searchTerm.toLowerCase())
        })
    
      }
    
    render(){
        console.log("card container props", this.state.cards)

        const cards = this.filterCards(this.state.searchTerm).map(card => {
            return <Card key={card.id} card={card}/>
        })
    
        
        return(
            <div>
                {cards}
            </div>
            
        )
    }
}


export default CardContainer