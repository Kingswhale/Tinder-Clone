import React from 'react'
import './App.css'
import Header from './Header'
import TinderCards from './TinderCards'

function App() {
  //BEM class naming convention
  return (
    <div className='app'>
      <Header />
      <TinderCards />
      {/* swip button */}
    </div>
  )
}

export default App
