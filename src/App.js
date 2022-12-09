import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Login from './components/Login.js'
import Quiz from './components/Quiz.js'
import Dashboard from './components/Dashboard.js'
import Signup from './components/Signup.js'
import Navbar from './components/Navbar.js'

import { Route, Routes, Link } from 'react-router-dom'

const App = () => {

  const [userInfo, setUserInfo] = useState( [] )

  const getUserInfo = () => {
    axios.get('http://localhost:3000/')
    .then((res) => setUserInfo(res.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  useEffect (() => {
    getUserInfo()
  }, [])

  return (
    <>
    <Navbar/>
      <Routes>    
        <Route exact path="/" element={<Signup/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/quiz" element={<Quiz />}/>      
      </Routes>
    </>
  )
}

export default App;
