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

  const [userInfo, setUserInfo] = useState( {} )
  const [clothes, setClothes] = useState([])
  const [arrayOfClothes, setArrayOfClothes] = useState([])
  

  // grabs all clothes objects from our db
  const getClothes = () => {
    axios.get('http://localhost:3000/')
    .then((res) => setClothes(res.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  // function for register route
  const handleCreateUser = (data) => {
    axios.post('http://localhost:3000/', data)
    .then((response) => setUserInfo(response.data))
  }

  // function for quiz route
  const handleEditUser = (data) => {
    axios.put('http://localhost:3000/quiz/' + userInfo._id, data)
    .then(response => setUserInfo(response.data))
  }

  // function for login route
  const handleLogin = (data) => {
    axios.post('http://localhost:3000/login', data)
    .then(response => setUserInfo(response.data))
  }

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

  // function that sets arrayOfClothes to an array filled with filtered items
  const handleFiltered = () => {
     // this condition prevents the undefined error
     if(userInfo.preference){
      // arr that holds all the items we are looking for
      let arr = []
      // populates our arr based on preferences.
      for(let key in userInfo.preference){
          let object = userInfo.preference
          // console.log(object[key])

          if(object[key] === "shortsleeves"){
              arr.push("T-shirts")
          } 

          if(object[key] === "longsleeves"){
              arr.push("Cardigan", "Jacket", "Sweater", "Hoodie", "Coat", "Sweatshirt")
          }

          if(object[key] === "pants"){
              arr.push("Pants", "Joggers")
          }

          if(object[key] === "shorts"){
              arr.push("Shorts")
          }

          if(object[key] === "skirts"){
              arr.push("Skirts", "Dress")
          }

      }
      // filters items in by see if our arr array contains the items name.
      const filteredByPref = clothes.filter(item => {
          // splits each items name into an array so that each element is its own whole word.
          let itemArr = item.name.split(' ')

          // checks the last word of each item name to see if it is in our arr array.
          if(arr.includes(itemArr[itemArr.length - 1])) return item
      })

      // filters items by the cost
      const filteredByCost = filteredByPref.filter(item => {

          if(item.price.formattedValue){
              let priceArr = item.price.formattedValue.split(' ')
              let price = priceArr[1].split('.')

              if(userInfo.preference.pricerange === "Low-Price"){
                  if (Number(price[0]) < 40){
                      return item
                  } 
              } else if (userInfo.preference.pricerange === "Medium-Price"){
                  if (Number(price[0]) < 60){
                      return item
                  }
              } else if (userInfo.preference.pricerange === "High-Price"){
                  if (Number(price[0]) < 100){
                      return item
                  }
              }
          }
          

      })

      setArrayOfClothes([...filteredByCost])
    }
  }

  useEffect (() => {
    getClothes()
    handleFiltered()
  }, [userInfo])

  

  return (
    <>
    {/* Don't need to put these through map right? No, the dashboard component will have a clothes component which will be put thru a map.*/}
    <Navbar/>
      <Routes>    
        <Route exact path="/" element={<Signup handleCreateUser={handleCreateUser}/>} />
        <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
        <Route path="/dashboard" element={<Dashboard userInfo={userInfo} item={arrayOfClothes}/>} />
        <Route path="/quiz" element={<Quiz handleEditUser={handleEditUser}/>}/>
        {/* TODO: check to see if it works */}
        <Route path="/cart" element={<Cart user={userInfo} handleDelete={handleDelete} handleEdit={handleEdit} />}/>
        <Route path="/purchased" element={<Purchased />} />
      </Routes>
    </>
  )
}

export default App;
