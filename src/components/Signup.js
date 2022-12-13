import {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Navbar from './Navbar.js'

const Signup = (props) => {
    const [user, setUser] = useState({email: '', name: '', password: ''})

    // replaces the Link hook due to Link hook preventing submit of form.
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      props.handleCreateUser(user)
      navigate('/quiz')
    }

    return (
        <>
        <Navbar/>
            <div className="signup-page">
                <div className="container-fluid signup-box form-group align-items-center d-flexcolumn shadow">
                    <div className="mt-5 mx-5">
                        <h1>Sign Up for personalized clothing options today!</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="d-block row px-5 pt-5 w-75 m-auto">
                        <label htmlFor='name'>Name:</label>
                        <input className="form-control" type="text" name="name" required onChange={handleChange}></input>

                        <label htmlFor='email'>Email</label>
                        <input className="form-control" type="email" name="email" required onChange={handleChange}></input>

                        <label htmlFor='password'>Password:</label>
                        <input className="form-control" type="password" name="password" required onChange={handleChange}></input>

                        <input className="btn btn-info my-5" type="submit" value="Signup & take the quiz!"/>
                    </form>
                    <div className="mb-5">already have an account? <Link to="/login">Login here</Link></div>         
                </div> 
                
            </div>


        </>
    )
}

export default Signup