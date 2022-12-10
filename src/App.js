import { useState, useEffect } from 'react'
import axios from 'axios'
import Login from './components/Login.js'
import Quiz from './components/Quiz.js'
import Dashboard from './components/Dashboard.js'
import Signup from './components/Signup.js'
import Navbar from './components/Navbar.js'
import Cart from './components/Cart.js'
import Purchased from './components/Purchased.js'

import { Route, Routes, Link } from 'react-router-dom'

const App = () => {

  const [userInfo, setUserInfo] = useState( [] )

  const getUserInfo = () => {
    axios.get('http://localhost:3000/')
    .then((res) => setUserInfo(res.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  // const handleCreate = (data) => {
  //   axios.post('http://localhost:3000/user', data)
  //   .then((response) => {
  //     setUserInfo([...userInfo, response.data])
  //   })
  // }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/cart/' + data._id, data)
    .then((response) => {
      // FIXME: userInfo.cart might be different...
      let newItems = userInfo.cart.map((cartItem) => {
        return cartItem._id !== data._id ? cartItem : data
      })
      // I don't need to add anything else here right..?
      // TODO: need to double check backend to see what's happening on an update
    })
  }

  const handleDelete = (deletedItem) => {
    axios.delete('http://localhost:3000/cart/' + deletedItem._id)
    .then((response) => {
      // FIXME: need to double check the backend logic first and test this out
      let newItems = userInfo.cart.filter((cartItem) => {
        return cartItem._id !== cartItem._id
      })

      // this saves each item that is not the deleted user's info to the array.
      setUserInfo(newItems)

    })
  }

  useEffect (() => {
    getUserInfo()
  }, [])

  return (
    <>
    {/* Don't need to put these through map right? */}
    <Navbar/>
      <Routes>    
        <Route exact path="/" element={<Signup/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/quiz" element={<Quiz />}/>
        {/* TODO: check to see if it works */}
        <Route path="/cart" element={<Cart user={userInfo} handleDelete={handleDelete} handleEdit={handleEdit} />}/>
        <Route path="/purchased" element={<Purchased />} />
      </Routes>
    </>
  )
}

export default App;
