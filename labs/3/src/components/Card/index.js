// Importing css
import './index.css'
import React from 'react'

// Adding Card component
class Card {
  constructor (props) {
    super(props)
    this.props = props
    this.content = this.props.content
  }

  render () {
    return(
      <div className = 'card'>
        {this.content}
      </div>
    )
  }
}

// Exporting code
export default Card
