// Importing card 
import React from 'react'
import CardList from './components/CardList/index.js'

// JSX
function App () {
  return (
    <div className = 'App'>
      <CardList detailedForecast = 'This is a card!'></CardList>
    </div>
  )
}

export default App