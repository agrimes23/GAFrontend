import {useState, useEffect} from 'react'
import Clothes from './Clothes.js'
import axios from 'axios'

const Dashboard = (props) => {

    // this condition prevents the undefined error
    if(props.userInfo.preference){
        // arr that holds all the items we are looking for
        let arr = []
        // populates our arr based on preferences.
        for(let key in props.userInfo.preference){
            let object = props.userInfo.preference
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
        const filteredByPref = props.clothes.filter(item => {
            // splits each items name into an array so that each element is its own whole word.
            let itemArr = item.name.split(' ')

            // checks the last word of each item name to see if it is in our arr array.
            if(arr.includes(itemArr[itemArr.length - 1])) return item
        })

        // filters items by the cost
        // const filteredByCost = filteredByPref.filter(item => {
        //     let priceArr = item.price.formattedValue.split('')
        //     let price = priceArr[1].split('.')
            
        //     if(props.userInfo.preference.pricerange === "Low-Price"){
        //         if (Number(price[0]) < 40){
        //             return item
        //         } 
        //     } else if (props.userInfo.preference.pricerange === "Medium-Price"){
        //         if (Number(price[0]) < 60){
        //             return item
        //         }
        //     } else if (props.userInfo.preference.pricerange === "High-Price"){
        //         if (Number(price[0]) < 100){
        //             return item
        //         }
        //     }

        // })
        
        console.log(typeof filteredByPref[0].price.formattedValue)
    }
    
    return (
        <>
            <div className="container-fluid">
                <div className="text-center my-5">
                    <h1 className="my-5">Welcome, {props.userInfo.name}Alex!</h1>
                    <h3>Outfits and styles curated just for you</h3>
                </div>
                <hr/>
                <div className="input-group m-auto my-5 w-50">
                    <input type="text" className="form-control" placeholder="Search a category" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-dark" type="button">Search</button>
                        </div>
                </div>
                <div className="container-fluid d-flex justify-content-center w-75 mt-5 card-page">
                    <Clothes clothes={props.clothes} />
                </div>
            </div>
        </>
    )
}

export default Dashboard