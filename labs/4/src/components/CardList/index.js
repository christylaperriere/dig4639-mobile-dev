import React from 'react'
import Card from '../Card/index.js'
// Import data from data.json
import data from '../../data.json'


// Adding Card component
class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: data.cards.map((value, index) => {
        value.id = index
        return value
      })
    }
  }
  removeCard(id) {
    console.log("clicked" + id)
    let cards = this.state.cards.filter((value) => value.id !== id)
    console.log(cards)
    this.setState({cards : cards}); 
  }
  render() {
    return (
      this.state.cards.map((value, index) => 
      <Card
        key = {value.id}
        removeCard={() => this.removeCard(value.id)}
        id={index}
        // Pass data
        title = {value.title}
        content = {value.content}
        removecard={this.removeCard}
        >
      </Card>
      )
    );
  }
}

export default CardList