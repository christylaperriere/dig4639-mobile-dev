import React from 'react'
import './index.css'

// Adding Card component
class Card extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.detailedForecast = this.props.detailedForecast
  }

  render () {
    return (
      <div className = "card">
        <span className="close" onClick={() => this.props.removeCard()} datatitle={this.props.title}>&times;</span>
        <h2>{this.props.name}</h2>
        <h3>{this.props.temperature}</h3>
        <p>{this.props.detailedForecast}</p>
      </div>
    )
  }
}

// Exporting card
export default Card