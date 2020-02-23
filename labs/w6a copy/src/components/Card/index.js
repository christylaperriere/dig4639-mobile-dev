import React from 'react'
import './index.css'

// Adding Card component
class Card extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.content = this.props.content
  }

  render () {
    return (
      <div className = 'card'>
        {this.content}
      </div>
    )
  }
}

// Exporting card
export default Card