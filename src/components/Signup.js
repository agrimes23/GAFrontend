import {useState} from 'react'
import { Link, } from 'react-router-dom'

const Signup = () => {

    return (
        <>
        
            <div className="signup-page">
                <div className="container-fluid signup-box form-group align-items-center d-flexcolumn shadow">
                    <div className="mt-5 mx-5">
                        <h1>Sign Up for personalized clothing options today!</h1>
                    </div>
                    <form className="d-block row p-5 w-75 m-auto">
                        <label htmlFor='name'>Name:</label>
                        <input className="form-control" type="text" required></input>

                        <label htmlFor='email'>Email</label>
                        <input className="form-control" type="email" required></input>

                        <label htmlFor='password'>Password:</label>
                        <input className="form-control" type="password" required></input>

                        <Link to="/quiz"><input className="btn btn-info my-5" type="submit" value="Signup & take the quiz!" /></Link>
                    </form>           
                </div> 
                <div className="already have an account? Log in here"></div>
            </div>


        </>
    )
}

export default Signup