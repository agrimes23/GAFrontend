import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Login from './components/Login.js'
import Quiz from './components/Quiz.js'
import Dashboard from './components/Dashboard.js'
import Signup from './components/Signup.js'
import Navbar from './components/Navbar.js'
import Cart from './components/Cart.js'

import { Route, Routes, Link } from 'react-router-dom'

const App = () => {

  const [userInfo, setUserInfo] = useState( [] )

  const getUserInfo = () => {
    axios.get('http://localhost:3000/')
    .then((res) => setUserInfo(res.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreateUser = (data) => {
    axios.post('http://localhost:3000/', data)
    .then((response) => {
      setUserInfo(response.data)
    })
  }

  // const handleEdit = (data) => {
  //   axios.put('http://localhost:3000/cart/' + data._id, data)
  //   .then((response) => {
  //     // FIXME: userInfo.cart might be different...
  //     let newItems = userInfo.cart.map((cartItem) => {
  //       return cartItem._id !== data._id ? cartItem : data
  //     })
  //     // I don't need to add anything else here right..?
  //     // TODO: need to double check backend to see what's happening on an update
  //   })
  // }

  // const handleDelete = (deletedItem) => {
  //   axios.delete('http://localhost:3000/cart/' + deletedItem._id)
  //   .then((response) => {
  //     // FIXME: need to double check the backend logic first and test this out
  //     let newItems = userInfo.cart.filter((cartItem) => {
  //       return cartItem._id !== cartItem._id
  //     })

  //     // this saves each item that is not the deleted Person's info to the array.
  //     setUserInfo(newItems)

  //   })
  // }

  useEffect (() => {
    getUserInfo()
  }, [])

  return (
    <>
    <Navbar/>
      <Routes>    
        <Route exact path="/" element={<Signup handleCreateUser={handleCreateUser}/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/cart" element={<Cart />}/>         
      </Routes>
    </>
  )
}

export default App;
