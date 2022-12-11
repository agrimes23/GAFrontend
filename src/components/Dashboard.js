import {useState, useEffect} from 'react'
import Clothes from './Clothes.js'
import axios from 'axios'

const Dashboard = (props) => {
    const [user, setUser] = useState(props.userInfo)
    
    const [preferred, setPreferred] = useState(props.clothes)

    // const genderPreferred = preferred ? preferred.filter(elem => props.userInfo.preference.genderclothing === elem.CatName) : null


    return (
        <>
            <div className="container-fluid">
                <div className="text-center my-5">
                    <h1 className="my-5">Welcome, {user.name}Alex!</h1>
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
                    <Clothes />
                </div>
            </div>
        </>
    )
}

export default Dashboard