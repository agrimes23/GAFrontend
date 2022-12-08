import { useState, useEffect } from 'react'
// import axios from 'axios'
import './App.css'
import Login from './components/Login.js'
import Quiz from './components/Quiz.js'
import Clothes from './components/Clothes.js'

const App = () => {
  return (
    <>
      <h1>Clothing Site</h1>
      {/* will move these components to the right place later. Just putting it here for now */}
      <Login />
      <Quiz />
      <Clothes />

    </>
  )
}

export default App;
